import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';
import FeatureGrid from '@/components/ui/FeatureGrid';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import Link from 'next/link';
import { ArrowRight, Users, Award, Shield, Clock } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';
import TrustBadges from '@/components/ui/TrustBadges';
import ScrollTracker from '@/components/analytics/ScrollTracker';
import { SocialCTA } from '@/components/social/SocialLinks';

export const metadata: Metadata = {
  title: 'ClearCircuit™ - Code-Compliant Breaker Panel Labels',
  description: 'Professional electrical panel labeling solutions that meet NEC 408.4(A) standards. Trusted by electricians and homeowners nationwide for safer, clearer circuits.',
  keywords: ['electrical panel labels', 'breaker panel labels', 'NEC compliant', 'circuit labels', 'electrical safety'],
  openGraph: {
    title: 'ClearCircuit™ - Code-Compliant Breaker Panel Labels',
    description: 'Professional electrical panel labeling solutions that meet NEC 408.4(A) standards.',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClearCircuit™ - Code-Compliant Breaker Panel Labels',
    description: 'Professional electrical panel labeling solutions that meet NEC 408.4(A) standards.',
    images: ['/images/og-image.jpg'],
  },
};

export default function HomePage() {
  const featuredProducts = getFeaturedProducts().slice(0, 3);

  return (
    <div>
      <ScrollTracker />
      {/* Structured Data */}
      <StructuredData type="organization" />
      <StructuredData 
        type="website" 
        page={{
          title: 'ClearCircuit™ - Code-Compliant Breaker Panel Labels',
          description: 'Professional electrical panel labeling solutions that meet NEC 408.4(A) standards. Trusted by electricians and homeowners nationwide for safer, clearer circuits.',
          url: '/'
        }}
      />
      
      {/* Hero Section */}
      <HeroSection
        title="No More Mystery Breakers"
        subtitle="Every Circuit Clearly Labeled with professional-grade, code-compliant labels that install in minutes and last for decades."
        ctaText="Shop Kits"
        ctaLink="/products"
      />

      {/* Social Proof Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Customer Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">NEC</div>
              <div className="text-sm text-gray-600">Compliant</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">5 Min</div>
              <div className="text-sm text-gray-600">Installation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional-Grade Quality You Can Trust
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Backed by certifications, warranties, and thousands of satisfied customers
            </p>
          </div>
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* Features Section */}
      <FeatureGrid />

      {/* Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Most Popular Kits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our range of professional-grade panel labeling solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-electric-blue hover:bg-electric-blue/90 text-white"
            >
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ClearCircuit labels
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are these labels really code-compliant?
              </h3>
              <p className="text-gray-600">
                Yes! Our labels meet NEC 408.4(A) requirements for circuit identification and are UL 969 certified. 
                They're trusted by electricians nationwide and pass inspections consistently.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long do the labels last?
              </h3>
              <p className="text-gray-600">
                Our labels are designed to last 10+ years in electrical panel environments. They're made with 
                durable materials that resist heat, moisture, and fading, backed by our 5-year warranty.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I install these myself?
              </h3>
              <p className="text-gray-600">
                Absolutely! Our peel-and-stick labels install in about 5 minutes with no special tools required. 
                We include detailed instructions, and many homeowners complete the installation themselves.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if I need custom labels?
              </h3>
              <p className="text-gray-600">
                We offer custom laser engraving for specific circuit names and commercial applications. 
                Our Custom Kit allows you to specify exactly what you need for your unique setup.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer bulk pricing for contractors?
              </h3>
              <p className="text-gray-600">
                Yes! Our Bulk Pack is perfect for contractors and includes multiple kits at a discounted price. 
                Contact us for volume pricing on larger orders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialCTA />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Label Your Panel?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of electricians and homeowners who trust ClearCircuit for professional panel labeling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-electric-blue hover:bg-gray-100"
            >
              <Link href="/products">
                Get My Kit
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-electric-blue"
            >
              <Link href="/how-it-works">
                How It Works
              </Link>
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center text-sm">
              <Shield className="w-4 h-4 mr-2" />
              NEC 408.4(A) Compliant
            </div>
            <div className="flex items-center text-sm">
              <Award className="w-4 h-4 mr-2" />
              UL 969 Certified
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" />
              5-Year Warranty
            </div>
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2" />
              30-Day Money Back
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
