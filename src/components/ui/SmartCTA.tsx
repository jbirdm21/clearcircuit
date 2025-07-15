'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShoppingCart, Download, Phone, Star, Zap, Clock, Shield, Gift, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { trackEvent } from '@/components/analytics/Analytics';
import { cn } from '@/lib/utils';

interface CTAVariant {
  id: string;
  type: 'primary' | 'secondary' | 'urgent' | 'social' | 'value' | 'safety';
  text: string;
  subtext?: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  onClick?: () => void;
  color?: 'blue' | 'orange' | 'green' | 'red' | 'purple';
  urgency?: 'low' | 'medium' | 'high';
  socialProof?: string;
  valueProposition?: string;
  badge?: string;
  priority: number;
  conditions?: {
    timeOnPage?: number;
    scrollDepth?: number;
    pageType?: string[];
    userType?: 'new' | 'returning' | 'any';
    cartNotEmpty?: boolean;
    previousVisits?: number;
  };
}

interface SmartCTAProps {
  pageType?: 'home' | 'product' | 'cart' | 'checkout' | 'about' | 'contact';
  userType?: 'new' | 'returning';
  cartItemCount?: number;
  className?: string;
  position?: 'inline' | 'floating' | 'sticky' | 'banner';
  size?: 'sm' | 'md' | 'lg';
  showMultiple?: boolean;
  maxCTAs?: number;
  variants?: CTAVariant[];
  enableABTesting?: boolean;
  testingVariants?: string[];
}

const defaultCTAVariants: CTAVariant[] = [
  {
    id: 'primary-shop',
    type: 'primary',
    text: 'Get Professional Labels That Save Lives',
    subtext: 'NEC compliant installation in 5 minutes',
    icon: ShoppingCart,
    href: '/products',
    color: 'blue',
    urgency: 'medium',
    priority: 100,
    conditions: {
      pageType: ['home', 'about'],
      userType: 'any'
    }
  },
  {
    id: 'urgent-limited',
    type: 'urgent',
    text: 'Don\'t Wait for an Accident to Happen',
    subtext: 'Order your safety kit today - 15% off',
    icon: Gift,
    href: '/products?discount=SAVE15',
    color: 'red',
    urgency: 'high',
    badge: 'Safety First',
    priority: 150,
    conditions: {
      timeOnPage: 30,
      scrollDepth: 50,
      userType: 'new'
    }
  },
  {
    id: 'social-proof',
    type: 'social',
    text: 'Join 10,000+ Safety-Conscious Professionals',
    subtext: 'Trusted by electrical contractors nationwide',
    icon: Users,
    href: '/products',
    color: 'green',
    urgency: 'medium',
    socialProof: 'Chosen by 10,000+ professionals',
    priority: 120,
    conditions: {
      scrollDepth: 25,
      userType: 'any'
    }
  },
  {
    id: 'value-proposition',
    type: 'value',
    text: 'Pass Every Inspection With Confidence',
    subtext: 'Guaranteed NEC compliance, 5-year warranty',
    icon: Clock,
    href: '/products',
    color: 'orange',
    urgency: 'medium',
    valueProposition: 'Zero inspection failures guaranteed',
    priority: 110,
    conditions: {
      pageType: ['home', 'about'],
      scrollDepth: 40
    }
  },
  {
    id: 'safety-focus',
    type: 'safety',
    text: 'Protect Your Team From Electrical Hazards',
    subtext: 'Professional-grade safety solutions',
    icon: Shield,
    href: '/products',
    color: 'purple',
    urgency: 'high',
    priority: 140,
    conditions: {
      pageType: ['home', 'about'],
      timeOnPage: 45
    }
  },
  {
    id: 'consultation',
    type: 'secondary',
    text: 'Get Expert Safety Consultation',
    subtext: 'Free panel assessment by certified professionals',
    icon: Phone,
    href: '/contact',
    color: 'blue',
    urgency: 'low',
    priority: 80,
    conditions: {
      pageType: ['product', 'home'],
      timeOnPage: 60
    }
  },
  {
    id: 'cart-abandonment',
    type: 'urgent',
    text: 'Don\'t Leave Your Safety Incomplete',
    subtext: 'Complete your protection today',
    icon: ShoppingCart,
    href: '/cart',
    color: 'red',
    urgency: 'high',
    badge: 'Safety Waiting',
    priority: 200,
    conditions: {
      cartNotEmpty: true,
      timeOnPage: 20
    }
  },
  {
    id: 'product-configurator',
    type: 'value',
    text: 'Find Your Perfect Safety Solution',
    subtext: 'Professional recommendations in 2 minutes',
    icon: Star,
    href: '/products?configurator=true',
    color: 'orange',
    urgency: 'medium',
    valueProposition: 'Perfect match for your panel type',
    priority: 130,
    conditions: {
      pageType: ['home', 'product'],
      scrollDepth: 30
    }
  },
  {
    id: 'download-guide',
    type: 'secondary',
    text: 'Download Complete Safety Manual',
    subtext: 'Free professional electrical safety guide',
    icon: Download,
    href: '/safety-resources',
    color: 'green',
    urgency: 'low',
    priority: 70,
    conditions: {
      pageType: ['home', 'about'],
      timeOnPage: 40
    }
  }
];

