'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, Zap, ChevronDown, User, Phone, Shield, Package, Info, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { HeaderSocialLinks } from '@/components/social/SocialLinks';

// Navigation structure with organized menus
const navigation = {
  main: [
    { name: 'Products', href: '/products', icon: Package },
    { name: 'Safety Resources', href: '/safety-resources', icon: Shield },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
  ],
  products: [
    { name: 'All Products', href: '/products', description: 'Browse our complete catalog' },
    { name: '20-Slot Square D Kit', href: '/products/20-slot-square-d-qo', description: 'Pre-configured Square D QO panel kit' },
    { name: '24-Slot Eaton Kit', href: '/products/24-slot-eaton-br', description: 'Complete Eaton BR panel solution' },
    { name: 'Custom Universal Kit', href: '/products/custom-universal-kit', description: 'Tailored for your specific needs' },
    { name: 'Bulk Contractor Pack', href: '/products/bulk-contractor-pack', description: 'Volume discounts for professionals' },
  ],
  support: [
    { name: 'Safety Resources', href: '/safety-resources', description: 'Electrical safety guides and tips' },
    { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
    { name: 'How It Works', href: '/how-it-works', description: 'Step-by-step installation guide' },
    { name: 'Returns', href: '/returns', description: '30-day return policy' },
    { name: 'Shipping', href: '/shipping', description: 'Free shipping on orders $50+' },
    { name: 'Contact Support', href: '/contact', description: 'Get help from our experts' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Return Policy', href: '/returns' },
    { name: 'Shipping Policy', href: '/shipping' },
  ]
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="flex items-center justify-center w-8 h-8 bg-electric-blue rounded-lg">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              ClearCircuit<span className="text-electric-blue">™</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('products')}
                className="flex items-center text-gray-700 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Products
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {navigation.products.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-gray-50 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="font-medium text-gray-900 group-hover:text-electric-blue">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('support')}
                className="flex items-center text-gray-700 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors"
              >
                Support
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {activeDropdown === 'support' && (
                <div className="absolute left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                  {navigation.support.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-gray-50 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="font-medium text-gray-900 group-hover:text-electric-blue">
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Regular Navigation Items */}
            <Link
              href="/about"
              className="text-gray-700 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-electric-blue px-3 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right side - Social Links, Cart, Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden lg:block">
              <HeaderSocialLinks />
            </div>

            {/* Cart Button */}
            <Link href="/cart" className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="relative p-2 text-gray-700 hover:text-electric-blue"
              >
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-safety-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Get Quote CTA - Hidden on mobile */}
            <Button
              asChild
              size="sm"
              className="hidden md:flex bg-electric-blue hover:bg-electric-blue/90"
            >
              <Link href="/contact">Get Quote</Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Main Navigation */}
            <div className="border-b border-gray-200 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Main Menu
              </div>
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-electric-blue hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Products Section */}
            <div className="border-b border-gray-200 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Products
              </div>
              {navigation.products.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-electric-blue hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div>{item.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                </Link>
              ))}
            </div>

            {/* Support Section */}
            <div className="border-b border-gray-200 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Support
              </div>
              {navigation.support.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-electric-blue hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div>{item.name}</div>
                  <div className="text-sm text-gray-500 mt-1">{item.description}</div>
                </Link>
              ))}
            </div>

            {/* Legal Section */}
            <div className="border-b border-gray-200 pb-3 mb-3">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-2">
                Legal
              </div>
              {navigation.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-electric-blue hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-electric-blue hover:bg-electric-blue/90"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Get Free Quote
                </Link>
              </Button>
            </div>

            {/* Mobile Social Links */}
            <div className="pt-3 border-t border-gray-200">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 mb-3">
                Follow Us
              </div>
              <div className="px-3">
                <HeaderSocialLinks />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 