'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Package, 
  Star, 
  Flame, 
  Zap,
  Eye,
  ShoppingCart,
  Timer,
  Target
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/analytics/Analytics';
import { cn } from '@/lib/utils';

interface UrgencyConfig {
  id: string;
  type: 'time' | 'quantity' | 'demand' | 'social' | 'seasonal' | 'flash';
  title: string;
  message: string;
  icon: React.ComponentType<{ className?: string }>;
  color: 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  duration?: number; // in seconds
  threshold?: number; // for quantity/demand based
  priority: number;
  showConditions?: {
    pageType?: string[];
    userType?: 'new' | 'returning' | 'any';
    timeOnPage?: number;
    scrollDepth?: number;
    cartNotEmpty?: boolean;
  };
  animations?: {
    pulse?: boolean;
    shake?: boolean;
    bounce?: boolean;
    glow?: boolean;
  };
}

interface ScarcityIndicatorProps {
  variant?: 'stock' | 'demand' | 'time' | 'viewers' | 'recent-sales' | 'popularity';
  productId?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  position?: 'inline' | 'floating' | 'banner' | 'badge';
  threshold?: number;
  showAnimation?: boolean;
}

interface CountdownTimerProps {
  endTime: Date;
  onComplete?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  urgencyColors?: boolean;
}

interface UrgencySystemProps {
  productId?: string;
  pageType?: string;
  userType?: 'new' | 'returning';
  cartItemCount?: number;
  className?: string;
  maxIndicators?: number;
  position?: 'inline' | 'floating' | 'banner' | 'sidebar';
  urgencyConfigs?: UrgencyConfig[];
  enableRealTimeUpdates?: boolean;
}

const defaultUrgencyConfigs: UrgencyConfig[] = [
  {
    id: 'flash-sale',
    type: 'time',
    title: 'Flash Sale',
    message: 'Limited time: 15% off all products',
    icon: Flame,
    color: 'red',
    urgencyLevel: 'critical',
    duration: 3600, // 1 hour
    priority: 200,
    showConditions: {
      userType: 'new',
      timeOnPage: 15
    },
    animations: {
      pulse: true,
      glow: true
    }
  },
  {
    id: 'low-stock',
    type: 'quantity',
    title: 'Low Stock',
    message: 'Only 3 left in stock',
    icon: Package,
    color: 'orange',
    urgencyLevel: 'high',
    threshold: 5,
    priority: 150,
    showConditions: {
      pageType: ['product'],
      userType: 'any'
    },
    animations: {
      pulse: true
    }
  },
  {
    id: 'high-demand',
    type: 'demand',
    title: 'High Demand',
    message: '12 people bought this in the last hour',
    icon: TrendingUp,
    color: 'green',
    urgencyLevel: 'medium',
    priority: 120,
    showConditions: {
      pageType: ['product', 'home'],
      userType: 'any'
    },
    animations: {
      bounce: true
    }
  },
  {
    id: 'viewers-watching',
    type: 'social',
    title: 'Popular Item',
    message: '8 people are viewing this right now',
    icon: Eye,
    color: 'blue',
    urgencyLevel: 'medium',
    priority: 100,
    showConditions: {
      pageType: ['product'],
      timeOnPage: 10
    },
    animations: {
      pulse: true
    }
  },
  {
    id: 'recent-purchase',
    type: 'social',
    title: 'Recent Purchase',
    message: 'Someone in Texas just bought this',
    icon: ShoppingCart,
    color: 'green',
    urgencyLevel: 'medium',
    priority: 110,
    showConditions: {
      pageType: ['product', 'home'],
      userType: 'any'
    }
  },
  {
    id: 'cart-abandonment',
    type: 'time',
    title: 'Cart Reminder',
    message: 'Items in your cart are reserved for 15 minutes',
    icon: Timer,
    color: 'orange',
    urgencyLevel: 'high',
    duration: 900, // 15 minutes
    priority: 180,
    showConditions: {
      cartNotEmpty: true,
      timeOnPage: 30
    },
    animations: {
      pulse: true
    }
  },
  {
    id: 'seasonal-promotion',
    type: 'seasonal',
    title: 'Safety Week Special',
    message: 'National Electrical Safety Week - Special pricing',
    icon: Zap,
    color: 'purple',
    urgencyLevel: 'medium',
    priority: 90,
    showConditions: {
      pageType: ['home', 'product'],
      userType: 'any'
    }
  },
  {
    id: 'popular-choice',
    type: 'social',
    title: 'Most Popular',
    message: 'This is our #1 selling kit',
    icon: Star,
    color: 'yellow',
    urgencyLevel: 'low',
    priority: 70,
    showConditions: {
      pageType: ['product'],
      userType: 'any'
    }
  }
];

