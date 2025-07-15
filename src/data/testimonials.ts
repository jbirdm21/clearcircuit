import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Mike Rodriguez',
    company: 'Rodriguez Electric',
    role: 'Master Electrician',
    rating: 5,
    content: 'These labels saved me an hour and passed inspection first try! The quality is outstanding and they stick perfectly in hot panel environments. I\'ve been using them for 6 months now and clients always comment on how professional the panels look.',
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
    content: 'We cut troubleshooting time in half at our plant. Finally, panels that anyone can read and understand. The NEC compliance gives us peace of mind during inspections, and the durability means we won\'t have to redo this work.',
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
    role: 'DIY Homeowner',
    rating: 5,
    content: 'So easy my teenager helped label our house! The instructions were crystal clear and the labels look amazingly professional. No more guessing which breaker controls what. Best $29 I\'ve spent on home improvement.',
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
    content: 'I\'ve been in this business for 20 years and these are the best panel labels I\'ve ever used. The laser engraving is crisp, they never fade, and installation takes no time at all. My customers love the professional appearance.',
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
    content: 'We labeled 15 panels in our apartment complex and the difference is night and day. Maintenance calls are faster, tenants are happier, and we passed our last inspection without any electrical labeling issues.',
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
    content: 'The bulk pack is perfect for my business. I keep them in my van and use them on every job. Clients see the professional labeling and know they\'re getting quality work. These labels are now part of my standard service.',
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
    content: 'After 15 years of flip-flopping breakers to find the right one, these labels are a godsend. The installation was foolproof and they look like they were done by a professional. Highly recommend!',
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
    content: 'The custom kit was exactly what we needed for our industrial client. Being able to specify exact circuit names and get professional laser engraving made all the difference. Quality is top-notch.',
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