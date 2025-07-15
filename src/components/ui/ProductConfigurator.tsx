'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Check, AlertCircle, Zap, Info, ShoppingCart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProgressBar from '@/components/ui/ProgressBar';
import { trackEvent } from '@/components/analytics/Analytics';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';
import { PanelLabelKit } from '@/types';

interface ConfiguratorQuestion {
  id: string;
  title: string;
  description: string;
  type: 'single' | 'multiple';
  options: ConfiguratorOption[];
  required?: boolean;
  helpText?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface ConfiguratorOption {
  id: string;
  label: string;
  description?: string;
  value: string | number;
  image?: string;
  popular?: boolean;
  recommended?: boolean;
}

interface ConfiguratorResult {
  product: PanelLabelKit;
  confidence: number;
  reasons: string[];
  alternatives?: PanelLabelKit[];
}

interface ProductConfiguratorProps {
  products: PanelLabelKit[];
  onComplete?: (result: ConfiguratorResult) => void;
  onProductSelect?: (product: PanelLabelKit) => void;
  className?: string;
}

const configuratorQuestions: ConfiguratorQuestion[] = [
  {
    id: 'panel-type',
    title: 'What type of electrical panel do you have?',
    description: 'This helps us recommend the correct label size and fit.',
    type: 'single',
    required: true,
    helpText: 'Check the manufacturer label on your electrical panel',
    icon: Zap,
    options: [
      {
        id: 'square-d-qo',
        label: 'Square D QO',
        description: 'Square D QO series panels',
        value: 'square-d-qo',
        popular: true
      },
      {
        id: 'eaton-br',
        label: 'Eaton BR',
        description: 'Eaton BR series panels',
        value: 'eaton-br',
        popular: true
      },
      {
        id: 'siemens',
        label: 'Siemens',
        description: 'Siemens panels',
        value: 'siemens'
      },
      {
        id: 'general-electric',
        label: 'General Electric',
        description: 'GE panels',
        value: 'general-electric'
      },
      {
        id: 'unknown',
        label: 'Not Sure / Other',
        description: 'Universal fit labels',
        value: 'universal',
        recommended: true
      }
    ]
  },
  {
    id: 'slot-count',
    title: 'How many circuit slots does your panel have?',
    description: 'Count the total number of circuit breaker slots in your panel.',
    type: 'single',
    required: true,
    helpText: 'Count empty slots too - we need the total capacity',
    options: [
      {
        id: '12-slot',
        label: '12 Slots',
        description: 'Small residential panels',
        value: 12
      },
      {
        id: '20-slot',
        label: '20 Slots',
        description: 'Standard residential panels',
        value: 20,
        popular: true
      },
      {
        id: '24-slot',
        label: '24 Slots',
        description: 'Large residential panels',
        value: 24,
        popular: true
      },
      {
        id: '30-slot',
        label: '30 Slots',
        description: 'Large residential/small commercial',
        value: 30
      },
      {
        id: '40-slot',
        label: '40+ Slots',
        description: 'Commercial panels',
        value: 40
      }
    ]
  },
  {
    id: 'installation-type',
    title: 'Who will be installing the labels?',
    description: 'This helps us recommend the right complexity level.',
    type: 'single',
    required: true,
    options: [
      {
        id: 'homeowner',
        label: 'Homeowner (DIY)',
        description: 'Easy installation with clear instructions',
        value: 'homeowner',
        popular: true
      },
      {
        id: 'electrician',
        label: 'Licensed Electrician',
        description: 'Professional installation',
        value: 'electrician'
      },
      {
        id: 'contractor',
        label: 'Contractor',
        description: 'Multiple installations',
        value: 'contractor'
      }
    ]
  },
  {
    id: 'features',
    title: 'What features are important to you?',
    description: 'Select all that apply to get the best recommendation.',
    type: 'multiple',
    options: [
      {
        id: 'quick-install',
        label: 'Quick Installation',
        description: 'Peel and stick application',
        value: 'quick-install'
      },
      {
        id: 'custom-text',
        label: 'Custom Text',
        description: 'Personalized circuit names',
        value: 'custom-text'
      },
      {
        id: 'weather-resistant',
        label: 'Weather Resistant',
        description: 'Outdoor/garage installations',
        value: 'weather-resistant'
      },
      {
        id: 'code-compliant',
        label: 'Code Compliant',
        description: 'Meets NEC requirements',
        value: 'code-compliant'
      },
      {
        id: 'bulk-quantity',
        label: 'Bulk Quantity',
        description: 'Multiple panels/projects',
        value: 'bulk-quantity'
      }
    ]
  },
  {
    id: 'urgency',
    title: 'When do you need this completed?',
    description: 'This helps us recommend shipping options.',
    type: 'single',
    options: [
      {
        id: 'asap',
        label: 'ASAP (Rush)',
        description: 'Need within 2-3 days',
        value: 'asap'
      },
      {
        id: 'week',
        label: 'Within a Week',
        description: 'Standard shipping',
        value: 'week',
        popular: true
      },
      {
        id: 'month',
        label: 'Within a Month',
        description: 'Planning ahead',
        value: 'month'
      },
      {
        id: 'no-rush',
        label: 'No Rush',
        description: 'Whenever convenient',
        value: 'no-rush'
      }
    ]
  }
];

export default function ProductConfigurator({
  products,
  onComplete,
  onProductSelect,
  className = ''
}: ProductConfiguratorProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [result, setResult] = useState<ConfiguratorResult | null>(null);
  const { addItem } = useCart();

  const currentQuestion = configuratorQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / configuratorQuestions.length) * 100;

