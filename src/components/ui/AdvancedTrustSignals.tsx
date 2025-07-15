'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  Users, 
  Star, 
  CheckCircle, 
  Clock, 
  Truck, 
  RefreshCw, 
  Phone, 
  Lock,
  TrendingUp,
  MapPin,
  Calendar,
  Heart,
  Zap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TrustSignal {
  id: string;
  type: 'security' | 'social' | 'certification' | 'guarantee' | 'performance' | 'support';
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  value?: string | number;
  color?: 'blue' | 'green' | 'orange' | 'purple' | 'red';
  priority: 'high' | 'medium' | 'low';
  showAnimation?: boolean;
  link?: string;
  badgeText?: string;
}

interface TrustSignalWidgetProps {
  variant?: 'minimal' | 'detailed' | 'compact' | 'banner' | 'sidebar';
  signals?: TrustSignal[];
  className?: string;
  animated?: boolean;
  showCount?: number;
  filterByType?: TrustSignal['type'][];
  priorityOnly?: boolean;
}

const defaultTrustSignals: TrustSignal[] = [
  {
    id: 'customers',
    type: 'social',
    title: '10,000+',
    description: 'Satisfied Customers',
    icon: Users,
    value: 10247,
    color: 'blue',
    priority: 'high',
    showAnimation: true,
    badgeText: 'Growing Daily'
  },
  {
    id: 'rating',
    type: 'social',
    title: '4.9/5',
    description: 'Customer Rating',
    icon: Star,
    value: 4.9,
    color: 'orange',
    priority: 'high',
    showAnimation: true,
    badgeText: 'Excellent'
  },
  {
    id: 'ssl',
    type: 'security',
    title: 'SSL Secure',
    description: '256-bit encryption',
    icon: Lock,
    color: 'green',
    priority: 'high',
    badgeText: 'Protected'
  },
  {
    id: 'nec-compliant',
    type: 'certification',
    title: 'NEC 408.4(A)',
    description: 'Code Compliant',
    icon: Award,
    color: 'blue',
    priority: 'high',
    badgeText: 'Certified'
  },
  {
    id: 'ul-certified',
    type: 'certification',
    title: 'UL 969',
    description: 'Safety Certified',
    icon: CheckCircle,
    color: 'green',
    priority: 'high',
    badgeText: 'Approved'
  },
  {
    id: 'warranty',
    type: 'guarantee',
    title: '5-Year',
    description: 'Warranty',
    icon: Shield,
    color: 'blue',
    priority: 'medium',
    badgeText: 'Guaranteed'
  },
  {
    id: 'shipping',
    type: 'guarantee',
    title: 'Free Shipping',
    description: 'Orders $50+',
    icon: Truck,
    color: 'green',
    priority: 'medium',
    badgeText: 'Free'
  },
  {
    id: 'returns',
    type: 'guarantee',
    title: '30-Day',
    description: 'Returns',
    icon: RefreshCw,
    color: 'blue',
    priority: 'medium',
    badgeText: 'Easy Returns'
  },
  {
    id: 'support',
    type: 'support',
    title: '24/7',
    description: 'Expert Support',
    icon: Phone,
    color: 'purple',
    priority: 'medium',
    badgeText: 'Available'
  },
  {
    id: 'installation',
    type: 'performance',
    title: '5 Minutes',
    description: 'Installation Time',
    icon: Clock,
    color: 'orange',
    priority: 'medium',
    badgeText: 'Quick'
  },
  {
    id: 'satisfaction',
    type: 'social',
    title: '98%',
    description: 'Satisfaction Rate',
    icon: Heart,
    color: 'red',
    priority: 'medium',
    showAnimation: true,
    badgeText: 'Loved'
  },
  {
    id: 'growth',
    type: 'social',
    title: '250%',
    description: 'Annual Growth',
    icon: TrendingUp,
    color: 'green',
    priority: 'low',
    showAnimation: true,
    badgeText: 'Trending'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-electric-blue/10',
    text: 'text-electric-blue',
    border: 'border-electric-blue/20',
    badge: 'bg-electric-blue text-white'
  },
  green: {
    bg: 'bg-green-500/10',
    text: 'text-green-600',
    border: 'border-green-500/20',
    badge: 'bg-green-500 text-white'
  },
  orange: {
    bg: 'bg-safety-orange/10',
    text: 'text-safety-orange',
    border: 'border-safety-orange/20',
    badge: 'bg-safety-orange text-white'
  },
  purple: {
    bg: 'bg-purple-500/10',
    text: 'text-purple-600',
    border: 'border-purple-500/20',
    badge: 'bg-purple-500 text-white'
  },
  red: {
    bg: 'bg-red-500/10',
    text: 'text-red-600',
    border: 'border-red-500/20',
    badge: 'bg-red-500 text-white'
  }
};

