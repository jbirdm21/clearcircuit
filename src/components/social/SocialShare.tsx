'use client';

import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Mail, Link, MessageCircle, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/components/analytics/Analytics';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  variant?: 'default' | 'compact' | 'vertical';
  showLabels?: boolean;
  className?: string;
}

export default function SocialShare({
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = 'Professional Electrical Panel Labels | ClearCircuit™',
  description = 'NEC-compliant electrical panel labels that make circuits safer and easier to identify.',
  image = '/images/product-showcase.jpg',
  variant = 'default',
  showLabels = true,
  className = ''
}: SocialShareProps) {
  const [copied, setCopied] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const encodedImage = encodeURIComponent(image);

  const shareData = {
    title,
    text: description,
    url,
  };

  const socialPlatforms = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600 hover:bg-blue-700',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`,
      label: 'Share on Facebook'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500 hover:bg-sky-600',
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&via=ClearCircuit`,
      label: 'Share on Twitter'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700 hover:bg-blue-800',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      label: 'Share on LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-gray-600 hover:bg-gray-700',
      url: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
      label: 'Share via Email'
    }
  ];

  const handleShare = async (platform: string, url: string) => {
    // Track sharing analytics
    trackEvent('social_share', {
      category: 'social',
      platform,
      url: window.location.href,
      title
    });

    // Use native sharing API if available
    if (platform === 'native' && navigator.share) {
      try {
        setIsSharing(true);
        await navigator.share(shareData);
      } catch (error) {
        console.log('Native sharing cancelled or failed');
      } finally {
        setIsSharing(false);
      }
    } else {
      // Open sharing window
      const width = 550;
      const height = 450;
      const left = (window.screen.width - width) / 2;
      const top = (window.screen.height - height) / 2;
      
      window.open(
        url,
        'share',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
      );
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      
      trackEvent('link_copied', {
        category: 'social',
        url: window.location.href
      });
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  const buttonSize = variant === 'compact' ? 'sm' : 'default';
  const iconSize = variant === 'compact' ? 'w-4 h-4' : 'w-5 h-5';

  if (variant === 'vertical') {
    return (
      <div className={`flex flex-col space-y-2 ${className}`}>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Share this:</h4>
        
        {/* Native sharing button for mobile */}
        {typeof navigator !== 'undefined' && 'share' in navigator && (
          <Button
            onClick={() => handleShare('native', '')}
            size={buttonSize}
            variant="outline"
            className="justify-start"
            disabled={isSharing}
          >
            <Share2 className={`${iconSize} mr-2`} />
            {isSharing ? 'Sharing...' : 'Share'}
          </Button>
        )}

        {socialPlatforms.map((platform) => (
          <Button
            key={platform.name}
            onClick={() => handleShare(platform.name.toLowerCase(), platform.url)}
            size={buttonSize}
            variant="outline"
            className="justify-start hover:bg-gray-50"
          >
            <platform.icon className={`${iconSize} mr-2`} />
            {showLabels && platform.name}
          </Button>
        ))}

        <Button
          onClick={handleCopyLink}
          size={buttonSize}
          variant="outline"
          className="justify-start hover:bg-gray-50"
        >
          {copied ? (
            <Check className={`${iconSize} mr-2 text-green-600`} />
          ) : (
            <Link className={`${iconSize} mr-2`} />
          )}
          {copied ? 'Copied!' : 'Copy Link'}
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {showLabels && (
        <span className="text-sm font-medium text-gray-700 mr-2">Share:</span>
      )}
      
      {/* Native sharing button for mobile */}
      {typeof navigator !== 'undefined' && 'share' in navigator && (
        <Button
          onClick={() => handleShare('native', '')}
          size={buttonSize}
          variant="outline"
          className="flex items-center space-x-1"
          disabled={isSharing}
        >
          <Share2 className={iconSize} />
          {variant !== 'compact' && showLabels && (
            <span>{isSharing ? 'Sharing...' : 'Share'}</span>
          )}
        </Button>
      )}

      {socialPlatforms.map((platform) => (
        <Button
          key={platform.name}
          onClick={() => handleShare(platform.name.toLowerCase(), platform.url)}
          size={buttonSize}
          className={`${platform.color} text-white flex items-center space-x-1`}
          title={platform.label}
        >
          <platform.icon className={iconSize} />
          {variant !== 'compact' && showLabels && (
            <span>{platform.name}</span>
          )}
        </Button>
      ))}

      <Button
        onClick={handleCopyLink}
        size={buttonSize}
        variant="outline"
        className="flex items-center space-x-1"
        title="Copy link"
      >
        {copied ? (
          <Check className={`${iconSize} text-green-600`} />
        ) : (
          <Link className={iconSize} />
        )}
        {variant !== 'compact' && showLabels && (
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        )}
      </Button>
    </div>
  );
}

// Specialized sharing components for different contexts
export function ProductShare({ 
  productName, 
  productUrl, 
  productImage 
}: { 
  productName: string; 
  productUrl: string; 
  productImage: string; 
}) {
  const title = `Check out this ${productName} from ClearCircuit™`;
  const description = `Professional electrical panel labels that meet NEC standards. ${productName} makes circuits safer and easier to identify.`;
  
  return (
    <SocialShare
      url={productUrl}
      title={title}
      description={description}
      image={productImage}
      variant="compact"
      showLabels={false}
      className="mt-4"
    />
  );
}

export function BlogShare({ 
  blogTitle, 
  blogUrl, 
  blogExcerpt,
  blogImage 
}: { 
  blogTitle: string; 
  blogUrl: string; 
  blogExcerpt: string;
  blogImage?: string;
}) {
  return (
    <SocialShare
      url={blogUrl}
      title={blogTitle}
      description={blogExcerpt}
      image={blogImage}
      variant="vertical"
      showLabels={true}
      className="mt-6"
    />
  );
}

export function PageShare({ 
  pageTitle, 
  pageDescription 
}: { 
  pageTitle: string; 
  pageDescription: string; 
}) {
  return (
    <SocialShare
      title={pageTitle}
      description={pageDescription}
      variant="default"
      showLabels={true}
      className="mt-4"
    />
  );
} 