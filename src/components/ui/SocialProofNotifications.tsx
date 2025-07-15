'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  User, 
  CheckCircle, 
  Phone, 
  Download,
  MapPin,
  Clock,
  Star,
  X
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SocialProofNotification {
  id: string;
  type: 'purchase' | 'consultation' | 'download' | 'review' | 'assessment';
  customerName: string;
  location: string;
  product?: string;
  action: string;
  timestamp: Date;
  rating?: number;
  urgency?: 'low' | 'medium' | 'high';
}

interface SocialProofNotificationsProps {
  className?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  maxNotifications?: number;
  displayDuration?: number;
  intervalDelay?: number;
  showTimestamp?: boolean;
  showCloseButton?: boolean;
  enableCustomNotifications?: boolean;
}

// Sample notification data - in production, this would come from your analytics/orders API
const sampleNotifications: Omit<SocialProofNotification, 'id' | 'timestamp'>[] = [
  {
    type: 'purchase',
    customerName: 'Mike',
    location: 'Phoenix, AZ',
    product: '20-Slot Professional Kit',
    action: 'just purchased',
    urgency: 'high'
  },
  {
    type: 'consultation',
    customerName: 'Sarah',
    location: 'Dallas, TX',
    action: 'scheduled a safety consultation',
    urgency: 'medium'
  },
  {
    type: 'assessment',
    customerName: 'John',
    location: 'Miami, FL',
    action: 'completed safety assessment',
    urgency: 'low'
  },
  {
    type: 'download',
    customerName: 'Lisa',
    location: 'Seattle, WA',
    action: 'downloaded safety guide',
    urgency: 'low'
  },
  {
    type: 'review',
    customerName: 'David',
    location: 'Chicago, IL',
    action: 'left a 5-star review',
    rating: 5,
    urgency: 'medium'
  },
  {
    type: 'purchase',
    customerName: 'Amanda',
    location: 'Los Angeles, CA',
    product: 'Custom Safety Kit',
    action: 'just ordered',
    urgency: 'high'
  },
  {
    type: 'consultation',
    customerName: 'Robert',
    location: 'New York, NY',
    action: 'booked emergency consultation',
    urgency: 'high'
  }
];

