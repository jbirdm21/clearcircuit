import { Shield, Award, Truck, Clock } from 'lucide-react';
import { TrustBadge as TrustBadgeType } from '@/types';

interface TrustBadgeProps {
  badge: TrustBadgeType;
  variant?: 'default' | 'compact';
}

const iconMap = {
  Shield,
  Award,
  Truck,
  Clock,
};

export default function TrustBadge({ badge, variant = 'default' }: TrustBadgeProps) {
  const IconComponent = iconMap[badge.icon as keyof typeof iconMap] || Shield;

  if (variant === 'compact') {
    return (
      <div className="flex items-center space-x-2">
        <IconComponent className="w-4 h-4 text-electric-blue" />
        <span className="text-sm font-medium text-gray-700">{badge.title}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 bg-electric-blue/10 rounded-full flex items-center justify-center">
          <IconComponent className="w-5 h-5 text-electric-blue" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{badge.title}</h4>
        <p className="text-sm text-gray-600">{badge.description}</p>
      </div>
    </div>
  );
} 