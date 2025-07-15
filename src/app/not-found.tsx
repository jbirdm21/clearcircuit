import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  AlertTriangle, 
  Home, 
  Search, 
  Phone, 
  ArrowRight, 
  Zap, 
  Shield,
  CheckCircle,
  BookOpen,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import SEOMetaTags from '@/components/seo/SEOMetaTags';

export const metadata: Metadata = {
  title: 'Page Not Found - ClearCircuit',
  description: 'The page you\'re looking for doesn\'t exist. Find electrical safety solutions and professional panel labeling products at ClearCircuit.',
  robots: 'noindex, nofollow',
};

export default function NotFound() {
  const quickLinks = [
    {
      title: 'Professional Panel Labels',
      description: 'NEC 408.4(A) compliant labeling solutions',
      href: '/products',
      icon: Shield,
      badge: 'Popular'
    },
    {
      title: 'Safety Assessment',
      description: 'Free electrical safety evaluation',
      href: '/safety-assessment',
      icon: CheckCircle,
      badge: 'Free'
    },
    {
      title: 'Safety Resources',
      description: 'Expert guides and compliance information',
      href: '/safety-resources',
      icon: BookOpen,
      badge: 'Expert'
    },
    {
      title: 'Contact Support',
      description: 'Get help from our safety experts',
      href: '/contact',
      icon: MessageCircle,
      badge: '24/7'
    }
  ];

  const emergencyResources = [
    {
      title: 'Emergency Safety Line',
      description: 'Immediate electrical safety support',
      action: 'Call (555) 911-SAFE',
      href: 'tel:+15559115233',
      urgent: true
    },
    {
      title: 'Live Chat Support',
      description: 'Real-time assistance from experts',
      action: 'Start Chat',
      href: '#',
      urgent: false
    },
    {
      title: 'Email Support',
      description: 'Non-urgent technical questions',
      action: 'Send Email',
      href: 'mailto:support@clearcircuit.com',
      urgent: false
    }
  ];

  const popularSearches = [
    'NEC 408.4(A) compliance',
    'Circuit breaker labels',
    'Electrical panel safety',
    'Professional labeling kit',
    'Electrical inspection requirements',
    'Panel labeling installation'
  ];

  return (
    <>
      {/* <SEOMetaTags
        title="Page Not Found | ClearCircuit"
        description="The page you're looking for doesn't exist. Find electrical safety solutions and professional panel labeling products at ClearCircuit."
        pageType="home"
        noIndex={true}
        noFollow={true}
      /> */}
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-16 h-16 text-red-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-safety-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">404</span>
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Circuit Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Looks like this page took a wrong turn at the electrical panel.
            </p>
            <p className="text-gray-500 mb-8">
              Don't worry - our safety experts are here to help you find what you need.
            </p>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-6 text-lg"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Return to Safety
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-electric-blue text-electric-blue hover:bg-electric-blue/10 px-8 py-6 text-lg"
              >
                <Link href="/products">
                  <Search className="w-5 h-5 mr-2" />
                  Browse Products
                </Link>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600 mr-2" />
                <h2 className="text-lg font-semibold text-red-800">
                  Electrical Emergency?
                </h2>
              </div>
              <p className="text-red-700 mb-4">
                If you're experiencing an electrical safety emergency, don't wait.
              </p>
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white animate-pulse"
              >
                <Link href="tel:+15559115233">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line: (555) 911-SAFE
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find What You Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our most popular electrical safety solutions and resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickLinks.map((link) => (
              <Card key={link.href} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <link.icon className="w-6 h-6 text-electric-blue" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {link.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold">
                    {link.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">
                    {link.description}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    <Link href={link.href}>
                      Explore
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-white">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Need Help? We're Here for You
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our electrical safety experts are available 24/7 to help you find solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {emergencyResources.map((resource, index) => (
                <Card 
                  key={index} 
                  className={`${resource.urgent ? 'border-red-200 bg-red-50' : ''} hover:shadow-lg transition-shadow duration-300`}
                >
                  <CardHeader>
                    <CardTitle className={`${resource.urgent ? 'text-red-800' : 'text-gray-900'}`}>
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm mb-4 ${resource.urgent ? 'text-red-700' : 'text-gray-600'}`}>
                      {resource.description}
                    </p>
                    <Button
                      asChild
                      className={`w-full ${resource.urgent ? 'bg-red-600 hover:bg-red-700 text-white' : ''}`}
                      variant={resource.urgent ? "default" : "outline"}
                    >
                      <Link href={resource.href}>
                        {resource.action}
                        {resource.urgent && <Phone className="w-4 h-4 ml-2" />}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Popular Searches
            </h2>
            <p className="text-gray-600">
              Looking for something specific? Try these popular searches.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {popularSearches.map((search) => (
              <Button
                key={search}
                asChild
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <Link href={`/search?q=${encodeURIComponent(search)}`}>
                  {search}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-electric-blue">
          <div className="container mx-auto px-4 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Every Electrical Accident is Preventable
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let a missing page stop you from improving your electrical safety. 
              Our team is ready to help you find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-electric-blue hover:bg-gray-100"
              >
                <Link href="/contact">
                  Get Expert Help
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-electric-blue"
              >
                <Link href="/products">
                  Shop Safety Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 