'use client';

import React from 'react';
import Head from 'next/head';

interface SEOMetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'product' | 'profile';
  twitterHandle?: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  pageType?: 'home' | 'product' | 'category' | 'article' | 'about' | 'contact' | 'faq';
  productInfo?: {
    price?: number;
    currency?: string;
    availability?: 'in stock' | 'out of stock' | 'pre-order';
    condition?: 'new' | 'used' | 'refurbished';
    brand?: string;
    sku?: string;
  };
  organizationInfo?: {
    name: string;
    url: string;
    logo: string;
    telephone?: string;
    address?: string;
  };
  breadcrumbs?: {
    name: string;
    url: string;
  }[];
}

const defaultOrganization = {
  name: 'ClearCircuit',
  url: 'https://clearcircuit.com',
  logo: 'https://clearcircuit.com/images/logo.png',
  telephone: '+1-555-911-7233',
  address: '123 Safety Street, Electrical City, CA 90210'
};

export default function SEOMetaTags({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = 'https://clearcircuit.com/images/og-default.jpg',
  ogImageAlt = 'ClearCircuit Professional Electrical Panel Labels',
  ogType = 'website',
  twitterHandle = '@clearcircuit',
  author = 'ClearCircuit Team',
  publishDate,
  modifiedDate,
  noIndex = false,
  noFollow = false,
  pageType = 'home',
  productInfo,
  organizationInfo = defaultOrganization,
  breadcrumbs = []
}: SEOMetaTagsProps) {
  // Generate comprehensive keywords based on page type
  const generateKeywords = () => {
    const baseKeywords = [
      'electrical panel labels',
      'circuit breaker labels',
      'NEC 408.4(A) compliance',
      'electrical safety',
      'professional panel labeling',
      'electrical code compliance'
    ];

    const pageSpecificKeywords = {
      home: [
        'electrical safety solutions',
        'panel labeling system',
        'electrician tools',
        'facility management',
        'electrical maintenance'
      ],
      product: [
        'buy electrical labels',
        'professional labeling kit',
        'circuit identification',
        'electrical panel organization',
        'safety compliance products'
      ],
      category: [
        'electrical safety products',
        'labeling solutions',
        'electrical equipment',
        'safety compliance tools'
      ],
      article: [
        'electrical safety tips',
        'NEC compliance guide',
        'electrical maintenance',
        'safety best practices'
      ],
      about: [
        'electrical safety experts',
        'professional labeling company',
        'electrical compliance specialists'
      ],
      contact: [
        'electrical safety consultation',
        'labeling support',
        'emergency electrical help'
      ],
      faq: [
        'electrical labeling questions',
        'NEC compliance help',
        'safety standards information'
      ]
    };

    return [...baseKeywords, ...(pageSpecificKeywords[pageType] || []), ...keywords];
  };

  // Generate enhanced description based on page type
  const generateEnhancedDescription = () => {
    if (description.length > 160) {
      return description.substring(0, 157) + '...';
    }
    return description;
  };

  // Generate robots directive
  const generateRobots = () => {
    const directives = [];
    
    if (noIndex) directives.push('noindex');
    else directives.push('index');
    
    if (noFollow) directives.push('nofollow');
    else directives.push('follow');
    
    // Add additional directives for SEO
    directives.push('max-snippet:-1');
    directives.push('max-image-preview:large');
    directives.push('max-video-preview:-1');
    
    return directives.join(', ');
  };

  // Generate structured breadcrumbs
  const generateBreadcrumbsJSON = () => {
    if (!breadcrumbs || breadcrumbs.length === 0) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: crumb.url
      }))
    };
  };

  const allKeywords = generateKeywords();
  const enhancedDescription = generateEnhancedDescription();
  const robots = generateRobots();
  const breadcrumbJSON = generateBreadcrumbsJSON();

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={enhancedDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={enhancedDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl || organizationInfo.url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:site_name" content={organizationInfo.name} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={enhancedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      
      {/* Product-specific meta tags */}
      {productInfo && (
        <>
          <meta property="product:price:amount" content={productInfo.price?.toString()} />
          <meta property="product:price:currency" content={productInfo.currency} />
          <meta property="product:availability" content={productInfo.availability} />
          <meta property="product:condition" content={productInfo.condition} />
          <meta property="product:brand" content={productInfo.brand} />
          {productInfo.sku && <meta property="product:retailer_item_id" content={productInfo.sku} />}
        </>
      )}
      
      {/* Article-specific meta tags */}
      {(pageType === 'article' || publishDate) && (
        <>
          <meta property="article:author" content={author} />
          {publishDate && <meta property="article:published_time" content={publishDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          <meta property="article:section" content="Electrical Safety" />
          <meta property="article:tag" content="electrical safety, NEC compliance, panel labeling" />
        </>
      )}
      
      {/* Date meta tags */}
      {publishDate && <meta name="date" content={publishDate} />}
      {modifiedDate && <meta name="last-modified" content={modifiedDate} />}
      
      {/* Mobile and viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1F6FEB" />
      
      {/* Additional SEO meta tags */}
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="HandheldFriendly" content="true" />
      <meta name="MobileOptimized" content="width" />
      
      {/* Geo-targeting */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="United States" />
      
      {/* Contact and organization */}
      <meta name="contact" content="info@clearcircuit.com" />
      <meta name="copyright" content={`© ${new Date().getFullYear()} ${organizationInfo.name}`} />
      
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Breadcrumb structured data */}
      {breadcrumbJSON && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJSON)
          }}
        />
      )}
    </Head>
  );
}