export default function SocialProofNotifications({
  className = '',
  position = 'bottom-left',
  maxNotifications = 1,
  displayDuration = 4000,
  intervalDelay = 8000,
  showTimestamp = true,
  showCloseButton = true,
  enableCustomNotifications = true
}: SocialProofNotificationsProps) {
  const [notifications, setNotifications] = useState<SocialProofNotification[]>([]);
  const [notificationIndex, setNotificationIndex] = useState(0);

  // Generate notifications with timestamps
  useEffect(() => {
    const interval = setInterval(() => {
      if (sampleNotifications.length === 0) return;

      const notification = sampleNotifications[notificationIndex];
      const newNotification: SocialProofNotification = {
        ...notification,
        id: `notification-${Date.now()}-${Math.random()}`,
        timestamp: new Date()
      };

      setNotifications(prev => {
        const updated = [...prev, newNotification];
        // Keep only the maximum number of notifications
        return updated.slice(-maxNotifications);
      });

      // Auto-remove notification after display duration
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, displayDuration);

      // Move to next notification
      setNotificationIndex(prev => (prev + 1) % sampleNotifications.length);
    }, intervalDelay);

    return () => clearInterval(interval);
  }, [notificationIndex, displayDuration, intervalDelay, maxNotifications]);

  // Custom notification function for integration with your system
  const addCustomNotification = (notification: Omit<SocialProofNotification, 'id' | 'timestamp'>) => {
    if (!enableCustomNotifications) return;

    const newNotification: SocialProofNotification = {
      ...notification,
      id: `custom-${Date.now()}-${Math.random()}`,
      timestamp: new Date()
    };

    setNotifications(prev => {
      const updated = [...prev, newNotification];
      return updated.slice(-maxNotifications);
    });

    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
    }, displayDuration);
  };

  // Position styles
  const getPositionClasses = () => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4';
      case 'top-right':
        return 'top-4 right-4';
      case 'bottom-right':
        return 'bottom-4 right-4';
      default:
        return 'bottom-4 left-4';
    }
  };

  // Get icon for notification type
  const getNotificationIcon = (type: SocialProofNotification['type']) => {
    switch (type) {
      case 'purchase':
        return <ShoppingCart className="w-4 h-4" />;
      case 'consultation':
        return <Phone className="w-4 h-4" />;
      case 'download':
        return <Download className="w-4 h-4" />;
      case 'review':
        return <Star className="w-4 h-4" />;
      case 'assessment':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  // Get urgency color
  const getUrgencyColor = (urgency?: string) => {
    switch (urgency) {
      case 'high':
        return 'border-red-400 bg-red-50';
      case 'medium':
        return 'border-yellow-400 bg-yellow-50';
      default:
        return 'border-green-400 bg-green-50';
    }
  };

  // Format timestamp
  const formatTimestamp = (timestamp: Date) => {
    const now = new Date();
    const diff = now.getTime() - timestamp.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return 'Yesterday';
  };

  const closeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <>
      <div className={`fixed z-50 ${getPositionClasses()} ${className}`}>
        <AnimatePresence>
          {notifications.map((notification) => (
            <motion.div
              key={notification.id}
              initial={{ 
                opacity: 0, 
                y: position.includes('bottom') ? 20 : -20,
                x: position.includes('right') ? 20 : -20
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ 
                opacity: 0, 
                y: position.includes('bottom') ? 20 : -20,
                x: position.includes('right') ? 20 : -20
              }}
              transition={{ duration: 0.3 }}
              className={`
                w-80 max-w-sm bg-white rounded-lg shadow-lg border-l-4 p-4 mb-3
                ${getUrgencyColor(notification.urgency)}
                hover:shadow-xl transition-shadow duration-200
              `}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-semibold text-gray-900 truncate">
                        {notification.customerName}
                      </span>
                      <div className="flex items-center text-gray-500">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="text-xs truncate">{notification.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-700 mb-1">
                      {notification.action}
                      {notification.product && (
                        <span className="font-medium"> {notification.product}</span>
                      )}
                    </p>

                    {/* Rating display */}
                    {notification.rating && (
                      <div className="flex items-center space-x-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < notification.rating!
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    )}

                    {/* Timestamp */}
                    {showTimestamp && (
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        {formatTimestamp(notification.timestamp)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Close button */}
                {showCloseButton && (
                  <button
                    onClick={() => closeNotification(notification.id)}
                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Urgency indicator */}
              {notification.urgency === 'high' && (
                <div className="mt-2">
                  <Badge variant="destructive" className="text-xs">
                    High Priority
                  </Badge>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Expose function to window for external integration */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addSocialProofNotification = ${addCustomNotification.toString()};
          `
        }}
      />
    </>
  );
}

// Hook for programmatic notifications
export function useSocialProofNotifications() {
  const addNotification = (notification: Omit<SocialProofNotification, 'id' | 'timestamp'>) => {
    // This would trigger the notification component
    if (typeof window !== 'undefined' && (window as any).addSocialProofNotification) {
      (window as any).addSocialProofNotification(notification);
    }
  };

  return { addNotification };
}

// Pre-built notification templates
export const NotificationTemplates = {
  purchase: (customerName: string, location: string, product: string) => ({
    type: 'purchase' as const,
    customerName,
    location,
    product,
    action: 'just purchased',
    urgency: 'high' as const
  }),

  consultation: (customerName: string, location: string, emergency = false) => ({
    type: 'consultation' as const,
    customerName,
    location,
    action: emergency ? 'booked emergency consultation' : 'scheduled a safety consultation',
    urgency: emergency ? 'high' as const : 'medium' as const
  }),

  assessment: (customerName: string, location: string) => ({
    type: 'assessment' as const,
    customerName,
    location,
    action: 'completed safety assessment',
    urgency: 'low' as const
  }),

  review: (customerName: string, location: string, rating: number) => ({
    type: 'review' as const,
    customerName,
    location,
    action: `left a ${rating}-star review`,
    rating,
    urgency: 'medium' as const
  }),

  download: (customerName: string, location: string, resource: string) => ({
    type: 'download' as const,
    customerName,
    location,
    action: `downloaded ${resource}`,
    urgency: 'low' as const
  })
};

// Component for displaying aggregate social proof stats
export function SocialProofStats() {
  const stats = [
    { label: 'Happy Customers', value: '2,547', icon: <User className="w-5 h-5" /> },
    { label: 'Safety Assessments', value: '1,893', icon: <CheckCircle className="w-5 h-5" /> },
    { label: 'Emergency Consultations', value: '412', icon: <Phone className="w-5 h-5" /> },
    { label: 'Average Rating', value: '4.9', icon: <Star className="w-5 h-5" /> }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Join Thousands of Satisfied Customers
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex items-center justify-center w-10 h-10 bg-electric-blue bg-opacity-10 rounded-full mx-auto mb-2">
              <div className="text-electric-blue">
                {stat.icon}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
} 