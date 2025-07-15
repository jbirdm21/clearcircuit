import { Metadata } from 'next';
import { Truck, Clock, DollarSign, Globe, Package, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Shipping Policy | ClearCircuit™',
  description: 'Learn about our shipping options, delivery times, costs, and policies. Fast, reliable shipping for all electrical panel labels.',
  robots: 'index, follow',
};

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <Truck className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fast, reliable shipping for all your electrical panel labeling needs with multiple delivery options.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Badge variant="outline" className="text-electric-blue border-electric-blue">
              Free Shipping $50+
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Next Day Available
            </Badge>
          </div>
        </div>

        {/* Quick Shipping Info */}
        <Card className="mb-8 border-electric-blue border-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2 text-electric-blue" />
              Shipping Summary
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Standard Shipping</h4>
                <p className="text-sm text-gray-600">3-5 business days</p>
                <p className="text-sm text-gray-600">FREE over $50</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Express Shipping</h4>
                <p className="text-sm text-gray-600">1-2 business days</p>
                <p className="text-sm text-gray-600">$12.99</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Truck className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Overnight</h4>
                <p className="text-sm text-gray-600">Next business day</p>
                <p className="text-sm text-gray-600">$24.99</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Policy Sections */}
        <div className="space-y-8">
          {/* Shipping Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-5 h-5 mr-2 text-electric-blue" />
                1. Shipping Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Domestic Shipping (Continental US)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold text-gray-900">Standard Ground</h5>
                      <p className="text-sm text-gray-600">3-5 business days via UPS Ground</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-electric-blue">FREE over $50</p>
                      <p className="text-sm text-gray-600">$8.99 under $50</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold text-gray-900">Express 2-Day</h5>
                      <p className="text-sm text-gray-600">1-2 business days via UPS 2nd Day Air</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-electric-blue">$12.99</p>
                      <p className="text-sm text-gray-600">All orders</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h5 className="font-semibold text-gray-900">Overnight</h5>
                      <p className="text-sm text-gray-600">Next business day via UPS Next Day Air</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-electric-blue">$24.99</p>
                      <p className="text-sm text-gray-600">Order by 2 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Alaska & Hawaii</h4>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Standard:</strong> 5-7 business days - $15.99</li>
                    <li>• <strong>Express:</strong> 2-3 business days - $29.99</li>
                    <li>• <strong>Overnight:</strong> Next business day - $49.99</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Processing Times */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-electric-blue" />
                2. Processing Times
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Standard Products</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Pre-configured kits</span>
                    <span className="text-electric-blue font-semibold">Same day if ordered by 2 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Standard bulk orders</span>
                    <span className="text-electric-blue font-semibold">1-2 business days</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Custom Products</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Custom labels</span>
                    <span className="text-electric-blue font-semibold">3-5 business days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Large custom orders</span>
                    <span className="text-electric-blue font-semibold">5-7 business days</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Important Notes</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Processing times do not include shipping time</li>
                  <li>• Custom orders require design approval before production</li>
                  <li>• Orders placed after 2 PM EST ship the next business day</li>
                  <li>• Weekend and holiday orders processed on next business day</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Costs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-electric-blue" />
                3. Shipping Costs
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Free Shipping Qualification</h4>
                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-800 font-semibold mb-2">FREE Standard Shipping on orders $50+</p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Applies to continental US only</li>
                    <li>• Calculated before taxes and after discounts</li>
                    <li>• Standard ground shipping (3-5 business days)</li>
                    <li>• Automatically applied at checkout</li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Weight-Based Pricing</h4>
                <p className="text-gray-700 mb-3">
                  For orders under $50, shipping is calculated based on weight and destination:
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Up to 1 lb</span>
                    <span className="text-electric-blue font-semibold">$4.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">1-3 lbs</span>
                    <span className="text-electric-blue font-semibold">$6.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">3-5 lbs</span>
                    <span className="text-electric-blue font-semibold">$8.99</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                    <span className="text-gray-700">Over 5 lbs</span>
                    <span className="text-electric-blue font-semibold">Contact us</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Additional Fees</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Residential Delivery:</strong> $3.99 (UPS residential surcharge)</li>
                  <li>• <strong>Saturday Delivery:</strong> $14.99 (when available)</li>
                  <li>• <strong>Delivery Confirmation:</strong> $2.99 (signature required)</li>
                  <li>• <strong>Address Correction:</strong> $15.99 (if address needs correction)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* International Shipping */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-electric-blue" />
                4. International Shipping
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Available Countries</h4>
                <p className="text-gray-700 mb-3">
                  We currently ship to the following countries:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">North America</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Canada</li>
                      <li>• Mexico</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Europe</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• United Kingdom</li>
                      <li>• Germany</li>
                      <li>• France</li>
                      <li>• Netherlands</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">International Shipping Rates</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Canada (Standard)</span>
                    <span className="text-electric-blue font-semibold">$15.99 - 7-10 days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Canada (Express)</span>
                    <span className="text-electric-blue font-semibold">$29.99 - 3-5 days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Europe (Standard)</span>
                    <span className="text-electric-blue font-semibold">$24.99 - 10-14 days</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-700">Europe (Express)</span>
                    <span className="text-electric-blue font-semibold">$39.99 - 5-7 days</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Important International Notes</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• Customer responsible for customs duties and taxes</li>
                  <li>• Some products may be restricted in certain countries</li>
                  <li>• Delivery times are estimates and may vary</li>
                  <li>• International orders cannot be expedited</li>
                  <li>• Returns require pre-approval and customer pays return shipping</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="w-5 h-5 mr-2 text-electric-blue" />
                5. Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Delivery Requirements</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Business Address:</strong> Standard delivery during business hours</li>
                  <li>• <strong>Residential Address:</strong> Delivery attempted M-F, 9 AM - 7 PM</li>
                  <li>• <strong>Apartment/Condo:</strong> May require building access or buzzer code</li>
                  <li>• <strong>P.O. Box:</strong> Standard ground shipping only</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Delivery Attempts</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Three delivery attempts will be made</li>
                  <li>• After failed attempts, package held at local facility</li>
                  <li>• Customer notified with pickup location and hours</li>
                  <li>• Package returned to sender after 5 business days</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Tracking Information</h4>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Tracking numbers provided for all shipments:</strong>
                  </p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Email notification with tracking number</li>
                    <li>• Real-time tracking through our website</li>
                    <li>• SMS notifications available</li>
                    <li>• Delivery confirmation email</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Restrictions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-electric-blue" />
                6. Shipping Restrictions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Address Restrictions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">We Cannot Ship To:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• APO/FPO addresses</li>
                      <li>• US territories (Puerto Rico, Guam, etc.)</li>
                      <li>• Military bases overseas</li>
                      <li>• Freight forwarders</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Special Handling:</h5>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Remote areas (additional fees)</li>
                      <li>• Industrial sites (call ahead)</li>
                      <li>• Construction sites (limited access)</li>
                      <li>• Schools/institutions (contact us)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product Restrictions</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• Certain adhesives cannot be shipped by air</li>
                  <li>• Temperature-sensitive products have seasonal restrictions</li>
                  <li>• Hazardous materials require special handling</li>
                  <li>• Large format products may require freight shipping</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Weather Delays</h4>
                <p className="text-gray-700 text-sm">
                  Severe weather conditions may cause shipping delays. We'll notify you of any weather-related 
                  delays and provide updated delivery estimates.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Truck className="w-5 h-5 mr-2 text-electric-blue" />
                7. Shipping Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Need help with shipping questions or tracking your order?
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p><strong>Shipping Support:</strong> shipping@clearcircuit.com</p>
                  <p><strong>Customer Service:</strong> (555) 123-4567</p>
                  <p><strong>Business Hours:</strong> Monday-Friday, 8:00 AM - 6:00 PM EST</p>
                  <p><strong>Order Tracking:</strong> Track your order on our website</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-electric-blue/10 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Rush Orders</h4>
                <p className="text-gray-700 text-sm">
                  Need your order faster? Contact us about rush production and expedited shipping options. 
                  We'll work with you to meet your timeline whenever possible.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This Shipping Policy was last updated on December 2024.</p>
          <p>Shipping rates and times are subject to change. Contact us for the most current information.</p>
        </div>
      </div>
    </div>
  );
} 