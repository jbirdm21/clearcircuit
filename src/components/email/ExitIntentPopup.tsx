'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Clock, Shield, Star, CheckCircle, AlertTriangle, Phone, Download, Zap, UserCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  priority?: 'low' | 'medium' | 'high' | 'emergency';
  emergencyContact?: boolean;
  safetyFocus?: boolean;
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
  emergencyMode?: boolean;
  pageType?: 'home' | 'product' | 'safety' | 'contact' | 'assessment';
}

const defaultOffers: ExitIntentOffer[] = [
  {
    id: 'emergency-safety',
    title: 'Electrical Emergency? Don\'t Wait!',
    subtitle: 'Get immediate safety support from our experts',
    description: 'Having electrical labeling issues that could compromise safety? Our emergency team is available 24/7 to help prevent accidents.',
    ctaText: 'Call Emergency Line Now',
    ctaLink: 'tel:+15559115233',
    urgency: '24/7 Emergency Support Available',
    icon: AlertTriangle,
    priority: 'emergency',
    emergencyContact: true,
    safetyFocus: true,
    benefits: [
      '24/7 emergency safety consultation',
      'Immediate electrical hazard assessment',
      'Same-day emergency labeling solutions',
      'Direct line to certified safety experts'
    ],
    socialProof: 'Helped 500+ customers avoid electrical accidents'
  },
  {
    id: 'safety-assessment',
    title: 'Free Safety Assessment Before You Go',
    subtitle: 'Don\'t risk electrical accidents - get your safety score now',
    description: 'Take our 2-minute safety assessment to identify potential electrical hazards in your facility.',
    ctaText: 'Get My Safety Score',
    ctaLink: '/safety-assessment',
    urgency: 'Every electrical accident is preventable',
    icon: Shield,
    priority: 'high',
    safetyFocus: true,
    benefits: [
      'Identify electrical safety risks',
      'Get personalized safety recommendations',
      'NEC compliance verification',
      'Prevent costly violations and accidents'
    ],
    socialProof: 'Completed by 2,000+ safety professionals'
  },
  {
    id: 'discount-safety',
    title: 'Save 20% on Professional Safety Labels',
    subtitle: 'Protect your facility with code-compliant labeling',
    description: 'Professional electrical panel labels that meet NEC 408.4(A) standards. Don\'t compromise on safety.',
    ctaText: 'Secure Safety Labels Now',
    ctaLink: '/products?discount=SAFETY20',
    discount: '20% OFF',
    urgency: 'Safety shouldn\'t wait - Limited time offer',
    icon: Zap,
    priority: 'high',
    safetyFocus: true,
    benefits: [
      'NEC 408.4(A) compliant labeling',
      'Prevents electrical accidents',
      'Professional installation in 5 minutes',
      '100% inspection pass guarantee'
    ],
    socialProof: 'Trusted by 10,000+ electrical professionals'
  },
  {
    id: 'safety-consultation',
    title: 'FREE Expert Safety Consultation',
    subtitle: 'Speak with a certified electrical safety expert',
    description: 'Not sure about your electrical safety compliance? Get personalized advice from our certified experts.',
    ctaText: 'Schedule Free Consultation',
    ctaLink: '/contact?type=safety-consultation',
    urgency: 'Available today - Book your slot',
    icon: UserCheck,
    priority: 'medium',
    safetyFocus: true,
    benefits: [
      'Certified electrical safety expert',
      'Personalized compliance assessment',
      'Code violation prevention strategy',
      'Priority support for implementation'
    ],
    socialProof: 'Rated 4.9/5 by 800+ safety managers'
  },
  {
    id: 'safety-guide',
    title: 'Complete Electrical Safety Guide',
    subtitle: 'Get your FREE $97 safety compliance guide',
    description: 'Comprehensive NEC compliance checklist and electrical safety protocols used by professionals.',
    ctaText: 'Download Safety Guide',
    urgency: 'Instant download - Prevent accidents today',
    icon: Download,
    priority: 'medium',
    safetyFocus: true,
    leadMagnet: {
      title: 'Professional Electrical Safety Guide',
      description: 'Complete NEC compliance checklist and safety protocols',
      fileName: 'electrical-safety-guide.pdf'
    },
    benefits: [
      'NEC 408.4(A) compliance checklist',
      'Professional safety inspection protocols',
      'Electrical accident prevention guide',
      'Code violation prevention strategies'
    ],
    socialProof: 'Downloaded by 8,000+ safety professionals'
  },
  {
    id: 'last-chance',
    title: 'Last Chance - 15% Off Safety Labels',
    subtitle: 'Don\'t leave your facility at risk',
    description: 'This is your final opportunity to secure professional electrical safety labels at a discount.',
    ctaText: 'Claim Final Discount',
    ctaLink: '/products?discount=FINAL15',
    discount: '15% OFF',
    urgency: 'Final offer - Expires when you leave',
    icon: Gift,
    priority: 'low',
    benefits: [
      'Professional electrical panel labels',
      'NEC compliant and inspection-ready',
      'Lifetime durability guarantee',
      'Free installation support'
    ],
    socialProof: 'Join 12,000+ satisfied customers'
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
  onConvert,
  emergencyMode = false,
  pageType = 'home'
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasConverted, setHasConverted] = useState(false);
  const hasTriggered = useRef(false);
  const displayCount = useRef(0);

  // Filter offers based on page type and emergency mode
  const filteredOffers = offers.filter(offer => {
    if (emergencyMode) {
      return offer.emergencyContact || offer.priority === 'emergency';
    }
    
    if (pageType === 'safety') {
      return offer.safetyFocus;
    }
    
    return true;
  }).sort((a, b) => {
    const priorityOrder = { emergency: 4, high: 3, medium: 2, low: 1 };
    return (priorityOrder[b.priority || 'low'] - priorityOrder[a.priority || 'low']);
  });

  const currentOffer = filteredOffers[currentOfferIndex] || offers[0];

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
      
      // Don't show if shown recently (reduce frequency for safety-focused content)
      const timeWindow = emergencyMode ? 12 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
      if (lastShown && Date.now() - lastShown < timeWindow) {
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

      // Time-based fallback (shorter for emergency mode)
      const fallbackTime = emergencyMode ? 30000 : 45000;
      const timeoutFallback = setTimeout(() => {
        if (!hasTriggered.current) {
          hasTriggered.current = true;
          showPopup();
        }
      }, fallbackTime);

      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('scroll', handleScroll);

      return () => {
        document.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(timeoutFallback);
      };
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [enabled, delay, sensitivity, maxDisplays, storageKey, emergencyMode]);

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
      value: displayCount.current,
      custom_parameters: {
        page_type: pageType,
        emergency_mode: emergencyMode,
        offer_priority: currentOffer.priority
      }
    });
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
    
    trackEvent('exit_intent_dismissed', {
      category: 'conversion',
      label: currentOffer.id,
      custom_parameters: {
        page_type: pageType,
        emergency_mode: emergencyMode
      }
    });
  };

  const handleConvert = async () => {
    if (currentOffer.leadMagnet && !email) {
      toast.error('Please enter your email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // For emergency contact, immediately redirect to phone
      if (currentOffer.emergencyContact) {
        window.location.href = currentOffer.ctaLink || 'tel:+15559115233';
        
        trackEvent('emergency_contact_initiated', {
          category: 'safety',
          label: currentOffer.id,
          custom_parameters: {
            page_type: pageType,
            contact_method: 'phone'
          }
        });
        
        setIsVisible(false);
        return;
      }

      // Simulate API call for other offers
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
        value: currentOffer.discount ? parseInt(currentOffer.discount) : 1,
        custom_parameters: {
          page_type: pageType,
          emergency_mode: emergencyMode,
          offer_priority: currentOffer.priority
        }
      });

      if (onConvert) {
        onConvert(currentOffer, email);
      }

      // Show success message
      toast.success('Success!', {
        description: currentOffer.leadMagnet 
          ? `${currentOffer.leadMagnet.title} will be sent to your email shortly.`
          : currentOffer.safetyFocus 
            ? 'Your safety is our priority - we\'ll be in touch soon!'
            : 'Your offer has been applied!'
      });

      // Close popup after delay
      setTimeout(() => {
        setIsVisible(false);
        
        // Redirect if specified
        if (currentOffer.ctaLink && !currentOffer.emergencyContact) {
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
    setCurrentOfferIndex((prev) => (prev + 1) % filteredOffers.length);
    setEmail('');
    setHasConverted(false);
  };

  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'emergency':
        return 'bg-red-600';
      case 'high':
        return 'bg-safety-orange';
      case 'medium':
        return 'bg-safety-yellow';
      default:
        return 'bg-electric-blue';
    }
  };

  const getPriorityBadge = (priority?: string) => {
    switch (priority) {
      case 'emergency':
        return <Badge className="bg-red-600 text-white">Emergency</Badge>;
      case 'high':
        return <Badge className="bg-safety-orange text-white">High Priority</Badge>;
      case 'medium':
        return <Badge className="bg-safety-yellow text-dark-grey">Safety Focus</Badge>;
      default:
        return null;
    }
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
          <Card className="relative shadow-2xl border-0 bg-white overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Priority badge */}
            {currentOffer.priority && (
              <div className="absolute top-4 left-4 z-10">
                {getPriorityBadge(currentOffer.priority)}
              </div>
            )}

            {/* Urgency banner */}
            {currentOffer.urgency && (
              <div className={`${getPriorityColor(currentOffer.priority)} text-white text-center py-3 px-4 text-sm font-medium`}>
                <Clock className="w-4 h-4 inline mr-2" />
                {currentOffer.urgency}
              </div>
            )}

            <CardHeader className="text-center pb-4 pt-8">
              <div className="flex justify-center mb-4">
                <div className={`w-20 h-20 ${getPriorityColor(currentOffer.priority)}/10 rounded-full flex items-center justify-center`}>
                  <currentOffer.icon className={`w-10 h-10 ${getPriorityColor(currentOffer.priority).replace('bg-', 'text-')}`} />
                </div>
              </div>
              
              {currentOffer.discount && (
                <div className="inline-block bg-safety-yellow text-dark-grey px-6 py-3 rounded-full text-xl font-bold mb-4 shadow-lg">
                  {currentOffer.discount}
                </div>
              )}
              
              <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                {currentOffer.title}
              </CardTitle>
              
              <p className="text-gray-600 text-base mb-4 font-medium">
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
                    className="w-full py-3 text-base"
                    required
                  />
                  <p className="text-xs text-gray-500 text-center">
                    We'll send {currentOffer.leadMagnet.title} to your inbox instantly
                  </p>
                </div>
              )}

              {/* Emergency contact info */}
              {currentOffer.emergencyContact && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <Phone className="w-6 h-6 text-red-600 mx-auto mb-2" />
                  <p className="text-sm text-red-700 font-medium">
                    24/7 Emergency Line: (555) 911-SAFE
                  </p>
                  <p className="text-xs text-red-600 mt-1">
                    Response time: Under 30 minutes
                  </p>
                </div>
              )}

              {/* CTA Button */}
              <Button
                onClick={handleConvert}
                disabled={isSubmitting || hasConverted}
                className={`w-full ${getPriorityColor(currentOffer.priority)} hover:opacity-90 text-white py-6 text-lg font-semibold transition-all duration-200 ${
                  currentOffer.emergencyContact ? 'animate-pulse' : ''
                }`}
                size="lg"
              >
                {isSubmitting ? (
                  <>
                    <Clock className="w-5 h-5 mr-2 animate-spin" />
                    {currentOffer.emergencyContact ? 'Connecting...' : 'Processing...'}
                  </>
                ) : hasConverted ? (
                  'Success!'
                ) : (
                  <>
                    {currentOffer.emergencyContact && <Phone className="w-5 h-5 mr-2" />}
                    {currentOffer.ctaText}
                  </>
                )}
              </Button>

              {/* Social proof */}
              {currentOffer.socialProof && (
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <p className="text-xs text-gray-500">
                    {currentOffer.socialProof}
                  </p>
                </div>
              )}

              {/* Switch offer */}
              {filteredOffers.length > 1 && (
                <button
                  onClick={handleSwitchOffer}
                  className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors py-2"
                >
                  {currentOffer.emergencyContact ? 'See other safety options' : 'Not interested? See other offers'}
                </button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Hook for triggering emergency mode
export function useEmergencyExitIntent() {
  const [emergencyMode, setEmergencyMode] = useState(false);

  const triggerEmergencyMode = () => {
    setEmergencyMode(true);
    // Clear existing storage to ensure emergency popup shows
    localStorage.removeItem('exit-intent-popup');
  };

  return { emergencyMode, triggerEmergencyMode };
} 