import { Metadata } from 'next';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Professional Panel Label Kits - All Products',
  description: 'Browse our complete range of NEC-compliant electrical panel labeling kits. From standard 20-slot panels to custom universal solutions.',
  keywords: ['panel label kits', 'electrical panel labels', 'Square D labels', 'Eaton labels', 'custom panel labels'],
  openGraph: {
    title: 'Professional Panel Label Kits - All Products | ClearCircuit',
    description: 'Browse our complete range of NEC-compliant electrical panel labeling kits.',
    images: ['/images/products-og.jpg'],
  },
};

export default function ProductsPage() {
  const standardProducts = products.filter(product => product.category === 'standard');
  const customProducts = products.filter(product => product.category === 'custom');
  const bulkProducts = products.filter(product => product.category === 'bulk');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Panel Label Kits
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our range of NEC-compliant electrical panel labeling solutions. 
              Each kit includes everything you need for professional installation.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                NEC 408.4(A) Compliant
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                UL 969 Certified Materials
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                5-Year Warranty
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                Free Shipping Over $50
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Standard Kits</h2>
            <Badge className="ml-4 bg-electric-blue text-white">Most Popular</Badge>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Pre-configured kits for the most common residential and light commercial panels. 
            Perfect for standard installations with common circuit types.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standardProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Custom Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Custom Solutions</h2>
            <Badge className="ml-4 bg-safety-orange text-white">Flexible</Badge>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Fully customizable kits for unique panel configurations, commercial installations, 
            or specific naming requirements. Any text, any panel type.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-0" />

      {/* Bulk Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Bulk & Contractor Packs</h2>
            <Badge className="ml-4 bg-green-600 text-white">Best Value</Badge>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Volume discounts for electrical contractors and facility managers. 
            Perfect for stocking your van or labeling multiple properties.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bulkProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our panel labeling experts are here to help you find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-electric-blue bg-white hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-electric-blue transition-colors"
            >
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 