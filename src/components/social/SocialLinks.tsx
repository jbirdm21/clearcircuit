'use client';

import { Facebook, Twitter, Linkedin, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/analytics/Analytics';

interface SocialLinksProps {
  variant?: 'horizontal' | 'vertical' | 'icons-only';
  size?: 'sm' | 'md' | 'lg';
  showLabels?: boolean;
  showFollowText?: boolean;
  className?: string;
}

const socialPlatforms = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/clearcircuit',
    color: 'text-blue-600 hover:text-blue-700',
    bgColor: 'bg-blue-600 hover:bg-blue-700',
    label: 'Follow us on Facebook'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    url: 'https://twitter.com/clearcircuit',
    color: 'text-sky-500 hover:text-sky-600',
    bgColor: 'bg-sky-500 hover:bg-sky-600',
    label: 'Follow us on Twitter'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/company/clearcircuit',
    color: 'text-blue-700 hover:text-blue-800',
    bgColor: 'bg-blue-700 hover:bg-blue-800',
    label: 'Follow us on LinkedIn'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/clearcircuit',
    color: 'text-pink-600 hover:text-pink-700',
    bgColor: 'bg-pink-600 hover:bg-pink-700',
    label: 'Follow us on Instagram'
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/clearcircuit',
    color: 'text-red-600 hover:text-red-700',
    bgColor: 'bg-red-600 hover:bg-red-700',
    label: 'Watch our videos on YouTube'
  }
];

export default function SocialLinks({
  variant = 'horizontal',
  size = 'md',
  showLabels = false,
  showFollowText = false,
  className = ''
}: SocialLinksProps) {
  const handleSocialClick = (platform: string, url: string) => {
    trackEvent('social_follow', {
      category: 'social',
      platform: platform.toLowerCase(),
      url: window.location.href
    });

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8';
      case 'lg':
        return 'w-12 h-12';
      default:
        return 'w-10 h-10';
    }
  };

  const getIconSize = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-6 h-6';
      default:
        return 'w-5 h-5';
    }
  };

  const containerClasses = variant === 'vertical' 
    ? 'flex flex-col space-y-3' 
    : 'flex items-center space-x-3';

  return (
    <div className={`${containerClasses} ${className}`}>
      {showFollowText && (
        <span className="text-sm font-medium text-gray-700 mr-2">
          Follow us:
        </span>
      )}
      
      {socialPlatforms.map((platform) => (
        <button
          key={platform.name}
          onClick={() => handleSocialClick(platform.name, platform.url)}
          className={`
            ${getSizeClasses()}
            ${platform.color}
            rounded-full border border-current
            hover:bg-current hover:text-white
            transition-colors duration-200
            flex items-center justify-center
            group
          `}
          title={platform.label}
          aria-label={platform.label}
        >
          <platform.icon className={getIconSize()} />
        </button>
      ))}
    </div>
  );
}

// Specialized components for different contexts
export function HeaderSocialLinks({ className = '' }: { className?: string }) {
  return (
    <SocialLinks
      variant="horizontal"
      size="sm"
      showLabels={false}
      showFollowText={false}
      className={className}
    />
  );
}

export function FooterSocialLinks({ className = '' }: { className?: string }) {
  return (
    <SocialLinks
      variant="horizontal"
      size="md"
      showLabels={false}
      showFollowText={true}
      className={className}
    />
  );
}

export function SidebarSocialLinks({ className = '' }: { className?: string }) {
  return (
    <SocialLinks
      variant="vertical"
      size="md"
      showLabels={true}
      showFollowText={false}
      className={className}
    />
  );
}

// Social proof component with follower counts
export function SocialProof({ className = '' }: { className?: string }) {
  const socialStats = [
    { platform: 'Facebook', count: '2.5K', label: 'Followers' },
    { platform: 'Twitter', count: '1.8K', label: 'Followers' },
    { platform: 'LinkedIn', count: '3.2K', label: 'Connections' },
    { platform: 'Instagram', count: '1.5K', label: 'Followers' }
  ];

  return (
    <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
        Join Our Community
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {socialStats.map((stat) => (
          <div key={stat.platform} className="text-center">
            <div className="text-2xl font-bold text-electric-blue">
              {stat.count}
            </div>
            <div className="text-sm text-gray-600">
              {stat.platform} {stat.label}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <SocialLinks
          variant="horizontal"
          size="sm"
          showLabels={false}
          showFollowText={true}
          className="justify-center"
        />
      </div>
    </div>
  );
}

// Call-to-action component with social buttons
export function SocialCTA({ 
  title = "Stay Connected", 
  description = "Follow us for electrical safety tips, product updates, and industry insights.",
  className = '' 
}: { 
  title?: string; 
  description?: string; 
  className?: string; 
}) {
  return (
    <div className={`bg-electric-blue text-white p-8 rounded-lg text-center ${className}`}>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-electric-blue-100 mb-6 max-w-md mx-auto">
        {description}
      </p>
      <div className="flex justify-center space-x-4">
        {socialPlatforms.slice(0, 4).map((platform) => (
          <Button
            key={platform.name}
            onClick={() => window.open(platform.url, '_blank')}
            variant="secondary"
            size="sm"
            className="bg-white text-electric-blue hover:bg-gray-100"
          >
            <platform.icon className="w-4 h-4 mr-2" />
            {platform.name}
          </Button>
        ))}
      </div>
    </div>
  );
} 