  useEffect(() => {
    // Track configurator start
    trackEvent('configurator_started', {
      category: 'product_discovery',
      label: 'product_configurator'
    });
  }, []);

  const handleAnswerSelect = (questionId: string, optionId: string, value: string | number) => {
    const question = configuratorQuestions.find(q => q.id === questionId);
    if (!question) return;

    setAnswers(prev => {
      const newAnswers = { ...prev };
      
      if (question.type === 'multiple') {
        const currentAnswers = (prev[questionId] as string[]) || [];
        if (currentAnswers.includes(optionId)) {
          // Remove if already selected
          newAnswers[questionId] = currentAnswers.filter(id => id !== optionId);
        } else {
          // Add to selection
          newAnswers[questionId] = [...currentAnswers, optionId];
        }
      } else {
        // Single selection
        newAnswers[questionId] = optionId;
      }
      
      return newAnswers;
    });

    // Auto-advance for single selection questions
    if (question.type === 'single') {
      setTimeout(() => {
        if (currentQuestionIndex < configuratorQuestions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          completeConfigurator();
        }
      }, 500);
    }
  };

  const completeConfigurator = () => {
    const recommendation = calculateRecommendation();
    setResult(recommendation);
    setIsComplete(true);

    // Track completion
    trackEvent('configurator_completed', {
      category: 'product_discovery',
      label: recommendation.product.id,
      value: recommendation.confidence
    });

    if (onComplete) {
      onComplete(recommendation);
    }
  };

  const calculateRecommendation = (): ConfiguratorResult => {
    // Simple recommendation algorithm
    let bestMatch = products[0];
    let confidence = 0;
    let reasons: string[] = [];

    // Panel type matching
    const panelType = answers['panel-type'] as string;
    const slotCount = answers['slot-count'] as string;
    const installerType = answers['installation-type'] as string;
    const features = (answers['features'] as string[]) || [];

    // Find best matching product
    for (const product of products) {
      let score = 0;
      let productReasons: string[] = [];

      // Panel type match
      if (panelType && product.panelType.toLowerCase().includes(panelType.replace('-', ' '))) {
        score += 30;
        productReasons.push('Matches your panel type');
      }

      // Slot count match
      if (slotCount) {
        const requestedSlots = parseInt(slotCount);
        if (product.slots === requestedSlots) {
          score += 25;
          productReasons.push('Perfect slot count match');
        } else if (Math.abs(product.slots - requestedSlots) <= 4) {
          score += 15;
          productReasons.push('Compatible slot count');
        }
      }

      // Category matching
      if (installerType === 'contractor' && product.category === 'bulk') {
        score += 20;
        productReasons.push('Bulk pricing for contractors');
      }

      if (installerType === 'homeowner' && product.category === 'standard') {
        score += 15;
        productReasons.push('Perfect for DIY installation');
      }

      // Feature matching
      if (features.includes('custom-text') && product.category === 'custom') {
        score += 20;
        productReasons.push('Supports custom text');
      }

      if (features.includes('code-compliant') && product.specifications.compliance.includes('NEC')) {
        score += 15;
        productReasons.push('NEC compliant');
      }

      // Update best match
      if (score > confidence) {
        confidence = score;
        bestMatch = product;
        reasons = productReasons;
      }
    }

    // Normalize confidence to percentage
    confidence = Math.min(100, Math.max(60, confidence));

    // Get alternatives
    const alternatives = products
      .filter(p => p.id !== bestMatch.id)
      .sort((a, b) => {
        // Simple scoring for alternatives
        let aScore = 0;
        let bScore = 0;
        
        if (panelType) {
          if (a.panelType.toLowerCase().includes(panelType.replace('-', ' '))) aScore += 10;
          if (b.panelType.toLowerCase().includes(panelType.replace('-', ' '))) bScore += 10;
        }
        
        return bScore - aScore;
      })
      .slice(0, 2);

    return {
      product: bestMatch,
      confidence,
      reasons,
      alternatives
    };
  };

