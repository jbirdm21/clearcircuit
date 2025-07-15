'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

interface AnalyticsProps {
  measurementId: string;
}

export default function Analytics({ measurementId }: AnalyticsProps) {
  useEffect(() => {
    // Initialize dataLayer if it doesn't exist
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = [];
    }
  }, []);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
            // Enhanced ecommerce
            allow_google_signals: true,
            allow_ad_personalization_signals: true,
            // Core Web Vitals
            custom_map: {
              'custom_parameter_1': 'lead_source',
              'custom_parameter_2': 'product_interest',
              'custom_parameter_3': 'user_type'
            }
          });
        `}
      </Script>

      {/* Microsoft Clarity Heat Mapping */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
        `}
      </Script>

      {/* Facebook Pixel */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>
    </>
  );
}

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters?.category || 'engagement',
      event_label: parameters?.label,
      value: parameters?.value,
      currency: parameters?.currency || 'USD',
      ...parameters
    });
  }
};

// Conversion tracking functions
export const trackConversion = (conversionType: string, value?: number, currency = 'USD') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
      value: value,
      currency: currency,
      transaction_id: Date.now().toString(),
      conversion_type: conversionType
    });
  }
};

// Email capture tracking
export const trackEmailCapture = (leadMagnet: string, email: string, source: string) => {
  trackEvent('email_capture', {
    category: 'lead_generation',
    label: leadMagnet,
    custom_parameter_1: source,
    user_properties: {
      email_captured: true,
      lead_magnet: leadMagnet
    }
  });

  // Track as conversion
  trackConversion('email_signup', 1);

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead', {
      content_name: leadMagnet,
      content_category: 'lead_magnet',
      value: 1,
      currency: 'USD'
    });
  }
};

// E-commerce tracking
export const trackAddToCart = (product: any, quantity: number = 1) => {
  trackEvent('add_to_cart', {
    category: 'ecommerce',
    currency: 'USD',
    value: product.price * quantity,
    items: [{
      item_id: product.id,
      item_name: product.name,
      category: product.category,
      quantity: quantity,
      price: product.price
    }]
  });
};

export const trackRemoveFromCart = (product: any, quantity: number = 1) => {
  trackEvent('remove_from_cart', {
    category: 'ecommerce',
    currency: 'USD',
    value: product.price * quantity,
    items: [{
      item_id: product.id,
      item_name: product.name,
      category: product.category,
      quantity: quantity,
      price: product.price
    }]
  });
};

export const trackPurchase = (transactionId: string, value: number, items: any[]) => {
  trackEvent('purchase', {
    category: 'ecommerce',
    transaction_id: transactionId,
    value: value,
    currency: 'USD',
    items: items.map(item => ({
      item_id: item.product.id,
      item_name: item.product.name,
      category: item.product.category,
      quantity: item.quantity,
      price: item.product.price
    }))
  });

  // Track as conversion
  trackConversion('purchase', value);

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: value,
      currency: 'USD',
      contents: items.map(item => ({
        id: item.product.id,
        quantity: item.quantity,
        item_price: item.product.price
      }))
    });
  }
};

// Page view tracking
export const trackPageView = (path: string, title: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: path,
      page_title: title,
      page_location: window.location.href
    });
  }
};

// Search tracking
export const trackSearch = (searchTerm: string, resultsCount: number) => {
  trackEvent('search', {
    category: 'site_search',
    search_term: searchTerm,
    results_count: resultsCount
  });
};

// Product interaction tracking
export const trackProductView = (product: any) => {
  trackEvent('view_item', {
    category: 'ecommerce',
    currency: 'USD',
    value: product.price,
    items: [{
      item_id: product.id,
      item_name: product.name,
      category: product.category,
      price: product.price
    }]
  });
};

export const trackProductListView = (products: any[], listName: string) => {
  trackEvent('view_item_list', {
    category: 'ecommerce',
    item_list_name: listName,
    items: products.map(product => ({
      item_id: product.id,
      item_name: product.name,
      category: product.category,
      price: product.price
    }))
  });
};

// User engagement tracking
export const trackScroll = (percentage: number) => {
  trackEvent('scroll', {
    category: 'engagement',
    label: `${percentage}%`,
    value: percentage
  });
};

export const trackFileDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', {
    category: 'engagement',
    label: fileName,
    file_type: fileType
  });
};

export const trackVideoPlay = (videoTitle: string, duration: number) => {
  trackEvent('video_play', {
    category: 'engagement',
    label: videoTitle,
    value: duration
  });
};

export const trackFormSubmission = (formName: string, formLocation: string) => {
  trackEvent('form_submit', {
    category: 'engagement',
    label: formName,
    form_location: formLocation
  });
};

// Error tracking
export const trackError = (errorType: string, errorMessage: string, page: string) => {
  trackEvent('exception', {
    category: 'error',
    description: errorMessage,
    error_type: errorType,
    page: page,
    fatal: false
  });
};

// Custom business events
export const trackQuoteRequest = (productType: string, customization: string) => {
  trackEvent('quote_request', {
    category: 'lead_generation',
    product_type: productType,
    customization: customization
  });

  // Track as conversion
  trackConversion('quote_request', 5);
};

export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', {
    category: 'lead_generation',
    source: source
  });
};

export const trackSupportContact = (method: string, topic: string) => {
  trackEvent('support_contact', {
    category: 'support',
    method: method,
    topic: topic
  });
}; 