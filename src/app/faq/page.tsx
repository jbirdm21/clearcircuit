import { Metadata } from 'next';
import { HelpCircle, Shield, Package, Truck, CreditCard, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | ClearCircuit™',
  description: 'Get answers to common questions about electrical panel labels, installation, NEC compliance, ordering, and support.',
  robots: 'index, follow',
};

const faqCategories = [
  {
    title: 'Product Information',
    icon: Package,
    color: 'bg-blue-100 text-blue-600',
    questions: [
      {
        q: 'What makes ClearCircuit labels different from generic labels?',
        a: 'ClearCircuit labels are specifically designed for electrical panels and meet NEC 408.4(A) requirements. They feature professional-grade adhesive, weather-resistant materials, and are UL 969 certified for permanent installation. Generic labels often fade, peel, or don\'t meet electrical code requirements.'
      },
      {
        q: 'Are the labels weatherproof and durable?',
        a: 'Yes, our labels are made with weather-resistant materials that withstand temperature variations, humidity, and normal wear. They maintain legibility and adhesion for years, backed by our 5-year warranty.'
      },
      {
        q: 'What sizes and formats are available?',
        a: 'We offer labels in various sizes to fit different panel types. Standard formats include adhesive labels, magnetic options, and custom sizes. Our kits come pre-configured for popular panel brands like Square D, Eaton, and Siemens.'
      },
      {
        q: 'Can I customize the labels with my own text?',
        a: 'Absolutely! Our custom universal kit allows you to specify your exact circuit names and requirements. We also offer bulk custom orders for contractors who need consistent labeling across multiple projects.'
      }
    ]
  },
  {
    title: 'Installation & Compliance',
    icon: Shield,
    color: 'bg-green-100 text-green-600',
    questions: [
      {
        q: 'Do these labels meet NEC requirements?',
        a: 'Yes, all ClearCircuit labels meet or exceed NEC 408.4(A) requirements for electrical panel identification. They provide clear, permanent identification that helps ensure code compliance during inspections.'
      },
      {
        q: 'How do I install the labels?',
        a: 'Installation is simple: clean the surface, remove the backing, and apply the label. Our labels feature professional-grade adhesive for secure, permanent installation. Detailed instructions are included with every kit.'
      },
      {
        q: 'Will these work with my panel type?',
        a: 'Our labels are designed to work with all major panel brands including Square D, Eaton, Siemens, GE, and others. If you have a specific panel type, contact us for compatibility confirmation.'
      },
      {
        q: 'Are there any electrical codes I should know about?',
        a: 'NEC 408.4(A) requires that electrical panels be clearly identified. Our labels help ensure compliance with this requirement. Always consult local codes and a qualified electrician for specific installation requirements.'
      }
    ]
  },
  {
    title: 'Ordering & Shipping',
    icon: Truck,
    color: 'bg-purple-100 text-purple-600',
    questions: [
      {
        q: 'How do I know which kit to order?',
        a: 'Check your electrical panel for the brand and number of circuit spaces. Our product pages include compatibility guides, and our customer service team can help you choose the right kit for your specific panel.'
      },
      {
        q: 'What is your shipping policy?',
        a: 'We offer free standard shipping on orders over $50 within the continental US. Express shipping is available for rush orders. International shipping is available to select countries.'
      },
      {
        q: 'How quickly will I receive my order?',
        a: 'Standard orders ship within 1-2 business days. Custom orders typically take 3-5 business days. You\'ll receive tracking information once your order ships.'
      },
      {
        q: 'Do you offer bulk pricing for contractors?',
        a: 'Yes! We offer volume discounts for contractors and businesses. Our bulk contractor pack provides significant savings for multiple projects. Contact us for custom pricing on large orders.'
      }
    ]
  },
  {
    title: 'Support & Returns',
    icon: Users,
    color: 'bg-orange-100 text-orange-600',
    questions: [
      {
        q: 'What is your return policy?',
        a: 'We offer a 30-day return policy on unused products in original packaging. If you\'re not satisfied, we\'ll provide a full refund. Custom products may have different return terms.'
      },
      {
        q: 'Do you provide technical support?',
        a: 'Yes, our technical support team can help with product selection, installation questions, and troubleshooting. Contact us by phone, email, or live chat during business hours.'
      },
      {
        q: 'What if the labels don\'t fit my panel?',
        a: 'If our standard labels don\'t fit your panel, we can create custom labels to match your specific requirements. Contact us with your panel details for a custom solution.'
      },
      {
        q: 'How do I contact customer service?',
        a: 'You can reach us at (555) 123-4567, email support@clearcircuit.com, or use our contact form. We\'re available Monday-Friday, 8 AM - 6 PM EST.'
      }
    ]
  },
  {
    title: 'Safety & Professional Use',
    icon: Zap,
    color: 'bg-red-100 text-red-600',
    questions: [
      {
        q: 'Why is proper panel labeling important for safety?',
        a: 'Proper labeling helps prevent electrical accidents by clearly identifying which breaker controls which circuit. This is crucial for emergency situations and routine maintenance, potentially saving lives and preventing property damage.'
      },
      {
        q: 'Do electricians recommend your products?',
        a: 'Yes, professional electricians trust ClearCircuit for code-compliant labeling. Our products are used by electrical contractors nationwide and are recommended for both residential and commercial applications.'
      },
      {
        q: 'Are these suitable for commercial installations?',
        a: 'Absolutely. Our labels meet commercial-grade standards and are suitable for residential, commercial, and industrial applications. They comply with NEC requirements for all installation types.'
      },
      {
        q: 'What happens if a label fails within the warranty period?',
        a: 'If a label fails due to material defect or adhesion issues within our 5-year warranty period, we\'ll replace it free of charge. Contact our support team with photos and details of the issue.'
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about electrical panel labels, installation, and ordering.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">NEC Compliant</h3>
              <p className="text-sm text-gray-600">Meets 408.4(A) requirements</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">5-Year Warranty</h3>
              <p className="text-sm text-gray-600">Quality guaranteed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Fast Shipping</h3>
              <p className="text-sm text-gray-600">Free over $50</p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="overflow-hidden">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-50">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-gray-700">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <Card className="mt-12 bg-electric-blue text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our electrical safety experts are here to help. Contact us for personalized assistance with your panel labeling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-electric-blue hover:bg-gray-100"
              >
                <Link href="/contact">Contact Support</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-electric-blue"
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Popular Resources */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Popular Resources</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Installation Guide</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step instructions for installing your panel labels properly.
                </p>
                <Link href="/safety-resources" className="text-electric-blue hover:text-electric-blue/80 text-sm font-medium">
                  View Guide →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">NEC Compliance</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Learn about electrical code requirements and compliance standards.
                </p>
                <Link href="/safety-resources" className="text-electric-blue hover:text-electric-blue/80 text-sm font-medium">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 