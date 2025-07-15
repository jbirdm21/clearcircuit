import Link from 'next/link';
import { Zap, Shield, Award, Truck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const trustBadges = [
  {
    icon: Shield,
    title: 'UL Listed',
    description: 'Materials meet UL 969 standards',
  },
  {
    icon: Award,
    title: 'NEC Compliant',
    description: 'Meets NEC 408.4(A) requirements',
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
  {
    icon: Shield,
    title: '5-Year Warranty',
    description: 'Guaranteed adhesion & legibility',
  },
];

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
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Trust Bar */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.title} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <badge.icon className="w-6 h-6 text-safety-yellow" />
                </div>
                <div>
                  <p className="font-semibold text-white">{badge.title}</p>
                  <p className="text-sm text-gray-300">{badge.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-electric-blue py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on Electrical Safety
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get installation tips, code updates, and exclusive offers delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-gray-900 placeholder-gray-500 border-white"
              />
              <Button className="bg-safety-orange hover:bg-safety-orange/90 text-white">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
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