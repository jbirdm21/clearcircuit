import { Metadata } from 'next';
import { BookOpen, Calendar, User, Tag, ArrowRight, Bell } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EmailCapture from '@/components/email/EmailCapture';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electrical Safety Blog | ClearCircuit™',
  description: 'Stay informed with electrical safety tips, product updates, and industry insights from ClearCircuit experts.',
  robots: 'index, follow',
};

const upcomingTopics = [
  {
    title: 'Understanding NEC 408.4(A) Requirements',
    description: 'A comprehensive guide to electrical code requirements for panel identification',
    category: 'Safety',
    readTime: '5 min read',
    coming: 'Coming Soon'
  },
  {
    title: 'Common Electrical Panel Mistakes to Avoid',
    description: 'Learn about the most frequent errors in electrical panel installation and labeling',
    category: 'Installation',
    readTime: '7 min read',
    coming: 'Coming Soon'
  },
  {
    title: 'Choosing the Right Labels for Your Panel Type',
    description: 'How to select the perfect labeling solution for different electrical panel brands',
    category: 'Products',
    readTime: '4 min read',
    coming: 'Coming Soon'
  },
  {
    title: 'Electrical Safety for Homeowners',
    description: 'Essential electrical safety tips every homeowner should know',
    category: 'Safety',
    readTime: '6 min read',
    coming: 'Coming Soon'
  },
  {
    title: 'Professional Installation Tips',
    description: 'Best practices for electricians when installing panel labels',
    category: 'Professional',
    readTime: '8 min read',
    coming: 'Coming Soon'
  },
  {
    title: 'Electrical Code Updates 2024',
    description: 'Latest changes to electrical codes and how they affect panel labeling',
    category: 'Compliance',
    readTime: '6 min read',
    coming: 'Coming Soon'
  }
];

const categories = [
  { name: 'Safety', count: 12, color: 'bg-red-100 text-red-800' },
  { name: 'Installation', count: 8, color: 'bg-blue-100 text-blue-800' },
  { name: 'Products', count: 6, color: 'bg-green-100 text-green-800' },
  { name: 'Professional', count: 5, color: 'bg-purple-100 text-purple-800' },
  { name: 'Compliance', count: 4, color: 'bg-orange-100 text-orange-800' }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-electric-blue rounded-full flex items-center justify-center">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Electrical Safety Blog</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with electrical safety tips, product updates, and industry insights from our experts.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <Card className="mb-12 bg-gradient-to-r from-electric-blue to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
              <Bell className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Blog Coming Soon!</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We're preparing valuable content about electrical safety, installation tips, and industry updates. 
              Sign up for our newsletter to be notified when we launch.
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture variant="inline" />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Content Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-4 text-center">
                  <Badge className={`mb-2 ${category.color}`}>
                    {category.name}
                  </Badge>
                  <p className="text-sm text-gray-600">{category.count} articles</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Content */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingTopics.map((topic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-electric-blue border-electric-blue">
                      {topic.category}
                    </Badge>
                    <span className="text-sm text-gray-500">{topic.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{topic.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {topic.coming}
                    </div>
                    <Button variant="ghost" size="sm" disabled>
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-6">
                Get the latest electrical safety tips, product updates, and industry insights delivered to your inbox.
              </p>
              <EmailCapture variant="inline" />
            </div>
          </CardContent>
        </Card>

        {/* Current Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Current Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Resources</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Access our comprehensive electrical safety guides, installation instructions, and best practices.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/safety-resources">
                    View Safety Resources
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Installation Guide</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step instructions for installing electrical panel labels safely and correctly.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/how-it-works">
                    View Installation Guide
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact for Content Suggestions */}
        <Card className="bg-gray-100">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Content Suggestions?</h3>
            <p className="text-gray-600 mb-6">
              We'd love to hear what topics you'd like us to cover. Send us your ideas and questions.
            </p>
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 