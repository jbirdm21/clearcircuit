import { Metadata } from 'next';

interface OpenGraphMetaProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  siteName?: string;
  locale?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  price?: string;
  currency?: string;
  availability?: string;
}

export function generateOpenGraphMeta({
  title = 'Professional Electrical Panel Labels | ClearCircuit™',
  description = 'NEC-compliant electrical panel labels that make circuits safer and easier to identify. Professional quality, 5-year warranty, fast shipping.',
  image = '/images/product-showcase.jpg',
  url = 'https://clearcircuit.com',
  type = 'website',
  siteName = 'ClearCircuit™',
  locale = 'en_US',
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
  price,
  currency = 'USD',
  availability = 'in stock'
}: OpenGraphMetaProps = {}): Metadata {
  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type: type as any,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@clearcircuit',
      creator: '@clearcircuit',
      title,
      description,
      images: [image],
    },
    other: {
      // Additional meta tags for better social sharing
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': title,
      'twitter:image:alt': title,
      'theme-color': '#0EA5E9', // electric-blue
    }
  };

  // Add article-specific metadata
  if (type === 'article') {
    const articleData: any = {
      ...metadata.openGraph,
      type: 'article',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags && tags.length > 0 && { tags }),
    };
    
    if (author) {
      articleData.authors = [author];
    }
    
    metadata.openGraph = articleData;
  }

  // Add product-specific metadata
  if (type === 'product' && metadata.other) {
    metadata.other['product:price:currency'] = currency;
    metadata.other['product:availability'] = availability;
    metadata.other['product:brand'] = 'ClearCircuit';
    metadata.other['product:category'] = 'Electrical Safety Equipment';
    
    if (price) {
      metadata.other['product:price:amount'] = price;
    }
  }

  return metadata;
}

// Pre-configured metadata for different page types
export const homePageMeta = generateOpenGraphMeta({
  title: 'Professional Electrical Panel Labels | ClearCircuit™',
  description: 'NEC-compliant electrical panel labels that make circuits safer and easier to identify. Professional quality, 5-year warranty, fast shipping.',
  image: '/images/hero-bg.jpg',
  url: 'https://clearcircuit.com',
  type: 'website'
});

export const productsPageMeta = generateOpenGraphMeta({
  title: 'Electrical Panel Label Products | ClearCircuit™',
  description: 'Browse our complete selection of electrical panel labels. Standard kits, custom solutions, and bulk packages available.',
  image: '/images/product-showcase.jpg',
  url: 'https://clearcircuit.com/products',
  type: 'website'
});

export const aboutPageMeta = generateOpenGraphMeta({
  title: 'About ClearCircuit™ | Electrical Safety Experts',
  description: 'Learn about ClearCircuit\'s mission to make electrical panels safer through professional labeling solutions.',
  image: '/images/hero-bg.jpg',
  url: 'https://clearcircuit.com/about',
  type: 'website'
});

export const contactPageMeta = generateOpenGraphMeta({
  title: 'Contact ClearCircuit™ | Get Expert Help',
  description: 'Contact our electrical safety experts for custom labeling solutions, technical support, and bulk orders.',
  image: '/images/hero-bg.jpg',
  url: 'https://clearcircuit.com/contact',
  type: 'website'
});

// Function to generate product-specific metadata
export function generateProductMeta(product: {
  name: string;
  description: string;
  price: string;
  image: string;
  slug: string;
}) {
  return generateOpenGraphMeta({
    title: `${product.name} | ClearCircuit™`,
    description: product.description,
    image: product.image,
    url: `https://clearcircuit.com/products/${product.slug}`,
    type: 'product',
    price: product.price,
    currency: 'USD',
    availability: 'in stock'
  });
}

// Function to generate blog post metadata
export function generateBlogMeta(post: {
  title: string;
  excerpt: string;
  image?: string;
  slug: string;
  author?: string;
  publishedAt: string;
  updatedAt?: string;
  tags?: string[];
}) {
  return generateOpenGraphMeta({
    title: `${post.title} | ClearCircuit™ Blog`,
    description: post.excerpt,
    image: post.image || '/images/hero-bg.jpg',
    url: `https://clearcircuit.com/blog/${post.slug}`,
    type: 'article',
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    author: post.author || 'ClearCircuit Team',
    section: 'Electrical Safety',
    tags: post.tags || []
  });
}

// Structured data for rich snippets
export function generateStructuredData(data: {
  type: 'Organization' | 'Product' | 'Article' | 'WebSite';
  name?: string;
  description?: string;
  image?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
  };
  address?: {
    streetAddress: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  price?: string;
  availability?: string;
  brand?: string;
  sku?: string;
  author?: string;
  publisher?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.name,
    description: data.description,
    image: data.image,
    url: data.url,
  };

  if (data.type === 'Organization') {
    return {
      ...baseData,
      logo: data.logo,
      contactPoint: data.contactPoint,
      address: data.address,
      sameAs: [
        'https://www.facebook.com/clearcircuit',
        'https://twitter.com/clearcircuit',
        'https://www.linkedin.com/company/clearcircuit',
        'https://www.instagram.com/clearcircuit'
      ]
    };
  }

  if (data.type === 'Product') {
    return {
      ...baseData,
      brand: data.brand,
      sku: data.sku,
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: 'USD',
        availability: `https://schema.org/${data.availability === 'in stock' ? 'InStock' : 'OutOfStock'}`,
        url: data.url
      }
    };
  }

  if (data.type === 'Article') {
    return {
      ...baseData,
      author: {
        '@type': 'Person',
        name: data.author
      },
      publisher: {
        '@type': 'Organization',
        name: data.publisher || 'ClearCircuit',
        logo: data.logo
      },
      datePublished: data.datePublished,
      dateModified: data.dateModified
    };
  }

  if (data.type === 'WebSite') {
    return {
      ...baseData,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${data.url}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    };
  }

  return baseData;
}

// Common structured data for the organization
export const organizationStructuredData = generateStructuredData({
  type: 'Organization',
  name: 'ClearCircuit',
  description: 'Professional electrical panel labeling solutions that meet NEC standards.',
  image: '/images/hero-bg.jpg',
  url: 'https://clearcircuit.com',
  logo: '/images/logo.png',
  contactPoint: {
    telephone: '+1-555-123-4567',
    contactType: 'Customer Service',
    email: 'support@clearcircuit.com'
  },
  address: {
    streetAddress: '123 Safety Street',
    city: 'Electrical City',
    state: 'EC',
    postalCode: '12345',
    country: 'US'
  }
});

// Website structured data
export const websiteStructuredData = generateStructuredData({
  type: 'WebSite',
  name: 'ClearCircuit',
  description: 'Professional electrical panel labeling solutions',
  url: 'https://clearcircuit.com'
}); 