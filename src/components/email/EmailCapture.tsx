'use client';

import { useState, useEffect } from 'react';
import { X, Mail, Download, Shield, BookOpen, CheckCircle, ArrowRight, FileText, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { trackEmailCapture } from '@/components/analytics/Analytics';

interface EmailCaptureProps {
  variant: 'popup' | 'inline' | 'exit-intent' | 'footer' | 'sidebar' | 'checkout';
  leadMagnet?: LeadMagnet;
  showOnLoad?: boolean;
  delay?: number;
  onClose?: () => void;
  onSuccess?: (email: string) => void;
  className?: string;
}

interface LeadMagnet {
  id: string;
  title: string;
  description: string;
  value: string;
  icon: typeof Download | typeof Shield | typeof BookOpen | typeof FileText;
  fileName: string;
  fileSize: string;
  benefits: string[];
}

const leadMagnets: LeadMagnet[] = [
  {
    id: 'safety-guide',
    title: 'Free Electrical Safety Guide',
    description: 'Complete NEC compliance checklist and safety protocols for professional installations',
    value: '$47 Value',
    icon: Shield,
    fileName: 'electrical-safety-guide.pdf',
    fileSize: '2.3 MB',
    benefits: [
      'NEC 408.4(A) compliance checklist',
      'Professional installation protocols',
      'Safety inspection guidelines',
      'Code violation prevention tips'
    ]
  },
  {
    id: 'installation-checklist',
    title: 'Panel Labeling Installation Checklist',
    description: '15-point checklist ensuring perfect panel labeling every time',
    value: '$25 Value',
    icon: CheckCircle,
    fileName: 'installation-checklist.pdf',
    fileSize: '1.8 MB',
    benefits: [
      'Step-by-step installation guide',
      'Quality control checkpoints',
      'Time-saving shortcuts',
      'Professional finishing tips'
    ]
  },
  {
    id: 'circuit-naming',
    title: 'Circuit Naming Best Practices',
    description: 'Professional naming conventions and organizing strategies',
    value: '$35 Value',
    icon: BookOpen,
    fileName: 'circuit-naming-guide.pdf',
    fileSize: '1.4 MB',
    benefits: [
      'Industry standard naming conventions',
      'Homeowner-friendly descriptions',
      'Emergency accessibility guidelines',
      'Maintenance optimization tips'
    ]
  },
  {
    id: 'code-updates',
    title: '2024 NEC Updates Summary',
    description: 'Latest electrical code changes affecting panel labeling requirements',
    value: '$60 Value',
    icon: FileText,
    fileName: 'nec-2024-updates.pdf',
    fileSize: '2.7 MB',
    benefits: [
      'Recent NEC requirement changes',
      'Compliance deadline updates',
      'Regional code variations',
      'Implementation strategies'
    ]
  }
];

export default function EmailCapture({ 
  variant, 
  leadMagnet,
  showOnLoad = false,
  delay = 3000,
  onClose,
  onSuccess,
  className = ''
}: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(variant !== 'popup' && variant !== 'exit-intent');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [selectedMagnet, setSelectedMagnet] = useState<LeadMagnet | null>(leadMagnet || leadMagnets[0]);

  // Handle popup display timing
  useEffect(() => {
    if (variant === 'popup' && showOnLoad) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [variant, showOnLoad, delay]);

  // Handle exit-intent detection
  useEffect(() => {
    if (variant === 'exit-intent') {
      const handleMouseLeave = (e: MouseEvent) => {
        if (e.clientY <= 0 && !hasSubmitted) {
          setIsVisible(true);
        }
      };

      document.addEventListener('mouseleave', handleMouseLeave);
      return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }
  }, [variant, hasSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setHasSubmitted(true);
      toast.success('Success! Check your email for the download link.', {
        description: selectedMagnet ? `${selectedMagnet.fileName} is on its way!` : 'Welcome to our newsletter!'
      });
      
      // Track email capture
      trackEmailCapture(
        selectedMagnet?.id || 'newsletter',
        email,
        variant
      );
      
      if (onSuccess) {
        onSuccess(email);
      }
      
      // Hide popup after success
      if (variant === 'popup' || variant === 'exit-intent') {
        setTimeout(() => {
          setIsVisible(false);
          if (onClose) onClose();
        }, 2000);
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  // Success state
  if (hasSubmitted) {
    return (
      <Card className={`border-green-200 bg-green-50 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-green-900 mb-2">Thank you!</h3>
          <p className="text-green-700">
            {selectedMagnet 
              ? `Your ${selectedMagnet.title} will be delivered to ${email} shortly.`
              : `Welcome to our newsletter! We've sent a confirmation to ${email}.`
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  // Popup/Modal variant
  if (variant === 'popup' || variant === 'exit-intent') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <CardHeader className="text-center pb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
              {selectedMagnet ? (
                <selectedMagnet.icon className="w-8 h-8 text-white" />
              ) : (
                <Mail className="w-8 h-8 text-white" />
              )}
            </div>
            <CardTitle className="text-xl font-bold text-gray-900">
              {selectedMagnet ? selectedMagnet.title : 'Stay Updated on Electrical Safety'}
            </CardTitle>
            <CardDescription className="text-gray-600">
              {selectedMagnet ? selectedMagnet.description : 'Get safety tips, code updates, and exclusive offers delivered to your inbox.'}
            </CardDescription>
            {selectedMagnet && (
              <Badge className="bg-safety-orange text-white mx-auto">
                {selectedMagnet.value} - FREE
              </Badge>
            )}
          </CardHeader>
          
          <CardContent>
            {selectedMagnet && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What you'll get:</h4>
                <ul className="space-y-2">
                  {selectedMagnet.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="sr-only">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white"
              >
                {isSubmitting ? 'Sending...' : selectedMagnet ? 'Get Free Download' : 'Subscribe'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Inline variants
  return (
    <Card className={`${className} ${variant === 'sidebar' ? 'bg-blue-50 border-electric-blue' : ''}`}>
      <CardHeader className={variant === 'footer' ? 'text-center' : ''}>
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center">
            {selectedMagnet ? (
              <selectedMagnet.icon className="w-6 h-6 text-white" />
            ) : (
              <Mail className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
        <CardTitle className={`text-lg font-bold ${variant === 'footer' ? 'text-white' : 'text-gray-900'}`}>
          {selectedMagnet ? selectedMagnet.title : 'Stay Updated'}
        </CardTitle>
        <CardDescription className={variant === 'footer' ? 'text-gray-300' : 'text-gray-600'}>
          {selectedMagnet ? selectedMagnet.description : 'Get electrical safety tips and exclusive offers'}
        </CardDescription>
        {selectedMagnet && (
          <Badge className="bg-safety-orange text-white mx-auto">
            {selectedMagnet.value} - FREE
          </Badge>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="email" className="sr-only">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full ${variant === 'footer' ? 'bg-white' : ''}`}
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-electric-blue hover:bg-electric-blue/90 text-white"
          >
            {isSubmitting ? 'Sending...' : selectedMagnet ? 'Get Free Download' : 'Subscribe'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </form>
        
        <p className={`text-xs text-center mt-4 ${variant === 'footer' ? 'text-gray-400' : 'text-gray-500'}`}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </CardContent>
    </Card>
  );
}

// Convenience components for common use cases
export function NewsletterSignup({ className = '' }: { className?: string }) {
  return (
    <EmailCapture
      variant="inline"
      className={className}
    />
  );
}

export function LeadMagnetCapture({ 
  magnetId, 
  className = '' 
}: { 
  magnetId: string;
  className?: string;
}) {
  const magnet = leadMagnets.find(m => m.id === magnetId);
  return (
    <EmailCapture
      variant="inline"
      leadMagnet={magnet}
      className={className}
    />
  );
}

export function EmailPopup({ 
  showOnLoad = true, 
  delay = 5000,
  onClose 
}: { 
  showOnLoad?: boolean;
  delay?: number;
  onClose?: () => void;
}) {
  return (
    <EmailCapture
      variant="popup"
      leadMagnet={leadMagnets[0]}
      showOnLoad={showOnLoad}
      delay={delay}
      onClose={onClose}
    />
  );
}

export function ExitIntentCapture({ onClose }: { onClose?: () => void }) {
  return (
    <EmailCapture
      variant="exit-intent"
      leadMagnet={leadMagnets[1]}
      onClose={onClose}
    />
  );
}

export { leadMagnets }; 