'use client';

import { useEffect, useRef } from 'react';
import { trackScroll } from '@/components/analytics/Analytics';

export function useScrollTracking() {
  const scrollDepthRef = useRef(0);
  const trackedDepthsRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = Math.round((scrollTop / documentHeight) * 100);

      // Update max scroll depth
      if (scrollPercentage > scrollDepthRef.current) {
        scrollDepthRef.current = scrollPercentage;
      }

      // Track milestone scroll depths (25%, 50%, 75%, 100%)
      const milestones = [25, 50, 75, 100];
      milestones.forEach(milestone => {
        if (scrollPercentage >= milestone && !trackedDepthsRef.current.has(milestone)) {
          trackedDepthsRef.current.add(milestone);
          trackScroll(milestone);
        }
      });
    };

    // Throttle scroll events
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return {
    maxScrollDepth: scrollDepthRef.current,
    trackedDepths: Array.from(trackedDepthsRef.current)
  };
} 