// Countdown Timer Component
export function CountdownTimer({
  endTime,
  onComplete,
  className,
  size = 'md',
  showLabels = true,
  urgencyColors = true
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isExpired, setIsExpired] = useState(false);
  const [urgencyLevel, setUrgencyLevel] = useState<'low' | 'medium' | 'high'>('low');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        if (onComplete) onComplete();
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Set urgency level based on time remaining
      if (urgencyColors) {
        const totalMinutes = (days * 24 * 60) + (hours * 60) + minutes;
        if (totalMinutes <= 30) {
          setUrgencyLevel('high');
        } else if (totalMinutes <= 180) {
          setUrgencyLevel('medium');
        } else {
          setUrgencyLevel('low');
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime, onComplete, urgencyColors]);

  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const urgencyColorClasses = {
    low: 'text-green-600',
    medium: 'text-orange-600',
    high: 'text-red-600'
  };

  if (isExpired) {
    return (
      <div className={cn('text-red-600 font-medium', sizeClasses[size], className)}>
        Offer Expired
      </div>
    );
  }

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Clock className="w-4 h-4 text-gray-500" />
      <div className={cn(
        'font-mono font-bold',
        sizeClasses[size],
        urgencyColors ? urgencyColorClasses[urgencyLevel] : 'text-gray-900'
      )}>
        {timeLeft.days > 0 && `${timeLeft.days}d `}
        {String(timeLeft.hours).padStart(2, '0')}:
        {String(timeLeft.minutes).padStart(2, '0')}:
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
      {showLabels && (
        <span className="text-sm text-gray-500">
          {timeLeft.days > 0 ? 'remaining' : 'left'}
        </span>
      )}
    </div>
  );
}

