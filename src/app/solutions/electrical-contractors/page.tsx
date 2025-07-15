import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Clock, Shield, DollarSign, Award, ArrowRight, Phone } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import SmartCTA from '@/components/ui/SmartCTA';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Professional Electrical Labeling Solutions for Contractors | ClearCircuit',
  description: 'Electrical contractors trust ClearCircuit for professional panel labeling that passes 100% of inspections, impresses clients, and justifies premium pricing. Complete jobs 75% faster.',
  keywords: 'electrical contractor labeling, professional panel labels, electrical inspection compliance, contractor solutions, electrical safety'
};

export default function ElectricalContractorsPage() {
  const contractorProducts = products.filter(p => 
    p.id === 'standard-20-slot' || p.id === 'custom-kit' || p.id === 'bulk-pack'
  );

  const contractorTestimonials = [
    {
      name: "Robert Kim",
      title: "Master Electrician",
      company: "Kim Electric Solutions",
      location: "Phoenix, AZ",
      quote: "I charge $75 more per job because clients see the professional quality. These labels are now part of my standard service and have become a $2,400 annual revenue stream.",
      result: "$2,400 annual revenue increase",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      title: "Electrical Contractor",
      company: "Rodriguez Electric",
      location: "Denver, CO",
      quote: "These labels eliminated 90% of my troubleshooting time and passed inspection first try! I've had zero callbacks in 6 months.",
      result: "Zero callbacks in 6 months",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      title: "Commercial Electrician",
      company: "Walsh Electrical Services",
      location: "Atlanta, GA",
      quote: "Clients specifically request my labeling service now. The professional appearance sets me apart from every competitor.",
      result: "Clients request labeling service",
      rating: 5
    }
  ];

  const competitiveAdvantages = [
    {
      icon: Award,
      title: "Stand Out From Competition",
      description: "Professional appearance that clients notice and appreciate",
      benefit: "Higher contract values and repeat business"
    },
    {
      icon: DollarSign,
      title: "Justify Premium Pricing",
      description: "Quality that commands higher rates and builds reputation",
      benefit: "Average $75 more per job"
    },
    {
      icon: Clock,
      title: "Complete Jobs 75% Faster",
      description: "5-minute installation saves hours on every project",
      benefit: "Take on more profitable projects"
    },
    {
      icon: Shield,
      title: "100% Inspection Pass Rate",
      description: "Guaranteed NEC compliance eliminates rework",
      benefit: "Zero callbacks and warranty claims"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-electric-blue to-electric-blue/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-electric-blue mb-6 text-lg px-4 py-2">
              For Electrical Contractors
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Charge Premium Prices for Professional Quality
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Stand out from your competition with professional panel labeling that clients notice, inspectors approve, and justifies higher contract values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <SmartCTA 
                pageType="product"
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-electric-blue"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 911-SAFE
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                100% Inspection Pass Rate
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                5-Minute Installation
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                10+ Year Durability
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Stop Losing Money to Unprofessional Labeling
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Handwritten Labels Look Amateur</h3>
                      <p className="text-gray-600">Clients judge your professionalism by the details</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Failed Inspections Cost Time & Money</h3>
                      <p className="text-gray-600">Rework and callbacks destroy your profit margins</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-red-600 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Cheap Solutions Reflect Poorly</h3>
                      <p className="text-gray-600">Low-quality labels make your work look inferior</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Results That Command Premium Prices
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Laser-Engraved Professional Quality</h3>
                      <p className="text-gray-600">Clients see and appreciate the difference</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Guaranteed NEC Compliance</h3>
                      <p className="text-gray-600">Pass every inspection without worry</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">10+ Year Durability Guarantee</h3>
                      <p className="text-gray-600">Professional materials that last</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Electrical Contractors Choose ClearCircuit
              </h2>
              <p className="text-xl text-gray-600">
                Build your reputation and justify premium pricing with professional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competitiveAdvantages.map((advantage, index) => (
                <Card key={index} className="border-2 hover:border-electric-blue transition-colors">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                        <advantage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{advantage.title}</CardTitle>
                        <CardDescription className="text-gray-600">{advantage.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-semibold">
                        💡 <strong>Result:</strong> {advantage.benefit}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Results from Electrical Contractors
              </h2>
              <p className="text-xl text-gray-600">
                See how contractors are building reputation and increasing profits
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contractorTestimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.title}</CardDescription>
                    <CardDescription className="text-sm text-gray-500">
                      {testimonial.company} • {testimonial.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text-gray-700 italic mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="bg-electric-blue/10 p-3 rounded-lg">
                      <p className="text-electric-blue font-semibold text-sm">
                        📈 <strong>Result:</strong> {testimonial.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Recommendations */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Professional Solutions for Electrical Contractors
              </h2>
              <p className="text-xl text-gray-600">
                Choose the right solution for your professional needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contractorProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal & Guarantee */}
      <section className="py-16 bg-electric-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              100% Risk-Free Professional Guarantee
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We're so confident in our professional-grade solutions that we back them with an ironclad guarantee
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">100% Inspection Pass Rate</h3>
                <p className="text-blue-100">If you fail an inspection due to our labeling, we'll refund your money and pay the re-inspection fee</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">30-Day Money Back</h3>
                <p className="text-blue-100">Not completely satisfied? Return for a full refund within 30 days</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">5-Year Durability</h3>
                <p className="text-blue-100">Professional-grade materials guaranteed to last 5+ years in electrical environments</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmartCTA 
                pageType="product"
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-electric-blue"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Quote: (555) 911-SAFE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Don't Let Poor Labeling Damage Your Professional Reputation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every day you delay is another opportunity for competitors to outshine you with professional results
            </p>
            <div className="bg-white border-2 border-safety-orange rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ⚡ Limited Time: Professional Contractor Pricing
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Save 15% on your first professional labeling order when you act within 48 hours
              </p>
              <div className="flex justify-center mb-6">
                <Badge className="bg-safety-orange text-white text-lg px-4 py-2">
                  Use Code: CONTRACTOR15
                </Badge>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <SmartCTA pageType="product" size="lg" className="bg-safety-orange hover:bg-safety-orange/90" />
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (555) 911-SAFE
                </Button>
              </div>
            </div>
            <p className="text-sm text-gray-500">
              *Offer expires in 48 hours. Cannot be combined with other offers. Professional contractors only.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>How do these labels help me charge more?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Professional appearance signals quality workmanship. Clients who see laser-engraved, durable labels understand they're getting premium service. Many contractors report charging $50-$100 more per job because the professional finish justifies higher rates.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Will these really pass all inspections?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Yes, with our 100% guarantee. Our labels exceed all NEC requirements and are specifically designed for electrical panel applications. We provide compliance documentation and back every order with our inspection pass guarantee.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>How quickly can I install these on a job site?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Most contractors complete installation in 5 minutes or less. The process is: clean the surface, peel backing, apply label, and verify placement. No special tools required, and the strong adhesive bonds immediately.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>What if I need custom labels for specialty applications?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our Custom Kit allows you to create any circuit description you need. From specialty industrial circuits to unique residential configurations, you can generate professional labels for any application.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 