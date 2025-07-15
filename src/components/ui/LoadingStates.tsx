'use client';

import { motion } from 'framer-motion';
import { Loader2, AlertTriangle, CheckCircle, Clock, Zap } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'; // Added missing import for React

interface LoadingSkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

// Basic skeleton loader
export function LoadingSkeleton({ 
  className = '', 
  width = '100%', 
  height = '20px', 
  rounded = false 
}: LoadingSkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-200 ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      style={{ width, height }}
    />
  );
}

// Card skeleton loader
export function CardSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="space-y-2">
        <LoadingSkeleton height="24px" width="70%" />
        <LoadingSkeleton height="16px" width="50%" />
      </CardHeader>
      <CardContent className="space-y-3">
        <LoadingSkeleton height="16px" width="100%" />
        <LoadingSkeleton height="16px" width="85%" />
        <LoadingSkeleton height="16px" width="60%" />
        <div className="flex space-x-2 pt-2">
          <LoadingSkeleton height="36px" width="80px" />
          <LoadingSkeleton height="36px" width="100px" />
        </div>
      </CardContent>
    </Card>
  );
}

// Product card skeleton
export function ProductSkeleton() {
  return (
    <Card className="w-full">
      <CardHeader className="p-0">
        <LoadingSkeleton height="200px" width="100%" />
      </CardHeader>
      <CardContent className="p-4 space-y-2">
        <LoadingSkeleton height="20px" width="80%" />
        <LoadingSkeleton height="16px" width="60%" />
        <div className="flex items-center justify-between pt-2">
          <LoadingSkeleton height="24px" width="60px" />
          <LoadingSkeleton height="36px" width="80px" />
        </div>
      </CardContent>
    </Card>
  );
}

// Profile/testimonial skeleton
export function ProfileSkeleton() {
  return (
    <div className="flex items-center space-x-3">
      <LoadingSkeleton height="40px" width="40px" rounded />
      <div className="flex-1 space-y-2">
        <LoadingSkeleton height="16px" width="70%" />
        <LoadingSkeleton height="14px" width="50%" />
      </div>
    </div>
  );
}

// Table skeleton
export function TableSkeleton({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3">
      {/* Table header */}
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <LoadingSkeleton key={i} height="20px" width="80%" />
        ))}
      </div>
      
      {/* Table rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <LoadingSkeleton key={colIndex} height="16px" width="90%" />
          ))}
        </div>
      ))}
    </div>
  );
}

// Page skeleton
export function PageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <LoadingSkeleton height="48px" width="60%" />
        <LoadingSkeleton height="20px" width="80%" />
        <LoadingSkeleton height="16px" width="70%" />
      </div>
      
      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// Spinner loaders
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Spinner({ size = 'md', className = '' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <Loader2 className={`animate-spin ${sizeClasses[size]} ${className}`} />
  );
}

// Loading button
interface LoadingButtonProps {
  loading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
  disabled?: boolean;
}

export function LoadingButton({ 
  loading, 
  children, 
  loadingText = 'Loading...', 
  className = '',
  disabled = false 
}: LoadingButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-electric-blue hover:bg-electric-blue/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-md transition-colors ${className}`}
      disabled={disabled || loading}
    >
      {loading ? (
        <>
          <Spinner size="sm" className="mr-2" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </button>
  );
}

// Progress indicators
interface ProgressLoaderProps {
  progress: number;
  label?: string;
  showPercentage?: boolean;
  className?: string;
}

export function ProgressLoader({ 
  progress, 
  label, 
  showPercentage = true, 
  className = '' 
}: ProgressLoaderProps) {
  return (
    <div className={`w-full space-y-2 ${className}`}>
      {(label || showPercentage) && (
        <div className="flex justify-between text-sm text-gray-600">
          <span>{label}</span>
          {showPercentage && <span>{Math.round(progress)}%</span>}
        </div>
      )}
      <Progress value={progress} className="h-2" />
    </div>
  );
}

// Step progress indicator
interface StepProgressProps {
  steps: string[];
  currentStep: number;
  className?: string;
}

export function StepProgress({ steps, currentStep, className = '' }: StepProgressProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
              ${index < currentStep 
                ? 'bg-green-500 text-white' 
                : index === currentStep 
                  ? 'bg-electric-blue text-white' 
                  : 'bg-gray-200 text-gray-600'
              }
            `}>
              {index < currentStep ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div className={`
                w-full h-1 mx-2
                ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}
              `} />
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep]}
        </p>
      </div>
    </div>
  );
}

// Animated loading states
export function PulseLoader() {
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-3 h-3 bg-electric-blue rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// Electrical-themed loader
export function ElectricalLoader() {
  return (
    <div className="flex flex-col items-center space-y-4">
      <motion.div
        className="relative w-16 h-16"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <Zap className="w-16 h-16 text-electric-blue" />
      </motion.div>
      <p className="text-sm text-gray-600">Analyzing electrical safety...</p>
    </div>
  );
}

// Safety assessment loader
export function SafetyAssessmentLoader({ step }: { step: string }) {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      <div className="relative">
        <motion.div
          className="w-20 h-20 border-4 border-electric-blue border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-electric-blue" />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">Processing Assessment</h3>
        <p className="text-sm text-gray-600 mt-1">{step}</p>
      </div>
    </div>
  );
}

// Full-screen loader
interface FullScreenLoaderProps {
  message?: string;
  submessage?: string;
  showProgress?: boolean;
  progress?: number;
}

export function FullScreenLoader({ 
  message = 'Loading...', 
  submessage,
  showProgress = false,
  progress = 0
}: FullScreenLoaderProps) {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        <ElectricalLoader />
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{message}</h3>
          {submessage && (
            <p className="text-sm text-gray-600 mt-2">{submessage}</p>
          )}
        </div>
        {showProgress && (
          <div className="w-64">
            <ProgressLoader progress={progress} />
          </div>
        )}
      </div>
    </div>
  );
}

// Error state component
interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export function ErrorState({ 
  title = 'Something went wrong', 
  message = 'Please try again later.', 
  onRetry,
  className = ''
}: ErrorStateProps) {
  return (
    <div className={`flex flex-col items-center space-y-4 p-8 text-center ${className}`}>
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-red-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-electric-blue hover:bg-electric-blue/90 rounded-md transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

// Loading overlay
interface LoadingOverlayProps {
  show: boolean;
  message?: string;
  children?: React.ReactNode;
}

export function LoadingOverlay({ show, message = 'Loading...', children }: LoadingOverlayProps) {
  if (!show) return <>{children}</>;

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10 rounded-lg">
        <div className="text-center">
          <Spinner size="lg" className="text-electric-blue" />
          <p className="text-sm text-gray-600 mt-2">{message}</p>
        </div>
      </div>
      <div className="opacity-50 pointer-events-none">
        {children}
      </div>
    </div>
  );
}

// Typing animation
export function TypingAnimation({ text, speed = 50 }: { text: string; speed?: number }) {
  const [displayText, setDisplayText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-5 bg-current ml-1"
      />
    </span>
  );
} 