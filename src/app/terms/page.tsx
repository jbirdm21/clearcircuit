import { Metadata } from 'next';
import { FileText, Shield, AlertTriangle, Scale, CreditCard, Truck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Terms of Service | ClearCircuit™',
  description: 'Read our Terms of Service to understand your rights and responsibilities when using ClearCircuit products and services.',
  robots: 'index, follow',
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using ClearCircuit products and services.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Badge variant="outline" className="text-electric-blue border-electric-blue">
              Effective Date: December 2024
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Updated Terms
            </Badge>
          </div>
        </div>

        {/* Quick Summary */}
        <Card className="mb-8 border-electric-blue border-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Scale className="w-5 h-5 mr-2 text-electric-blue" />
              Quick Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Your Rights</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• High-quality electrical panel labels</li>
                  <li>• 5-year warranty on all products</li>
                  <li>• 30-day return policy</li>
                  <li>• Customer support and technical assistance</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Your Responsibilities</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Follow proper installation procedures</li>
                  <li>• Comply with local electrical codes</li>
                  <li>• Use products as intended</li>
                  <li>• Provide accurate order information</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-electric-blue" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                By accessing and using ClearCircuit's website, products, and services, you agree to be bound by these Terms of Service 
                and our Privacy Policy. If you do not agree to these terms, please do not use our services.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Agreement Updates</h4>
                <p className="text-gray-700 text-sm">
                  We may update these terms from time to time. We will notify you of any material changes and 
                  continued use of our services constitutes acceptance of the updated terms.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Products and Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-electric-blue" />
                2. Products and Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product Description</h4>
                <p className="text-gray-700 mb-3">
                  ClearCircuit provides professional electrical panel labeling products including:
                </p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Pre-configured panel label kits for standard electrical panels</li>
                  <li>• Custom panel labeling solutions</li>
                  <li>• Bulk labeling packages for contractors</li>
                  <li>• NEC-compliant labeling materials</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product Specifications</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• All products meet or exceed NEC 408.4(A) requirements</li>
                  <li>• Materials are UL 969 certified</li>
                  <li>• Labels are designed for permanent installation</li>
                  <li>• Products are suitable for indoor electrical panels</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-electric-blue" />
                3. Ordering and Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Order Process</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• All orders are subject to acceptance by ClearCircuit</li>
                  <li>• We reserve the right to refuse or cancel orders</li>
                  <li>• Order confirmation will be sent via email</li>
                  <li>• Prices are subject to change without notice</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Payment Terms</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Payment is due at time of order</li>
                  <li>• We accept major credit cards and PayPal</li>
                  <li>• All prices are in USD unless otherwise specified</li>
                  <li>• Sales tax will be added where applicable</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Shipping and Delivery */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-5 h-5 mr-2 text-electric-blue" />
                4. Shipping and Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Shipping Policy</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Free shipping on orders over $50 within the continental US</li>
                  <li>• Standard shipping takes 3-5 business days</li>
                  <li>• Expedited shipping options available</li>
                  <li>• International shipping available to select countries</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Delivery Terms</h4>
                <p className="text-gray-700 text-sm">
                  Risk of loss and title pass to you upon delivery to the shipping carrier. 
                  Delivery dates are estimates and not guaranteed.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Warranty and Returns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-electric-blue" />
                5. Warranty and Returns
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product Warranty</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• 5-year warranty against defects in materials and workmanship</li>
                  <li>• Warranty covers adhesion failure and text legibility</li>
                  <li>• Normal wear and tear is not covered</li>
                  <li>• Warranty is void if product is misused or improperly installed</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Return Policy</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• 30-day return window for unused products</li>
                  <li>• Original packaging and receipt required</li>
                  <li>• Customer pays return shipping unless product is defective</li>
                  <li>• Refunds processed within 5-7 business days</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Conduct */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-electric-blue" />
                6. User Conduct and Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Prohibited Uses</h4>
                <p className="text-gray-700 mb-3">You agree not to use our services for:</p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Any unlawful purpose or activity</li>
                  <li>• Violating any applicable laws or regulations</li>
                  <li>• Infringing on intellectual property rights</li>
                  <li>• Harassing or threatening other users</li>
                  <li>• Distributing malware or harmful code</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Installation Requirements</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Installation must comply with local electrical codes</li>
                  <li>• Work should be performed by qualified electricians</li>
                  <li>• Follow all safety procedures and manufacturer guidelines</li>
                  <li>• Ensure proper panel identification and labeling</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-electric-blue" />
                7. Intellectual Property
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                All content on this website, including text, graphics, logos, and software, is the property of ClearCircuit 
                and is protected by copyright and trademark laws.
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Usage Rights</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• You may use our products for their intended purpose</li>
                  <li>• You may not reproduce or distribute our content without permission</li>
                  <li>• Trademarks and service marks remain our property</li>
                  <li>• Custom labels become your property upon purchase</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-electric-blue" />
                8. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold text-gray-900 mb-2">Important Legal Notice</h4>
                <p className="text-gray-700 text-sm">
                  ClearCircuit's liability is limited to the purchase price of the product. We are not liable for 
                  consequential, incidental, or punitive damages.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Disclaimers</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Products are provided "as is" without warranty beyond stated terms</li>
                  <li>• We are not responsible for installation errors or code violations</li>
                  <li>• Electrical work should always be performed by qualified professionals</li>
                  <li>• Users assume responsibility for proper installation and compliance</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="w-5 h-5 mr-2 text-electric-blue" />
                9. Governing Law and Disputes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                These terms are governed by the laws of the state where ClearCircuit is headquartered. 
                Any disputes will be resolved through arbitration or in the appropriate state courts.
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Dispute Resolution</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• We prefer to resolve disputes amicably through customer service</li>
                  <li>• Binding arbitration may be required for certain disputes</li>
                  <li>• Class action lawsuits are waived except where prohibited by law</li>
                  <li>• Disputes must be filed within one year of the incident</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="w-5 h-5 mr-2 text-electric-blue" />
                10. Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@clearcircuit.com</p>
                  <p><strong>Address:</strong> ClearCircuit Legal Department, 123 Safety Street, Electrical City, EC 12345</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>These Terms of Service were last updated on December 2024.</p>
          <p>By using our services, you agree to these terms and our Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
} 