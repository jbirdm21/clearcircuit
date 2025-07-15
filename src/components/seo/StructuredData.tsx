'use client';

import React from 'react';
import Head from 'next/head';

interface Organization {
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  socialMedia: string[];
  foundingDate: string;
  industry: string;
  areaServed: string;
}

interface Product {
  name: string;
  description: string;
  sku: string;
  brand: string;
  price: number;
  currency: string;
  availability: string;
  image: string;
  category: string;
  features: string[];
  manufacturer: string;
  model?: string;
  condition: string;
  warranty?: string;
  reviews?: {
    ratingValue: number;
    bestRating: number;
    worstRating: number;
    ratingCount: number;
    reviewBody?: string;
  };
}

interface Service {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  serviceType: string;
  price?: number;
  currency?: string;
  availability: string;
  features: string[];
  image?: string;
  aggregateRating?: {
    ratingValue: number;
    bestRating: number;
    worstRating: number;
    ratingCount: number;
  };
}

interface FAQ {
  question: string;
  answer: string;
}

interface HowTo {
  name: string;
  description: string;
  totalTime: string;
  estimatedCost: string;
  supply: string[];
  tool: string[];
  steps: {
    name: string;
    text: string;
    url?: string;
    image?: string;
  }[];
}

interface StructuredDataProps {
  organization?: Organization;
  product?: Product;
  service?: Service;
  faq?: FAQ[];
  howTo?: HowTo;
  breadcrumbs?: {
    name: string;
    url: string;
  }[];
  pageType?: 'home' | 'product' | 'service' | 'about' | 'contact' | 'faq' | 'blog';
  customSchema?: Record<string, any>;
}

// Default organization data
const defaultOrganization: Organization = {
  name: 'ClearCircuit',
  url: 'https://clearcircuit.com',
  logo: 'https://clearcircuit.com/images/logo.png',
  description: 'Professional electrical panel labeling solutions that meet NEC 408.4(A) standards. Trusted by electricians and facility managers nationwide for safer, clearer circuits.',
  telephone: '+1-555-911-7233',
  address: {
    streetAddress: '123 Safety Street',
    addressLocality: 'Electrical City',
    addressRegion: 'CA',
    postalCode: '90210',
    addressCountry: 'US'
  },
  socialMedia: [
    'https://facebook.com/clearcircuit',
    'https://twitter.com/clearcircuit',
    'https://linkedin.com/company/clearcircuit'
  ],
  foundingDate: '2020-01-01',
  industry: 'Electrical Safety Equipment',
  areaServed: 'United States'
};

export default function StructuredData({
  organization = defaultOrganization,
  product,
  service,
  faq,
  howTo,
  breadcrumbs,
  pageType = 'home',
  customSchema
}: StructuredDataProps) {
  const generateOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organization.name,
    url: organization.url,
    logo: organization.logo,
    description: organization.description,
    telephone: organization.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address.streetAddress,
      addressLocality: organization.address.addressLocality,
      addressRegion: organization.address.addressRegion,
      postalCode: organization.address.postalCode,
      addressCountry: organization.address.addressCountry
    },
    sameAs: organization.socialMedia,
    foundingDate: organization.foundingDate,
    industry: organization.industry,
    areaServed: organization.areaServed,
    knowsAbout: [
      'Electrical Safety',
      'Panel Labeling',
      'NEC Compliance',
      'Circuit Breaker Labels',
      'Electrical Code Compliance',
      'Safety Equipment'
    ],
    hasCredential: [
      'NEC 408.4(A) Certification',
      'Electrical Safety Standards',
      'Professional Labeling Systems'
    ]
  });

  const generateProductSchema = () => {
    if (!product) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      description: product.description,
      sku: product.sku,
      brand: {
        '@type': 'Brand',
        name: product.brand
      },
      manufacturer: {
        '@type': 'Organization',
        name: product.manufacturer
      },
      model: product.model,
      image: product.image,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency,
        availability: `https://schema.org/${product.availability}`,
        seller: {
          '@type': 'Organization',
          name: organization.name
        },
        warranty: product.warranty,
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            currency: product.currency,
            value: '0'
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            businessDays: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '08:00',
              closes: '17:00'
            }
          }
        }
      },
      category: product.category,
      additionalProperty: product.features.map(feature => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature
      })),
      itemCondition: `https://schema.org/${product.condition}`,
      aggregateRating: product.reviews ? {
        '@type': 'AggregateRating',
        ratingValue: product.reviews.ratingValue,
        bestRating: product.reviews.bestRating,
        worstRating: product.reviews.worstRating,
        ratingCount: product.reviews.ratingCount
      } : undefined,
      review: product.reviews ? {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: product.reviews.ratingValue,
          bestRating: product.reviews.bestRating
        },
        reviewBody: product.reviews.reviewBody
      } : undefined
    };
  };

  const generateServiceSchema = () => {
    if (!service) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'Organization',
        name: service.provider
      },
      areaServed: service.areaServed,
      serviceType: service.serviceType,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Electrical Safety Services',
        itemListElement: service.features.map((feature, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: feature
          },
          position: index + 1
        }))
      },
      offers: service.price ? {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: service.currency,
        availability: `https://schema.org/${service.availability}`
      } : undefined,
      aggregateRating: service.aggregateRating ? {
        '@type': 'AggregateRating',
        ratingValue: service.aggregateRating.ratingValue,
        bestRating: service.aggregateRating.bestRating,
        worstRating: service.aggregateRating.worstRating,
        ratingCount: service.aggregateRating.ratingCount
      } : undefined,
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: organization.url,
        servicePhone: organization.telephone
      }
    };
  };

  const generateFAQSchema = () => {
    if (!faq || faq.length === 0) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer
        }
      }))
    };
  };

  const generateHowToSchema = () => {
    if (!howTo) return null;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      totalTime: howTo.totalTime,
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: 'USD',
        value: howTo.estimatedCost
      },
      supply: howTo.supply.map(item => ({
        '@type': 'HowToSupply',
        name: item
      })),
      tool: howTo.tool.map(item => ({
        '@type': 'HowToTool',
        name: item
      })),
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        url: step.url,
        image: step.image
      }))
    };
  };

  const generateBreadcrumbSchema = () => {
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

  const generateWebSiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organization.name,
    url: organization.url,
    description: organization.description,
    publisher: {
      '@type': 'Organization',
      name: organization.name
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${organization.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    },
    about: {
      '@type': 'Thing',
      name: 'Electrical Safety',
      description: 'Professional electrical panel labeling and safety solutions'
    }
  });

  const generateLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${organization.url}#business`,
    name: organization.name,
    url: organization.url,
    telephone: organization.telephone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: organization.address.streetAddress,
      addressLocality: organization.address.addressLocality,
      addressRegion: organization.address.addressRegion,
      postalCode: organization.address.postalCode,
      addressCountry: organization.address.addressCountry
    },
    openingHours: [
      'Mo-Fr 08:00-17:00'
    ],
    image: organization.logo,
    description: organization.description,
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.9,
      bestRating: 5,
      worstRating: 1,
      ratingCount: 1247
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electrical Safety Products',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Professional Panel Labels'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Safety Consultation'
          }
        }
      ]
    }
  });

  const schemas = [
    generateOrganizationSchema(),
    generateWebSiteSchema(),
    generateLocalBusinessSchema(),
    generateProductSchema(),
    generateServiceSchema(),
    generateFAQSchema(),
    generateHowToSchema(),
    generateBreadcrumbSchema(),
    customSchema
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
}

