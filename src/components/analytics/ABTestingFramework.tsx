'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { trackEvent } from '@/components/analytics/Analytics';

interface ABTestVariant {
  id: string;
  name: string;
  weight: number; // 0-100, should sum to 100 across all variants
  component?: React.ComponentType<any>;
  props?: Record<string, any>;
  content?: string;
  isControl?: boolean;
}

interface ABTest {
  id: string;
  name: string;
  description: string;
  variants: ABTestVariant[];
  enabled: boolean;
  startDate: Date;
  endDate?: Date;
  targetedAudience?: {
    userType?: 'new' | 'returning' | 'any';
    pageType?: string[];
    location?: string[];
  };
  conversionGoal?: {
    eventName: string;
    eventValue?: number;
  };
  sampleSize?: number;
  significanceLevel?: number; // 0.01, 0.05, 0.10
}

interface ABTestContext {
  getVariant: (testId: string) => ABTestVariant | null;
  trackConversion: (testId: string, eventName: string, eventValue?: number) => void;
  enrollUser: (testId: string) => void;
  isEnrolled: (testId: string) => boolean;
  getTestResults: (testId: string) => ABTestResults | null;
}

interface ABTestResults {
  testId: string;
  variants: {
    id: string;
    name: string;
    impressions: number;
    conversions: number;
    conversionRate: number;
    isSignificant: boolean;
    confidenceInterval: [number, number];
  }[];
  winningVariant?: string;
  statisticalSignificance: number;
  isComplete: boolean;
}

interface UserEnrollment {
  testId: string;
  variantId: string;
  enrollmentDate: Date;
  hasConverted: boolean;
  conversionDate?: Date;
  conversionValue?: number;
}

// Default A/B tests configuration
const defaultABTests: ABTest[] = [
  {
    id: 'homepage-hero-headline',
    name: 'Homepage Hero Headline',
    description: 'Test different hero headlines for conversion optimization',
    enabled: true,
    startDate: new Date('2024-01-01'),
    endDate: new Date('2024-12-31'),
    conversionGoal: {
      eventName: 'product_view',
      eventValue: 1
    },
    variants: [
      {
        id: 'control',
        name: 'Control - No More Mystery Breakers',
        weight: 50,
        content: 'No More Mystery Breakers',
        isControl: true
      },
      {
        id: 'safety-focused',
        name: 'Safety Focused - Prevent Electrical Accidents',
        weight: 50,
        content: 'Prevent Electrical Accidents with Clear Labels'
      }
    ]
  },
  {
    id: 'product-page-cta',
    name: 'Product Page CTA Text',
    description: 'Test different CTA button text on product pages',
    enabled: true,
    startDate: new Date('2024-01-01'),
    conversionGoal: {
      eventName: 'add_to_cart',
      eventValue: 1
    },
    variants: [
      {
        id: 'control',
        name: 'Control - Add to Cart',
        weight: 25,
        content: 'Add to Cart',
        isControl: true
      },
      {
        id: 'urgency',
        name: 'Urgency - Get Yours Now',
        weight: 25,
        content: 'Get Yours Now'
      },
      {
        id: 'value',
        name: 'Value - Start Saving Today',
        weight: 25,
        content: 'Start Saving Today'
      },
      {
        id: 'safety',
        name: 'Safety - Secure Your Home',
        weight: 25,
        content: 'Secure Your Home'
      }
    ]
  },
  {
    id: 'pricing-display',
    name: 'Pricing Display Format',
    description: 'Test different ways to display pricing information',
    enabled: true,
    startDate: new Date('2024-01-01'),
    conversionGoal: {
      eventName: 'purchase',
      eventValue: 1
    },
    variants: [
      {
        id: 'control',
        name: 'Control - Standard Pricing',
        weight: 50,
        props: { showSavings: false, emphasizeValue: false },
        isControl: true
      },
      {
        id: 'value-emphasis',
        name: 'Value Emphasis - Show Savings',
        weight: 50,
        props: { showSavings: true, emphasizeValue: true }
      }
    ]
  },
  {
    id: 'trust-signals-position',
    name: 'Trust Signals Position',
    description: 'Test different positions for trust signals on product pages',
    enabled: true,
    startDate: new Date('2024-01-01'),
    conversionGoal: {
      eventName: 'add_to_cart',
      eventValue: 1
    },
    variants: [
      {
        id: 'control',
        name: 'Control - Below Product Info',
        weight: 50,
        props: { position: 'below' },
        isControl: true
      },
      {
        id: 'sidebar',
        name: 'Test - Sidebar Position',
        weight: 50,
        props: { position: 'sidebar' }
      }
    ]
  }
];

