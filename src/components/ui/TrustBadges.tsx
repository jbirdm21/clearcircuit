import { Shield, Award, Users, Star, CheckCircle, Clock, Truck, RefreshCw, Phone, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface TrustBadgeProps {
  variant: 'inline' | 'grid' | 'minimal' | 'footer' | 'checkout';
  showCustomerCount?: boolean;
  showRating?: boolean;
  showWarranty?: boolean;
  showShipping?: boolean;
  showReturns?: boolean;
  showSecurity?: boolean;
  showCertifications?: boolean;
  showSupport?: boolean;
  className?: string;
}

export default function TrustBadges({ 
  variant = 'inline',
  showCustomerCount = true,
  showRating = true,
  showWarranty = true,
  showShipping = true,
  showReturns = true,
  showSecurity = true,
  showCertifications = true,
  showSupport = true,
  className = ''
}: TrustBadgeProps) {
  
  const badges = [
    {
      key: 'customerCount',
      icon: Users,
      title: '10,000+',
      subtitle: 'Happy Customers',
      color: 'text-electric-blue',
      show: showCustomerCount
    },
    {
      key: 'rating',
      icon: Star,
      title: '4.9/5',
      subtitle: 'Customer Rating',
      color: 'text-safety-yellow',
      show: showRating
    },
    {
      key: 'warranty',
      icon: Award,
      title: '5-Year',
      subtitle: 'Warranty',
      color: 'text-electric-blue',
      show: showWarranty
    },
    {
      key: 'shipping',
      icon: Truck,
      title: 'Free Shipping',
      subtitle: 'Orders $50+',
      color: 'text-green-600',
      show: showShipping
    },
    {
      key: 'returns',
      icon: RefreshCw,
      title: '30-Day',
      subtitle: 'Returns',
      color: 'text-electric-blue',
      show: showReturns
    },
    {
      key: 'security',
      icon: Lock,
      title: 'SSL Secure',
      subtitle: 'Checkout',
      color: 'text-green-600',
      show: showSecurity
    },
    {
      key: 'support',
      icon: Phone,
      title: '24/7',
      subtitle: 'Support',
      color: 'text-electric-blue',
      show: showSupport
    }
  ];

  const certifications = [
    {
      key: 'nec',
      icon: Shield,
      title: 'NEC 408.4(A)',
      subtitle: 'Compliant',
      color: 'text-electric-blue',
      show: showCertifications
    },
    {
      key: 'ul',
      icon: CheckCircle,
      title: 'UL 969',
      subtitle: 'Certified',
      color: 'text-green-600',
      show: showCertifications
    }
  ];

  const activeBadges = badges.filter(badge => badge.show);
  const activeCertifications = certifications.filter(cert => cert.show);
  const allItems = [...activeBadges, ...activeCertifications];

  if (variant === 'minimal') {
    return (
      <div className={`flex flex-wrap items-center gap-3 sm:gap-4 text-sm ${className}`}>
        {allItems.slice(0, 4).map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.key} className="flex items-center text-gray-600">
              <IconComponent className={`w-4 h-4 mr-2 ${item.color}`} />
              <span className="text-xs sm:text-sm">{item.title}</span>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-4 sm:gap-6 ${className}`}>
        {allItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.key} className="flex items-center">
              <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 ${item.color}`} />
              <div>
                <div className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</div>
                <div className="text-xs sm:text-sm text-gray-600">{item.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
        {allItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.key} className="text-center">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 bg-gray-100`}>
                <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color}`} />
              </div>
              <div className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</div>
              <div className="text-xs sm:text-sm text-gray-600">{item.subtitle}</div>
            </div>
          );
        })}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`border-t pt-8 ${className}`}>
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted by Professionals</h3>
          <p className="text-gray-600 text-sm sm:text-base">Professional-grade electrical safety solutions you can trust</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {allItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.key} className="text-center">
                <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${item.color}`} />
                <div className="text-xs sm:text-sm font-medium text-gray-900">{item.title}</div>
                <div className="text-xs text-gray-600">{item.subtitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (variant === 'checkout') {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Order is Protected</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {allItems.filter(item => ['security', 'warranty', 'returns', 'support'].includes(item.key)).map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.key} className="border-l-4 border-l-green-500">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center">
                    <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${item.color}`} />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">{item.title}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{item.subtitle}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Professional Certifications */}
        <div className="mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">Professional Certifications</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {activeCertifications.map((cert) => {
              const IconComponent = cert.icon;
              return (
                <div key={cert.key} className="flex items-center">
                  <IconComponent className={`w-4 h-4 mr-2 ${cert.color}`} />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{cert.title}</div>
                    <div className="text-xs text-gray-600">{cert.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// Convenience components for common use cases
export function SecurityBadges({ className = '' }: { className?: string }) {
  return (
    <TrustBadges
      variant="minimal"
      showCustomerCount={false}
      showRating={false}
      showWarranty={false}
      showShipping={false}
      showReturns={false}
      showSecurity={true}
      showCertifications={true}
      showSupport={false}
      className={className}
    />
  );
}

export function CheckoutTrustBadges({ className = '' }: { className?: string }) {
  return (
    <TrustBadges
      variant="checkout"
      showCustomerCount={false}
      showRating={false}
      className={className}
    />
  );
}

export function FooterTrustBadges({ className = '' }: { className?: string }) {
  return (
    <TrustBadges
      variant="footer"
      className={className}
    />
  );
} 