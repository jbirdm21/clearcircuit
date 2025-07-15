'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, AlertTriangle, MessageCircle, X, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface MobileEmergencyContactProps {
  showOnMobile?: boolean;
  className?: string;
}

export default function MobileEmergencyContact({ 
  showOnMobile = true, 
  className = '' 
}: MobileEmergencyContactProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Only show on mobile devices
  if (!showOnMobile) return null;

  return (
    <>
      {/* Main Emergency Button - Fixed Position */}
      <div className={`fixed bottom-4 right-4 z-50 md:hidden ${className}`}>
        <AnimatePresence>
          {!isExpanded ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                onClick={() => setIsExpanded(true)}
                className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 shadow-lg animate-pulse"
                aria-label="Emergency electrical safety contact"
              >
                <AlertTriangle className="w-8 h-8 text-white" />
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="w-80 bg-white shadow-xl border-2 border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                      <h3 className="text-lg font-bold text-red-800">
                        Emergency Safety
                      </h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsExpanded(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4">
                    Need immediate electrical safety help? Our experts are available 24/7.
                  </p>
                  
                  <div className="space-y-3">
                    {/* Emergency Call Button */}
                    <Button
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3"
                      onClick={() => window.open('tel:+15559115233', '_self')}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (555) 911-SAFE
                    </Button>
                    
                    {/* Quick Chat Button */}
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50 py-3"
                      onClick={() => {
                        // Implement chat functionality
                        console.log('Opening chat...');
                      }}
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Quick Chat
                    </Button>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>Response time: Under 30 minutes</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for expanded state */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
            onClick={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Quick Emergency Contact Bar for Top of Pages
export function MobileEmergencyBar() {
  return (
    <div className="md:hidden bg-red-600 text-white p-2 sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">
              Electrical Emergency?
            </span>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-red-600 hover:bg-gray-100 px-3 py-1"
            onClick={() => window.open('tel:+15559115233', '_self')}
          >
            <Phone className="w-4 h-4 mr-1" />
            Call Now
          </Button>
        </div>
      </div>
    </div>
  );
}

// Mobile-Optimized Contact Form
export function MobileContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    urgency: 'normal',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="md:hidden p-4">
      <Card className="border-2 border-red-200">
        <CardContent className="p-4">
          <h3 className="text-lg font-bold text-red-800 mb-4">
            Get Immediate Help
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="(555) 123-4567"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Urgency Level
              </label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="emergency">🚨 Emergency - Need help now</option>
                <option value="urgent">⚡ Urgent - Within 24 hours</option>
                <option value="normal">📋 Normal - Within 2-3 days</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brief Description
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Describe your electrical safety situation..."
                required
              />
            </div>
            
            <div className="space-y-2">
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3"
              >
                Submit Request
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full border-red-600 text-red-600 hover:bg-red-50 py-3"
                onClick={() => window.open('tel:+15559115233', '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Or Call (555) 911-SAFE
              </Button>
            </div>
          </form>
          
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <strong>Emergency situations:</strong> Call immediately for electrical safety emergencies. Response time under 30 minutes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Mobile Navigation Enhancement
export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Safety Resources', href: '/safety-resources' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2"
      >
        <div className="w-6 h-6 flex flex-col justify-center">
          <span className={`block h-0.5 w-6 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-1' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all mt-1 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all mt-1 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`} />
        </div>
      </Button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open('tel:+15559115233', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency: (555) 911-SAFE
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 