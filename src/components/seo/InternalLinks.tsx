import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface InternalLink {
  title: string;
  description: string;
  href: string;
  category: string;
}

interface InternalLinksProps {
  currentPage: string;
  maxLinks?: number;
}

export default function InternalLinks({ currentPage, maxLinks = 4 }: InternalLinksProps) {
  const allLinks: InternalLink[] = [
    {
      title: "Electrical Safety Resources",
      description: "Comprehensive safety guides and NEC compliance information",
      href: "/safety-resources",
      category: "safety"
    },
    {
      title: "About ClearCircuit",
      description: "Learn about our mission and electrical safety expertise",
      href: "/about",
      category: "company"
    },
    {
      title: "Contact Our Experts",
      description: "Get personalized help from electrical safety professionals",
      href: "/contact",
      category: "support"
    },
    {
      title: "All Products",
      description: "Browse our complete range of panel labeling solutions",
      href: "/products",
      category: "products"
    },
    {
      title: "Standard 20-Slot Kit",
      description: "Most popular kit for Square D QO 20-slot panels",
      href: "/products/20-slot-square-d-qo",
      category: "products"
    },
    {
      title: "24-Slot Eaton BR Kit",
      description: "Professional labeling for 24-slot Eaton BR panels",
      href: "/products/24-slot-eaton-br",
      category: "products"
    },
    {
      title: "Custom Universal Kit",
      description: "Flexible solution for any panel configuration",
      href: "/products/custom-universal-kit",
      category: "products"
    },
    {
      title: "Bulk Contractor Pack",
      description: "Volume discounts for electrical professionals",
      href: "/products/bulk-contractor-pack",
      category: "products"
    }
  ];

  // Filter out the current page and related pages based on context
  const getRelevantLinks = (): InternalLink[] => {
    let filteredLinks = allLinks.filter(link => link.href !== currentPage);

    // Customize recommendations based on current page
    if (currentPage === '/') {
      // Homepage - show key pages
      filteredLinks = filteredLinks.filter(link => 
        ['safety', 'company', 'products'].includes(link.category)
      );
    } else if (currentPage.startsWith('/products/')) {
      // Product pages - show other products and support
      filteredLinks = filteredLinks.filter(link => 
        link.category === 'products' || link.category === 'support' || link.category === 'safety'
      );
    } else if (currentPage === '/products') {
      // Products page - show individual products and support
      filteredLinks = filteredLinks.filter(link => 
        link.href.startsWith('/products/') || link.category === 'support'
      );
    } else if (currentPage === '/about') {
      // About page - show products and contact
      filteredLinks = filteredLinks.filter(link => 
        link.category === 'products' || link.category === 'support' || link.category === 'safety'
      );
    } else if (currentPage === '/contact') {
      // Contact page - show products and resources
      filteredLinks = filteredLinks.filter(link => 
        link.category === 'products' || link.category === 'safety'
      );
    } else if (currentPage === '/safety-resources') {
      // Safety resources - show products and support
      filteredLinks = filteredLinks.filter(link => 
        link.category === 'products' || link.category === 'support'
      );
    }

    return filteredLinks.slice(0, maxLinks);
  };

  const relevantLinks = getRelevantLinks();

  if (relevantLinks.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Related Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relevantLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  {link.title}
                  <ArrowRight className="w-4 h-4 ml-2 text-electric-blue" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {link.description}
                </CardDescription>
                <Link 
                  href={link.href}
                  className="text-electric-blue hover:text-electric-blue/80 font-medium text-sm inline-flex items-center"
                >
                  Learn More
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 