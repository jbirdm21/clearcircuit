'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  showLabel?: boolean;
  label?: string;
  color?: 'blue' | 'orange' | 'yellow' | 'green';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}

const colorClasses = {
  blue: 'bg-electric-blue',
  orange: 'bg-safety-orange',
  yellow: 'bg-safety-yellow',
  green: 'bg-green-500',
};

const sizeClasses = {
  sm: 'h-2',
  md: 'h-4',
  lg: 'h-6',
};

export default function ProgressBar({
  value,
  max = 100,
  className,
  showLabel = false,
  label,
  color = 'blue',
  size = 'md',
  animated = true,
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const colorClass = colorClasses[color];
  const sizeClass = sizeClasses[size];

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            {label || 'Progress'}
          </span>
          <span className="text-sm text-gray-500">
            {value}/{max}
          </span>
        </div>
      )}
      
      <div className={cn('bg-gray-200 rounded-full overflow-hidden', sizeClass)}>
        <motion.div
          className={cn('h-full rounded-full', colorClass)}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={animated ? { duration: 0.8, ease: 'easeOut' } : { duration: 0 }}
        />
      </div>
      
      {!showLabel && (
        <div className="mt-1 text-right">
          <span className="text-xs text-gray-500">
            {percentage.toFixed(0)}%
          </span>
        </div>
      )}
    </div>
  );
} 