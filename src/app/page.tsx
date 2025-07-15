import { Metadata } from 'next';
import HeroSection from '@/components/ui/HeroSection';
import FeatureGrid from '@/components/ui/FeatureGrid';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import ProductCard from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { getFeaturedProducts } from '@/data/products';
import Link from 'next/link';
import { ArrowRight, Users, Award, Shield, Clock, Zap, Check } from 'lucide-react';
import StructuredData from '@/components/seo/StructuredData';
import TrustBadges from '@/components/ui/TrustBadges';
import ScrollTracker from '@/components/analytics/ScrollTracker';
import { SocialCTA } from '@/components/social/SocialLinks';
import ExitIntentPopup from '@/components/email/ExitIntentPopup';
import AdvancedTrustSignals, { SecurityBadge, CustomerCountWidget } from '@/components/ui/AdvancedTrustSignals';
import SmartCTA from '@/components/ui/SmartCTA';
import UrgencyScarcitySystem, { CountdownTimer } from '@/components/ui/UrgencyScarcitySystem';

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
      <ScrollTracker />
      {/* Structured Data */}
      <StructuredData 
        pageType="home"
        faq={[
          {
            question: 'What are NEC 408.4(A) compliant electrical panel labels?',
            answer: 'NEC 408.4(A) compliant labels are professional electrical panel labels that meet the National Electrical Code requirements for circuit identification. They must be durable, legible, and properly describe the purpose of each circuit breaker.'
          },
          {
            question: 'How long do professional panel labels last?',
            answer: 'Our professional panel labels are designed to last the lifetime of your electrical panel. They are made from durable materials that resist fading, peeling, and environmental damage.'
          },
          {
            question: 'Are these labels required for electrical inspections?',
            answer: 'Yes, properly labeled electrical panels are required by the National Electrical Code (NEC) and are essential for passing electrical inspections. Unlabeled or improperly labeled panels often result in code violations.'
          }
        ]}
      />
      
      {/* Hero Section */}
      <HeroSection
        title="Stop Electrical Accidents Before They Happen"
        subtitle="Professional-grade panel labels that eliminate confusion, ensure NEC compliance, and protect your reputation – installed in just 5 minutes."
        ctaText="Protect Your Team Today"
        ctaLink="/products"
      />

      {/* Social Proof Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">10,000+</div>
              <div className="text-sm text-gray-600">Accidents Prevented</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Professional Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Pass Inspections</div>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-electric-blue mb-2" />
              <div className="text-2xl font-bold text-gray-900">5 Min</div>
              <div className="text-sm text-gray-600">Installation</div>
            </div>
          </div>
          
          {/* Live Activity Widgets */}
          <div className="flex justify-center space-x-6 mt-8">
            <CustomerCountWidget animated={true} />
            <SecurityBadge showDetails={true} />
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity Indicators */}
      <UrgencyScarcitySystem 
        pageType="home" 
        userType="new" 
        position="banner" 
        maxIndicators={1}
        className="mb-0"
      />

      {/* Advanced Trust Signals */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              When Your Reputation Depends on Safety
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of electrical professionals who trust ClearCircuit to protect their teams and pass every inspection
            </p>
          </div>
          <AdvancedTrustSignals 
            variant="detailed" 
            priorityOnly={true}
            showCount={6}
            className="mb-12"
          />
          <div className="flex justify-center">
            <SmartCTA 
              pageType="home" 
              userType="new" 
              position="inline" 
              size="lg"
              className="max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Legacy Trust Badges Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrustBadges variant="grid" />
        </div>
      </section>

      {/* Features Section */}
      <FeatureGrid />

      {/* Audience-Specific Messaging Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Every Electrical Professional
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're a contractor, facility manager, safety coordinator, or maintenance professional, 
              we solve your specific challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Electrical Contractors */}
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Electrical Contractors</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span>Complete jobs 75% faster with 5-minute installation</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span>Impress clients with professional appearance</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span>Never fail NEC compliance inspections</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-electric-blue mr-2 flex-shrink-0" />
                  <span>Charge premium prices for quality work</span>
                </div>
              </div>
            </div>

            {/* Facility Managers */}
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Facility Managers</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Reduce electrical troubleshooting by 65%</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Lower insurance costs with better safety</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Prevent costly electrical downtime</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  <span>Easy installation requires no specialists</span>
                </div>
              </div>
            </div>

            {/* Safety Coordinators */}
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Safety Coordinators</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>Prevent electrical accidents and injuries</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>Exceed all safety standards and regulations</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>Document compliance with ease</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                  <span>Comprehensive safety training resources</span>
                </div>
              </div>
            </div>

            {/* Maintenance Teams */}
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="w-16 h-16 bg-safety-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Maintenance Teams</h3>
              <div className="text-left text-sm text-gray-600 space-y-2">
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-safety-orange mr-2 flex-shrink-0" />
                  <span>Eliminate confusion and reduce errors</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-safety-orange mr-2 flex-shrink-0" />
                  <span>Streamline electrical operations</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-safety-orange mr-2 flex-shrink-0" />
                  <span>Durable labels last 10+ years</span>
                </div>
                <div className="flex items-center">
                  <Check className="w-4 h-4 text-safety-orange mr-2 flex-shrink-0" />
                  <span>Crystal-clear visibility in all conditions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-electric-blue hover:bg-electric-blue/90 text-white"
            >
              <Link href="/products">
                Find Your Perfect Solution
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions from Electrical Professionals
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most important questions about professional panel labeling
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Will these labels really pass NEC inspections?
              </h3>
              <p className="text-gray-600">
                Absolutely. Our labels are specifically designed to meet NEC 408.4(A) requirements and are UL 969 certified. 
                We've had a 100% inspection pass rate across thousands of installations. If you fail an inspection due to 
                our labels, we'll replace them free and cover any re-inspection fees.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long do these labels actually last in real electrical environments?
              </h3>
              <p className="text-gray-600">
                Our labels are engineered for 10+ years of electrical panel use. They're tested to withstand 
                temperatures from -40°F to 200°F, high humidity, and electrical field exposure. We back this 
                with a 5-year warranty, but customers report labels still looking perfect after 8+ years.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I really install these myself without electrical experience?
              </h3>
              <p className="text-gray-600">
                Yes, installation is completely non-electrical. It's simply peel-and-stick application 
                that takes 5 minutes per panel. No tools required, no electrical knowledge needed. 
                We include detailed instructions and many homeowners complete the job themselves.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What if my panel has unique circuit names or configurations?
              </h3>
              <p className="text-gray-600">
                Our Custom Kit solves any labeling challenge. We offer professional laser engraving 
                with your exact circuit names, custom layouts, and specialized text. Perfect for 
                commercial installations, unusual panels, or specific client requirements.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are these labels worth the investment for contractors?
              </h3>
              <p className="text-gray-600">
                Absolutely. Professional contractors report charging $50-100 more per job for quality 
                labeling, plus significant time savings. The bulk pack saves $580 annually, and many 
                contractors build labeling into their standard service offering as a revenue stream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialCTA />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Risk Your Team's Safety on Guesswork
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Every electrical accident is preventable. Get professional-grade panel labels that eliminate confusion and protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-electric-blue hover:bg-gray-100"
            >
              <Link href="/products">
                Protect Your Team Today
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
                See How It Works
              </Link>
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center text-sm">
              <Shield className="w-4 h-4 mr-2" />
              100% Inspection Pass Rate
            </div>
            <div className="flex items-center text-sm">
              <Award className="w-4 h-4 mr-2" />
              10+ Year Durability Guarantee
            </div>
            <div className="flex items-center text-sm">
              <Clock className="w-4 h-4 mr-2" />
              5-Minute Installation
            </div>
            <div className="flex items-center text-sm">
              <Users className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Professionals
            </div>
          </div>
        </div>
      </section>

      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      
      {/* Floating Conversion Optimization */}
      <SmartCTA 
        pageType="home" 
        userType="new" 
        position="floating" 
        size="md"
        showMultiple={false}
      />
      
      <UrgencyScarcitySystem 
        pageType="home" 
        userType="new" 
        position="floating" 
        maxIndicators={1}
      />
    </div>
  );
}
