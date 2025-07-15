import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Download, BookOpen, AlertTriangle, CheckCircle, FileText, Video, Users, ArrowRight, ExternalLink, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import InternalLinks from '@/components/seo/InternalLinks';
import { LeadMagnetCapture } from '@/components/email/EmailCapture';

export const metadata: Metadata = {
  title: 'Electrical Safety Resources - Panel Labeling Guidelines | ClearCircuit',
  description: 'Comprehensive electrical safety resources including NEC compliance guides, installation instructions, and safety checklists for proper panel labeling.',
  keywords: ['electrical safety', 'panel labeling safety', 'NEC compliance', 'electrical code', 'safety guidelines', 'electrical installation'],
  openGraph: {
    title: 'Electrical Safety Resources - Panel Labeling Guidelines',
    description: 'Comprehensive electrical safety resources including NEC compliance guides and installation instructions.',
    images: ['/images/safety-resources-og.jpg'],
  },
};

export default function SafetyResourcesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-electric-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                <Shield className="w-8 h-8 text-electric-blue" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Safety Resources
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Essential electrical safety guidelines, NEC compliance information, and best practices 
              for professional panel labeling. Keep your installations safe and code-compliant.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-blue-100">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Expert Guides</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                <span>NEC Compliant</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Safety Checklists</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Safety Guide */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <LeadMagnetCapture magnetId="safety-guide" />
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Access Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Jump to the most important safety information and compliance guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-l-4 border-l-electric-blue hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <FileText className="w-5 h-5 text-electric-blue mr-2" />
                  <CardTitle className="text-lg">NEC Guidelines</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Complete NEC 408.4(A) compliance requirements for circuit identification
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-safety-orange hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-safety-orange mr-2" />
                  <CardTitle className="text-lg">Safety Checklist</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Pre-installation safety checklist for electrical professionals
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-green-600 mr-2" />
                  <CardTitle className="text-lg">Install Guide</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Step-by-step installation instructions with safety protocols
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center">
                  <Video className="w-5 h-5 text-purple-600 mr-2" />
                  <CardTitle className="text-lg">Video Tutorials</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-3">
                  Professional installation techniques and safety tips
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Watch Videos
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* NEC Compliance */}
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-electric-blue mr-3" />
                    <CardTitle>NEC 408.4(A) Compliance Requirements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    The National Electrical Code (NEC) Section 408.4(A) requires that each circuit 
                    and modification be clearly identified to match the circuit directory.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Circuit Identification</h4>
                        <p className="text-gray-600 text-sm">Each circuit must be clearly identified with a description of its load</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Legible Marking</h4>
                        <p className="text-gray-600 text-sm">All markings must be legible and in a language understood by qualified personnel</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Durable Materials</h4>
                        <p className="text-gray-600 text-sm">Labels must be suitable for the environment and remain legible over time</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Installation Safety */}
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <AlertTriangle className="w-6 h-6 text-safety-orange mr-3" />
                    <CardTitle>Installation Safety Guidelines</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-orange-800">DANGER</h4>
                        <p className="text-orange-700 text-sm">
                          Always turn off power at the main breaker before working on electrical panels. 
                          Only qualified personnel should perform electrical work.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Pre-Installation Checklist:</h4>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">Power is turned off at main breaker</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">Panel is clean and dry</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">Proper PPE is worn</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-700 text-sm">Circuit testing is complete</span>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-3">Installation Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                    <li>Clean the surface with the provided cleaning wipe</li>
                    <li>Allow surface to dry completely</li>
                    <li>Remove label backing carefully</li>
                    <li>Apply label firmly, working from center outward</li>
                    <li>Verify label placement and legibility</li>
                  </ol>
                </CardContent>
              </Card>

              {/* Common Mistakes */}
              <Card>
                <CardHeader>
                  <div className="flex items-center">
                    <Lightbulb className="w-6 h-6 text-safety-yellow mr-3" />
                    <CardTitle>Common Mistakes to Avoid</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-l-red-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Incorrect Label Placement</h4>
                      <p className="text-gray-600 text-sm">
                        Labels must be placed on the panel directory, not on individual breakers. 
                        Ensure labels correspond to the correct circuit numbers.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-red-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Using Non-Compliant Materials</h4>
                      <p className="text-gray-600 text-sm">
                        Handwritten labels or non-UL materials don't meet NEC requirements. 
                        Always use certified labeling materials.
                      </p>
                    </div>
                    <div className="border-l-4 border-l-red-500 pl-4">
                      <h4 className="font-semibold text-gray-900">Inadequate Circuit Testing</h4>
                      <p className="text-gray-600 text-sm">
                        Test each circuit thoroughly before labeling. Incorrect labels can 
                        create dangerous situations for future maintenance.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Emergency Contacts */}
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-lg">Emergency Contacts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold">Emergency Services</div>
                      <div className="text-gray-600">911</div>
                    </div>
                    <div>
                      <div className="font-semibold">Electrical Emergency</div>
                      <div className="text-gray-600">Contact Local Utility</div>
                    </div>
                    <div>
                      <div className="font-semibold">Poison Control</div>
                      <div className="text-gray-600">1-800-222-1222</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code References */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Code References</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold">NEC 408.4(A)</div>
                      <div className="text-gray-600">Circuit identification requirements</div>
                    </div>
                    <div>
                      <div className="font-semibold">UL 969</div>
                      <div className="text-gray-600">Marking and labeling systems</div>
                    </div>
                    <div>
                      <div className="font-semibold">NECA 1</div>
                      <div className="text-gray-600">Good workmanship standards</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Training */}
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-lg">Professional Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Enhance your electrical safety knowledge with professional training courses.
                  </p>
                  <Button size="sm" className="w-full bg-electric-blue hover:bg-electric-blue/90">
                    <Users className="w-4 h-4 mr-2" />
                    Find Training
                  </Button>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-green-50">
                <CardHeader>
                  <CardTitle className="text-lg">Safety Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    Get monthly safety tips and code updates delivered to your inbox.
                  </p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-600/90">
                    <Download className="w-4 h-4 mr-2" />
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks currentPage="/safety-resources" />

      {/* Call to Action */}
      <section className="py-16 bg-electric-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready for Code-Compliant Panel Labeling?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Put your safety knowledge to work with professional-grade ClearCircuit labeling solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-electric-blue hover:bg-gray-100">
              <Link href="/products">
                Shop Safety Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-electric-blue">
              <Link href="/contact">
                Get Expert Help
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
} 