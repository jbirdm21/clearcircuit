import { PanelLabelKit } from '@/types';
import { Testimonial } from '@/types';

interface OrganizationProps {
  type: 'organization';
}

interface ProductProps {
  type: 'product';
  product: PanelLabelKit;
  testimonials?: Testimonial[];
}

interface WebsiteProps {
  type: 'website';
  page: {
    title: string;
    description: string;
    url: string;
  };
}

type StructuredDataProps = OrganizationProps | ProductProps | WebsiteProps;

export default function StructuredData({ ...props }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://clearcircuit.com';
    
    if (props.type === 'organization') {
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'ClearCircuit',
        description: 'Professional electrical panel labeling solutions that meet NEC 408.4(A) standards. Trusted by electricians and homeowners nationwide.',
        url: baseUrl,
        logo: `${baseUrl}/images/logo.png`,
        foundingDate: '2014',
        founders: [
          {
            '@type': 'Person',
            name: 'Mike Johnson',
            jobTitle: 'Founder & Master Electrician'
          }
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '123 Electric Safety Drive',
          addressLocality: 'Safety City',
          addressRegion: 'SC',
          postalCode: '29401',
          addressCountry: 'US'
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-123-4567',
          contactType: 'Customer Service',
          email: 'info@clearcircuit.com',
          availableLanguage: 'English'
        },
        sameAs: [
          'https://www.facebook.com/clearcircuit',
          'https://www.linkedin.com/company/clearcircuit',
          'https://twitter.com/clearcircuit'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '250',
          bestRating: '5',
          worstRating: '1'
        }
      };
    }

    if (props.type === 'product') {
      const { product, testimonials = [] } = props;
      
      return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: product.images || [product.image],
        brand: {
          '@type': 'Brand',
          name: 'ClearCircuit'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'ClearCircuit'
        },
        sku: product.id,
        mpn: product.slug,
        category: 'Electrical Panel Labels',
        offers: {
          '@type': 'Offer',
          url: `${baseUrl}/products/${product.slug}`,
          priceCurrency: 'USD',
          price: product.price.toString(),
          priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
          itemCondition: 'https://schema.org/NewCondition',
          availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          seller: {
            '@type': 'Organization',
            name: 'ClearCircuit'
          },
          shippingDetails: {
            '@type': 'OfferShippingDetails',
            shippingRate: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: product.price >= 50 ? '0' : '9.99'
            },
            deliveryTime: {
              '@type': 'ShippingDeliveryTime',
              businessDays: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
              },
              cutoffTime: '15:00',
              handlingTime: {
                '@type': 'QuantitativeValue',
                minValue: 1,
                maxValue: 2,
                unitCode: 'DAY'
              },
              transitTime: {
                '@type': 'QuantitativeValue',
                minValue: 3,
                maxValue: 5,
                unitCode: 'DAY'
              }
            }
          }
        },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Panel Type',
            value: product.panelType
          },
          {
            '@type': 'PropertyValue',
            name: 'Number of Circuits',
            value: product.slots.toString()
          },
          {
            '@type': 'PropertyValue',
            name: 'Material',
            value: product.specifications.material
          },
          {
            '@type': 'PropertyValue',
            name: 'Compliance',
            value: product.specifications.compliance.join(', ')
          }
        ],
        review: testimonials.map(testimonial => ({
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: testimonial.name
          },
          datePublished: testimonial.createdAt.toISOString(),
          description: testimonial.content,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: testimonial.rating.toString(),
            bestRating: '5',
            worstRating: '1'
          }
        })),
        aggregateRating: testimonials.length > 0 ? {
          '@type': 'AggregateRating',
          ratingValue: (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1),
          reviewCount: testimonials.length.toString(),
          bestRating: '5',
          worstRating: '1'
        } : undefined
      };
    }

    if (props.type === 'website') {
      const { page } = props;
      
      return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ClearCircuit',
        description: page.description,
        url: baseUrl,
        publisher: {
          '@type': 'Organization',
          name: 'ClearCircuit'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/products?q={search_term_string}`
          },
          'query-input': 'required name=search_term_string'
        }
      };
    }

    return null;
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
} 