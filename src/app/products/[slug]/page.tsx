import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Star, CheckCircle, Package, Truck, Award, Users, ArrowRight, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getProductBySlug, products } from '@/data/products';
import { getTestimonialsByProduct } from '@/data/testimonials';
import StructuredData from '@/components/seo/StructuredData';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: product.seoTitle || `${product.name} - ClearCircuit`,
    description: product.seoDescription || product.description,
    keywords: product.tags?.join(', ') || [],
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const testimonials = getTestimonialsByProduct(product.id);
  const relatedProducts = products
    .filter(p => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const quantity = 1; // Default quantity
  const totalPrice = product.price * quantity;
  const savings = product.originalPrice ? (product.originalPrice - product.price) * quantity : 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Structured Data */}
      <StructuredData 
        pageType="product"
        product={{
          name: product.name,
          description: product.description,
          sku: product.id,
          brand: 'ClearCircuit',
          price: product.price,
          currency: 'USD',
          availability: product.inStock ? 'InStock' : 'OutOfStock',
          image: product.image,
          category: product.category,
          features: product.features,
          manufacturer: 'ClearCircuit',
          condition: 'NewCondition',
          warranty: 'Lifetime warranty',
          reviews: testimonials.length > 0 ? {
            ratingValue: testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length,
            bestRating: 5,
            worstRating: 1,
            ratingCount: testimonials.length,
            reviewBody: testimonials[0]?.content
          } : undefined
        }}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.name, url: `/products/${product.slug}` }
        ]}
      />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex text-sm text-gray-500">
            <Link href="/" className="hover:text-electric-blue">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-electric-blue">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
                             <div className="aspect-square bg-white rounded-lg overflow-hidden mb-4">
                 <Image
                   src={product.image}
                   alt={product.name}
                   width={600}
                   height={600}
                   className="w-full h-full object-cover"
                 />
               </div>
               
               {/* Image Thumbnails */}
               {product.images && product.images.length > 1 && (
                 <div className="flex space-x-2">
                   {product.images.map((image, index) => (
                     <div
                       key={index}
                       className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                         index === 0 ? 'border-electric-blue' : 'border-gray-200'
                       }`}
                     >
                       <Image
                         src={image}
                         alt={`${product.name} view ${index + 1}`}
                         width={80}
                         height={80}
                         className="w-full h-full object-cover"
                       />
                     </div>
                   ))}
                 </div>
               )}
            </div>

            {/* Product Info */}
            <div>
              <div className="flex items-center mb-4">
                <Badge className="bg-electric-blue text-white mr-2">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </Badge>
                {product.inStock ? (
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    In Stock ({product.stockCount})
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-red-600 border-red-600">
                    Out of Stock
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-safety-yellow fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  4.9/5 from {testimonials.length}+ electrical professionals
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-2">{product.shortDescription}</p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
                             <div className="mb-6">
                 <div className="flex items-center space-x-4 mb-4">
                   <div className="flex items-center border rounded-lg">
                     <div className="p-2 text-gray-400">
                       <Minus className="w-4 h-4" />
                     </div>
                     <span className="px-4 py-2 border-x">{quantity}</span>
                     <div className="p-2 text-gray-400">
                       <Plus className="w-4 h-4" />
                     </div>
                   </div>
                   <div className="text-sm text-gray-600">
                     Total: <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                     {savings > 0 && (
                       <span className="text-green-600 ml-2">
                         (Save ${savings.toFixed(2)})
                       </span>
                     )}
                   </div>
                 </div>

                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-electric-blue hover:bg-electric-blue/90"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Protect Your Team Today
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    Get Expert Consultation
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-electric-blue mr-2" />
                  <span className="text-sm text-gray-700">100% Inspection Pass Rate</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-electric-blue mr-2" />
                  <span className="text-sm text-gray-700">10+ Year Durability</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-electric-blue mr-2" />
                  <span className="text-sm text-gray-700">Ships Within 24 Hours</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-electric-blue mr-2" />
                  <span className="text-sm text-gray-700">Zero-Accident Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>

              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Material:</span>
                      <span className="text-gray-700">{product.specifications.material}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Adhesive:</span>
                      <span className="text-gray-700">{product.specifications.adhesive}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Dimensions:</span>
                      <span className="text-gray-700">{product.specifications.dimensions}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b">
                      <span className="font-medium">Compliance:</span>
                      <span className="text-gray-700">{product.specifications.compliance.join(', ')}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-medium">Warranty:</span>
                      <span className="text-gray-700">{product.specifications.warranty}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Badges */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Electrical Professionals Choose This Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-electric-blue mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">Never Fail Another Inspection</span>
                        <p className="text-sm text-gray-600 mt-1">Guaranteed NEC 408.4(A) compliance eliminates costly re-inspections</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-electric-blue mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">Complete Jobs 75% Faster</span>
                        <p className="text-sm text-gray-600 mt-1">5-minute installation saves hours of labor costs</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-electric-blue mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">Eliminate Emergency Calls</span>
                        <p className="text-sm text-gray-600 mt-1">Crystal-clear labels prevent confusion and reduce troubleshooting</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-electric-blue mr-3 mt-0.5" />
                      <div>
                        <span className="font-medium text-gray-900">Impress Every Client</span>
                        <p className="text-sm text-gray-600 mt-1">Professional appearance builds trust and justifies premium pricing</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What's Included */}
              <Card>
                <CardHeader>
                  <CardTitle>What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.contents.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <Package className="w-4 h-4 text-electric-blue mr-2" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Product Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Product Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span>Circuits:</span>
                      <span className="font-medium">{product.slots}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Panel Type:</span>
                      <span className="font-medium">{product.panelType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight:</span>
                      <span className="font-medium">{product.weight} lbs</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Category:</span>
                      <span className="font-medium capitalize">{product.category}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg">Need Professional Guidance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Get expert advice to ensure you choose the perfect solution for your specific panel and requirements.
                  </p>
                  <div className="space-y-2">
                    <Button size="sm" className="w-full bg-electric-blue hover:bg-electric-blue/90">
                      <Users className="w-4 h-4 mr-2" />
                      Free Expert Consultation
                    </Button>
                    <Button size="sm" variant="outline" className="w-full">
                      Download Installation Guide
                    </Button>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg">
                    <div className="flex items-center text-sm">
                      <Shield className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700">100% Satisfaction Guarantee</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Real Results from Electrical Professionals</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how this solution has transformed safety and efficiency for professionals like you
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.slice(0, 4).map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-safety-yellow fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-600">
                        {testimonial.rating}/5
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role}
                          {testimonial.company && `, ${testimonial.company}`}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Your Professional Solution</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Other professional-grade solutions that work perfectly with your choice
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{relatedProduct.shortDescription}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      <Button asChild size="sm" className="bg-electric-blue hover:bg-electric-blue/90">
                        <Link href={`/products/${relatedProduct.slug}`}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
} 