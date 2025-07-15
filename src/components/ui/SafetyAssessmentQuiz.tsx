'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Phone, 
  Download,
  Shield,
  Clock,
  Award,
  AlertCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

interface Question {
  id: string;
  question: string;
  options: {
    id: string;
    text: string;
    score: number;
    riskLevel: 'low' | 'medium' | 'high' | 'critical';
  }[];
}

interface AssessmentResult {
  overallScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  recommendations: string[];
  productRecommendation: string;
  urgencyLevel: 'normal' | 'urgent' | 'emergency';
}

const questions: Question[] = [
  {
    id: 'labeling_current',
    question: 'How would you describe your current electrical panel labeling?',
    options: [
      { id: 'professional', text: 'Professional, laser-engraved labels', score: 0, riskLevel: 'low' },
      { id: 'printed', text: 'Printed labels from a printer', score: 2, riskLevel: 'medium' },
      { id: 'handwritten', text: 'Handwritten labels', score: 4, riskLevel: 'high' },
      { id: 'missing', text: 'Missing or unclear labels', score: 6, riskLevel: 'critical' }
    ]
  },
  {
    id: 'inspection_history',
    question: 'What was your experience with your last electrical inspection?',
    options: [
      { id: 'passed_easily', text: 'Passed without any electrical violations', score: 0, riskLevel: 'low' },
      { id: 'minor_issues', text: 'Passed with minor labeling concerns', score: 2, riskLevel: 'medium' },
      { id: 'violations', text: 'Had electrical labeling violations', score: 4, riskLevel: 'high' },
      { id: 'no_recent', text: 'No recent inspection or failed', score: 5, riskLevel: 'critical' }
    ]
  },
  {
    id: 'emergency_response',
    question: 'During an electrical emergency, how quickly can your team identify the right circuit breaker?',
    options: [
      { id: 'immediately', text: 'Immediately (under 30 seconds)', score: 0, riskLevel: 'low' },
      { id: 'few_minutes', text: 'Within a few minutes', score: 2, riskLevel: 'medium' },
      { id: 'significant_time', text: 'Takes significant time and effort', score: 4, riskLevel: 'high' },
      { id: 'major_difficulty', text: 'Major difficulty or confusion', score: 6, riskLevel: 'critical' }
    ]
  },
  {
    id: 'maintenance_efficiency',
    question: 'How much time does your team typically spend troubleshooting electrical issues?',
    options: [
      { id: 'minimal', text: 'Minimal time - circuits are clearly identified', score: 0, riskLevel: 'low' },
      { id: 'moderate', text: 'Moderate time - some confusion', score: 2, riskLevel: 'medium' },
      { id: 'significant', text: 'Significant time - frequent confusion', score: 4, riskLevel: 'high' },
      { id: 'excessive', text: 'Excessive time - major productivity loss', score: 6, riskLevel: 'critical' }
    ]
  },
  {
    id: 'safety_incidents',
    question: 'Have you experienced any electrical incidents or near-misses related to circuit identification?',
    options: [
      { id: 'never', text: 'Never - excellent safety record', score: 0, riskLevel: 'low' },
      { id: 'rare', text: 'Rare minor incidents', score: 2, riskLevel: 'medium' },
      { id: 'occasional', text: 'Occasional safety concerns', score: 4, riskLevel: 'high' },
      { id: 'frequent', text: 'Frequent incidents or near-misses', score: 6, riskLevel: 'critical' }
    ]
  }
];