// A/B Testing Context
const ABTestingContext = createContext<ABTestContext | null>(null);

// Local storage keys
const ENROLLMENT_KEY = 'ab_test_enrollments';
const RESULTS_KEY = 'ab_test_results';

class ABTestingManager {
  private static instance: ABTestingManager;
  private tests: Map<string, ABTest> = new Map();
  private enrollments: Map<string, UserEnrollment> = new Map();
  private results: Map<string, ABTestResults> = new Map();

  private constructor() {
    this.loadFromStorage();
    this.initializeTests();
  }

  static getInstance(): ABTestingManager {
    if (!ABTestingManager.instance) {
      ABTestingManager.instance = new ABTestingManager();
    }
    return ABTestingManager.instance;
  }

  private loadFromStorage() {
    if (typeof window === 'undefined') return;

    // Load enrollments
    const enrollmentsData = localStorage.getItem(ENROLLMENT_KEY);
    if (enrollmentsData) {
      const enrollments = JSON.parse(enrollmentsData);
      enrollments.forEach((enrollment: UserEnrollment) => {
        this.enrollments.set(enrollment.testId, enrollment);
      });
    }

    // Load results
    const resultsData = localStorage.getItem(RESULTS_KEY);
    if (resultsData) {
      const results = JSON.parse(resultsData);
      results.forEach((result: ABTestResults) => {
        this.results.set(result.testId, result);
      });
    }
  }

  private saveToStorage() {
    if (typeof window === 'undefined') return;

    // Save enrollments
    const enrollments = Array.from(this.enrollments.values());
    localStorage.setItem(ENROLLMENT_KEY, JSON.stringify(enrollments));

    // Save results
    const results = Array.from(this.results.values());
    localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
  }

  private initializeTests() {
    defaultABTests.forEach(test => {
      this.tests.set(test.id, test);
      
      // Initialize results if not exist
      if (!this.results.has(test.id)) {
        this.results.set(test.id, {
          testId: test.id,
          variants: test.variants.map(variant => ({
            id: variant.id,
            name: variant.name,
            impressions: 0,
            conversions: 0,
            conversionRate: 0,
            isSignificant: false,
            confidenceInterval: [0, 0]
          })),
          statisticalSignificance: 0,
          isComplete: false
        });
      }
    });
  }

  enrollUser(testId: string): void {
    const test = this.tests.get(testId);
    if (!test || !test.enabled) return;

    // Check if user is already enrolled
    if (this.enrollments.has(testId)) return;

    // Check if test is active
    const now = new Date();
    if (now < test.startDate || (test.endDate && now > test.endDate)) {
      return;
    }

    // Select variant based on weights
    const selectedVariant = this.selectVariantByWeight(test.variants);
    if (!selectedVariant) return;

    // Enroll user
    const enrollment: UserEnrollment = {
      testId,
      variantId: selectedVariant.id,
      enrollmentDate: now,
      hasConverted: false
    };

    this.enrollments.set(testId, enrollment);
    this.saveToStorage();

    // Track impression
    this.trackImpression(testId, selectedVariant.id);

    // Track enrollment event
    trackEvent('ab_test_enrollment', {
      category: 'ab_testing',
      label: `${testId}_${selectedVariant.id}`,
      value: 1,
      custom_parameter_1: testId,
      custom_parameter_2: selectedVariant.id
    });
  }

