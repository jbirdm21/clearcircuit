'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale' | 'rotate' | 'custom';
  delay?: number;
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
  staggerChildren?: number;
  customAnimation?: {
    initial: any;
    animate: any;
    exit?: any;
  };
  reduceMotion?: boolean;
  viewport?: {
    once?: boolean;
    amount?: number;
  };
}

const animationVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  },
  'slide-up': {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 60 }
  },
  'slide-down': {
    initial: { opacity: 0, y: -60 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -60 }
  },
  'slide-left': {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 60 }
  },
  'slide-right': {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -60 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  },
  rotate: {
    initial: { opacity: 0, rotate: -10, scale: 0.8 },
    animate: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: -10, scale: 0.8 }
  }
};

export default function AnimatedSection({
  children,
  className,
  animation = 'fade',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  triggerOnce = true,
  staggerChildren = 0,
  customAnimation,
  reduceMotion = false,
  viewport = { once: true, amount: 0.1 }
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewport);
  const controls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Trigger animation when in view
  useEffect(() => {
    if (isInView) {
      controls.start('animate');
    } else if (!triggerOnce) {
      controls.start('initial');
    }
  }, [isInView, controls, triggerOnce]);

  // Get animation variants
  const getAnimationVariants = () => {
    if (customAnimation) {
      return customAnimation;
    }
    
    return animationVariants[animation as keyof typeof animationVariants] || animationVariants.fade;
  };

  const variants = getAnimationVariants();

  // If user prefers reduced motion or component is set to reduce motion, use simple fade
  const shouldReduceMotion = prefersReducedMotion || reduceMotion;
  const finalVariants = shouldReduceMotion ? animationVariants.fade : variants;

  const motionProps = {
    ref,
    initial: 'initial',
    animate: controls,
    variants: finalVariants,
    transition: {
      duration: shouldReduceMotion ? 0.2 : duration,
      delay: shouldReduceMotion ? 0 : delay,
      ease: [0.25, 0.1, 0.25, 1], // Custom easing for professional feel
      staggerChildren: shouldReduceMotion ? 0 : staggerChildren
    }
  };

  return (
    <motion.div
      className={cn(className)}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}

// Staggered container for multiple items
interface StaggeredContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: AnimatedSectionProps['animation'];
  customAnimation?: AnimatedSectionProps['customAnimation'];
}

export function StaggeredContainer({
  children,
  className,
  staggerDelay = 0.1,
  animation = 'slide-up',
  customAnimation
}: StaggeredContainerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay
      }
    }
  };

  const getItemVariants = () => {
    if (customAnimation) {
      return customAnimation;
    }
    
    return animationVariants[animation as keyof typeof animationVariants] || animationVariants.fade;
  };

  const itemVariants = prefersReducedMotion ? animationVariants.fade : getItemVariants();

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {child}
            </motion.div>
          ))
        : (
          <motion.div
            variants={itemVariants}
            transition={{
              duration: prefersReducedMotion ? 0.2 : 0.6,
              ease: [0.25, 0.1, 0.25, 1]
            }}
          >
            {children}
          </motion.div>
        )
      }
    </motion.div>
  );
}

// Parallax effect component
interface ParallaxProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  disabled?: boolean;
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  disabled = false
}: ParallaxProps) {
  const ref = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  if (disabled || prefersReducedMotion) {
    return (
      <div ref={ref} className={cn(className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      style={{
        y: useMotionValue(0)
      }}
      whileInView={{
        y: [-speed * 100, speed * 100]
      }}
      transition={{
        duration: 2,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {children}
    </motion.div>
  );
}

// Enhanced loading animation component
interface LoadingAnimationProps {
  variant?: 'spinner' | 'dots' | 'pulse' | 'skeleton';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

export function LoadingAnimation({
  variant = 'spinner',
  size = 'md',
  className,
  color = 'primary'
}: LoadingAnimationProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colorClasses = {
    primary: 'text-electric-blue',
    secondary: 'text-safety-orange',
    accent: 'text-safety-yellow'
  };

  if (prefersReducedMotion) {
    return (
      <div className={cn(
        'inline-block rounded-full bg-current opacity-75',
        sizeClasses[size],
        colorClasses[color],
        className
      )} />
    );
  }

  if (variant === 'spinner') {
    return (
      <motion.div
        className={cn(
          'inline-block border-2 border-current border-t-transparent rounded-full',
          sizeClasses[size],
          colorClasses[color],
          className
        )}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    );
  }

  if (variant === 'dots') {
    return (
      <div className={cn('flex space-x-1', className)}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className={cn(
              'rounded-full bg-current',
              size === 'sm' ? 'w-1.5 h-1.5' : size === 'md' ? 'w-2 h-2' : 'w-3 h-3',
              colorClasses[color]
            )}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <motion.div
        className={cn(
          'inline-block rounded-full bg-current',
          sizeClasses[size],
          colorClasses[color],
          className
        )}
        animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    );
  }

  // Skeleton variant
  return (
    <motion.div
      className={cn(
        'bg-gray-200 rounded animate-pulse',
        sizeClasses[size],
        className
      )}
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  );
}

// Import useMotionValue for parallax
import { useMotionValue } from 'framer-motion'; 