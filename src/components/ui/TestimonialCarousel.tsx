'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from './carousel';
import { Testimonial } from '@/types';
import { getFeaturedTestimonials } from '@/data/testimonials';
import { useEffect, useState } from 'react';

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

export default function TestimonialCarousel({
  testimonials = getFeaturedTestimonials(),
  title = 'Trusted by Professionals',
  subtitle = 'See what electricians and homeowners say about ClearCircuit',
}: TestimonialCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            setApi={setApi}
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <div className="flex items-center mb-4">
                        <div className="bg-electric-blue/10 p-2 rounded-full">
                          <Quote className="w-5 h-5 text-electric-blue" />
                        </div>
                        <div className="ml-auto flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating
                                  ? 'text-safety-yellow fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <blockquote className="text-gray-700 mb-6 flex-1">
                        &quot;{testimonial.content}&quot;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-safety-orange rounded-full flex items-center justify-center text-white font-semibold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="ml-3">
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                            {testimonial.company && (
                              <span className="text-gray-400"> • {testimonial.company}</span>
                            )}
                          </div>
                        </div>
                        {testimonial.verified && (
                          <div className="ml-auto">
                            <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                              Verified
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current - 1 ? 'bg-electric-blue' : 'bg-gray-300'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 