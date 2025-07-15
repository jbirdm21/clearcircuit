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
  title: 'About ClearCircuit - Electrical Safety Experts Preventing Accidents Since 2014',
  description: 'Discover how ClearCircuit became the trusted authority for electrical professionals who demand zero-compromise safety. 10,000+ accidents prevented, 100% inspection pass rate, and the industry\'s most trusted safety solutions.',
  keywords: ['electrical safety experts', 'prevent electrical accidents', 'NEC compliance authority', 'electrical professionals', 'ClearCircuit safety mission'],
  openGraph: {
    title: 'About ClearCircuit - Electrical Safety Experts Preventing Accidents Since 2014',
    description: 'Discover how ClearCircuit became the trusted authority for electrical professionals who demand zero-compromise safety.',
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
              The Electrical Safety Experts Who Prevent Accidents
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Since 2014, ClearCircuit has been the trusted authority for electrical professionals 
              who demand zero-compromise safety solutions. We've prevented thousands of electrical accidents 
              and helped professionals pass every inspection with confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center">
                <Users className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">10,000+ Accidents Prevented</span>
              </div>
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">4.9/5 Professional Rating</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-6 h-6 mr-2" />
                <span className="text-lg font-semibold">100% Inspection Pass Rate</span>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission: Zero Electrical Accidents</h2>
              <p className="text-lg text-gray-600 mb-6">
                Every electrical accident is preventable. We're on a mission to eliminate electrical hazards 
                through professional-grade labeling solutions that meet the highest safety standards. 
                When your reputation and your team's safety depend on electrical compliance, you need more than labels – you need ClearCircuit.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                What started as a master electrician's frustration with dangerous, unlabeled panels has evolved 
                into the industry's most trusted safety authority. We've helped thousands of electrical professionals 
                protect their teams, satisfy inspectors, and build their reputations on uncompromising safety standards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-electric-blue">10+</div>
                  <div className="text-sm text-gray-600">Years Preventing Accidents</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-electric-blue">50K+</div>
                  <div className="text-sm text-gray-600">Lives Protected</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story: From Frustration to Prevention</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How a life-threatening electrical accident sparked the industry's safety revolution
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Near-Miss</CardTitle>
                <CardDescription>2014</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Master electrician Mike Johnson nearly suffered a serious injury when an unlabeled 
                  panel led to a dangerous electrical arc. That day, he realized that unclear panels 
                  weren't just inconvenient – they were life-threatening.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-safety-orange rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Innovation</CardTitle>
                <CardDescription>2015</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Working with electrical engineers and safety experts, we developed the first 
                  professional-grade labeling system that could withstand electrical environments 
                  while meeting every NEC compliance requirement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <CardTitle>The Movement</CardTitle>
                <CardDescription>2016-2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Industry adoption was rapid. Today, electrical professionals nationwide choose 
                  ClearCircuit because they know that when safety matters, there's no substitute 
                  for professional-grade protection.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Makes Us Different</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our unwavering commitment to professional excellence drives every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Zero-Compromise Safety</h3>
              <p className="text-gray-600">
                Every product exceeds NEC standards because when lives are at stake, "good enough" isn't good enough.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Authority</h3>
              <p className="text-gray-600">
                We build solutions that electrical professionals stake their reputations on, because quality builds trust.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Our solutions deliver measurable time savings and safety improvements on every job.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Relentless Innovation</h3>
              <p className="text-gray-600">
                We continuously improve our products based on real-world feedback from electrical professionals.
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
                "These labels eliminated 90% of my troubleshooting time and passed inspection first try! 
                I've had zero callbacks in 6 months. My clients always comment on how professional the panels look - 
                it's become part of my competitive advantage."
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
            Don't Risk Your Team's Safety on Unlabeled Panels
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every electrical accident is preventable. Join thousands of professionals who choose ClearCircuit 
            because when safety matters, there's no substitute for professional-grade protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-electric-blue hover:bg-electric-blue/90">
              <Link href="/products">
                Protect Your Team Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">
                Get Expert Consultation
              </Link>
            </Button>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-electric-blue" />
              <span>100% Inspection Pass Rate</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2 text-electric-blue" />
              <span>10+ Year Durability</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-electric-blue" />
              <span>Zero-Accident Guarantee</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-electric-blue" />
              <span>4.9/5 Professional Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 