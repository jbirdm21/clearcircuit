'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Clock, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { trackEvent } from '@/components/analytics/Analytics';
import { toast } from 'sonner';

interface ExitIntentOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink?: string;
  discount?: string;
  urgency?: string;
  icon: React.ComponentType<{ className?: string }>;
  leadMagnet?: {
    title: string;
    description: string;
    fileName: string;
  };
  benefits: string[];
  socialProof?: string;
}

interface ExitIntentPopupProps {
  enabled?: boolean;
  delay?: number;
  sensitivity?: number;
  maxDisplays?: number;
  storageKey?: string;
  offers?: ExitIntentOffer[];
  onClose?: () => void;
  onConvert?: (offer: ExitIntentOffer, email?: string) => void;
}

const defaultOffers: ExitIntentOffer[] = [
  {
    id: 'discount-15',
    title: 'Wait! Save 15% on Your First Order',
    subtitle: 'Don\'t leave without securing your electrical safety',
    description: 'Get professional-grade panel labels with our exclusive first-time buyer discount.',
    ctaText: 'Claim 15% Off Now',
    ctaLink: '/products?discount=EXIT15',
    discount: '15% OFF',
    urgency: 'Limited time offer',
    icon: Gift,
    benefits: [
      'Code-compliant NEC 408.4(A) labels',
      'Professional installation in 5 minutes',
      'Lifetime durability guarantee',
      'Free shipping on orders over $50'
    ],
    socialProof: 'Join 10,000+ satisfied customers'
  },
  {
    id: 'safety-guide',
    title: 'Get Your FREE Electrical Safety Guide',
    subtitle: 'Before you go, grab this $47 value guide',
    description: 'Complete NEC compliance checklist and professional installation protocols.',
    ctaText: 'Download Free Guide',
    urgency: 'Instant download',
    icon: Shield,
    leadMagnet: {
      title: 'Electrical Safety Guide',
      description: 'Complete NEC compliance checklist and safety protocols',
      fileName: 'electrical-safety-guide.pdf'
    },
    benefits: [
      'NEC 408.4(A) compliance checklist',
      'Professional installation protocols',
      'Safety inspection guidelines',
      'Code violation prevention tips'
    ],
    socialProof: 'Downloaded by 5,000+ professionals'
  },
  {
    id: 'consultation',
    title: 'FREE 15-Minute Safety Consultation',
    subtitle: 'Not sure which kit is right for you?',
    description: 'Speak with our electrical safety expert to get personalized recommendations.',
    ctaText: 'Schedule Free Call',
    ctaLink: '/contact?type=consultation',
    urgency: 'Book within 24 hours',
    icon: Star,
    benefits: [
      'Personalized kit recommendations',
      'Code compliance verification',
      'Installation best practices',
      'Priority customer support'
    ],
    socialProof: 'Rated 4.9/5 by 500+ customers'
  }
];