// Predefined schemas for common pages
export const HomePageSchema = {
  faq: [
    {
      question: 'What are NEC 408.4(A) compliant electrical panel labels?',
      answer: 'NEC 408.4(A) compliant labels are professional electrical panel labels that meet the National Electrical Code requirements for circuit identification. They must be durable, legible, and properly describe the purpose of each circuit breaker.'
    },
    {
      question: 'How long do professional panel labels last?',
      answer: 'Our professional panel labels are designed to last the lifetime of your electrical panel. They are made from durable materials that resist fading, peeling, and environmental damage.'
    },
    {
      question: 'Are these labels required for electrical inspections?',
      answer: 'Yes, properly labeled electrical panels are required by the National Electrical Code (NEC) and are essential for passing electrical inspections. Unlabeled or improperly labeled panels often result in code violations.'
    }
  ]
};

export const ProductPageSchema = {
  howTo: {
    name: 'How to Install Professional Panel Labels',
    description: 'Step-by-step guide to install professional electrical panel labels that meet NEC 408.4(A) standards.',
    totalTime: 'PT15M',
    estimatedCost: '0',
    supply: ['Professional Panel Labels', 'Circuit List', 'Cleaning Cloth'],
    tool: ['Screwdriver', 'Flashlight'],
    steps: [
      {
        name: 'Turn off main power',
        text: 'Safety first - turn off the main circuit breaker before working on the panel.'
      },
      {
        name: 'Clean the panel surface',
        text: 'Clean the area where labels will be applied to ensure proper adhesion.'
      },
      {
        name: 'Apply labels to circuits',
        text: 'Apply each label to the corresponding circuit breaker, ensuring proper alignment.'
      },
      {
        name: 'Verify all circuits are labeled',
        text: 'Double-check that every circuit breaker has a clear, readable label.'
      }
    ]
  }
};

export const SafetyPageSchema = {
  faq: [
    {
      question: 'Why is electrical panel labeling important for safety?',
      answer: 'Proper electrical panel labeling is crucial for safety because it allows quick identification of circuits during emergencies, prevents accidents during maintenance, and ensures compliance with electrical codes.'
    },
    {
      question: 'What happens if electrical panels are not properly labeled?',
      answer: 'Unlabeled panels can lead to electrical accidents, code violations, failed inspections, increased maintenance time, and potential safety hazards for anyone working on the electrical system.'
    },
    {
      question: 'How often should electrical panels be relabeled?',
      answer: 'Electrical panels should be relabeled whenever changes are made to the electrical system, when existing labels become illegible, or when upgrading to professional-grade labels for better compliance and safety.'
    }
  ]
};

// Utility functions for generating specific schemas
export const generateProductListSchema = (products: Product[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: products.map((product, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Product',
      name: product.name,
      image: product.image,
      description: product.description,
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: product.currency
      }
    }
  }))
});

export const generateArticleSchema = (
  title: string,
  description: string,
  author: string,
  publishDate: string,
  modifiedDate: string,
  image: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description: description,
  author: {
    '@type': 'Person',
    name: author
  },
  publisher: {
    '@type': 'Organization',
    name: defaultOrganization.name,
    logo: {
      '@type': 'ImageObject',
      url: defaultOrganization.logo
    }
  },
  datePublished: publishDate,
  dateModified: modifiedDate,
  image: image,
  url: url,
  mainEntityOfPage: url
});

export const generateReviewSchema = (
  itemName: string,
  rating: number,
  reviewText: string,
  reviewerName: string,
  reviewDate: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  itemReviewed: {
    '@type': 'Product',
    name: itemName
  },
  reviewRating: {
    '@type': 'Rating',
    ratingValue: rating,
    bestRating: 5,
    worstRating: 1
  },
  reviewBody: reviewText,
  author: {
    '@type': 'Person',
    name: reviewerName
  },
  datePublished: reviewDate
}); 