import { Metadata } from 'next';
import { RotateCcw, Clock, Package, CreditCard, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Return Policy | ClearCircuit™',
  description: 'Learn about our hassle-free return policy, warranty coverage, and refund process. Customer satisfaction guaranteed.',
  robots: 'index, follow',
};

export default function ReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Return Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We stand behind our products with a hassle-free return policy and comprehensive warranty coverage.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Badge variant="outline" className="text-electric-blue border-electric-blue">
              30-Day Returns
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              5-Year Warranty
            </Badge>
          </div>
        </div>

        {/* Quick Reference */}
        <Card className="mb-8 border-electric-blue border-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-electric-blue" />
              Quick Reference
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Return Window</h4>
                <p className="text-sm text-gray-600">30 days from delivery for unused items</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Refund Time</h4>
                <p className="text-sm text-gray-600">5-7 business days after we receive your return</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Warranty</h4>
                <p className="text-sm text-gray-600">5-year guarantee against defects</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Return Policy Sections */}
        <div className="space-y-8">
          {/* Return Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RotateCcw className="w-5 h-5 mr-2 text-electric-blue" />
                1. Return Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Step-by-Step Return Process</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Contact Customer Service</h5>
                      <p className="text-gray-600 text-sm">Email returns@clearcircuit.com or call (555) 123-4567 to initiate your return</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Receive Return Authorization</h5>
                      <p className="text-gray-600 text-sm">We'll provide you with a Return Authorization (RA) number and return instructions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Package Your Return</h5>
                      <p className="text-gray-600 text-sm">Include all original packaging, materials, and documentation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Ship Your Return</h5>
                      <p className="text-gray-600 text-sm">Use the provided return label or ship at your own expense</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-electric-blue text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">5</div>
                    <div>
                      <h5 className="font-semibold text-gray-900">Receive Your Refund</h5>
                      <p className="text-gray-600 text-sm">Refunds processed within 5-7 business days of receiving your return</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Eligibility Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2 text-electric-blue" />
                2. Return Eligibility
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Items That Can Be Returned</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Unused products in original packaging</li>
                  <li>• Items within 30 days of delivery</li>
                  <li>• Products with all original documentation</li>
                  <li>• Items in sellable condition</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Items That Cannot Be Returned</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Custom or personalized products</li>
                  <li>• Items that have been installed or used</li>
                  <li>• Products returned after 30 days</li>
                  <li>• Items without original packaging</li>
                  <li>• Products damaged by misuse</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Custom Products</h4>
                <p className="text-gray-700 text-sm">
                  Custom-made products are generally not returnable unless they arrive damaged or defective. 
                  We'll work with you to ensure your custom order meets your specifications.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="w-5 h-5 mr-2 text-electric-blue" />
                3. Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Refund Methods</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Credit Card:</strong> Refunded to original payment method</li>
                  <li>• <strong>PayPal:</strong> Refunded to PayPal account</li>
                  <li>• <strong>Store Credit:</strong> Available upon request</li>
                  <li>• <strong>Check:</strong> For orders paid by check (10-14 business days)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Refund Timeline</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Return Processing</span>
                    <span className="text-electric-blue font-semibold">1-2 business days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Refund Issued</span>
                    <span className="text-electric-blue font-semibold">3-5 business days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Bank Processing</span>
                    <span className="text-electric-blue font-semibold">1-3 business days</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Refund Amount</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Full product price for unused items</li>
                  <li>• Original shipping costs (if item is defective)</li>
                  <li>• Return shipping deducted (unless our error)</li>
                  <li>• Restocking fees may apply to large orders</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Warranty Claims */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-electric-blue" />
                4. Warranty Claims
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">5-Year Product Warranty</h4>
                <p className="text-gray-700 mb-3">
                  All ClearCircuit products come with a comprehensive 5-year warranty covering:
                </p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Defects in materials and workmanship</li>
                  <li>• Adhesion failure under normal conditions</li>
                  <li>• Text legibility and print quality</li>
                  <li>• Material degradation or premature wear</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Warranty Exclusions</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Damage from improper installation</li>
                  <li>• Normal wear and tear</li>
                  <li>• Damage from environmental extremes</li>
                  <li>• Modifications or alterations</li>
                  <li>• Damage from chemicals or solvents</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Warranty Claims Process</h4>
                <p className="text-gray-700 text-sm">
                  To file a warranty claim, contact our support team with your order number, photos of the issue, 
                  and a description of the problem. We'll provide a replacement or full refund for verified warranty claims.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Returns */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2 text-electric-blue" />
                5. Return Shipping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Who Pays for Return Shipping?</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h5 className="font-semibold text-green-800">ClearCircuit Pays</h5>
                    <ul className="text-green-700 text-sm mt-1 space-y-1">
                      <li>• Defective or damaged products</li>
                      <li>• Wrong item shipped</li>
                      <li>• Order fulfillment errors</li>
                      <li>• Warranty claims</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h5 className="font-semibold text-blue-800">Customer Pays</h5>
                    <ul className="text-blue-700 text-sm mt-1 space-y-1">
                      <li>• Change of mind returns</li>
                      <li>• Ordered wrong product</li>
                      <li>• No longer needed</li>
                      <li>• Size or specification changes</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Return Shipping Options</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Prepaid Labels:</strong> Provided for qualifying returns</li>
                  <li>• <strong>Customer Choice:</strong> Use any shipping carrier</li>
                  <li>• <strong>Insurance:</strong> Recommended for high-value returns</li>
                  <li>• <strong>Tracking:</strong> Always use trackable shipping methods</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Special Circumstances */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-electric-blue" />
                6. Special Circumstances
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Damaged in Transit</h4>
                <p className="text-gray-700 mb-3">
                  If your order arrives damaged, please:
                </p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Document damage with photos</li>
                  <li>• Contact us within 48 hours</li>
                  <li>• Keep all packaging materials</li>
                  <li>• We'll arrange replacement at no cost</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Large Orders</h4>
                <p className="text-gray-700 mb-3">
                  For orders over $500:
                </p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Extended return period may apply</li>
                  <li>• Restocking fees may apply (10-15%)</li>
                  <li>• Special approval required</li>
                  <li>• Contact customer service for details</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">International Returns</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Customer pays return shipping and duties</li>
                  <li>• Extended processing time (10-14 days)</li>
                  <li>• Contact us before shipping</li>
                  <li>• Some restrictions may apply</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <RotateCcw className="w-5 h-5 mr-2 text-electric-blue" />
                7. Return Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Our customer service team is here to help with your return or exchange:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p><strong>Returns Email:</strong> returns@clearcircuit.com</p>
                  <p><strong>Support Phone:</strong> (555) 123-4567</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM EST</p>
                  <p><strong>Return Address:</strong> ClearCircuit Returns, 123 Safety Street, Electrical City, EC 12345</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Customer Satisfaction Guarantee</h4>
                <p className="text-gray-700 text-sm">
                  We're committed to your satisfaction. If you're not completely happy with your purchase, 
                  we'll work with you to find a solution that meets your needs.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This Return Policy was last updated on December 2024.</p>
          <p>For questions about returns, please contact our customer service team.</p>
        </div>
      </div>
    </div>
  );
} 