export default function ExitIntentPopup({
  enabled = true,
  delay = 1000,
  sensitivity = 10,
  maxDisplays = 3,
  storageKey = 'exit-intent-popup',
  offers = defaultOffers,
  onClose,
  onConvert
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConverted, setHasConverted] = useState(false);
  const hasTriggered = useRef(false);
  const displayCount = useRef(0);

  const currentOffer = offers[currentOfferIndex];

  // Check if popup should be shown
  useEffect(() => {
    if (!enabled) return;

    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const { count, lastShown, hasConverted: converted } = JSON.parse(stored);
      displayCount.current = count || 0;
      
      // Don't show if user has converted or exceeded max displays
      if (converted || displayCount.current >= maxDisplays) {
        return;
      }
      
      // Don't show if shown recently (within 24 hours)
      if (lastShown && Date.now() - lastShown < 24 * 60 * 60 * 1000) {
        return;
      }
    }

    // Add delay before enabling exit intent detection
    const delayTimer = setTimeout(() => {
      // Exit intent detection
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= sensitivity && !hasTriggered.current) {
          hasTriggered.current = true;
          showPopup();
        }
      };

      // Mobile scroll-based exit intent
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = window.innerHeight;
        const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
        
        if (scrollPercent > 75 && !hasTriggered.current) {
          hasTriggered.current = true;
          setTimeout(() => showPopup(), 2000); // Delay for mobile
        }
      };

      // Time-based fallback
      const timeoutFallback = setTimeout(() => {
        if (!hasTriggered.current) {
          hasTriggered.current = true;
          showPopup();
        }
      }, 45000); // 45 seconds

      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutFallback);
      };
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [enabled, delay, sensitivity, maxDisplays, storageKey]);

  const showPopup = () => {
    setIsVisible(true);
    displayCount.current += 1;
    
    // Update storage
    localStorage.setItem(storageKey, JSON.stringify({
      count: displayCount.current,
      lastShown: Date.now(),
      hasConverted: false
    }));

    // Track event
    trackEvent('exit_intent_shown', {
      category: 'conversion',
      label: currentOffer.id,
      value: displayCount.current
    });
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
    
    trackEvent('exit_intent_dismissed', {
      category: 'conversion',
      label: currentOffer.id
    });
  };

  const handleConvert = async () => {
    if (currentOffer.leadMagnet && !email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setHasConverted(true);
      
      // Update storage to mark as converted
      localStorage.setItem(storageKey, JSON.stringify({
        count: displayCount.current,
        lastShown: Date.now(),
        hasConverted: true
      }));

      // Track conversion
      trackEvent('exit_intent_converted', {
        category: 'conversion',
        label: currentOffer.id,
        value: currentOffer.discount ? parseInt(currentOffer.discount) : 1
      });

      if (onConvert) {
        onConvert(currentOffer, email);
      }

      // Show success message
      toast.success('Success!', {
        description: currentOffer.leadMagnet 
          ? `${currentOffer.leadMagnet.title} will be sent to your email shortly.`
          : 'Your offer has been applied!'
      });

      // Close popup after delay
      setTimeout(() => {
        setIsVisible(false);
        
        // Redirect if specified
        if (currentOffer.ctaLink) {
          window.location.href = currentOffer.ctaLink;
        }
      }, 2000);

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSwitchOffer = () => {
    setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    setEmail('');
    setHasConverted(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <Card className="relative shadow-2xl border-0 bg-white">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Urgency banner */}
            {currentOffer.urgency && (
              <div className="bg-safety-orange text-white text-center py-2 px-4 text-sm font-medium rounded-t-xl">
                <Clock className="w-4 h-4 inline mr-2" />
                {currentOffer.urgency}
              </div>
            )}

            <CardHeader className="text-center pb-4">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center">
                  <currentOffer.icon className="w-8 h-8 text-electric-blue" />
                </div>
              </div>
              
              {currentOffer.discount && (
                <div className="inline-block bg-safety-yellow text-dark-grey px-4 py-2 rounded-full text-lg font-bold mb-4">
                  {currentOffer.discount}
                </div>
              )}
              
              <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                {currentOffer.title}
              </CardTitle>
              
              <p className="text-gray-600 text-sm mb-4">
                {currentOffer.subtitle}
              </p>
              
              <p className="text-gray-500 text-sm">
                {currentOffer.description}
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Benefits */}
              <div className="space-y-3">
                {currentOffer.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Email input for lead magnets */}
              {currentOffer.leadMagnet && (
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full"
                    required
                  />
                  <p className="text-xs text-gray-500 text-center">
                    We'll send {currentOffer.leadMagnet.title} to your inbox instantly
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <Button
                onClick={handleConvert}
                disabled={isSubmitting || hasConverted}
                loading={isSubmitting}
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white py-6 text-lg font-semibold"
                size="lg"
              >
                {hasConverted ? 'Success!' : currentOffer.ctaText}
              </Button>

              {/* Social proof */}
              {currentOffer.socialProof && (
                <p className="text-xs text-gray-500 text-center">
                  {currentOffer.socialProof}
                </p>
              )}

              {/* Switch offer */}
              {offers.length > 1 && (
                <button
                  onClick={handleSwitchOffer}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  Not interested? See other offers
                </button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 