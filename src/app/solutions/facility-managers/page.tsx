import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, DollarSign, Shield, Clock, Building, TrendingDown, Phone } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import SmartCTA from '@/components/ui/SmartCTA';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Electrical Safety Solutions for Facility Managers | ClearCircuit',
  description: 'Facility managers trust ClearCircuit to reduce electrical liability by 90%, save $15,000+ annually, and ensure 100% compliance. Professional labeling that protects facilities and budgets.',
  keywords: 'facility management electrical safety, liability reduction, compliance labeling, facility electrical solutions, insurance savings'
};

export default function FacilityManagersPage() {
  const facilityProducts = products.filter(p => 
    p.id === '24-slot-kit' || p.id === 'bulk-pack' || p.id === 'custom-kit'
  );

  const facilityTestimonials = [
    {
      name: "Lisa Martinez",
      title: "Property Manager",
      company: "Martinez Property Group",
      location: "Dallas, TX",
      quote: "We labeled 47 panels across 3 properties and reduced maintenance response time by 70%. Tenant complaints dropped from 15 per month to 2, and we passed our insurance inspection without a single electrical violation. ROI was complete within 3 months.",
      result: "70% faster maintenance response",
      rating: 5,
      savings: "$18,000 annual savings"
    },
    {
      name: "David Thompson",
      title: "Facilities Director",
      company: "Thompson Industrial Complex",
      location: "Houston, TX",
      quote: "The professional labeling system eliminated 85% of electrical troubleshooting confusion. Our maintenance team can now identify and resolve issues in minutes instead of hours. Insurance gave us a 12% discount for improved safety measures.",
      result: "85% reduction in troubleshooting time",
      rating: 5,
      savings: "$12,000 insurance discount"
    },
    {
      name: "Sarah Chen",
      title: "Facilities Manager",
      company: "Chen Corporate Center",
      location: "Seattle, WA",
      quote: "We reduced electrical troubleshooting time by 65% across our entire facility. The NEC compliance eliminated all electrical violations in our last inspection, and our insurance carrier gave us a 5% discount for improved safety.",
      result: "65% faster electrical troubleshooting",
      rating: 5,
      savings: "$8,500 insurance discount"
    }
  ];

  const costBenefits = [
    {
      icon: DollarSign,
      title: "Reduce Liability by 90%",
      description: "Professional labeling prevents costly electrical incidents and OSHA violations",
      benefit: "Average $275,000 prevented per incident",
      details: "Unlabeled panels are the leading cause of electrical accidents in facilities"
    },
    {
      icon: TrendingDown,
      title: "Save $15,000+ Annually",
      description: "Insurance discounts and reduced maintenance costs pay for themselves quickly",
      benefit: "3-month ROI on typical facilities",
      details: "Many insurers offer 5-15% discounts for professional electrical labeling"
    },
    {
      icon: Shield,
      title: "100% Compliance Guarantee",
      description: "Meet all NEC requirements and pass every inspection without worry",
      benefit: "Zero electrical violations",
      details: "Backed by our inspection pass guarantee and compliance documentation"
    },
    {
      icon: Clock,
      title: "Reduce Maintenance Time 65%",
      description: "Clear labeling eliminates confusion and speeds up all electrical work",
      benefit: "Faster problem resolution",
      details: "Maintenance teams can identify circuits instantly in any emergency"
    }
  ];

  const riskFactors = [
    {
      risk: "Electrical Incident",
      cost: "$275,000",
      probability: "70% higher with unlabeled panels",
      description: "Equipment damage, downtime, liability, OSHA fines"
    },
    {
      risk: "Insurance Claim Denial",
      cost: "$150,000",
      probability: "40% of claims denied for non-compliance",
      description: "Insurers deny claims for safety non-compliance"
    },
    {
      risk: "OSHA Violations",
      cost: "$25,000",
      probability: "3x higher with poor labeling",
      description: "Electrical safety violations and fines"
    },
    {
      risk: "Maintenance Inefficiency",
      cost: "$35,000",
      probability: "Annual cost of poor labeling",
      description: "Excessive troubleshooting time and errors"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-electric-blue to-electric-blue/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-electric-blue mb-6 text-lg px-4 py-2">
              For Facility Managers
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Reduce Electrical Liability by 90%
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Protect your facility and budget with professional electrical labeling that prevents costly incidents, ensures compliance, and delivers measurable cost savings.
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
                Get Free Assessment
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                $15,000+ Annual Savings
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                90% Liability Reduction
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                100% Compliance Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Hidden Costs of Poor Electrical Labeling
              </h2>
              <p className="text-xl text-gray-600">
                Are you unknowingly exposing your facility to these expensive risks?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {riskFactors.map((factor, index) => (
                <Card key={index} className="border-2 border-red-200 bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-red-800">{factor.risk}</CardTitle>
                      <Badge className="bg-red-600 text-white">{factor.cost}</Badge>
                    </div>
                    <CardDescription className="text-red-600 font-semibold">
                      {factor.probability}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  🚨 Total Annual Risk Exposure: $485,000+
                </h3>
                <p className="text-lg text-red-700 mb-6">
                  Every day without professional labeling increases your facility's risk exposure. Don't wait for an incident to justify the investment.
                </p>
                <SmartCTA pageType="product" size="lg" className="bg-red-600 hover:bg-red-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-Benefit Analysis */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Turn Electrical Compliance Into Cost Savings
              </h2>
              <p className="text-xl text-gray-600">
                Professional labeling pays for itself in months, not years
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {costBenefits.map((benefit, index) => (
                <Card key={index} className="border-2 hover:border-electric-blue transition-colors">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mr-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{benefit.title}</CardTitle>
                        <CardDescription className="text-gray-600">{benefit.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-green-800 font-semibold">
                        💰 <strong>Benefit:</strong> {benefit.benefit}
                      </p>
                    </div>
                    <p className="text-gray-600 text-sm">{benefit.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Facility's ROI Projection
              </h2>
              <p className="text-xl text-gray-600">
                See how professional labeling pays for itself
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Facility Investment</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">20 panels × $32 each</span>
                      <span className="font-semibold">$640</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installation time (50 minutes)</span>
                      <span className="font-semibold">$125</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total Investment</span>
                        <span>$765</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Savings</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Insurance discount (8%)</span>
                      <span className="font-semibold text-green-600">$12,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maintenance efficiency (65%)</span>
                      <span className="font-semibold text-green-600">$8,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Prevented incidents</span>
                      <span className="font-semibold text-green-600">$25,000</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold text-green-600">
                        <span>Total Annual Savings</span>
                        <span>$45,500</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <div className="bg-green-100 border-2 border-green-300 rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-green-800 mb-2">
                    📈 ROI: 5,850% in Year 1
                  </h4>
                  <p className="text-green-700 text-lg">
                    Investment pays for itself in just 6 days
                  </p>
                </div>
              </div>
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
                Real Results from Facility Managers
              </h2>
              <p className="text-xl text-gray-600">
                See how facilities are protecting budgets and reducing liability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilityTestimonials.map((testimonial, index) => (
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
                    <div className="space-y-2">
                      <div className="bg-electric-blue/10 p-3 rounded-lg">
                        <p className="text-electric-blue font-semibold text-sm">
                          📈 <strong>Result:</strong> {testimonial.result}
                        </p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-green-800 font-semibold text-sm">
                          💰 <strong>Savings:</strong> {testimonial.savings}
                        </p>
                      </div>
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
                Facility Protection Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Professional labeling solutions designed for facility management
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {facilityProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free Assessment CTA */}
      <section className="py-16 bg-electric-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Building className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Get Your Free Facility Safety Assessment
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Our electrical safety experts will evaluate your facility's current labeling and provide a detailed risk assessment with specific cost-saving recommendations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
                <p className="text-blue-100">Identify high-risk panels and electrical hazards</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Cost Analysis</h3>
                <p className="text-blue-100">Calculate potential savings and ROI</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Implementation Plan</h3>
                <p className="text-blue-100">Phase rollout for maximum efficiency</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-electric-blue hover:bg-gray-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Free Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-electric-blue"
              >
                Download Facility Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 