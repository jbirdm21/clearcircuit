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
              Stop Electrical Accidents Before They Happen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from our professional-grade panel labeling solutions that eliminate confusion, 
              prevent costly accidents, and ensure you pass every inspection with confidence.
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
            <h2 className="text-3xl font-bold text-gray-900">Most Popular - Standard Kits</h2>
            <Badge className="ml-4 bg-electric-blue text-white">Fastest Installation</Badge>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Transform messy panels into professional-grade systems in just 5 minutes. 
            Perfect for the most common residential and light commercial panels.
          </p>

          {/* Features highlight for standard kits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-blue-50 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-electric-blue mr-3" />
              <span className="text-gray-700">Chosen by 85% of electrical contractors</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-electric-blue mr-3" />
              <span className="text-gray-700">5-minute installation saves hours of work</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-electric-blue mr-3" />
              <span className="text-gray-700">Common circuit names eliminate guesswork</span>
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
            <Badge className="ml-4 bg-safety-orange text-white">Any Panel Type</Badge>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            For complex commercial installations and demanding clients who require specific labeling. 
            Get exactly what you need to satisfy even the most challenging projects.
          </p>

          {/* Features highlight for custom kits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-orange-50 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-safety-orange mr-3" />
              <span className="text-gray-700">Works with any panel type or configuration</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-safety-orange mr-3" />
              <span className="text-gray-700">Professional custom laser engraving</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-safety-orange mr-3" />
              <span className="text-gray-700">Commercial-grade durability and compliance</span>
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
            <Badge className="ml-4 bg-green-600 text-white">Professional Choice</Badge>
          </div>
          <p className="text-gray-600 mb-12 max-w-2xl">
            For electrical contractors who demand consistency and savings. 
            Never run out of labels on critical jobs and maintain professional standards across all projects.
          </p>

          {/* Features highlight for bulk kits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Save 20% on volume purchases</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Covers 95% of residential and commercial panels</span>
            </div>
            <div className="flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-3" />
              <span className="text-gray-700">Maintain professional image across all jobs</span>
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
              Why Electrical Professionals Choose ClearCircuit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional results that protect your reputation, save time, and impress clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Never Fail Another Inspection</h3>
              <p className="text-gray-600">Guaranteed NEC 408.4(A) compliance eliminates costly re-inspections and protects your professional reputation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Jobs 75% Faster</h3>
              <p className="text-gray-600">Peel-and-stick installation takes just 5 minutes - no measuring, no cutting, no delays</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Impress Every Client</h3>
              <p className="text-gray-600">Professional laser engraving and premium materials show quality workmanship that builds trust</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Eliminate Service Calls</h3>
              <p className="text-gray-600">Clear labeling prevents confusion and reduces troubleshooting time from hours to minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Risk Your Team's Safety on Unlabeled Panels
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every electrical accident is preventable. Get professional-grade labels that protect your team, 
            satisfy inspectors, and demonstrate your commitment to safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-electric-blue bg-white hover:bg-gray-100 transition-colors"
            >
              Get Expert Guidance
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-electric-blue transition-colors"
            >
              Common Questions
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