  const handleNext = () => {
    const currentAnswer = answers[currentQuestion.id];
    
    if (currentQuestion.required && !currentAnswer) {
      toast.error('Please select an option to continue');
      return;
    }

    if (currentQuestionIndex < configuratorQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      completeConfigurator();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (result) {
      addItem(result.product);
      toast.success('Added to cart!', {
        description: `${result.product.name} has been added to your cart.`
      });
      
      trackEvent('configurator_add_to_cart', {
        category: 'ecommerce',
        label: result.product.id,
        value: result.product.price
      });
    }
  };

  const handleSelectProduct = (product: PanelLabelKit) => {
    if (onProductSelect) {
      onProductSelect(product);
    }
  };

  const restartConfigurator = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsComplete(false);
    setResult(null);
  };

  if (isComplete && result) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`max-w-4xl mx-auto ${className}`}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">
              Perfect Match Found!
            </CardTitle>
            <p className="text-gray-600">
              Based on your answers, we recommend this product with {result.confidence}% confidence.
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Recommended Product */}
            <div className="bg-electric-blue/5 border-2 border-electric-blue/20 rounded-lg p-6">
              <div className="flex items-start space-x-4">
                <img
                  src={result.product.image}
                  alt={result.product.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {result.product.name}
                    </h3>
                    <Badge className="bg-electric-blue text-white">
                      Recommended
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-3">
                    {result.product.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      ${result.product.price}
                    </span>
                    {result.product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        ${result.product.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Reasons */}
                  <div className="space-y-2 mb-4">
                    <h4 className="font-medium text-gray-900">Why this is perfect for you:</h4>
                    {result.reasons.map((reason, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      onClick={handleAddToCart}
                      className="bg-electric-blue hover:bg-electric-blue/90 text-white"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => handleSelectProduct(result.product)}
                      variant="outline"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Products */}
            {result.alternatives && result.alternatives.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Other Options to Consider
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {result.alternatives.map((product) => (
                    <Card key={product.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">
                              {product.name}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {product.shortDescription}
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-gray-900">
                                ${product.price}
                              </span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleSelectProduct(product)}
                              >
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-center space-x-4">
              <Button
                onClick={restartConfigurator}
                variant="outline"
              >
                Start Over
              </Button>
              <Button
                onClick={() => window.location.href = '/products'}
                variant="outline"
              >
                Browse All Products
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`max-w-2xl mx-auto ${className}`}
    >
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle className="text-xl font-bold text-gray-900">
              Product Configurator
            </CardTitle>
            <span className="text-sm text-gray-500">
              {currentQuestionIndex + 1} of {configuratorQuestions.length}
            </span>
          </div>
          <ProgressBar value={progress} className="mb-4" />
        </CardHeader>

        <CardContent>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestionIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Question */}
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  {currentQuestion.icon && (
                    <currentQuestion.icon className="w-5 h-5 text-electric-blue" />
                  )}
                  <h2 className="text-lg font-semibold text-gray-900">
                    {currentQuestion.title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  {currentQuestion.description}
                </p>
                {currentQuestion.helpText && (
                  <div className="flex items-start space-x-2 bg-blue-50 p-3 rounded-lg">
                    <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-blue-800">
                      {currentQuestion.helpText}
                    </p>
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = currentQuestion.type === 'multiple'
                    ? ((answers[currentQuestion.id] as string[]) || []).includes(option.id)
                    : answers[currentQuestion.id] === option.id;

                  return (
                    <motion.button
                      key={option.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleAnswerSelect(currentQuestion.id, option.id, option.value)}
                      className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                        isSelected
                          ? 'border-electric-blue bg-electric-blue/5'
                          : 'border-gray-200 hover:border-electric-blue/50 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-900">
                              {option.label}
                            </span>
                            {option.popular && (
                              <Badge variant="secondary" className="bg-safety-orange text-white">
                                Popular
                              </Badge>
                            )}
                            {option.recommended && (
                              <Badge variant="secondary" className="bg-electric-blue text-white">
                                <Star className="w-3 h-3 mr-1" />
                                Recommended
                              </Badge>
                            )}
                          </div>
                          {option.description && (
                            <p className="text-sm text-gray-600">
                              {option.description}
                            </p>
                          )}
                        </div>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          isSelected
                            ? 'border-electric-blue bg-electric-blue'
                            : 'border-gray-300'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              variant="outline"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>

            {currentQuestion.type === 'multiple' && (
              <Button
                onClick={handleNext}
                className="bg-electric-blue hover:bg-electric-blue/90 text-white"
              >
                {currentQuestionIndex === configuratorQuestions.length - 1 ? 'Get Recommendation' : 'Next'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 