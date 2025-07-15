'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Lock, 
  CheckCircle, 
  Star, 
  Users, 
  Truck, 
  Phone, 
  CreditCard,
  FileCheck,
  Zap,
  Target,
  Globe,
  Clock,
  ThumbsUp,
  TrendingUp,
  BadgeCheck,
  Verified
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface TrustIndicatorProps {
  variant?: 'minimal' | 'standard' | 'comprehensive';
  layout?: 'horizontal' | 'vertical' | 'grid';
  showRatings?: boolean;
  showCertifications?: boolean;
  showSecurity?: boolean;
  showGuarantees?: boolean;
  showSocialProof?: boolean;
  className?: string;
}

// Trust indicator data
const certifications = [
  {
    id: 'nec',
    name: 'NEC 408.4(A) Certified',
    description: 'National Electrical Code compliant labeling',
    icon: FileCheck,
    badge: '/images/badges/nec-certified.png',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'ul',
    name: 'UL Listed',
    description: 'Underwriters Laboratories certified',
    icon: Shield,
    badge: '/images/badges/ul-listed.png',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'osha',
    name: 'OSHA Compliant',
    description: 'Occupational Safety & Health Administration approved',
    icon: Award,
    badge: '/images/badges/osha-compliant.png',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'ansi',
    name: 'ANSI Standard',
    description: 'American National Standards Institute certified',
    icon: BadgeCheck,
    badge: '/images/badges/ansi-standard.png',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

const securityBadges = [
  {
    id: 'ssl',
    name: 'SSL Secured',
    description: '256-bit encryption protection',
    icon: Lock,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'pci',
    name: 'PCI Compliant',
    description: 'Payment Card Industry certified',
    icon: CreditCard,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'privacy',
    name: 'Privacy Protected',
    description: 'Your data is safe with us',
    icon: Shield,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
];

const guarantees = [
  {
    id: 'quality',
    name: 'Lifetime Quality Guarantee',
    description: 'Labels guaranteed to last the life of your panel',
    icon: Award,
    color: 'text-gold-600',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 'satisfaction',
    name: '100% Satisfaction Guarantee',
    description: 'Not satisfied? Get your money back',
    icon: ThumbsUp,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 'shipping',
    name: 'Fast & Free Shipping',
    description: 'Free shipping on orders over $50',
    icon: Truck,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'support',
    name: '24/7 Expert Support',
    description: 'Emergency electrical safety help anytime',
    icon: Phone,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

const socialProof = [
  {
    id: 'customers',
    value: '12,000+',
    label: 'Happy Customers',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    id: 'rating',
    value: '4.9/5',
    label: 'Customer Rating',
    icon: Star,
    color: 'text-yellow-600'
  },
  {
    id: 'installations',
    value: '25,000+',
    label: 'Successful Installations',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    id: 'professionals',
    value: '5,000+',
    label: 'Professional Electricians',
    icon: Zap,
    color: 'text-orange-600'
  }
];

const professionalEndorsements = [
  {
    id: 'electricians',
    name: 'Trusted by Professional Electricians',
    description: 'Recommended by master electricians nationwide',
    icon: Verified,
    count: '5,000+'
  },
  {
    id: 'facilities',
    name: 'Facility Manager Approved',
    description: 'Used in commercial and industrial facilities',
    icon: Globe,
    count: '2,500+'
  },
  {
    id: 'inspectors',
    name: 'Inspector Recommended',
    description: 'Preferred by electrical inspectors for compliance',
    icon: Target,
    count: '1,200+'
  }
];

export default function TrustIndicators({
  variant = 'standard',
  layout = 'horizontal',
  showRatings = true,
  showCertifications = true,
  showSecurity = true,
  showGuarantees = true,
  showSocialProof = true,
  className = ''
}: TrustIndicatorProps) {
  const containerClasses = {
    horizontal: 'flex flex-wrap items-center justify-center gap-4',
    vertical: 'flex flex-col items-center space-y-4',
    grid: 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
  };

  const renderTrustBadge = (item: any, index: number) => {
    const delay = index * 0.1;
    
    return (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className={`flex items-center p-3 rounded-lg border ${item.bgColor} ${item.color} hover:shadow-md transition-shadow duration-200`}
      >
        <item.icon className="w-5 h-5 mr-2" />
        <div>
          <div className="font-medium text-sm">{item.name}</div>
          {variant === 'comprehensive' && (
            <div className="text-xs opacity-75">{item.description}</div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderSocialProofStat = (stat: any, index: number) => {
    const delay = index * 0.1;
    
    return (
      <motion.div
        key={stat.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.5 }}
        className="text-center p-3"
      >
        <div className="flex items-center justify-center mb-2">
          <stat.icon className={`w-6 h-6 ${stat.color}`} />
        </div>
        <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
        <div className="text-sm text-gray-600">{stat.label}</div>
      </motion.div>
    );
  };

  return (
    <div className={`${className}`}>
      {/* Ratings and Reviews */}
      {showRatings && (
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-6 mb-4">
            <div className="flex items-center">
              <div className="flex space-x-1 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-sm font-medium text-gray-900">4.9/5</span>
              <span className="text-sm text-gray-500 ml-2">(1,247 reviews)</span>
            </div>
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
              <span className="text-sm text-green-600 font-medium">99% recommend</span>
            </div>
          </div>
        </div>
      )}

      {/* Certifications */}
      {showCertifications && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center mb-4">Industry Certifications</h3>
          <div className={containerClasses[layout]}>
            {certifications.map((cert, index) => renderTrustBadge(cert, index))}
          </div>
        </div>
      )}

      {/* Security Badges */}
      {showSecurity && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center mb-4">Security & Privacy</h3>
          <div className={containerClasses[layout]}>
            {securityBadges.map((badge, index) => renderTrustBadge(badge, index))}
          </div>
        </div>
      )}

      {/* Guarantees */}
      {showGuarantees && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center mb-4">Our Guarantees</h3>
          <div className={containerClasses[layout]}>
            {guarantees.map((guarantee, index) => renderTrustBadge(guarantee, index))}
          </div>
        </div>
      )}

      {/* Social Proof */}
      {showSocialProof && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-center mb-4">Trusted by Professionals</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {socialProof.map((stat, index) => renderSocialProofStat(stat, index))}
          </div>
          
          {/* Professional Endorsements */}
          {variant === 'comprehensive' && (
            <div className="space-y-3">
              {professionalEndorsements.map((endorsement, index) => (
                <motion.div
                  key={endorsement.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                >
                  <endorsement.icon className="w-5 h-5 text-electric-blue mr-3" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{endorsement.name}</div>
                    <div className="text-xs text-gray-600">{endorsement.description}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {endorsement.count}
                  </Badge>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Emergency Trust Message */}
      {variant === 'comprehensive' && (
        <div className="text-center p-4 bg-red-50 rounded-lg border border-red-200">
          <div className="flex items-center justify-center mb-2">
            <Clock className="w-5 h-5 text-red-600 mr-2" />
            <span className="font-semibold text-red-800">Emergency Support Available</span>
          </div>
          <p className="text-sm text-red-700">
            Electrical safety can't wait. Our certified experts are available 24/7 for emergency support.
          </p>
          <p className="text-xs text-red-600 mt-1">
            Call (555) 911-SAFE for immediate assistance
          </p>
        </div>
      )}
    </div>
  );
}

// Specialized trust indicator components
export function ProductTrustIndicators({ className = '' }: { className?: string }) {
  return (
    <div className={`border-t pt-6 ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-sm font-medium">NEC Certified</div>
          <div className="text-xs text-gray-600">408.4(A) Compliant</div>
        </div>
        <div className="text-center">
          <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-sm font-medium">Lifetime Warranty</div>
          <div className="text-xs text-gray-600">Quality Guaranteed</div>
        </div>
        <div className="text-center">
          <Truck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
          <div className="text-sm font-medium">Fast Shipping</div>
          <div className="text-xs text-gray-600">Free over $50</div>
        </div>
        <div className="text-center">
          <Phone className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-sm font-medium">24/7 Support</div>
          <div className="text-xs text-gray-600">Expert Help</div>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center">
          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
          <span>4.9/5 rating</span>
        </div>
        <div className="flex items-center">
          <Users className="w-4 h-4 text-blue-600 mr-1" />
          <span>12,000+ customers</span>
        </div>
        <div className="flex items-center">
          <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
          <span>99% satisfaction</span>
        </div>
      </div>
    </div>
  );
}

export function CheckoutTrustIndicators({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-gray-50 p-4 rounded-lg ${className}`}>
      <h3 className="font-semibold text-center mb-4">Secure Checkout</h3>
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <Lock className="w-6 h-6 text-green-600 mx-auto mb-1" />
          <div className="text-xs font-medium">SSL Secured</div>
        </div>
        <div className="text-center">
          <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-1" />
          <div className="text-xs font-medium">PCI Compliant</div>
        </div>
        <div className="text-center">
          <Shield className="w-6 h-6 text-purple-600 mx-auto mb-1" />
          <div className="text-xs font-medium">Privacy Protected</div>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-600 mb-2">
          Your payment information is encrypted and secure
        </p>
        <div className="flex items-center justify-center space-x-2">
          <ThumbsUp className="w-4 h-4 text-green-600" />
          <span className="text-xs text-green-600 font-medium">100% Satisfaction Guarantee</span>
        </div>
      </div>
    </div>
  );
}

export function FooterTrustIndicators({ className = '' }: { className?: string }) {
  return (
    <div className={`border-t pt-8 ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Trusted by Electrical Professionals</h3>
        <p className="text-gray-600">Join thousands of satisfied customers who trust ClearCircuit for electrical safety</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {certifications.map((cert, index) => (
          <div key={cert.id} className="text-center">
            <div className={`w-16 h-16 ${cert.bgColor} rounded-full flex items-center justify-center mx-auto mb-2`}>
              <cert.icon className={`w-8 h-8 ${cert.color}`} />
            </div>
            <div className="text-sm font-medium">{cert.name}</div>
            <div className="text-xs text-gray-600">{cert.description}</div>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <div className="flex items-center justify-center space-x-6 mb-4">
          {socialProof.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="text-xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
          <span className="text-sm text-gray-600 ml-2">4.9/5 from 1,247 reviews</span>
        </div>
        
        <p className="text-xs text-gray-500">
          "Every electrical accident is preventable" - Our commitment to your safety
        </p>
      </div>
    </div>
  );
}

// Mobile-optimized trust indicators
export function MobileTrustIndicators({ className = '' }: { className?: string }) {
  return (
    <div className={`md:hidden ${className}`}>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="text-center p-3 bg-green-50 rounded-lg">
          <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
          <div className="text-xs font-medium">NEC Certified</div>
        </div>
        <div className="text-center p-3 bg-blue-50 rounded-lg">
          <Award className="w-6 h-6 text-blue-600 mx-auto mb-1" />
          <div className="text-xs font-medium">Lifetime Warranty</div>
        </div>
        <div className="text-center p-3 bg-orange-50 rounded-lg">
          <Truck className="w-6 h-6 text-orange-600 mx-auto mb-1" />
          <div className="text-xs font-medium">Fast Shipping</div>
        </div>
        <div className="text-center p-3 bg-red-50 rounded-lg">
          <Phone className="w-6 h-6 text-red-600 mx-auto mb-1" />
          <div className="text-xs font-medium">24/7 Support</div>
        </div>
      </div>
      
      <div className="text-center">
        <div className="flex items-center justify-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
          ))}
          <span className="text-xs text-gray-600 ml-1">4.9/5 (1,247 reviews)</span>
        </div>
        <p className="text-xs text-gray-500">Trusted by 12,000+ customers</p>
      </div>
    </div>
  );
} 