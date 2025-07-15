import { Metadata } from 'next';
import { CheckCircle, Package, Wrench, Shield, Star, ArrowRight, Clock, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - Panel Label Installation | ClearCircuit™',
  description: 'Learn how to install electrical panel labels step-by-step. Simple process to make your electrical panel NEC compliant and safer.',
  robots: 'index, follow',
};

const steps = [
  {
    step: 1,
    title: 'Choose Your Kit',
    description: 'Select the right label kit for your electrical panel brand and size.',
    icon: Package,
    color: 'bg-blue-100 text-blue-600',
    details: [
      'Identify your panel brand (Square D, Eaton, Siemens, etc.)',
      'Count the number of circuit spaces',
      'Choose between standard or custom labeling',
      'Select bulk options for multiple panels'
    ],
    tip: 'Not sure which kit to choose? Our customer service team can help you identify the right solution for your specific panel.'
  },
  {
    step: 2,
    title: 'Prepare Your Panel',
    description: 'Safety first - turn off power and clean the panel surface.',
    icon: Shield,
    color: 'bg-red-100 text-red-600',
    details: [
      'Turn off the main breaker for safety',
      'Remove the panel cover carefully',
      'Clean the surface where labels will be applied',
      'Ensure the area is dry and free of debris'
    ],
    tip: 'Always follow proper electrical safety procedures. If you\'re not comfortable working with electrical panels, consult a licensed electrician.'
  },
  {
    step: 3,
    title: 'Plan Your Labels',
    description: 'Map out your circuits and plan the labeling layout.',
    icon: Wrench,
    color: 'bg-green-100 text-green-600',
    details: [
      'Test each circuit to identify what it controls',
      'Write down the circuit descriptions',
      'Plan the label placement for easy reading',
      'Consider future additions or changes'
    ],
    tip: 'Take photos of your panel before starting - this helps with planning and serves as a backup reference.'
  },
  {
    step: 4,
    title: 'Apply Labels',
    description: 'Install the labels using our professional-grade adhesive.',
    icon: CheckCircle,
    color: 'bg-purple-100 text-purple-600',
    details: [
      'Remove the backing from each label',
      'Apply firmly and smoothly to avoid air bubbles',
      'Press down edges for secure adhesion',
      'Double-check alignment and legibility'
    ],
    tip: 'Our labels are repositionable for a few seconds after application, so you can adjust if needed.'
  },
  {
    step: 5,
    title: 'Test & Verify',
    description: 'Ensure all labels are correct and the panel is properly identified.',
    icon: Star,
    color: 'bg-orange-100 text-orange-600',
    details: [
      'Verify each label matches its circuit',
      'Check that all labels are securely attached',
      'Test a few circuits to confirm accuracy',
      'Replace the panel cover safely'
    ],
    tip: 'Keep a written record of your circuit map as a backup reference for future maintenance.'
  }
];

const benefits = [
  {
    title: 'NEC Compliance',
    description: 'Meets electrical code requirements for panel identification',
    icon: Shield,
    color: 'text-green-600'
  },
  {
    title: 'Safety First',
    description: 'Prevents electrical accidents through clear identification',
    icon: CheckCircle,
    color: 'text-blue-600'
  },
  {
    title: 'Professional Quality',
    description: 'Weather-resistant materials with 5-year warranty',
    icon: Award,
    color: 'text-purple-600'
  },
  {
    title: 'Time Saving',
    description: 'Quick installation saves hours of electrical work',
    icon: Clock,
    color: 'text-orange-600'
  }
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <Wrench className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Follow our simple 5-step process to make your electrical panel code-compliant and safer.
          </p>
        </div>

        {/* Benefits Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className={`w-12 h-12 mx-auto mb-4 ${benefit.color}`}>
                  <benefit.icon className="w-12 h-12" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Step-by-Step Process</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 p-6 bg-gray-50">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${step.color}`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Step {step.step}</div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{step.description}</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Tip:</strong> {step.tip}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">What You'll Do:</h4>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Guidelines */}
        <Card className="mb-16 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="flex items-center text-red-800">
              <Shield className="w-6 h-6 mr-2" />
              Important Safety Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-3">Before You Start</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• Turn off the main electrical breaker</li>
                  <li>• Use proper safety equipment</li>
                  <li>• Work in good lighting conditions</li>
                  <li>• Have a helper available if needed</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3">When to Call a Professional</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• If you're unsure about electrical safety</li>
                  <li>• For complex or older electrical systems</li>
                  <li>• When dealing with high-voltage panels</li>
                  <li>• If you encounter any unusual wiring</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time and Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-600" />
                Time Required
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Planning & Preparation</span>
                  <Badge variant="outline">15-30 mins</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Label Application</span>
                  <Badge variant="outline">20-45 mins</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Testing & Verification</span>
                  <Badge variant="outline">10-15 mins</Badge>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center font-semibold">
                    <span className="text-gray-900">Total Time</span>
                    <Badge className="bg-electric-blue">45-90 mins</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Wrench className="w-6 h-6 mr-2 text-green-600" />
                Tools You'll Need
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Circuit tester or multimeter
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Screwdriver set
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Cleaning cloth
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Flashlight or headlamp
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Notebook and pen
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Safety glasses
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Video Tutorial Placeholder */}
        <Card className="mb-16 bg-gradient-to-r from-electric-blue to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Watch Our Video Tutorial</h3>
            <p className="text-blue-100 mb-6">
              See the entire process in action with our step-by-step video guide.
            </p>
            <div className="bg-white/10 rounded-lg p-8 mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-blue-100">Video tutorial coming soon!</p>
            </div>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-electric-blue hover:bg-gray-100"
            >
              <Link href="/contact">Get Installation Help</Link>
            </Button>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Choose your electrical panel label kit and make your panel code-compliant in under an hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-electric-blue hover:bg-electric-blue/90"
              >
                <Link href="/products">
                  Shop Label Kits
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
              >
                <Link href="/contact">Get Expert Help</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 