// Scarcity Indicator Component
export function ScarcityIndicator({
  variant = 'stock',
  productId,
  className,
  size = 'md',
  position = 'inline',
  threshold = 10,
  showAnimation = true
}: ScarcityIndicatorProps) {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate real-time data
    const generateRealisticValue = () => {
      switch (variant) {
        case 'stock':
          return Math.floor(Math.random() * threshold) + 1;
        case 'demand':
          return Math.floor(Math.random() * 25) + 5;
        case 'viewers':
          return Math.floor(Math.random() * 15) + 3;
        case 'recent-sales':
          return Math.floor(Math.random() * 8) + 2;
        default:
          return Math.floor(Math.random() * 10) + 1;
      }
    };

    setValue(generateRealisticValue());
    setIsLoading(false);

    // Update values periodically for realism
    const interval = setInterval(() => {
      setValue(prev => {
        const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
        return Math.max(1, Math.min(threshold * 2, prev + change));
      });
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [variant, threshold]);

  const configs = {
    stock: {
      icon: Package,
      text: `Only ${value} left`,
      color: (value <= 3 ? 'red' : value <= 7 ? 'orange' : 'green') as keyof typeof colorClasses,
      urgency: value <= 3 ? 'high' : value <= 7 ? 'medium' : 'low'
    },
    demand: {
      icon: TrendingUp,
      text: `${value} sold today`,
      color: (value >= 20 ? 'green' : value >= 10 ? 'orange' : 'red') as keyof typeof colorClasses,
      urgency: value >= 20 ? 'high' : value >= 10 ? 'medium' : 'low'
    },
    viewers: {
      icon: Eye,
      text: `${value} viewing now`,
      color: (value >= 10 ? 'red' : value >= 5 ? 'orange' : 'green') as keyof typeof colorClasses,
      urgency: value >= 10 ? 'high' : value >= 5 ? 'medium' : 'low'
    },
    'recent-sales': {
      icon: ShoppingCart,
      text: `${value} recent purchases`,
      color: 'green' as keyof typeof colorClasses,
      urgency: 'medium'
    },
    popularity: {
      icon: Star,
      text: `#${value} bestseller`,
      color: 'yellow' as keyof typeof colorClasses,
      urgency: 'low'
    },
    time: {
      icon: Clock,
      text: `${value} minutes left`,
      color: 'red' as keyof typeof colorClasses,
      urgency: 'high'
    }
  };

  const config = configs[variant] || configs.stock;
  const colorClasses = {
    red: 'text-red-600 bg-red-50 border-red-200',
    orange: 'text-orange-600 bg-orange-50 border-orange-200',
    yellow: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    green: 'text-green-600 bg-green-50 border-green-200',
    blue: 'text-blue-600 bg-blue-50 border-blue-200'
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-2',
    lg: 'text-base px-4 py-3'
  };

  if (isLoading) {
    return (
      <div className={cn('animate-pulse bg-gray-200 rounded', sizeClasses[size], className)}>
        <span className="invisible">{config.text}</span>
      </div>
    );
  }

  const content = (
    <motion.div
      className={cn(
        'inline-flex items-center space-x-2 rounded-lg border font-medium',
        colorClasses[config.color],
        sizeClasses[size],
        className
      )}
      initial={showAnimation ? { opacity: 0, scale: 0.9 } : {}}
      animate={showAnimation ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      <config.icon className="w-4 h-4" />
      <span>{config.text}</span>
      {config.urgency === 'high' && showAnimation && (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <AlertTriangle className="w-3 h-3" />
        </motion.div>
      )}
    </motion.div>
  );

  if (position === 'floating') {
    return (
      <motion.div
        className="fixed bottom-20 right-6 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content}
      </motion.div>
    );
  }

  if (position === 'badge') {
    return (
      <Badge className={cn(colorClasses[config.color], className)}>
        <config.icon className="w-3 h-3 mr-1" />
        {config.text}
      </Badge>
    );
  }

  return content;
}

// Main Urgency System Component
export default function UrgencyScarcitySystem({
  productId,
  pageType = 'home',
  userType = 'new',
  cartItemCount = 0,
  className,
  maxIndicators = 2,
  position = 'inline',
  urgencyConfigs = defaultUrgencyConfigs,
  enableRealTimeUpdates = true
}: UrgencySystemProps) {
  const [activeIndicators, setActiveIndicators] = useState<UrgencyConfig[]>([]);
  const [userBehavior, setUserBehavior] = useState({
    timeOnPage: 0,
    scrollDepth: 0,
    interactions: 0
  });

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
        setUserBehavior(prev => ({ ...prev, scrollDepth: scrollPercentage }));
      }
    };

    const handleInteraction = () => {
      setUserBehavior(prev => ({ ...prev, interactions: prev.interactions + 1 }));
    };

    const timeInterval = setInterval(() => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      setUserBehavior(prev => ({ ...prev, timeOnPage }));
    }, 1000);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('click', handleInteraction);

    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleInteraction);
    };
  }, []);

  // Select appropriate urgency indicators
  useEffect(() => {
    const eligibleIndicators = urgencyConfigs.filter(config => {
      const conditions = config.showConditions;
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

    // Sort by priority and select top indicators
    const sortedIndicators = eligibleIndicators.sort((a, b) => b.priority - a.priority);
    const selectedIndicators = sortedIndicators.slice(0, maxIndicators);

    setActiveIndicators(selectedIndicators);

    // Track displayed indicators
    selectedIndicators.forEach(indicator => {
      trackEvent('urgency_indicator_shown', {
        category: 'conversion',
        label: indicator.id,
        value: indicator.priority,
        custom_parameter_1: pageType,
        custom_parameter_2: userType
      });
    });
  }, [userBehavior, pageType, userType, cartItemCount, urgencyConfigs, maxIndicators]);

  const colorClasses = {
    red: 'bg-red-50 border-red-200 text-red-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    green: 'bg-green-50 border-green-200 text-green-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800'
  };

  const urgencyLevelClasses = {
    low: 'border-l-4',
    medium: 'border-l-4 shadow-sm',
    high: 'border-l-4 shadow-md animate-pulse',
    critical: 'border-l-4 shadow-lg animate-pulse'
  };

  if (activeIndicators.length === 0) {
    return null;
  }

  const UrgencyItem = ({ config, index }: { config: UrgencyConfig; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'flex items-center space-x-3 p-3 rounded-lg border-2',
        colorClasses[config.color],
        urgencyLevelClasses[config.urgencyLevel]
      )}
      {...(config.animations?.shake && {
        animate: { x: [0, -1, 1, 0] },
        transition: { duration: 0.1, repeat: Infinity, repeatDelay: 3 }
      })}
      {...(config.animations?.bounce && {
        animate: { y: [0, -2, 0] },
        transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 }
      })}
    >
      <div className={cn(
        'p-2 rounded-full',
        config.color === 'red' && 'bg-red-100',
        config.color === 'orange' && 'bg-orange-100',
        config.color === 'yellow' && 'bg-yellow-100',
        config.color === 'green' && 'bg-green-100',
        config.color === 'blue' && 'bg-blue-100',
        config.color === 'purple' && 'bg-purple-100'
      )}>
        <config.icon className="w-4 h-4" />
      </div>
      
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-sm">{config.title}</span>
          <Badge className={cn(
            'text-xs',
            config.urgencyLevel === 'critical' && 'bg-red-500 text-white',
            config.urgencyLevel === 'high' && 'bg-orange-500 text-white',
            config.urgencyLevel === 'medium' && 'bg-yellow-500 text-white',
            config.urgencyLevel === 'low' && 'bg-gray-500 text-white'
          )}>
            {config.urgencyLevel}
          </Badge>
        </div>
        <p className="text-sm opacity-90">{config.message}</p>
      </div>

      {config.type === 'time' && config.duration && (
        <CountdownTimer
          endTime={new Date(Date.now() + config.duration * 1000)}
          size="sm"
          urgencyColors={true}
        />
      )}
    </motion.div>
  );

  if (position === 'banner') {
    return (
      <motion.div
        className={cn('bg-gradient-to-r from-red-500 to-orange-500 text-white py-2', className)}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8">
            {activeIndicators.map((config, index) => (
              <motion.div
                key={config.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <config.icon className="w-5 h-5" />
                <div>
                  <span className="font-semibold">{config.title}</span>
                  <span className="ml-2 text-white/90">{config.message}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  if (position === 'floating') {
    return (
      <motion.div
        className={cn('fixed bottom-6 left-6 z-50 max-w-sm space-y-2', className)}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeIndicators.map((config, index) => (
          <UrgencyItem key={config.id} config={config} index={index} />
        ))}
      </motion.div>
    );
  }

  if (position === 'sidebar') {
    return (
      <div className={cn('space-y-3', className)}>
        <h3 className="text-lg font-semibold text-gray-900">
          Don't Miss Out
        </h3>
        {activeIndicators.map((config, index) => (
          <UrgencyItem key={config.id} config={config} index={index} />
        ))}
      </div>
    );
  }

  // Default inline position
  return (
    <div className={cn('space-y-3', className)}>
      {activeIndicators.map((config, index) => (
        <UrgencyItem key={config.id} config={config} index={index} />
      ))}
    </div>
  );
}

// Quick-use components
export function LowStockBadge({ count = 3, className }: { count?: number; className?: string }) {
  return (
    <Badge className={cn('bg-red-500 text-white', className)}>
      <Package className="w-3 h-3 mr-1" />
      Only {count} left
    </Badge>
  );
}

export function PopularityBadge({ className }: { className?: string }) {
  return (
    <Badge className={cn('bg-yellow-500 text-white', className)}>
      <Star className="w-3 h-3 mr-1" />
      Most Popular
    </Badge>
  );
}

export function ViewingNowBadge({ count = 8, className }: { count?: number; className?: string }) {
  return (
    <Badge className={cn('bg-blue-500 text-white', className)}>
      <Eye className="w-3 h-3 mr-1" />
      {count} viewing now
    </Badge>
  );
} 