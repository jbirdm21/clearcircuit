import { Metadata } from 'next';
import { Shield, Eye, Lock, UserCheck, Globe, Mail } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Privacy Policy | ClearCircuit™',
  description: 'Learn how ClearCircuit collects, uses, and protects your personal information. Our commitment to privacy and data security.',
  robots: 'index, follow',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <Badge variant="outline" className="text-electric-blue border-electric-blue">
              Last Updated: December 2024
            </Badge>
            <Badge variant="outline" className="text-green-600 border-green-600">
              GDPR Compliant
            </Badge>
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-8 border-electric-blue border-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Eye className="w-5 h-5 mr-2 text-electric-blue" />
              Quick Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What We Collect</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Email addresses for newsletters and orders</li>
                  <li>• Order and shipping information</li>
                  <li>• Website usage analytics</li>
                  <li>• Customer support interactions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">How We Use It</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Order Processing:</strong> Fulfill and manage your orders</li>
                  <li>• <strong>Communication:</strong> Send order confirmations, shipping updates, and customer support</li>
                  <li>• <strong>Marketing:</strong> Send newsletters and promotional emails (with your consent)</li>
                  <li>• <strong>Improvement:</strong> Analyze website usage to improve our services</li>
                  <li>• <strong>Legal Compliance:</strong> Meet legal and regulatory requirements</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-electric-blue" />
                1. Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                <p className="text-gray-700 mb-3">
                  We collect personal information that you provide directly to us, including:
                </p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Contact Information:</strong> Name, email address, phone number, and mailing address</li>
                  <li>• <strong>Order Information:</strong> Billing and shipping addresses, payment information</li>
                  <li>• <strong>Account Information:</strong> Username, password, and preferences</li>
                  <li>• <strong>Communication:</strong> Messages sent through contact forms or customer support</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Automatically Collected Information</h4>
                <p className="text-gray-700 mb-3">
                  When you visit our website, we automatically collect certain information:
                </p>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Device Information:</strong> IP address, browser type, operating system</li>
                  <li>• <strong>Usage Data:</strong> Pages visited, time spent, click patterns</li>
                  <li>• <strong>Cookies:</strong> Small files stored on your device for functionality and analytics</li>
                  <li>• <strong>Location Data:</strong> General location based on IP address</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-5 h-5 mr-2 text-electric-blue" />
                2. How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Primary Uses</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Order Processing:</strong> Fulfill and manage your orders</li>
                  <li>• <strong>Communication:</strong> Send order confirmations, shipping updates, and customer support</li>
                  <li>• <strong>Marketing:</strong> Send newsletters and promotional emails (with your consent)</li>
                  <li>• <strong>Improvement:</strong> Analyze website usage to improve our services</li>
                  <li>• <strong>Legal Compliance:</strong> Meet legal and regulatory requirements</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Your Consent</h4>
                <p className="text-gray-700 text-sm">
                  By using our website and services, you consent to our collection and use of your information as described in this policy. 
                  You can withdraw consent at any time by contacting us.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Information Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-electric-blue" />
                3. Information Sharing and Disclosure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">We Share Information With:</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Service Providers:</strong> Payment processors, shipping companies, email services</li>
                  <li>• <strong>Analytics Partners:</strong> Google Analytics, Microsoft Clarity (anonymized data)</li>
                  <li>• <strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                  <li>• <strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">We Never Sell Your Data</h4>
                <p className="text-gray-700 text-sm">
                  ClearCircuit does not sell, rent, or trade your personal information to third parties for their marketing purposes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-electric-blue" />
                4. Data Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="text-gray-600 space-y-2 pl-6">
                <li>• <strong>Encryption:</strong> SSL/TLS encryption for data transmission</li>
                <li>• <strong>Access Controls:</strong> Limited access to personal information</li>
                <li>• <strong>Regular Updates:</strong> Security patches and system updates</li>
                <li>• <strong>Monitoring:</strong> Continuous security monitoring and threat detection</li>
                <li>• <strong>Incident Response:</strong> Procedures for handling security breaches</li>
              </ul>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="w-5 h-5 mr-2 text-electric-blue" />
                5. Your Rights and Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Under GDPR and Other Privacy Laws, You Have the Right To:</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Access:</strong> Request copies of your personal information</li>
                  <li>• <strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li>• <strong>Portability:</strong> Request transfer of your data to another service</li>
                  <li>• <strong>Objection:</strong> Object to processing of your personal information</li>
                  <li>• <strong>Restriction:</strong> Request restriction of processing</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">How to Exercise Your Rights</h4>
                <p className="text-gray-700 text-sm">
                  To exercise any of these rights, please contact us at privacy@clearcircuit.com. 
                  We will respond to your request within 30 days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cookies and Tracking */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-electric-blue" />
                6. Cookies and Tracking Technologies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Types of Cookies We Use:</h4>
                <ul className="text-gray-600 space-y-2 pl-6">
                  <li>• <strong>Essential Cookies:</strong> Required for website functionality</li>
                  <li>• <strong>Performance Cookies:</strong> Help us analyze website usage</li>
                  <li>• <strong>Functional Cookies:</strong> Remember your preferences</li>
                  <li>• <strong>Marketing Cookies:</strong> Deliver relevant advertisements</li>
                </ul>
              </div>
              
              <p className="text-gray-700 text-sm">
                You can control cookies through your browser settings. However, disabling cookies may affect website functionality.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-electric-blue" />
                7. Contact Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@clearcircuit.com</p>
                  <p><strong>Address:</strong> ClearCircuit Privacy Team, 123 Safety Street, Electrical City, EC 12345</p>
                  <p><strong>Phone:</strong> (555) 123-4567</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>This Privacy Policy was last updated on December 2024.</p>
          <p>We may update this policy from time to time. We will notify you of any material changes.</p>
        </div>
      </div>
    </div>
  );
} 