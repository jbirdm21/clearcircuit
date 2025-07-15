'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/components/analytics/Analytics';

interface PerformanceMetrics {
  CLS: number;
  FID: number;
  FCP: number;
  LCP: number;
  TTFB: number;
  INP?: number;
}

export default function PerformanceMonitor() {
  const metricsRef = useRef<Partial<PerformanceMetrics>>({});
  const hasReported = useRef(false);

  useEffect(() => {
    // Only run in production for real metrics
    if (process.env.NODE_ENV !== 'production') return;

    // Track Core Web Vitals
    const trackCoreWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        metricsRef.current.LCP = lastEntry.startTime;
        
        trackEvent('core_web_vitals', {
          category: 'performance',
          metric_name: 'LCP',
          value: Math.round(lastEntry.startTime),
          rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
        });
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP not supported');
      }

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metricsRef.current.FID = entry.processingStart - entry.startTime;
          
          trackEvent('core_web_vitals', {
            category: 'performance',
            metric_name: 'FID',
            value: Math.round(entry.processingStart - entry.startTime),
            rating: (entry.processingStart - entry.startTime) < 100 ? 'good' : (entry.processingStart - entry.startTime) < 300 ? 'needs_improvement' : 'poor'
          });
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID not supported');
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        metricsRef.current.CLS = clsValue;
        
        trackEvent('core_web_vitals', {
          category: 'performance',
          metric_name: 'CLS',
          value: Math.round(clsValue * 1000) / 1000,
          rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS not supported');
      }

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        
        if (fcpEntry) {
          metricsRef.current.FCP = fcpEntry.startTime;
          
          trackEvent('core_web_vitals', {
            category: 'performance',
            metric_name: 'FCP',
            value: Math.round(fcpEntry.startTime),
            rating: fcpEntry.startTime < 1800 ? 'good' : fcpEntry.startTime < 3000 ? 'needs_improvement' : 'poor'
          });
        }
      });
      
      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP not supported');
      }

      // Time to First Byte (TTFB)
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const ttfb = entry.responseStart - entry.requestStart;
          metricsRef.current.TTFB = ttfb;
          
          trackEvent('core_web_vitals', {
            category: 'performance',
            metric_name: 'TTFB',
            value: Math.round(ttfb),
            rating: ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs_improvement' : 'poor'
          });
        });
      });
      
      try {
        navigationObserver.observe({ entryTypes: ['navigation'] });
      } catch (e) {
        console.warn('TTFB not supported');
      }
    };

    // Track resource loading performance
    const trackResourcePerformance = () => {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry: any) => {
          if (entry.duration > 1000) { // Track slow resources
            trackEvent('slow_resource', {
              category: 'performance',
              resource_url: entry.name,
              duration: Math.round(entry.duration),
              resource_type: entry.initiatorType
            });
          }
        });
      });
      
      try {
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (e) {
        console.warn('Resource timing not supported');
      }
    };

    // Track memory usage (if available)
    const trackMemoryUsage = () => {
      if ('memory' in performance) {
        const memoryInfo = (performance as any).memory;
        
        trackEvent('memory_usage', {
          category: 'performance',
          used_heap_size: Math.round(memoryInfo.usedJSHeapSize / 1024 / 1024), // MB
          total_heap_size: Math.round(memoryInfo.totalJSHeapSize / 1024 / 1024), // MB
          heap_size_limit: Math.round(memoryInfo.jsHeapSizeLimit / 1024 / 1024) // MB
        });
      }
    };

    // Track page load performance
    const trackPageLoad = () => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          
          if (perfData) {
            trackEvent('page_load_timing', {
              category: 'performance',
              dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart),
              dom_complete: Math.round(perfData.domComplete - perfData.domInteractive),
              load_complete: Math.round(perfData.loadEventEnd - perfData.loadEventStart),
              total_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart)
            });
          }
        }, 0);
      });
    };

    // Initialize tracking
    trackCoreWebVitals();
    trackResourcePerformance();
    trackMemoryUsage();
    trackPageLoad();

    // Report comprehensive performance summary on page unload
    const reportPerformanceSummary = () => {
      if (hasReported.current) return;
      hasReported.current = true;

      const summary = {
        category: 'performance',
        page_url: window.location.pathname,
        metrics: metricsRef.current,
        user_agent: navigator.userAgent,
        connection_type: (navigator as any).connection?.effectiveType || 'unknown',
        timestamp: Date.now()
      };

      trackEvent('performance_summary', summary);
    };

    // Report on page unload
    window.addEventListener('beforeunload', reportPerformanceSummary);
    
    // Report on visibility change (when tab becomes hidden)
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        reportPerformanceSummary();
      }
    });

    return () => {
      window.removeEventListener('beforeunload', reportPerformanceSummary);
      document.removeEventListener('visibilitychange', reportPerformanceSummary);
    };
  }, []);

  // Only render in development to show performance info
  if (process.env.NODE_ENV === 'development') {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50 opacity-75">
        Performance Monitor Active
      </div>
    );
  }

  return null;
}

// Hook for accessing performance metrics
export function usePerformanceMetrics() {
  const metricsRef = useRef<Partial<PerformanceMetrics>>({});

  useEffect(() => {
    const updateMetrics = () => {
      // Get current performance metrics
      const perfEntries = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (perfEntries) {
        metricsRef.current = {
          ...metricsRef.current,
          TTFB: perfEntries.responseStart - perfEntries.requestStart,
          FCP: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
        };
      }
    };

    updateMetrics();
    
    // Update metrics periodically
    const interval = setInterval(updateMetrics, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return metricsRef.current;
} 