'use client';

import React from 'react';
import Link from 'next/link';
import { 
  AlertTriangle, 
  Home, 
  RefreshCw, 
  Phone, 
  ArrowRight, 
  Zap, 
  Shield,
  Lock,
  Server,
  Wifi,
  CheckCircle,
  BookOpen,
  MessageCircle,
  Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface ErrorPageProps {
  errorCode: '403' | '404' | '500' | '502' | '503' | 'offline';
  title?: string;
  subtitle?: string;
  description?: string;
  showEmergencyContact?: boolean;
  showRetry?: boolean;
  customActions?: {
    label: string;
    href: string;
    variant?: 'default' | 'outline' | 'destructive';
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  onRetry?: () => void;
}

const errorConfigs = {
  '403': {
    title: 'Access Restricted',
    subtitle: 'Safety protocols prevent access to this area',
    description: 'This electrical panel is locked for safety reasons. Contact our team for authorized access.',
    icon: Lock,
    color: 'orange',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-600',
    borderColor: 'border-orange-200'
  },
  '404': {
    title: 'Circuit Not Found',
    subtitle: 'This page took a wrong turn at the electrical panel',
    description: 'The page you\'re looking for doesn\'t exist, but our safety experts are here to help.',
    icon: AlertTriangle,
    color: 'red',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
    borderColor: 'border-red-200'
  },
  '500': {
    title: 'System Overload',
    subtitle: 'Our electrical system is experiencing technical difficulties',
    description: 'We\'re working quickly to restore service. Your safety is our priority.',
    icon: Server,
    color: 'red',
    bgColor: 'bg-red-100',
    textColor: 'text-red-600',
    borderColor: 'border-red-200'
  },
  '502': {
    title: 'Gateway Error',
    subtitle: 'Connection to our safety systems is temporarily unavailable',
    description: 'We\'re restoring the connection. Please try again in a moment.',
    icon: Wifi,
    color: 'yellow',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-600',
    borderColor: 'border-yellow-200'
  },
  '503': {
    title: 'System Maintenance',
    subtitle: 'We\'re performing scheduled safety maintenance',
    description: 'Our electrical safety systems are being updated. Service will resume shortly.',
    icon: RefreshCw,
    color: 'blue',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-600',
    borderColor: 'border-blue-200'
  },
  'offline': {
    title: 'Connection Lost',
    subtitle: 'Your connection to our safety systems is offline',
    description: 'Check your internet connection and try again. Emergency services are still available.',
    icon: Wifi,
    color: 'gray',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-600',
    borderColor: 'border-gray-200'
  }
};

export default function ErrorPage({
  errorCode,
  title,
  subtitle,
  description,
  showEmergencyContact = true,
  showRetry = errorCode === '500' || errorCode === '502' || errorCode === '503',
  customActions = [],
  onRetry
}: ErrorPageProps) {
  const config = errorConfigs[errorCode];
  const finalTitle = title || config.title;
  const finalSubtitle = subtitle || config.subtitle;
  const finalDescription = description || config.description;

  const quickActions = [
    {
      title: 'Return Home',
      description: 'Go back to safety dashboard',
      href: '/',
      icon: Home,
      variant: 'default' as const
    },
    {
      title: 'Browse Products',
      description: 'View safety solutions',
      href: '/products',
      icon: Shield,
      variant: 'outline' as const
    },
    {
      title: 'Contact Support',
      description: 'Get expert assistance',
      href: '/contact',
      icon: MessageCircle,
      variant: 'outline' as const
    }
  ];

  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Main Error Card */}
        <Card className={`${config.borderColor} border-2 mb-8`}>
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className={`w-24 h-24 ${config.bgColor} rounded-full flex items-center justify-center`}>
                  <config.icon className={`w-12 h-12 ${config.textColor}`} />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-safety-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{errorCode}</span>
                </div>
              </div>
            </div>
            
            <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
              {finalTitle}
            </CardTitle>
            <p className="text-lg text-gray-600 mb-4">
              {finalSubtitle}
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              {finalDescription}
            </p>
          </CardHeader>
          
          <CardContent className="text-center">
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              {/* Retry Button */}
              {showRetry && (
                <Button
                  onClick={handleRetry}
                  size="lg"
                  className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-6 text-lg"
                >
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
              )}
              
              {/* Default Actions */}
              <Button
                asChild
                size="lg"
                className="bg-electric-blue hover:bg-electric-blue/90 text-white px-8 py-6 text-lg"
              >
                <Link href="/">
                  <Home className="w-5 h-5 mr-2" />
                  Return Home
                </Link>
              </Button>
              
              {/* Custom Actions */}
              {customActions.map((action, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={action.variant || 'outline'}
                  className="px-8 py-6 text-lg"
                >
                  <Link href={action.href}>
                    {action.icon && <action.icon className="w-5 h-5 mr-2" />}
                    {action.label}
                  </Link>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact */}
        {showEmergencyContact && (
          <Card className="border-red-200 border-2 bg-red-50 mb-8">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-red-600 mr-2" />
                <CardTitle className="text-lg font-semibold text-red-800">
                  Electrical Emergency?
                </CardTitle>
              </div>
              <p className="text-red-700">
                If you're experiencing an electrical safety emergency, don't wait for our website to be fixed.
              </p>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  asChild
                  className="bg-red-600 hover:bg-red-700 text-white animate-pulse"
                >
                  <Link href="tel:+15559115233">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (555) 911-SAFE
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  <Link href="mailto:emergency@clearcircuit.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Emergency
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-50"
                >
                  <Link href="/contact">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Live Chat
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center">
                    <action.icon className="w-6 h-6 text-electric-blue" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Available
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold">
                  {action.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  {action.description}
                </p>
                <Button
                  asChild
                  variant={action.variant}
                  size="sm"
                  className="w-full"
                >
                  <Link href={action.href}>
                    Go
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Message */}
        <div className="text-center mt-8 p-6 bg-electric-blue/5 rounded-lg">
          <Shield className="w-8 h-8 text-electric-blue mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Your Safety is Our Priority
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Even during technical difficulties, our commitment to electrical safety never wavers. 
            Our emergency support team is always available to help.
          </p>
        </div>
      </div>
    </div>
  );
}

// Pre-configured error page components
export function Error403Page(props: Omit<ErrorPageProps, 'errorCode'>) {
  return <ErrorPage {...props} errorCode="403" />;
}

export function Error404Page(props: Omit<ErrorPageProps, 'errorCode'>) {
  return <ErrorPage {...props} errorCode="404" />;
}

export function Error500Page(props: Omit<ErrorPageProps, 'errorCode'>) {
  return <ErrorPage {...props} errorCode="500" />;
}

export function Error502Page(props: Omit<ErrorPageProps, 'errorCode'>) {
  return <ErrorPage {...props} errorCode="502" />;
}

export function Error503Page(props: Omit<ErrorPageProps, 'errorCode'>) {
  return <ErrorPage {...props} errorCode="503" />;
}

export function OfflineErrorPage(props: Omit<ErrorPageProps, 'errorCode'>) {
  return <ErrorPage {...props} errorCode="offline" />;
} 