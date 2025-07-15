'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './button';
import { ArrowRight, Star } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  rating?: number;
  ratingCount?: number;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage = '/images/hero-bg.jpg',
  rating = 4.9,
  ratingCount = 250,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Professional electrical panel with clear labels"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Rating */}
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(rating) ? 'text-safety-yellow fill-current' : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-300">
                {rating}/5 from {ratingCount}+ electricians
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              {subtitle}
            </p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-electric-blue hover:bg-electric-blue/90 text-white font-semibold px-8 py-4 text-lg"
              >
                <Link href={ctaLink}>
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                NEC 408.4(A) Compliant
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                UL 969 Certified
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-safety-yellow rounded-full mr-2" />
                5-Year Warranty
              </div>
            </div>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              <Image
                src="/images/product-showcase.jpg"
                alt="ClearCircuit panel labeling kit"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4 bg-safety-orange text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 