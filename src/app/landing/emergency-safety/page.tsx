import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Phone, Clock, Shield, CheckCircle, Zap, AlertCircle } from 'lucide-react';
import SmartCTA from '@/components/ui/SmartCTA';

export const metadata: Metadata = {
  title: 'Emergency Electrical Safety Solutions | 24/7 Support | ClearCircuit',
  description: 'Urgent electrical safety help available 24/7. Professional panel labeling for emergency compliance, inspection failures, and immediate safety needs. Call now for rapid response.',
  keywords: 'emergency electrical safety, urgent panel labeling, electrical inspection failure, electrical safety emergency, 24/7 electrical support'
};

export default function EmergencySafetyPage() {
  const emergencyServices = [
    {
      icon: Phone,
      title: "24/7 Emergency Hotline",
      description: "Immediate response for electrical safety emergencies",
      action: "Call (555) 911-SAFE",
      urgency: "Available Now"
    },
    {
      icon: Clock,
      title: "Same-Day Shipping",
      description: "Priority shipping for urgent safety situations",
      action: "Order by 2 PM",
      urgency: "Arrives Tomorrow"
    },
    {
      icon: Shield,
      title: "Emergency Consultation",
      description: "Expert safety assessment within 30 minutes",
      action: "Schedule Now",
      urgency: "Response in 30 Min"
    }
  ];

  const urgentScenarios = [
    {
      scenario: "Failed Electrical Inspection",
      risk: "Project delays, additional costs, safety violations",
      solution: "Emergency NEC-compliant labeling delivered within 24 hours",
      timeframe: "24-48 hours to resolution"
    },
    {
      scenario: "Unlabeled Panel Emergency",
      risk: "Electrical accidents, OSHA violations, liability exposure",
      solution: "Professional emergency labeling with immediate compliance",
      timeframe: "Same-day consultation available"
    },
    {
      scenario: "Inspection Due Tomorrow",
      risk: "Failed inspection, project stoppage, contractor penalties",
      solution: "Overnight shipping with installation support",
      timeframe: "Next-day delivery available"
    },
    {
      scenario: "Safety Incident Investigation",
      risk: "OSHA scrutiny, legal liability, insurance claims",
      solution: "Professional documentation and compliance upgrade",
      timeframe: "Emergency response within hours"
    }
  ];

  const immediateActions = [
    {
      step: "1",
      action: "Call Emergency Hotline",
      description: "Speak with electrical safety expert immediately",
      button: "Call (555) 911-SAFE"
    },
    {
      step: "2",
      action: "Emergency Assessment",
      description: "Rapid evaluation of your specific situation",
      button: "Get Assessment"
    },
    {
      step: "3",
      action: "Priority Solution",
      description: "Custom emergency solution with expedited delivery",
      button: "Order Emergency Kit"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Emergency Alert Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 mr-3 animate-pulse" />
              <Badge className="bg-yellow-400 text-red-800 text-lg px-4 py-2 animate-pulse">
                ELECTRICAL SAFETY EMERGENCY
              </Badge>
              <AlertTriangle className="w-8 h-8 ml-3 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Immediate Electrical Safety Response
            </h1>
            <p className="text-xl mb-6">
              24/7 emergency support for electrical safety crises • Professional solutions delivered within hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-red-800 hover:bg-yellow-300 text-xl px-8 py-6 animate-pulse"
              >
                <Phone className="w-6 h-6 mr-3" />
                CALL (555) 911-SAFE NOW
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-red-600 text-xl px-8 py-6"
              >
                <Clock className="w-6 h-6 mr-3" />
                Emergency Consultation
              </Button>
            </div>
            <div className="bg-red-800 rounded-lg p-4 text-center">
              <p className="text-yellow-200 font-semibold text-lg">
                ⚡ CRITICAL: Every electrical accident is preventable with immediate professional intervention
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Emergency Response Services
              </h2>
              <p className="text-xl text-gray-600">
                When electrical safety can't wait, we deliver immediate solutions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {emergencyServices.map((service, index) => (
                <Card key={index} className="border-2 border-red-200 bg-white">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-red-800 font-semibold text-lg">
                        {service.action}
                      </p>
                    </div>
                    <Badge className="bg-yellow-400 text-red-800">
                      {service.urgency}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Scenarios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Is This Your Emergency Situation?
              </h2>
              <p className="text-xl text-gray-600">
                We provide immediate solutions for critical electrical safety situations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {urgentScenarios.map((scenario, index) => (
                <Card key={index} className="border-2 border-orange-200 bg-white">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <AlertCircle className="w-6 h-6 text-orange-600 mr-3" />
                      <CardTitle className="text-xl text-orange-800">{scenario.scenario}</CardTitle>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-red-700 font-semibold">
                        <strong>Risk:</strong> {scenario.risk}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-green-800 font-semibold">
                        <strong>Solution:</strong> {scenario.solution}
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-blue-800 font-semibold">
                        <strong>Timeline:</strong> {scenario.timeframe}
                      </p>
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Get Emergency Help Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Immediate Action Steps */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Take Action Now - Every Minute Counts
              </h2>
              <p className="text-xl text-gray-600">
                Follow these steps to resolve your electrical safety emergency immediately
              </p>
            </div>
            <div className="space-y-6">
              {immediateActions.map((action, index) => (
                <Card key={index} className="bg-white border-2 border-red-200">
                  <CardContent className="p-8">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mr-6">
                        <span className="text-white font-bold text-2xl">{action.step}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {action.action}
                        </h3>
                        <p className="text-gray-600 mb-4">{action.description}</p>
                        <Button className="bg-red-600 hover:bg-red-700 text-white">
                          {action.button}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Phone className="w-20 h-20 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">
              Don't Wait - Call Our Emergency Hotline
            </h2>
            <p className="text-xl mb-8">
              Electrical safety experts standing by 24/7 to provide immediate assistance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-700 p-6 rounded-lg">
                <Clock className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
                <p>Emergency support available around the clock</p>
              </div>
              <div className="bg-red-700 p-6 rounded-lg">
                <Shield className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Expert Response</h3>
                <p>Certified electrical safety professionals</p>
              </div>
              <div className="bg-red-700 p-6 rounded-lg">
                <Zap className="w-8 h-8 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">Rapid Solutions</h3>
                <p>Same-day and next-day emergency delivery</p>
              </div>
            </div>
            <div className="bg-yellow-400 text-red-800 rounded-lg p-8 mb-8">
              <h3 className="text-3xl font-bold mb-4">
                📞 EMERGENCY HOTLINE: (555) 911-SAFE
              </h3>
              <p className="text-xl">
                Press 1 for immediate electrical safety emergencies
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-red-800 hover:bg-yellow-300 text-xl px-8 py-6"
              >
                <Phone className="w-6 h-6 mr-3" />
                Call Emergency Hotline
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-red-600 text-xl px-8 py-6"
              >
                <Clock className="w-6 h-6 mr-3" />
                Emergency Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Emergency Response Guarantee
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              When safety is critical, we deliver results you can count on
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 border-green-200 bg-white">
                <CardHeader>
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">24-Hour Response Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Emergency solutions delivered within 24 hours or we'll refund your rush charges and provide the solution free.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-blue-200 bg-white">
                <CardHeader>
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">100% Compliance Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Emergency labeling solutions guaranteed to pass inspection or we'll provide replacement and cover re-inspection costs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Emergency CTA */}
      <section className="py-12 bg-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl font-bold mb-4">
              Electrical Safety Emergencies Can't Wait
            </h2>
            <p className="text-xl mb-6">
              Every minute without proper labeling increases risk to your team and facility
            </p>
            <div className="bg-red-800 rounded-lg p-6 mb-8">
              <p className="text-yellow-200 font-semibold text-lg">
                <strong>Remember:</strong> Every electrical accident is preventable with immediate professional intervention
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-yellow-400 text-red-800 hover:bg-yellow-300 text-xl px-8 py-6 animate-pulse"
              >
                <Phone className="w-6 h-6 mr-3" />
                CALL (555) 911-SAFE NOW
              </Button>
              <SmartCTA 
                pageType="product"
                size="lg" 
                className="bg-white text-red-700 hover:bg-gray-100 text-xl px-8 py-6"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 