// Animated counter for numeric values
function AnimatedCounter({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

// Live activity indicator
function LiveActivityIndicator() {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsActive(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <motion.div
        animate={{ scale: isActive ? 1.2 : 1, opacity: isActive ? 1 : 0.6 }}
        className="w-2 h-2 bg-green-500 rounded-full"
      />
      <span className="text-xs text-green-600">Live</span>
    </div>
  );
}

// Individual trust signal component
function TrustSignalItem({ 
  signal, 
  variant = 'detailed', 
  animated = true 
}: { 
  signal: TrustSignal; 
  variant?: TrustSignalWidgetProps['variant'];
  animated?: boolean;
}) {
  const colors = colorClasses[signal.color || 'blue'];
  
  if (variant === 'minimal') {
    return (
      <motion.div
        className="flex items-center space-x-2"
        initial={animated ? { opacity: 0, x: -20 } : {}}
        animate={animated ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <signal.icon className={cn('w-4 h-4', colors.text)} />
        <span className="text-sm font-medium text-gray-700">{signal.title}</span>
      </motion.div>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.div
        className={cn(
          'flex items-center space-x-3 p-3 rounded-lg border transition-all duration-200',
          colors.bg,
          colors.border,
          'hover:shadow-md'
        )}
        initial={animated ? { opacity: 0, y: 20 } : {}}
        animate={animated ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <div className={cn('p-2 rounded-full', colors.bg)}>
          <signal.icon className={cn('w-4 h-4', colors.text)} />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">{signal.title}</span>
            {signal.badgeText && (
              <Badge className={cn('text-xs', colors.badge)}>
                {signal.badgeText}
              </Badge>
            )}
          </div>
          <p className="text-xs text-gray-600">{signal.description}</p>
        </div>
      </motion.div>
    );
  }

  if (variant === 'banner') {
    return (
      <motion.div
        className="flex items-center space-x-3"
        initial={animated ? { opacity: 0, scale: 0.9 } : {}}
        animate={animated ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <signal.icon className={cn('w-5 h-5', colors.text)} />
        <div>
          <span className="font-semibold text-white">{signal.title}</span>
          <span className="text-white/80 ml-2 text-sm">{signal.description}</span>
        </div>
        {signal.showAnimation && signal.type === 'social' && (
          <LiveActivityIndicator />
        )}
      </motion.div>
    );
  }

  // Default detailed variant
  return (
    <motion.div
      initial={animated ? { opacity: 0, y: 20 } : {}}
      animate={animated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className={cn(
        'border-2 transition-all duration-200 hover:shadow-lg',
        colors.border,
        'hover:' + colors.border.replace('/20', '/40')
      )}>
        <CardContent className="p-6 text-center">
          <div className={cn('w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center', colors.bg)}>
            <signal.icon className={cn('w-6 h-6', colors.text)} />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-center space-x-2">
              <h3 className="text-lg font-bold text-gray-900">
                {signal.showAnimation && typeof signal.value === 'number' ? (
                  <AnimatedCounter value={signal.value} />
                ) : (
                  signal.title
                )}
              </h3>
              {signal.badgeText && (
                <Badge className={cn('text-xs', colors.badge)}>
                  {signal.badgeText}
                </Badge>
              )}
            </div>
            
            <p className="text-sm text-gray-600">{signal.description}</p>
            
            {signal.showAnimation && signal.type === 'social' && (
              <div className="flex justify-center">
                <LiveActivityIndicator />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function AdvancedTrustSignals({
  variant = 'detailed',
  signals = defaultTrustSignals,
  className,
  animated = true,
  showCount,
  filterByType,
  priorityOnly = false
}: TrustSignalWidgetProps) {
  // Filter signals based on props
  let filteredSignals = signals;

  if (filterByType && filterByType.length > 0) {
    filteredSignals = filteredSignals.filter(signal => 
      filterByType.includes(signal.type)
    );
  }

  if (priorityOnly) {
    filteredSignals = filteredSignals.filter(signal => 
      signal.priority === 'high'
    );
  }

  // Sort by priority
  filteredSignals.sort((a, b) => {
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority];
  });

  // Limit count if specified
  if (showCount && showCount > 0) {
    filteredSignals = filteredSignals.slice(0, showCount);
  }

  if (variant === 'banner') {
    return (
      <div className={cn('bg-electric-blue py-3 px-4', className)}>
        <div className="flex items-center justify-center space-x-8 text-white">
          {filteredSignals.map((signal, index) => (
            <motion.div
              key={signal.id}
              initial={animated ? { opacity: 0, x: -20 } : {}}
              animate={animated ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TrustSignalItem 
                signal={signal} 
                variant={variant} 
                animated={animated}
              />
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <div className={cn('space-y-4', className)}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Why Choose ClearCircuit?
        </h3>
        {filteredSignals.map((signal, index) => (
          <motion.div
            key={signal.id}
            initial={animated ? { opacity: 0, x: -20 } : {}}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TrustSignalItem 
              signal={signal} 
              variant="compact" 
              animated={animated}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  const gridColumns = {
    minimal: 'grid-cols-2 md:grid-cols-4',
    compact: 'grid-cols-1 md:grid-cols-2',
    detailed: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  }[variant] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={cn('grid gap-6', gridColumns, className)}>
      {filteredSignals.map((signal, index) => (
        <motion.div
          key={signal.id}
          initial={animated ? { opacity: 0, y: 20 } : {}}
          animate={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TrustSignalItem 
            signal={signal} 
            variant={variant} 
            animated={animated}
          />
        </motion.div>
      ))}
    </div>
  );
}

// Security badge component
export function SecurityBadge({ 
  className,
  showDetails = false 
}: { 
  className?: string;
  showDetails?: boolean;
}) {
  return (
    <motion.div
      className={cn(
        'inline-flex items-center space-x-2 px-3 py-2 bg-green-50 border border-green-200 rounded-lg',
        className
      )}
      whileHover={{ scale: 1.05 }}
    >
      <Lock className="w-4 h-4 text-green-600" />
      <div>
        <span className="text-sm font-medium text-green-800">
          SSL Secured
        </span>
        {showDetails && (
          <p className="text-xs text-green-600">
            256-bit encryption
          </p>
        )}
      </div>
    </motion.div>
  );
}

// Customer count widget
export function CustomerCountWidget({ 
  className,
  animated = true 
}: { 
  className?: string;
  animated?: boolean;
}) {
  const [count, setCount] = useState(10247);

  useEffect(() => {
    if (!animated) return;

    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [animated]);

  return (
    <motion.div
      className={cn(
        'flex items-center space-x-2 px-4 py-2 bg-electric-blue/10 border border-electric-blue/20 rounded-lg',
        className
      )}
      initial={animated ? { opacity: 0, scale: 0.9 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Users className="w-5 h-5 text-electric-blue" />
      <div>
        <div className="text-lg font-bold text-electric-blue">
          {count.toLocaleString()}+
        </div>
        <div className="text-xs text-electric-blue/70">
          Satisfied Customers
        </div>
      </div>
      <LiveActivityIndicator />
    </motion.div>
  );
}

// Guarantee badge
export function GuaranteeBadge({ 
  type = 'warranty',
  className 
}: { 
  type?: 'warranty' | 'returns' | 'satisfaction';
  className?: string;
}) {
  const configs = {
    warranty: {
      icon: Shield,
      title: '5-Year Warranty',
      description: 'Quality guaranteed',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    returns: {
      icon: RefreshCw,
      title: '30-Day Returns',
      description: 'Easy returns',
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200'
    },
    satisfaction: {
      icon: Heart,
      title: '100% Satisfaction',
      description: 'Or money back',
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200'
    }
  };

  const config = configs[type];

  return (
    <motion.div
      className={cn(
        'inline-flex items-center space-x-2 px-3 py-2 rounded-lg border',
        config.bg,
        config.border,
        className
      )}
      whileHover={{ scale: 1.05 }}
    >
      <config.icon className={cn('w-4 h-4', config.color)} />
      <div>
        <span className={cn('text-sm font-medium', config.color)}>
          {config.title}
        </span>
        <p className={cn('text-xs', config.color.replace('600', '500'))}>
          {config.description}
        </p>
      </div>
    </motion.div>
  );
} 