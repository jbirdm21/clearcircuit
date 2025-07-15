import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare, Users, Shield, Star, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LeadMagnetCapture } from '@/components/email/EmailCapture';

export const metadata: Metadata = {
  title: 'Contact ClearCircuit - Expert Electrical Panel Labeling Support',
  description: 'Get expert help with electrical panel labeling. Contact ClearCircuit for product support, custom quotes, and professional advice from electrical safety experts.',
  keywords: ['contact ClearCircuit', 'electrical panel support', 'custom quotes', 'electrical safety help', 'NEC compliance support'],
  openGraph: {
    title: 'Contact ClearCircuit - Expert Electrical Panel Labeling Support',
    description: 'Get expert help with electrical panel labeling. Professional support from electrical safety experts.',
    images: ['/images/contact-og.jpg'],
  },
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-electric-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get Expert Help
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Our electrical safety experts are here to help you find the perfect panel labeling 
              solution. Get personalized support, custom quotes, and professional guidance.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>Phone Support</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>Email Support</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                <span>Live Chat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sales Inquiries */}
            <Card className="border-t-4 border-t-electric-blue hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Sales & Product Info</CardTitle>
                <CardDescription>Get help choosing the right products</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-electric-blue">(555) 123-4567</div>
                  <div className="text-gray-600">sales@clearcircuit.com</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Mon-Fri: 8 AM - 6 PM EST
                  </div>
                  <div>Average response: 2 hours</div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Support */}
            <Card className="border-t-4 border-t-safety-orange hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-safety-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Technical Support</CardTitle>
                <CardDescription>Installation help and troubleshooting</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-safety-orange">(555) 123-4568</div>
                  <div className="text-gray-600">support@clearcircuit.com</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Mon-Fri: 7 AM - 8 PM EST
                  </div>
                  <div>Average response: 1 hour</div>
                </div>
              </CardContent>
            </Card>

            {/* Custom Solutions */}
            <Card className="border-t-4 border-t-green-600 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Custom Solutions</CardTitle>
                <CardDescription>Bulk orders and custom labeling</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <div className="text-2xl font-bold text-green-600">(555) 123-4569</div>
                  <div className="text-gray-600">custom@clearcircuit.com</div>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    Mon-Fri: 9 AM - 5 PM EST
                  </div>
                  <div>Average response: 4 hours</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* General Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Get a response within 24 hours from our electrical safety experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  <div>
                    <Label htmlFor="inquiryType">Inquiry Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">Product Question</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="custom">Custom Quote</SelectItem>
                        <SelectItem value="bulk">Bulk Order</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      rows={4}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button className="w-full bg-electric-blue hover:bg-electric-blue/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Quote Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Get a Quick Quote
                </CardTitle>
                <CardDescription>
                  Tell us about your project and we'll provide a custom quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                        <SelectItem value="multi-family">Multi-Family</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="panelType">Panel Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select panel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="square-d">Square D QO</SelectItem>
                        <SelectItem value="eaton">Eaton BR</SelectItem>
                        <SelectItem value="siemens">Siemens</SelectItem>
                        <SelectItem value="other">Other/Mixed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="panelCount">Number of Panels</Label>
                    <Input id="panelCount" type="number" placeholder="1" />
                  </div>
                  <div>
                    <Label htmlFor="timeline">Project Timeline</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                        <SelectItem value="month">Within 1 month</SelectItem>
                        <SelectItem value="quarter">Within 3 months</SelectItem>
                        <SelectItem value="planning">Planning phase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="quoteEmail">Email for Quote</Label>
                    <Input id="quoteEmail" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <textarea
                      id="additionalInfo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                      rows={3}
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-600/90">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Business Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Business Hours & Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Business Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Headquarters</h3>
                    <p className="text-gray-600">
                      123 Electric Safety Drive<br />
                      Safety City, SC 29401<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <div>Monday - Friday: 7:00 AM - 8:00 PM EST</div>
                      <div>Saturday: 9:00 AM - 5:00 PM EST</div>
                      <div>Sunday: Closed</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-electric-blue mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <div className="text-gray-600 space-y-1">
                      <div>General: info@clearcircuit.com</div>
                      <div>Sales: sales@clearcircuit.com</div>
                      <div>Support: support@clearcircuit.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support & Resources */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Support & Resources</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-electric-blue">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Support</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      For urgent electrical safety questions, our emergency support line is available 24/7
                    </p>
                    <div className="text-electric-blue font-semibold">(555) 911-SAFE</div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-safety-orange">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Training & Education</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Professional training programs for electrical contractors and facility managers
                    </p>
                    <div className="text-safety-orange font-semibold">training@clearcircuit.com</div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Warranty & Returns</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      5-year warranty on all products with 30-day money-back guarantee
                    </p>
                    <div className="text-green-600 font-semibold">warranty@clearcircuit.com</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Professionals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of electrical professionals who trust ClearCircuit for their panel labeling needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-electric-blue mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-blue mb-2">4.9/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-blue mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-blue mb-2">100%</div>
              <div className="text-gray-600">NEC Compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - NEC Updates */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <LeadMagnetCapture magnetId="code-updates" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait - our electrical safety experts are standing by to help you find the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (555) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-electric-blue">
              <Mail className="w-5 h-5 mr-2" />
              Email Us Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 