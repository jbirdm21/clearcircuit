import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Shield, Clock, Award, Phone, ArrowRight } from 'lucide-react';
import SmartCTA from '@/components/ui/SmartCTA';

export const metadata: Metadata = {
  title: 'Professional Electrical Panel Labels | 100% NEC Compliant | ClearCircuit',
  description: 'Professional electrical panel labels that pass 100% of inspections. 5-minute installation, 10+ year durability, guaranteed NEC compliance. Order now and protect your team.',
  keywords: 'electrical panel labels, NEC compliant labels, professional electrical labeling, panel circuit labels, electrical safety labels'
};

export default function GoogleAdsLandingPage() {
  const benefits = [
    {
      icon: Shield,
      title: "100% Inspection Pass Rate",
      description: "Guaranteed NEC compliance with every label",
      emphasis: "Never fail another inspection"
    },
    {
      icon: Clock,
      title: "5-Minute Installation",
      description: "No special tools required - applies instantly",
      emphasis: "Complete jobs 75% faster"
    },
    {
      icon: Award,
      title: "10+ Year Durability",
      description: "Professional-grade materials that last",
      emphasis: "Laser-engraved, fade-resistant"
    }
  ];

  const testimonials = [
    {
      quote: "These labels eliminated 90% of my troubleshooting time and passed inspection first try!",
      name: "Mike Rodriguez",
      title: "Master Electrician",
      result: "Zero callbacks in 6 months"
    },
    {
      quote: "Professional appearance that clients notice. I charge $75 more per job now.",
      name: "Robert Kim",
      title: "Electrical Contractor",
      result: "$2,400 annual revenue increase"
    },
    {
      quote: "Reduced electrical troubleshooting time by 65% across our entire facility.",
      name: "Sarah Chen",
      title: "Facilities Manager",
      result: "$15,000 annual savings"
    }
  ];

  const urgencyFactors = [
    "Every electrical accident is preventable",
    "Unlabeled panels increase accident risk by 300%",
    "Failed inspections cost $2,500+ in delays",
    "Poor labeling damages professional reputation"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Focused on PPC Traffic */}
      <section className="bg-gradient-to-r from-electric-blue to-electric-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-safety-orange text-white mb-4 text-sm px-3 py-1">
              Professional Electrical Safety
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Panel Labels That Pass 100% of Inspections
            </h1>
            <p className="text-lg md:text-xl mb-6 text-blue-100">
              Guaranteed NEC compliance • 5-minute installation • 10+ year durability
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Professionals
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                100% Inspection Pass Rate
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                30-Day Money Back Guarantee
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <SmartCTA 
                pageType="product"
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100 text-lg px-8 py-4"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-electric-blue text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 911-SAFE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Urgency Section */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6">
              🚨 Don't Let Poor Labeling Put Your Team at Risk
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {urgencyFactors.map((factor, index) => (
                <div key={index} className="bg-white border-2 border-red-200 rounded-lg p-4">
                  <p className="text-red-700 font-semibold">{factor}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-lg text-red-700 mb-4">
                <strong>Every electrical accident is preventable with professional labeling.</strong>
              </p>
              <SmartCTA pageType="product" size="lg" className="bg-red-600 hover:bg-red-700 text-white" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why 10,000+ Professionals Trust ClearCircuit
              </h2>
              <p className="text-xl text-gray-600">
                Professional-grade solutions that protect teams and ensure compliance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-2 border-electric-blue/20 hover:border-electric-blue transition-colors">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-800 font-semibold">
                        ✅ {benefit.emphasis}
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
                Real Results from Electrical Professionals
              </h2>
              <p className="text-xl text-gray-600">
                See why professionals choose ClearCircuit for critical safety applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
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

      {/* Product Selection */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Choose Your Professional Solution
              </h2>
              <p className="text-xl text-gray-600">
                All solutions include our 100% inspection pass guarantee
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-electric-blue">
                <CardHeader>
                  <Badge className="bg-electric-blue text-white w-fit">Most Popular</Badge>
                  <CardTitle className="text-xl">Standard 20-Slot Kit</CardTitle>
                  <CardDescription>Perfect for most residential and commercial panels</CardDescription>
                  <div className="text-3xl font-bold">$49.99</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      20 pre-printed labels
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      5-minute installation
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      10+ year durability
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      NEC compliant
                    </li>
                  </ul>
                  <Button className="w-full bg-electric-blue hover:bg-electric-blue/90">
                    Order Now - Free Shipping
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <Badge className="bg-gray-600 text-white w-fit">Commercial</Badge>
                  <CardTitle className="text-xl">24-Slot Kit</CardTitle>
                  <CardDescription>For larger commercial and industrial panels</CardDescription>
                  <div className="text-3xl font-bold">$59.99</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      24 pre-printed labels
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Commercial-grade adhesive
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Industrial durability
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      NEC compliant
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    Order Now - Free Shipping
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <Badge className="bg-safety-orange text-white w-fit">Best Value</Badge>
                  <CardTitle className="text-xl">Bulk Pack</CardTitle>
                  <CardDescription>For contractors and facility managers</CardDescription>
                  <div className="text-3xl font-bold">$149.99</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      100 assorted labels
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Multiple panel sizes
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      $0.70 savings per label
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Volume discount
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-50">
                    Order Now - Free Shipping
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal & Guarantee */}
      <section className="py-16 bg-electric-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              100% Risk-Free Guarantee
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              We're so confident in our professional solutions that we back them with ironclad guarantees
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">100% Inspection Pass</h3>
                <p className="text-blue-100">If you fail an inspection due to our labeling, we'll refund your money</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">30-Day Money Back</h3>
                <p className="text-blue-100">Not satisfied? Return for a full refund within 30 days</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <CheckCircle className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">5-Year Durability</h3>
                <p className="text-blue-100">Professional materials guaranteed to last 5+ years</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmartCTA 
                pageType="product"
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100 text-lg px-8 py-4"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-electric-blue text-lg px-8 py-4"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (555) 911-SAFE
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Urgency CTA */}
      <section className="py-12 bg-safety-orange text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Don't Wait for an Accident to Happen
            </h2>
            <p className="text-lg mb-6">
              Every electrical accident is preventable. Protect your team today with professional labeling that ensures safety and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SmartCTA 
                pageType="product"
                size="lg" 
                className="bg-white text-safety-orange hover:bg-gray-100 text-lg px-8 py-4"
              />
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-safety-orange text-lg px-8 py-4"
              >
                Get Expert Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 