  private selectVariantByWeight(variants: ABTestVariant[]): ABTestVariant | null {
    const totalWeight = variants.reduce((sum, variant) => sum + variant.weight, 0);
    if (totalWeight === 0) return null;

    let random = Math.random() * totalWeight;
    
    for (const variant of variants) {
      random -= variant.weight;
      if (random <= 0) {
        return variant;
      }
    }

    return variants[0]; // Fallback
  }

  private trackImpression(testId: string, variantId: string) {
    const results = this.results.get(testId);
    if (!results) return;

    const variant = results.variants.find(v => v.id === variantId);
    if (variant) {
      variant.impressions++;
      this.updateConversionRates(testId);
      this.saveToStorage();
    }
  }

  getVariant(testId: string): ABTestVariant | null {
    const enrollment = this.enrollments.get(testId);
    if (!enrollment) {
      this.enrollUser(testId);
      return this.getVariant(testId);
    }

    const test = this.tests.get(testId);
    if (!test) return null;

    return test.variants.find(v => v.id === enrollment.variantId) || null;
  }

  trackConversion(testId: string, eventName: string, eventValue?: number): void {
    const enrollment = this.enrollments.get(testId);
    if (!enrollment || enrollment.hasConverted) return;

    const test = this.tests.get(testId);
    if (!test || !test.conversionGoal) return;

    // Check if this is the target conversion event
    if (eventName !== test.conversionGoal.eventName) return;

    // Mark as converted
    enrollment.hasConverted = true;
    enrollment.conversionDate = new Date();
    enrollment.conversionValue = eventValue || test.conversionGoal.eventValue || 1;

    // Update results
    const results = this.results.get(testId);
    if (results) {
      const variant = results.variants.find(v => v.id === enrollment.variantId);
      if (variant) {
        variant.conversions++;
        this.updateConversionRates(testId);
        this.checkStatisticalSignificance(testId);
      }
    }

    this.saveToStorage();

    // Track conversion event
    trackEvent('ab_test_conversion', {
      category: 'ab_testing',
      label: `${testId}_${enrollment.variantId}`,
      value: enrollment.conversionValue,
      custom_parameter_1: testId,
      custom_parameter_2: enrollment.variantId
    });
  }

  private updateConversionRates(testId: string) {
    const results = this.results.get(testId);
    if (!results) return;

    results.variants.forEach(variant => {
      variant.conversionRate = variant.impressions > 0 
        ? (variant.conversions / variant.impressions) * 100 
        : 0;
    });
  }

  private checkStatisticalSignificance(testId: string) {
    const results = this.results.get(testId);
    if (!results || results.variants.length < 2) return;

    // Simple statistical significance check (Chi-square test)
    const controlVariant = results.variants.find(v => v.id === 'control');
    if (!controlVariant) return;

    results.variants.forEach(variant => {
      if (variant.id === 'control') return;

      const significance = this.calculateSignificance(
        controlVariant.conversions,
        controlVariant.impressions,
        variant.conversions,
        variant.impressions
      );

      variant.isSignificant = significance < 0.05;
      variant.confidenceInterval = this.calculateConfidenceInterval(
        variant.conversions,
        variant.impressions
      );
    });

    // Determine winning variant
    const significantVariants = results.variants.filter(v => v.isSignificant);
    if (significantVariants.length > 0) {
      results.winningVariant = significantVariants.reduce((winner, current) =>
        current.conversionRate > winner.conversionRate ? current : winner
      ).id;
    }
  }

  private calculateSignificance(
    controlConversions: number,
    controlImpressions: number,
    testConversions: number,
    testImpressions: number
  ): number {
    // Chi-square test implementation
    const controlRate = controlConversions / controlImpressions;
    const testRate = testConversions / testImpressions;
    const pooledRate = (controlConversions + testConversions) / (controlImpressions + testImpressions);

    const expectedControl = controlImpressions * pooledRate;
    const expectedTest = testImpressions * pooledRate;

    const chiSquare = 
      Math.pow(controlConversions - expectedControl, 2) / expectedControl +
      Math.pow(testConversions - expectedTest, 2) / expectedTest;

    // Simplified p-value calculation (for demonstration)
    // In production, use a proper statistical library
    return chiSquare > 3.84 ? 0.05 : 0.1;
  }

