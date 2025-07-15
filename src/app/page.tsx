import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';
import FeatureGrid from '@/components/ui/FeatureGrid';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
      {/* Hero Section */}
      <HeroSection
        title="No More Mystery Breakers"
        subtitle="Every Circuit Clearly Labeled with professional-grade, code-compliant labels that install in minutes and last for decades."
        ctaText="Shop Kits"
        ctaLink="/products"
      />

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
        </div>
      </section>
    </div>
  );
}
