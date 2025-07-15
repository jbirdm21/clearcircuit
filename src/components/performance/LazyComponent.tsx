'use client';

import { Suspense, lazy, ComponentType, ReactNode, useState, useRef, useEffect, Component } from 'react';
import { trackError, trackEvent } from '@/components/analytics/Analytics';

// Simple Error Boundary component
class ErrorBoundary extends Component<
  { children: ReactNode; FallbackComponent: ComponentType<any>; onError: (error: Error, errorInfo: any) => void },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    this.props.onError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.FallbackComponent;
      return <FallbackComponent error={this.state.error} resetErrorBoundary={() => this.setState({ hasError: false, error: null })} />;
    }

    return this.props.children;
  }
}

interface LazyComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ReactNode;
  onError?: (error: Error) => void;
}

interface LazyLoadOptions {
  fallback?: ReactNode;
  errorFallback?: ReactNode;
  retryable?: boolean;
  timeout?: number;
}

// Default loading fallback
const DefaultLoadingFallback = () => (
  <div className="flex items-center justify-center py-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-electric-blue"></div>
  </div>
);

// Default error fallback
const DefaultErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="flex flex-col items-center justify-center py-8 px-4">
    <div className="text-red-500 text-center mb-4">
      <h3 className="text-lg font-semibold mb-2">Something went wrong</h3>
      <p className="text-sm text-gray-600">Failed to load component</p>
    </div>
    <button
      onClick={resetErrorBoundary}
      className="px-4 py-2 bg-electric-blue text-white rounded hover:bg-electric-blue/90 transition-colors"
    >
      Try again
    </button>
  </div>
);

// Lazy component wrapper
export function LazyComponent({ 
  children, 
  fallback = <DefaultLoadingFallback />, 
  errorFallback,
  onError
}: LazyComponentProps) {
  const handleError = (error: Error, errorInfo: { componentStack: string }) => {
    trackError('lazy_component_error', error.message, window.location.pathname);
    
    if (onError) {
      onError(error);
    }
    
    console.error('Lazy component error:', error, errorInfo);
  };

  return (
    <ErrorBoundary
      FallbackComponent={errorFallback ? () => <>{errorFallback}</> : DefaultErrorFallback}
      onError={handleError}
    >
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

// Utility function to create lazy loaded components
export function createLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  options: LazyLoadOptions = {}
) {
  const LazyLoadedComponent = lazy(importFunc);
  
  return function LazyWrapper(props: React.ComponentProps<T>) {
    return (
      <LazyComponent
        fallback={options.fallback}
        errorFallback={options.errorFallback}
      >
        <LazyLoadedComponent {...props} />
      </LazyComponent>
    );
  };
}

// Higher-order component for lazy loading
export function withLazyLoading<T extends ComponentType<any>>(
  Component: T,
  options: LazyLoadOptions = {}
) {
  return function LazyWrapper(props: React.ComponentProps<T>) {
    return (
      <LazyComponent
        fallback={options.fallback}
        errorFallback={options.errorFallback}
      >
        <Component {...props} />
      </LazyComponent>
    );
  };
}

// Pre-built lazy components for common use cases
export const LazyEmailCapture = createLazyComponent(
  () => import('@/components/email/EmailCapture'),
  {
    fallback: <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />,
  }
);

export const LazyProductSearch = createLazyComponent(
  () => import('@/components/ui/ProductSearch'),
  {
    fallback: <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
  }
);

export const LazyTestimonialCarousel = createLazyComponent(
  () => import('@/components/ui/TestimonialCarousel'),
  {
    fallback: <div className="h-48 bg-gray-100 animate-pulse rounded-lg" />,
  }
);

// Intersection Observer based lazy loading
export function LazyOnScroll({ 
  children, 
  rootMargin = '50px',
  threshold = 0.1,
  fallback = <div className="h-48 bg-gray-100 animate-pulse rounded-lg" />
}: {
  children: ReactNode;
  rootMargin?: string;
  threshold?: number;
  fallback?: ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  );
}

// Performance-aware component loader
export function PerformanceAwareLazy({
  children,
  minLoadTime = 200,
  maxLoadTime = 5000,
  fallback = <DefaultLoadingFallback />
}: {
  children: ReactNode;
  minLoadTime?: number;
  maxLoadTime?: number;
  fallback?: ReactNode;
}) {
  const [showContent, setShowContent] = useState(false);
  const [isTimedOut, setIsTimedOut] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => {
      const loadTime = Date.now() - startTime.current;
      
      if (loadTime < minLoadTime) {
        // Ensure minimum loading time to prevent flash
        setTimeout(() => setShowContent(true), minLoadTime - loadTime);
      } else {
        setShowContent(true);
      }
    }, 0);

    const timeoutTimer = setTimeout(() => {
      setIsTimedOut(true);
      trackError('lazy_load_timeout', 'Component took too long to load', window.location.pathname);
    }, maxLoadTime);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeoutTimer);
    };
  }, [minLoadTime, maxLoadTime]);

  if (isTimedOut) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Component is taking longer than expected to load...</p>
      </div>
    );
  }

  return showContent ? <>{children}</> : fallback;
}

// Bundle size tracking
export function trackBundleSize(componentName: string) {
  if (process.env.NODE_ENV === 'production') {
    // Track when large components are loaded
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = Date.now() - navigationEntry.fetchStart;
    
    trackEvent('bundle_load', {
      category: 'performance',
      component_name: componentName,
      load_time: loadTime,
      timestamp: Date.now()
    });
  }
} 