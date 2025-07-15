'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { PanelLabelKit } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star, Users, Award, Shield, Clock, Filter, Search } from 'lucide-react';
import TrustBadges from '@/components/ui/TrustBadges';
import ProductSearch from '@/components/ui/ProductSearch';
import { LeadMagnetCapture } from '@/components/email/EmailCapture';

// Note: metadata moved to layout.tsx due to client component

export default function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState<PanelLabelKit[]>(products);
  const [showAllProducts, setShowAllProducts] = useState(false);
  
  // When filters are applied, show all products in one section
  const standardProducts = showAllProducts ? [] : products.filter(product => product.category === 'standard');
  const customProducts = showAllProducts ? [] : products.filter(product => product.category === 'custom');
  const bulkProducts = showAllProducts ? [] : products.filter(product => product.category === 'bulk');

  const handleFilteredProductsChange = (filtered: PanelLabelKit[]) => {
    setFilteredProducts(filtered);
    setShowAllProducts(filtered.length !== products.length || filtered.some((p, i) => p.id !== products[i]?.id));
  };

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

      {/* Trust Badges Section */}
      <section className="py-12 bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* Lead Magnet - Installation Checklist */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <LeadMagnetCapture magnetId="installation-checklist" />
          </div>
        </div>
      </section>

      {/* Product Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProductSearch 
            products={products} 
            onFilteredProductsChange={handleFilteredProductsChange}
          />
        </div>
      </section>

      {/* Product Selection Guide */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Not Sure Which Kit You Need?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Use our quick selection guide to find the perfect labeling solution for your panel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-electric-blue transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Quick & Easy</CardTitle>
                <CardDescription>Standard residential panels</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Square D QO or Eaton BR panels in homes and small buildings
                </p>
                <Button className="bg-electric-blue hover:bg-electric-blue/90">
                  Shop Standard Kits
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-electric-blue transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-safety-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Custom Solution</CardTitle>
                <CardDescription>Unique panel configurations</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Commercial panels or specific circuit naming requirements
                </p>
                <Button className="bg-safety-orange hover:bg-safety-orange/90">
                  Shop Custom Kits
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-electric-blue transition-colors">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Bulk Orders</CardTitle>
                <CardDescription>Multiple panels or projects</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Electrical contractors and facility managers
                </p>
                <Button className="bg-green-600 hover:bg-green-600/90">
                  Shop Bulk Packs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filtered Products Results */}
      {showAllProducts && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">
                Search Results ({filteredProducts.length} products)
              </h2>
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowAllProducts(false);
                  setFilteredProducts(products);
                }}
              >
                Show All Categories
              </Button>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <Search className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or filters</p>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Standard Products */}
      {!showAllProducts && (
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

          {/* Features highlight for standard kits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-electric-blue mr-3" />
              <span className="text-gray-700">85% of electricians recommend</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-electric-blue mr-3" />
              <span className="text-gray-700">5-minute installation</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-electric-blue mr-3" />
              <span className="text-gray-700">Most common circuit names included</span>
            </div>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standardProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {!showAllProducts && <Separator className="my-0" />}

      {/* Custom Products */}
      {!showAllProducts && (
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

          {/* Features highlight for custom kits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-orange-50 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-safety-orange mr-3" />
              <span className="text-gray-700">Any panel type or size</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-safety-orange mr-3" />
              <span className="text-gray-700">Custom laser engraving</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-safety-orange mr-3" />
              <span className="text-gray-700">Commercial grade durability</span>
            </div>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {customProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {!showAllProducts && <Separator className="my-0" />}

      {/* Bulk Products */}
      {!showAllProducts && (
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

          {/* Features highlight for bulk kits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">20% volume discount</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Mixed panel types included</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Perfect for contractor inventory</span>
            </div>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bulkProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose ClearCircuit */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Electricians Choose ClearCircuit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade quality that meets code requirements and customer expectations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Code Compliant</h3>
              <p className="text-gray-600">Every kit meets NEC 408.4(A) requirements for proper circuit identification</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Installation</h3>
              <p className="text-gray-600">Peel-and-stick application takes just 5 minutes per panel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-gray-600">Laser engraving and UL 969 materials ensure lasting durability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
              <p className="text-gray-600">4.9/5 rating from thousands of electrical professionals</p>
            </div>
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
          
          {/* Final trust signals */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center text-sm">
              <Shield className="w-4 h-4 mr-2" />
              NEC 408.4(A) Compliant
            </div>
            <div className="flex items-center text-sm">
              <Award className="w-4 h-4 mr-2" />
              5-Year Warranty
            </div>
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2" />
              Free Shipping $50+
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" />
              30-Day Returns
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 