  private calculateConfidenceInterval(conversions: number, impressions: number): [number, number] {
    const rate = conversions / impressions;
    const standardError = Math.sqrt((rate * (1 - rate)) / impressions);
    const margin = 1.96 * standardError; // 95% confidence interval

    return [
      Math.max(0, (rate - margin) * 100),
      Math.min(100, (rate + margin) * 100)
    ];
  }

  isEnrolled(testId: string): boolean {
    return this.enrollments.has(testId);
  }

  getTestResults(testId: string): ABTestResults | null {
    return this.results.get(testId) || null;
  }

  getAllTestResults(): ABTestResults[] {
    return Array.from(this.results.values());
  }

  getActiveTests(): ABTest[] {
    const now = new Date();
    return Array.from(this.tests.values()).filter(test => 
      test.enabled && 
      now >= test.startDate && 
      (!test.endDate || now <= test.endDate)
    );
  }
}

// A/B Testing Provider Component
export function ABTestingProvider({ children }: { children: React.ReactNode }) {
  const [manager] = useState(() => ABTestingManager.getInstance());

  const contextValue: ABTestContext = {
    getVariant: (testId: string) => manager.getVariant(testId),
    trackConversion: (testId: string, eventName: string, eventValue?: number) => 
      manager.trackConversion(testId, eventName, eventValue),
    enrollUser: (testId: string) => manager.enrollUser(testId),
    isEnrolled: (testId: string) => manager.isEnrolled(testId),
    getTestResults: (testId: string) => manager.getTestResults(testId)
  };

  return (
    <ABTestingContext.Provider value={contextValue}>
      {children}
    </ABTestingContext.Provider>
  );
}

// Hook to use A/B testing
export function useABTest(testId: string): {
  variant: ABTestVariant | null;
  trackConversion: (eventName: string, eventValue?: number) => void;
  isEnrolled: boolean;
} {
  const context = useContext(ABTestingContext);
  if (!context) {
    throw new Error('useABTest must be used within ABTestingProvider');
  }

  const [variant, setVariant] = useState<ABTestVariant | null>(null);

  useEffect(() => {
    const selectedVariant = context.getVariant(testId);
    setVariant(selectedVariant);
  }, [testId, context]);

  return {
    variant,
    trackConversion: (eventName: string, eventValue?: number) => 
      context.trackConversion(testId, eventName, eventValue),
    isEnrolled: context.isEnrolled(testId)
  };
}

// A/B Test Component for easy testing
export function ABTestComponent({ 
  testId, 
  fallback 
}: { 
  testId: string; 
  fallback?: React.ReactNode; 
}) {
  const { variant } = useABTest(testId);

  if (!variant) {
    return fallback || null;
  }

  if (variant.component) {
    const Component = variant.component;
    return <Component {...(variant.props || {})} />;
  }

  if (variant.content) {
    return <span>{variant.content}</span>;
  }

  return fallback || null;
}

// A/B Test Results Dashboard Component
export function ABTestDashboard() {
  const [results, setResults] = useState<ABTestResults[]>([]);
  const manager = ABTestingManager.getInstance();

  useEffect(() => {
    setResults(manager.getAllTestResults());
  }, [manager]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">A/B Test Results</h2>
      
      {results.map(result => (
        <div key={result.testId} className="mb-8 p-4 border rounded-lg">
          <h3 className="text-lg font-semibold mb-4">{result.testId}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {result.variants.map(variant => (
              <div key={variant.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">{variant.name}</h4>
                  {variant.isSignificant && (
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      Significant
                    </span>
                  )}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div>Impressions: {variant.impressions}</div>
                  <div>Conversions: {variant.conversions}</div>
                  <div>Rate: {variant.conversionRate.toFixed(2)}%</div>
                  <div>
                    CI: {variant.confidenceInterval[0].toFixed(1)}% - {variant.confidenceInterval[1].toFixed(1)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {result.winningVariant && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
              <strong>Winner: {result.winningVariant}</strong>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ABTestingManager; 