export default function SmartCTA({
  pageType = 'home',
  userType = 'new',
  cartItemCount = 0,
  className,
  position = 'inline',
  size = 'md',
  showMultiple = false,
  maxCTAs = 2,
  variants = defaultCTAVariants,
  enableABTesting = false,
  testingVariants = []
}: SmartCTAProps) {
  const [selectedVariants, setSelectedVariants] = useState<CTAVariant[]>([]);
  const [userBehavior, setUserBehavior] = useState({
    timeOnPage: 0,
    scrollDepth: 0,
    interactions: 0,
    hasScrolled: false
  });
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  // Track user behavior
  useEffect(() => {
    const startTime = Date.now();
    let maxScrollDepth = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);
      
      if (scrollPercentage > maxScrollDepth) {
        maxScrollDepth = scrollPercentage;
        setUserBehavior(prev => ({ 
          ...prev, 
          scrollDepth: scrollPercentage,
          hasScrolled: true
        }));
      }
    };

    const handleInteraction = () => {
      setUserBehavior(prev => ({ 
        ...prev, 
        interactions: prev.interactions + 1
      }));
    };

    const timeInterval = setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      setUserBehavior(prev => ({ ...prev, timeOnPage }));
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  // Select appropriate CTA variants based on conditions
  useEffect(() => {
    const eligibleVariants = variants.filter(variant => {
      const conditions = variant.conditions;
      if (!conditions) return true;

      // Check page type
      if (conditions.pageType && !conditions.pageType.includes(pageType)) {
        return false;
      }

      // Check user type
      if (conditions.userType && conditions.userType !== 'any' && conditions.userType !== userType) {
        return false;
      }

      // Check time on page
      if (conditions.timeOnPage && userBehavior.timeOnPage < conditions.timeOnPage) {
        return false;
      }

      // Check scroll depth
      if (conditions.scrollDepth && userBehavior.scrollDepth < conditions.scrollDepth) {
        return false;
      }

      // Check cart status
      if (conditions.cartNotEmpty && cartItemCount === 0) {
        return false;
      }

      return true;
    });

    // Sort by priority and select top variants
    const sortedVariants = eligibleVariants.sort((a, b) => b.priority - a.priority);
    const selectedCount = showMultiple ? Math.min(maxCTAs, sortedVariants.length) : 1;
    const selected = sortedVariants.slice(0, selectedCount);

    setSelectedVariants(selected);
    setIsVisible(selected.length > 0);

    // Track CTA selection
    if (selected.length > 0) {
      trackEvent('smart_cta_displayed', {
        category: 'conversion',
        label: selected[0].id,
        value: selected[0].priority,
        custom_parameter_1: pageType,
        custom_parameter_2: userType
      });
    }
  }, [userBehavior, pageType, userType, cartItemCount, variants, showMultiple, maxCTAs]);

  // A/B testing logic
  useEffect(() => {
    if (enableABTesting && testingVariants.length > 0) {
      const selectedVariant = testingVariants[Math.floor(Math.random() * testingVariants.length)];
      const variant = variants.find(v => v.id === selectedVariant);
      
      if (variant) {
        setSelectedVariants([variant]);
        trackEvent('ab_test_variant_shown', {
          category: 'ab_testing',
          label: selectedVariant,
          value: 1
        });
      }
    }
  }, [enableABTesting, testingVariants, variants]);

  const handleCTAClick = (variant: CTAVariant) => {
    trackEvent('smart_cta_clicked', {
      category: 'conversion',
      label: variant.id,
      value: variant.priority,
      custom_parameter_1: pageType,
      custom_parameter_2: userType
    });

    if (variant.onClick) {
      variant.onClick();
    } else if (variant.href) {
      window.location.href = variant.href;
    }
  };

  const colorClasses = {
    blue: 'bg-electric-blue hover:bg-electric-blue/90 text-white',
    orange: 'bg-safety-orange hover:bg-safety-orange/90 text-white',
    green: 'bg-green-500 hover:bg-green-600 text-white',
    red: 'bg-red-500 hover:bg-red-600 text-white',
    purple: 'bg-purple-500 hover:bg-purple-600 text-white'
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  if (!isVisible || selectedVariants.length === 0) {
    return null;
  }

  const CTAButton = ({ variant, index = 0 }: { variant: CTAVariant; index?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        onClick={() => handleCTAClick(variant)}
        className={cn(
          'relative overflow-hidden',
          colorClasses[variant.color || 'blue'],
          sizeClasses[size],
          variant.urgency === 'high' && 'animate-pulse',
          className
        )}
        size={size === 'md' ? 'default' : size}
      >
        {/* Urgency indicator */}
        {variant.urgency === 'high' && (
          <motion.div
            className="absolute inset-0 bg-white/20"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          />
        )}
        
        <div className="relative flex items-center space-x-2">
          <variant.icon className="w-5 h-5" />
          <div className="text-left">
            <div className="font-semibold">{variant.text}</div>
            {variant.subtext && (
              <div className="text-xs opacity-90">{variant.subtext}</div>
            )}
          </div>
          {variant.badge && (
            <Badge className="bg-white/20 text-white text-xs">
              {variant.badge}
            </Badge>
          )}
        </div>
      </Button>
    </motion.div>
  );

  if (position === 'floating') {
    return (
      <motion.div
        className={cn(
          'fixed bottom-6 right-6 z-50',
          className
        )}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-3">
          {selectedVariants.map((variant, index) => (
            <CTAButton key={variant.id} variant={variant} index={index} />
          ))}
        </div>
      </motion.div>
    );
  }

  if (position === 'sticky') {
    return (
      <motion.div
        className={cn(
          'sticky top-20 z-40 bg-white/95 backdrop-blur-sm border-b shadow-sm py-4',
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {selectedVariants.map((variant, index) => (
                <CTAButton key={variant.id} variant={variant} index={index} />
              ))}
            </div>
            
            {selectedVariants[0]?.socialProof && (
              <div className="text-sm text-gray-600">
                {selectedVariants[0].socialProof}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    );
  }

  if (position === 'banner') {
    return (
      <motion.div
        className={cn(
          'bg-gradient-to-r from-electric-blue to-electric-blue/80 text-white py-3',
          className
        )}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6">
            {selectedVariants.map((variant, index) => (
              <motion.div
                key={variant.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <variant.icon className="w-5 h-5" />
                <div>
                  <span className="font-semibold">{variant.text}</span>
                  {variant.subtext && (
                    <span className="ml-2 text-white/80 text-sm">{variant.subtext}</span>
                  )}
                </div>
                {variant.badge && (
                  <Badge className="bg-white/20 text-white text-xs">
                    {variant.badge}
                  </Badge>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  // Default inline position
  return (
    <div className={cn('space-y-4', className)} ref={observerRef}>
      {selectedVariants.map((variant, index) => (
        <div key={variant.id}>
          <CTAButton variant={variant} index={index} />
          
          {/* Additional context for high-value CTAs */}
          {variant.type === 'value' && variant.valueProposition && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 text-sm text-gray-600"
            >
              {variant.valueProposition}
            </motion.div>
          )}
          
          {variant.type === 'social' && variant.socialProof && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-2 flex items-center space-x-2 text-sm text-gray-600"
            >
              <Star className="w-4 h-4 text-yellow-500" />
              <span>{variant.socialProof}</span>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}

// Smart CTA Hook for easy integration
export function useSmartCTA(options: Omit<SmartCTAProps, 'className' | 'position'>) {
  const [ctaData, setCTAData] = useState<CTAVariant[]>([]);
  const [userBehavior, setUserBehavior] = useState({
    timeOnPage: 0,
    scrollDepth: 0,
    interactions: 0
  });

  useEffect(() => {
    // Similar logic as component but returns data instead of rendering
    const variants = options.variants || defaultCTAVariants;
    const eligibleVariants = variants.filter(variant => {
      const conditions = variant.conditions;
      if (!conditions) return true;

      if (conditions.pageType && !conditions.pageType.includes(options.pageType || 'home')) {
        return false;
      }

      if (conditions.userType && conditions.userType !== 'any' && conditions.userType !== options.userType) {
        return false;
      }

      if (conditions.timeOnPage && userBehavior.timeOnPage < conditions.timeOnPage) {
        return false;
      }

      if (conditions.scrollDepth && userBehavior.scrollDepth < conditions.scrollDepth) {
        return false;
      }

      return true;
    });

    const sortedVariants = eligibleVariants.sort((a, b) => b.priority - a.priority);
    const selectedCount = options.showMultiple ? Math.min(options.maxCTAs || 2, sortedVariants.length) : 1;
    setCTAData(sortedVariants.slice(0, selectedCount));
  }, [userBehavior, options]);

  return {
    ctaVariants: ctaData,
    userBehavior,
    trackCTAClick: (variant: CTAVariant) => {
      trackEvent('smart_cta_clicked', {
        category: 'conversion',
        label: variant.id,
        value: variant.priority
      });
    }
  };
} 