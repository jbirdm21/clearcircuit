import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mike Rodriguez',
    company: 'Rodriguez Electric',
    role: 'Master Electrician',
    rating: 5,
    content: 'These labels eliminated 90% of my troubleshooting time and passed inspection first try! Installation took exactly 4 minutes, and I\'ve had zero callbacks in 6 months. My clients always comment on how professional the panels look - it\'s become part of my competitive advantage.',
    image: '/images/testimonials/mike-rodriguez.jpg',
    verified: true,
    featured: true,
    createdAt: new Date('2024-01-15'),
    productId: '1'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    company: 'Metro Facilities Management',
    role: 'Facilities Manager',
    rating: 5,
    content: 'We reduced electrical troubleshooting time by 65% across our entire facility. What used to take 2 hours now takes 20 minutes. The NEC compliance eliminated all electrical violations in our last inspection, and our insurance carrier even gave us a 5% discount for improved safety.',
    image: '/images/testimonials/sarah-chen.jpg',
    verified: true,
    featured: true,
    createdAt: new Date('2024-02-03'),
    productId: '2'
  },
  {
    id: '3',
    name: 'Dave Thompson',
    company: undefined,
    role: 'Homeowner',
    rating: 5,
    content: 'Installation was so simple my 16-year-old helped me label our entire panel in 6 minutes! No more fumbling with breakers during power outages. The labels are still crystal clear after 18 months, and our electrician was impressed during our recent service call.',
    image: '/images/testimonials/dave-thompson.jpg',
    verified: true,
    featured: true,
    createdAt: new Date('2024-02-20'),
    productId: '1'
  },
  {
    id: '4',
    name: 'John Peterson',
    company: 'Peterson & Associates Electric',
    role: 'Licensed Electrician',
    rating: 5,
    content: '25 years in this business and these are hands-down the best panel labels I\'ve ever used. The laser engraving is still perfect after 14 months in harsh conditions. Installation takes 3-4 minutes, and I charge $75 more per job because clients see the professional quality.',
    image: '/images/testimonials/john-peterson.jpg',
    verified: true,
    featured: false,
    createdAt: new Date('2024-01-28'),
    productId: '1'
  },
  {
    id: '5',
    name: 'Lisa Martinez',
    company: 'ABC Property Management',
    role: 'Property Manager',
    rating: 5,
    content: 'We labeled 47 panels across 3 properties and reduced maintenance response time by 70%. Tenant complaints dropped from 15 per month to 2, and we passed our insurance inspection without a single electrical violation. ROI was complete within 3 months.',
    image: '/images/testimonials/lisa-martinez.jpg',
    verified: true,
    featured: false,
    createdAt: new Date('2024-02-10'),
    productId: '2'
  },
  {
    id: '6',
    name: 'Robert Kim',
    company: 'Kim Electric Services',
    role: 'Electrical Contractor',
    rating: 5,
    content: 'The bulk pack saves me $580 per year and I never run out of labels on critical jobs. Clients specifically request my labeling service now - it\'s become a $2,400 annual revenue stream. Professional appearance sets me apart from every competitor.',
    image: '/images/testimonials/robert-kim.jpg',
    verified: true,
    featured: false,
    createdAt: new Date('2024-01-08'),
    productId: '4'
  },
  {
    id: '7',
    name: 'Jennifer Walsh',
    company: undefined,
    role: 'Homeowner',
    rating: 5,
    content: 'After 12 years of guessing which breaker controlled what, these labels ended our electrical frustration forever. Installation took 8 minutes, and the instructions were foolproof. Even our electrician commented on how professional they looked during our recent upgrade.',
    image: '/images/testimonials/jennifer-walsh.jpg',
    verified: true,
    featured: false,
    createdAt: new Date('2024-02-14'),
    productId: '1'
  },
  {
    id: '8',
    name: 'Mark Stevens',
    company: 'Stevens Industrial Electric',
    role: 'Commercial Electrician',
    rating: 5,
    content: 'The custom kit solved our industrial client\'s complex labeling requirements perfectly. 52 custom labels installed in 15 minutes, and we passed the strict commercial inspection without any labeling issues. Client was so impressed they\'ve requested us for 3 more facilities.',
    image: '/images/testimonials/mark-stevens.jpg',
    verified: true,
    featured: false,
    createdAt: new Date('2024-01-22'),
    productId: '3'
  }
];

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getTestimonialsByProduct = (productId: string): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.productId === productId);
};

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id);
};

export const getAverageRating = (productId?: string): number => {
  const relevantTestimonials = productId 
    ? testimonials.filter(t => t.productId === productId)
    : testimonials;
  
  if (relevantTestimonials.length === 0) return 0;
  
  const sum = relevantTestimonials.reduce((acc, testimonial) => acc + testimonial.rating, 0);
  return sum / relevantTestimonials.length;
};

export const getTotalTestimonialCount = (productId?: string): number => {
  return productId 
    ? testimonials.filter(t => t.productId === productId).length
    : testimonials.length;
}; 