// Utility functions for generating SEO-optimized content
export const generateSEOTitle = (
  baseTitle: string,
  pageType: string,
  brandName: string = 'ClearCircuit'
) => {
  const maxLength = 60;
  const separator = ' | ';
  
  let title = `${baseTitle}${separator}${brandName}`;
  
  // Add page-specific modifiers
  const modifiers = {
    product: '- NEC Compliant',
    category: '- Professional Grade',
    article: '- Expert Guide',
    home: '- Electrical Safety Experts'
  };
  
  const modifier = modifiers[pageType as keyof typeof modifiers];
  if (modifier) {
    const testTitle = `${baseTitle} ${modifier}${separator}${brandName}`;
    if (testTitle.length <= maxLength) {
      title = testTitle;
    }
  }
  
  return title.length > maxLength ? title.substring(0, maxLength - 3) + '...' : title;
};

export const generateSEODescription = (
  content: string,
  pageType: string,
  keywords: string[] = []
) => {
  const maxLength = 160;
  const minLength = 120;
  
  // Base description with call-to-action
  let description = content;
  
  // Add page-specific CTAs
  const ctas = {
    product: 'Shop now for fast shipping and expert support.',
    category: 'Browse our professional electrical safety solutions.',
    article: 'Learn from electrical safety experts.',
    home: 'Get professional electrical panel labels today.',
    contact: 'Contact our electrical safety experts.',
    faq: 'Get answers to electrical safety questions.'
  };
  
  const cta = ctas[pageType as keyof typeof ctas];
  if (cta && (description.length + cta.length + 1) <= maxLength) {
    description += ` ${cta}`;
  }
  
  // Ensure proper length
  if (description.length > maxLength) {
    description = description.substring(0, maxLength - 3) + '...';
  }
  
  // Ensure minimum length for SEO
  if (description.length < minLength) {
    const padding = ' Professional electrical panel labeling solutions that meet NEC 408.4(A) standards.';
    if ((description.length + padding.length) <= maxLength) {
      description += padding;
    }
  }
  
  return description;
};

export const generateKeywordsForPage = (
  pageType: string,
  specificKeywords: string[] = []
) => {
  const baseKeywords = [
    'electrical panel labels',
    'circuit breaker labels',
    'NEC 408.4(A)',
    'electrical safety',
    'professional labeling'
  ];
  
  const pageKeywords = {
    home: ['electrical safety solutions', 'panel labeling system', 'electrician tools'],
    product: ['buy electrical labels', 'professional labeling kit', 'circuit identification'],
    category: ['electrical safety products', 'labeling solutions', 'electrical equipment'],
    article: ['electrical safety tips', 'NEC compliance guide', 'electrical maintenance'],
    about: ['electrical safety experts', 'professional labeling company'],
    contact: ['electrical safety consultation', 'labeling support', 'emergency electrical help'],
    faq: ['electrical labeling questions', 'NEC compliance help', 'safety standards']
  };
  
  return [
    ...baseKeywords,
    ...(pageKeywords[pageType as keyof typeof pageKeywords] || []),
    ...specificKeywords
  ];
};

// Component for generating page-specific SEO meta tags
export function ProductSEOMetaTags({
  productName,
  description,
  price,
  currency = 'USD',
  availability = 'in stock',
  brand = 'ClearCircuit',
  sku,
  image,
  canonicalUrl
}: {
  productName: string;
  description: string;
  price?: number;
  currency?: string;
  availability?: 'in stock' | 'out of stock' | 'pre-order';
  brand?: string;
  sku?: string;
  image?: string;
  canonicalUrl?: string;
}) {
  const title = generateSEOTitle(productName, 'product');
  const seoDescription = generateSEODescription(description, 'product');
  const keywords = generateKeywordsForPage('product', [productName, brand]);
  
  return (
    <SEOMetaTags
      title={title}
      description={seoDescription}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      ogImage={image}
      ogType="product"
      pageType="product"
      productInfo={{
        price,
        currency,
        availability,
        condition: 'new',
        brand,
        sku
      }}
    />
  );
}

export function CategorySEOMetaTags({
  categoryName,
  description,
  canonicalUrl,
  image
}: {
  categoryName: string;
  description: string;
  canonicalUrl?: string;
  image?: string;
}) {
  const title = generateSEOTitle(categoryName, 'category');
  const seoDescription = generateSEODescription(description, 'category');
  const keywords = generateKeywordsForPage('category', [categoryName]);
  
  return (
    <SEOMetaTags
      title={title}
      description={seoDescription}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      ogImage={image}
      pageType="category"
    />
  );
}

export function ArticleSEOMetaTags({
  title,
  description,
  author,
  publishDate,
  modifiedDate,
  canonicalUrl,
  image
}: {
  title: string;
  description: string;
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  canonicalUrl?: string;
  image?: string;
}) {
  const seoTitle = generateSEOTitle(title, 'article');
  const seoDescription = generateSEODescription(description, 'article');
  const keywords = generateKeywordsForPage('article', [title]);
  
  return (
    <SEOMetaTags
      title={seoTitle}
      description={seoDescription}
      keywords={keywords}
      canonicalUrl={canonicalUrl}
      ogImage={image}
      ogType="article"
      pageType="article"
      author={author}
      publishDate={publishDate}
      modifiedDate={modifiedDate}
    />
  );
} 