import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Award, Users, Clock, CheckCircle, Target, Zap, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InternalLinks from '@/components/seo/InternalLinks';
import { LeadMagnetCapture } from '@/components/email/EmailCapture';

export const metadata: Metadata = {
  title: 'About ClearCircuit - Electrical Safety Experts Since 2014',
  description: 'Learn about ClearCircuit\'s mission to make electrical panels safer through professional-grade, NEC-compliant labeling solutions trusted by 10,000+ electricians.',
  keywords: ['electrical safety', 'panel labeling experts', 'NEC compliance', 'electrical professionals', 'ClearCircuit story'],
  openGraph: {
    title: 'About ClearCircuit - Electrical Safety Experts Since 2014',
    description: 'Learn about ClearCircuit\'s mission to make electrical panels safer through professional-grade, NEC-compliant labeling solutions.',
    images: ['/images/about-team.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-electric-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Making Electrical Safety Simple
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Since 2014, ClearCircuit has been the trusted partner for electrical professionals 
              and homeowners who demand code-compliant, professional-grade panel labeling solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">10,000+ Customers</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">100% NEC Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every electrical panel should be clearly labeled for safety, compliance, and peace of mind. 
                We're on a mission to eliminate the guesswork from electrical troubleshooting and make 
                every panel accessible to anyone who needs to work on it.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What started as a simple frustration with unlabeled panels has grown into the most trusted 
                name in electrical panel labeling, serving thousands of electricians, contractors, and 
                homeowners across the country.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-electric-blue">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-electric-blue">50K+</div>
                  <div className="text-sm text-gray-600">Panels Labeled</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-bg.jpg"
                alt="Professional electrical panel with clear labels"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-8 h-8 text-green-600 mr-2" />
                  <div>
                    <div className="font-semibold">NEC Compliant</div>
                    <div className="text-sm text-gray-600">408.4(A) Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Born from real frustration, built with professional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Problem</CardTitle>
                <CardDescription>2014</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master electrician Mike Johnson was tired of wasting time hunting for the right 
                  breaker in unlabeled panels. Emergency calls took twice as long, and frustrated 
                  customers were asking for better solutions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-safety-orange rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Solution</CardTitle>
                <CardDescription>2015</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Working with material engineers and code experts, we developed the first 
                  NEC-compliant, laser-engraved labels that could withstand the harsh electrical 
                  panel environment for decades.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Growth</CardTitle>
                <CardDescription>2016-2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Word spread quickly among electrical professionals. Today, we're the trusted 
                  choice for thousands of contractors, facility managers, and homeowners who 
                  demand professional results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do, from product development to customer service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety First</h3>
              <p className="text-gray-600">
                Every product meets or exceeds NEC standards because electrical safety is non-negotiable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Quality</h3>
              <p className="text-gray-600">
                We build products that electrical professionals are proud to install and homeowners trust.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Savings</h3>
              <p className="text-gray-600">
                Our solutions save time on every service call, installation, and troubleshooting session.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                We listen to our customers and continuously improve our products based on real feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We maintain the highest standards in electrical safety and product quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">NEC 408.4(A) Compliant</h3>
                <p className="text-gray-600">
                  All our labels meet National Electrical Code requirements for circuit identification
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">UL 969 Certified</h3>
                <p className="text-gray-600">
                  Our materials are UL 969 certified for marking and labeling systems
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-safety-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">RoHS Compliant</h3>
                <p className="text-gray-600">
                  Environmentally safe materials that meet all regulatory requirements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-safety-yellow fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6">
                "ClearCircuit labels have saved our team countless hours. The quality is outstanding, 
                and our customers always comment on how professional the panels look."
              </blockquote>
              <div className="text-blue-100">
                <div className="font-semibold">Mike Rodriguez</div>
                <div>Master Electrician, Rodriguez Electric</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Circuit Naming Guide */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <LeadMagnetCapture magnetId="circuit-naming" />
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="/about" />

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Join Thousands of Satisfied Customers?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the ClearCircuit difference with professional-grade panel labeling solutions 
            that meet code requirements and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
              <Link href="/products">
                Shop Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-electric-blue" />
              <span>NEC 408.4(A) Compliant</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-electric-blue" />
              <span>5-Year Warranty</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-electric-blue" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-electric-blue" />
              <span>4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 