export default function SafetyAssessmentQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: ''
  });
  const [showContactForm, setShowContactForm] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (questionId: string, answerId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const calculateResults = (): AssessmentResult => {
    let totalScore = 0;
    const selectedAnswers = Object.entries(answers).map(([questionId, answerId]) => {
      const question = questions.find(q => q.id === questionId);
      const option = question?.options.find(o => o.id === answerId);
      if (option) {
        totalScore += option.score;
      }
      return { questionId, answerId, option };
    });

    let riskLevel: AssessmentResult['riskLevel'] = 'low';
    let urgencyLevel: AssessmentResult['urgencyLevel'] = 'normal';

    if (totalScore >= 20) {
      riskLevel = 'critical';
      urgencyLevel = 'emergency';
    } else if (totalScore >= 12) {
      riskLevel = 'high';
      urgencyLevel = 'urgent';
    } else if (totalScore >= 6) {
      riskLevel = 'medium';
      urgencyLevel = 'normal';
    }

    const recommendations = generateRecommendations(selectedAnswers, riskLevel);
    const productRecommendation = getProductRecommendation(riskLevel, selectedAnswers);

    return {
      overallScore: totalScore,
      riskLevel,
      recommendations,
      productRecommendation,
      urgencyLevel
    };
  };

  const generateRecommendations = (answers: any[], riskLevel: string): string[] => {
    const recommendations: string[] = [];

    if (riskLevel === 'critical') {
      recommendations.push('IMMEDIATE ACTION REQUIRED: Contact our emergency safety experts within 24 hours');
      recommendations.push('Implement professional labeling system immediately');
      recommendations.push('Conduct comprehensive electrical safety audit');
      recommendations.push('Establish emergency response protocols');
    } else if (riskLevel === 'high') {
      recommendations.push('Schedule professional safety assessment within 1 week');
      recommendations.push('Upgrade to professional-grade labeling system');
      recommendations.push('Implement electrical safety training for your team');
      recommendations.push('Review and update emergency procedures');
    } else if (riskLevel === 'medium') {
      recommendations.push('Consider upgrading to professional labeling system');
      recommendations.push('Schedule safety assessment within 30 days');
      recommendations.push('Review current labeling for compliance');
      recommendations.push('Implement preventive maintenance schedule');
    } else {
      recommendations.push('Continue current safety practices');
      recommendations.push('Schedule annual safety review');
      recommendations.push('Consider expanding to additional panels');
      recommendations.push('Share best practices with industry peers');
    }

    return recommendations;
  };

  const getProductRecommendation = (riskLevel: string, answers: any[]): string => {
    if (riskLevel === 'critical') {
      return 'Emergency Safety Assessment + Custom Professional Labeling System';
    } else if (riskLevel === 'high') {
      return 'Professional Safety Assessment + Standard 20-Slot Kit';
    } else if (riskLevel === 'medium') {
      return 'Standard 20-Slot Kit + Installation Support';
    } else {
      return 'Maintenance Kit + Annual Safety Review';
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - integrate with your lead capture system
    console.log('Assessment completed:', { userInfo, answers, results: calculateResults() });
    setShowContactForm(false);
  };

  const results = showResults ? calculateResults() : null;

  const getRiskColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return 'text-red-700 bg-red-50 border-red-200';
      case 'high': return 'text-orange-700 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-700 bg-yellow-50 border-yellow-200';
      default: return 'text-green-700 bg-green-50 border-green-200';
    }
  };

  const getRiskIcon = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return <AlertTriangle className="w-5 h-5" />;
      case 'high': return <AlertCircle className="w-5 h-5" />;
      case 'medium': return <Clock className="w-5 h-5" />;
      default: return <CheckCircle className="w-5 h-5" />;
    }
  };

  if (showResults && results) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">
            Your Electrical Safety Assessment Results
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Risk Level Display */}
          <div className={`p-6 rounded-lg border-2 ${getRiskColor(results.riskLevel)}`}>
            <div className="flex items-center justify-center mb-4">
              {getRiskIcon(results.riskLevel)}
              <span className="ml-2 text-xl font-bold capitalize">
                {results.riskLevel} Risk Level
              </span>
            </div>
            <p className="text-center text-lg">
              {results.riskLevel === 'critical' && 'IMMEDIATE ACTION REQUIRED - Contact our emergency safety experts now'}
              {results.riskLevel === 'high' && 'HIGH RISK - Professional intervention recommended within 1 week'}
              {results.riskLevel === 'medium' && 'MODERATE RISK - Consider professional safety assessment'}
              {results.riskLevel === 'low' && 'LOW RISK - Continue current safety practices'}
            </p>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Your Personalized Recommendations</h3>
            <div className="space-y-3">
              {results.recommendations.map((rec, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{rec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Recommendation */}
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Recommended Solution
            </h3>
            <p className="text-blue-700 mb-4">{results.productRecommendation}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-electric-blue hover:bg-electric-blue/90">
                <Shield className="w-4 h-4 mr-2" />
                Get Professional Assessment
              </Button>
              <Button variant="outline" className="border-electric-blue text-electric-blue">
                <Download className="w-4 h-4 mr-2" />
                Download Safety Guide
              </Button>
            </div>
          </div>

          {/* Emergency Contact for Critical Risk */}
          {results.riskLevel === 'critical' && (
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
              <h3 className="text-xl font-semibold mb-2 text-red-800">
                🚨 Emergency Safety Support
              </h3>
              <p className="text-red-700 mb-4">
                Your assessment indicates critical electrical safety risks. Our emergency safety experts are available 24/7 to provide immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-red-600 hover:bg-red-700 animate-pulse"
                  onClick={() => window.open('tel:+15559115233', '_self')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Emergency Line: (555) 911-SAFE
                </Button>
                <Button 
                  variant="outline" 
                  className="border-red-600 text-red-600"
                  onClick={() => setShowContactForm(true)}
                >
                  Request Emergency Assessment
                </Button>
              </div>
            </div>
          )}

          {/* Contact Form */}
          {showContactForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-white p-6 rounded-lg border-2 border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4">
                Get Your Professional Safety Assessment
              </h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={userInfo.name}
                      onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={userInfo.email}
                      onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      value={userInfo.company}
                      onChange={(e) => setUserInfo({...userInfo, company: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    value={userInfo.role}
                    onChange={(e) => setUserInfo({...userInfo, role: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
                  >
                    <option value="">Select your role</option>
                    <option value="contractor">Electrical Contractor</option>
                    <option value="facility-manager">Facility Manager</option>
                    <option value="safety-coordinator">Safety Coordinator</option>
                    <option value="maintenance">Maintenance Team</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <Button type="submit" className="bg-electric-blue hover:bg-electric-blue/90">
                    Get My Assessment
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowContactForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* Restart Quiz */}
          <div className="text-center">
            <Button 
              variant="outline" 
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
                setShowContactForm(false);
              }}
            >
              Retake Assessment
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Free Electrical Safety Assessment
        </CardTitle>
        <p className="text-center text-gray-600">
          Get personalized recommendations in 2 minutes
        </p>
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardHeader>
      <CardContent>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(questions[currentQuestion].id, option.id)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      answers[questions[currentQuestion].id] === option.id
                        ? 'border-electric-blue bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option.text}</span>
                      {answers[questions[currentQuestion].id] === option.id && (
                        <CheckCircle className="w-5 h-5 text-electric-blue" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[questions[currentQuestion].id]}
                  className="bg-electric-blue hover:bg-electric-blue/90"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
} 