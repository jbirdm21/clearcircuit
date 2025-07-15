'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Shield, Zap, Award } from 'lucide-react';
import { Feature } from '@/types';

interface FeatureGridProps {
  features?: Feature[];
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'steps';
}

const defaultFeatures: Feature[] = [
  {
    id: '1',
    title: 'Never Fail Another Inspection',
    description: 'Guaranteed NEC 408.4(A) compliance eliminates costly re-inspections and protects your professional reputation',
    icon: 'Shield',
    highlighted: true,
  },
  {
    id: '2',
    title: 'Complete Jobs 75% Faster',
    description: 'Peel-and-stick installation takes just 5 minutes – no measuring, no guessing, no delays',
    icon: 'Clock',
    highlighted: false,
  },
  {
    id: '3',
    title: 'Eliminate Emergency Calls',
    description: 'Crystal-clear labels prevent confusion and reduce troubleshooting time from hours to minutes',
    icon: 'Award',
    highlighted: false,
  },
  {
    id: '4',
    title: 'Impress Every Client',
    description: 'Professional appearance shows quality workmanship and builds trust with customers and inspectors',
    icon: 'Check',
    highlighted: false,
  },
];

const iconMap = {
  Shield,
  Clock,
  Award,
  Check,
  Zap,
};

export default function FeatureGrid({
  features = defaultFeatures,
  title = 'Transform Your Electrical Work Forever',
  subtitle = 'Stop wasting time on confusing panels and start impressing clients with professional-grade solutions',
  variant = 'default',
}: FeatureGridProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className={`grid gap-8 ${
          variant === 'steps' 
            ? 'md:grid-cols-3' 
            : 'md:grid-cols-2 lg:grid-cols-4'
        }`}>
          {features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Shield;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${
                  variant === 'steps' 
                    ? 'text-center' 
                    : 'text-left'
                } group`}
              >
                <div className={`${
                  variant === 'steps'
                    ? 'flex flex-col items-center'
                    : 'flex items-start'
                }`}>
                  {/* Icon */}
                  <div className={`${
                    feature.highlighted 
                      ? 'bg-electric-blue text-white' 
                      : 'bg-gray-100 text-electric-blue group-hover:bg-electric-blue group-hover:text-white'
                  } rounded-lg p-3 ${
                    variant === 'steps' ? 'mb-4' : 'mr-4'
                  } transition-colors duration-300`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <div className={variant === 'steps' ? 'text-center' : ''}>
                    {variant === 'steps' && (
                      <div className="text-sm text-gray-500 font-medium mb-2">
                        Step {index + 1}
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Step connector for step variant */}
                {variant === 'steps' && index < features.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 transform translate-x-1/2">
                    <div className="w-16 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 