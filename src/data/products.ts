import { PanelLabelKit } from '@/types';

export const products: PanelLabelKit[] = [
  {
    id: '1',
    name: 'Standard 20-Slot Panel Kit (Square D QO)',
    slug: '20-slot-square-d-qo',
    description: 'Stop wasting time guessing which breaker controls what. This complete labeling solution eliminates confusion instantly, prevents costly electrical accidents, and ensures you pass every inspection on the first try. In just 5 minutes, transform your messy panel into a professional-grade system that impresses clients and protects your reputation.',
    shortDescription: 'Eliminate breaker confusion and pass every inspection - 5-minute installation for Square D QO panels',
    price: 29.00,
    image: '/images/products/20-slot-kit.jpg',
    images: [
      '/images/products/20-slot-kit.jpg',
      '/images/products/20-slot-installation.jpg',
      '/images/products/20-slot-labels-closeup.jpg'
    ],
    category: 'standard',
    slots: 20,
    panelType: 'Square D QO',
    features: [
      'Never fail another NEC 408.4(A) inspection',
      'Weatherproof materials last 10+ years',
      'Laser-engraved text never fades or peels',
      'Heat and moisture resistant for any environment',
      'Install in under 5 minutes with no special tools',
      'Extra blank labels included for future circuits'
    ],
    specifications: {
      material: 'UL 969 compliant polyester film',
      adhesive: 'High-performance acrylic adhesive',
      dimensions: '0.5" x 2.5" per label',
      compliance: ['NEC 408.4(A)', 'UL 969', 'RoHS'],
      warranty: '5-year adhesion and legibility warranty'
    },
    contents: [
      '20 pre-engraved circuit labels',
      '5 blank labels for custom circuits',
      'Installation guide',
      'Circuit mapping worksheet',
      'Cleaning wipe'
    ],
    inStock: true,
    stockCount: 150,
    tags: ['Square D', 'QO panel', 'residential', 'standard', 'most popular'],
    seoTitle: '20-Slot Square D QO Panel Labels - NEC Compliant | ClearCircuit',
    seoDescription: 'Professional panel labeling kit for Square D QO 20-slot panels. NEC 408.4(A) compliant, UL 969 durable labels. Fast installation, 5-year warranty.',
    weight: 0.2
  },
  {
    id: '2',
    name: 'Standard 24-Slot Panel Kit (Eaton BR)',
    slug: '24-slot-eaton-br',
    description: 'End the frustration of mystery breakers in your commercial panels. This professional-grade kit transforms chaotic electrical panels into organized, compliant systems that reduce service calls by 60%. Perfect for light commercial and larger residential applications where clear identification prevents costly downtime and emergency calls.',
    shortDescription: 'Professional-grade solution for Eaton BR panels - reduces service calls by 60%',
    price: 32.00,
    image: '/images/products/24-slot-kit.jpg',
    images: [
      '/images/products/24-slot-kit.jpg',
      '/images/products/24-slot-installation.jpg',
      '/images/products/24-slot-panel-example.jpg'
    ],
    category: 'standard',
    slots: 24,
    panelType: 'Eaton BR',
    features: [
      'Never fail another NEC 408.4(A) inspection',
      'Weatherproof materials last 10+ years',
      'Laser-engraved text never fades or peels',
      'Heat and moisture resistant for any environment',
      'Install in under 5 minutes with no special tools',
      'Extra blank labels included for future circuits'
    ],
    specifications: {
      material: 'UL 969 compliant polyester film',
      adhesive: 'High-performance acrylic adhesive',
      dimensions: '0.5" x 2.5" per label',
      compliance: ['NEC 408.4(A)', 'UL 969', 'RoHS'],
      warranty: '5-year adhesion and legibility warranty'
    },
    contents: [
      '24 pre-engraved circuit labels',
      '6 blank labels for custom circuits',
      'Installation guide',
      'Circuit mapping worksheet',
      'Cleaning wipe'
    ],
    inStock: true,
    stockCount: 120,
    tags: ['Eaton', 'BR panel', 'residential', 'light commercial', 'standard'],
    seoTitle: '24-Slot Eaton BR Panel Labels - Professional Grade | ClearCircuit',
    seoDescription: 'Premium panel labeling kit for Eaton BR 24-slot panels. Laser-engraved, NEC compliant, UL 969 certified. Professional installation in minutes.',
    weight: 0.25
  },
  {
    id: '3',
    name: 'Custom Universal Panel Kit',
    slug: 'custom-universal-kit',
    description: 'Finally, a solution for those impossible panel configurations. When standard kits won\'t work, this fully customizable system gives you complete control over your labeling. Perfect for commercial installations, unique panel types, or specific naming requirements. Get exactly what you need to satisfy even the most demanding inspectors and clients.',
    shortDescription: 'Complete customization for any panel type - perfect for commercial and unique configurations',
    price: 39.00,
    image: '/images/products/custom-kit.jpg',
    images: [
      '/images/products/custom-kit.jpg',
      '/images/products/custom-installation.jpg',
      '/images/products/custom-examples.jpg'
    ],
    category: 'custom',
    slots: 40,
    panelType: 'Universal',
    features: [
      'Works with any panel type or configuration',
      'Completely customizable text and layout',
      'Guaranteed NEC 408.4(A) compliance',
      'Commercial-grade durability and materials',
      'Permanent laser-engraved text never fades',
      'Extra labels included for future modifications'
    ],
    specifications: {
      material: 'UL 969 compliant polyester film',
      adhesive: 'High-performance acrylic adhesive',
      dimensions: '0.5" x 2.5" per label (standard)',
      compliance: ['NEC 408.4(A)', 'UL 969', 'RoHS'],
      warranty: '5-year adhesion and legibility warranty'
    },
    contents: [
      '40 custom laser-engraved labels',
      '10 blank labels for future use',
      'Installation guide',
      'Circuit mapping worksheet',
      'Cleaning wipe',
      'Custom sizing template'
    ],
    inStock: true,
    stockCount: 75,
    tags: ['custom', 'universal', 'commercial', 'flexible', 'any panel'],
    seoTitle: 'Custom Universal Panel Labels - Any Panel Type | ClearCircuit',
    seoDescription: 'Custom laser-engraved panel labels for any electrical panel. Universal fit, NEC compliant, fully customizable text. Perfect for commercial installations.',
    weight: 0.3
  },
  {
    id: '4',
    name: 'Bulk Contractor Pack (10 Kits)',
    slug: 'bulk-contractor-pack',
    description: 'Stop running out of labels on critical jobs. This contractor-focused pack ensures you\'re always prepared with the most popular panel types at a 20% discount. Perfect for electrical contractors who want to standardize their labeling across all jobs while saving money and impressing clients with consistent, professional results.',
    shortDescription: 'Professional contractor pack with 10 mixed kits - 20% savings plus consistent results',
    price: 232.00,
    originalPrice: 290.00,
    image: '/images/products/bulk-pack.jpg',
    images: [
      '/images/products/bulk-pack.jpg',
      '/images/products/bulk-contents.jpg',
      '/images/products/contractor-van.jpg'
    ],
    category: 'bulk',
    slots: 240,
    panelType: 'Mixed',
    features: [
      'Save 20% compared to individual kit purchases',
      'Never run out of labels on critical jobs',
      'Standardize your professional image across all projects',
      'Covers 95% of residential and light commercial panels',
      'Guaranteed compliance and quality on every job',
      'Organized packaging for easy van storage and inventory'
    ],
    specifications: {
      material: 'UL 969 compliant polyester film',
      adhesive: 'High-performance acrylic adhesive',
      dimensions: 'Various sizes included',
      compliance: ['NEC 408.4(A)', 'UL 969', 'RoHS'],
      warranty: '5-year adhesion and legibility warranty'
    },
    contents: [
      '4x 20-slot Square D QO kits',
      '4x 24-slot Eaton BR kits',
      '2x Custom universal kits',
      '10x Installation guides',
      '10x Circuit mapping worksheets',
      '10x Cleaning wipes'
    ],
    inStock: true,
    stockCount: 25,
    tags: ['bulk', 'contractor', 'discount', 'mixed', 'professional'],
    seoTitle: 'Bulk Contractor Panel Label Pack - 20% Off | ClearCircuit',
    seoDescription: 'Professional contractor pack with 10 mixed panel labeling kits. 20% discount, NEC compliant, perfect for electrical contractors.',
    weight: 2.5
  }
];

export const getProductBySlug = (slug: string): PanelLabelKit | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductById = (id: string): PanelLabelKit | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): PanelLabelKit[] => {
  return products.filter(product => product.category === 'standard');
};

export const getProductsByCategory = (category: string): PanelLabelKit[] => {
  return products.filter(product => product.category === category);
}; 