import Link from 'next/link';
import { Zap, Shield, Award, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FooterTrustBadges } from '@/components/ui/TrustBadges';
import EmailCapture from '@/components/email/EmailCapture';
import { FooterSocialLinks } from '@/components/social/SocialLinks';

const footerLinks = {
  products: [
    { name: '20-Slot Square D Kit', href: '/products/20-slot-square-d-qo' },
    { name: '24-Slot Eaton Kit', href: '/products/24-slot-eaton-br' },
    { name: 'Custom Universal Kit', href: '/products/custom-universal-kit' },
    { name: 'Bulk Contractor Pack', href: '/products/bulk-contractor-pack' },
  ],
  resources: [
    { name: 'Installation Guide', href: '/how-it-works' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Blog', href: '/blog' },
    { name: 'NEC Compliance', href: '/compliance' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Shipping Policy', href: '/shipping' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Bar */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FooterTrustBadges />
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-electric-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <EmailCapture variant="footer" />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 bg-electric-blue rounded-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">
                  ClearCircuit<span className="text-electric-blue">™</span>
                </span>
              </Link>
              <p className="text-gray-300 mb-4 max-w-md">
                Professional electrical panel labeling solutions that meet NEC standards. 
                Trusted by electricians and homeowners nationwide for safer, clearer circuits.
              </p>
              <div className="mb-4">
                <FooterSocialLinks />
              </div>
              <div className="flex space-x-4">
                <p className="text-sm text-gray-400">
                  © 2024 ClearCircuit. All rights reserved.
                </p>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              Made with ⚡ for electrical safety
            </p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms
              </Link>
              <Link href="/returns" className="text-sm text-gray-400 hover:text-white">
                Returns
              </Link>
              <Link href="/shipping" className="text-sm text-gray-400 hover:text-white">
                Shipping
              </Link>
              <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 