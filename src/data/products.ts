import { PanelLabelKit } from '@/types';

export const products: PanelLabelKit[] = [
  {
    id: '1',
    name: 'Standard 20-Slot Panel Kit (Square D QO)',
    slug: '20-slot-square-d-qo',
    description: 'Complete labeling solution for 20-slot Square D QO panels. Each kit includes 20 laser-engraved labels with the most common circuit names, plus 5 blank labels for custom circuits. Labels are made with UL 969 compliant polyester and high-performance adhesive designed to last decades in electrical panel environments.',
    shortDescription: 'Complete labeling kit for 20-slot Square D QO panels with pre-engraved common circuits',
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
      'NEC 408.4(A) compliant labeling',
      'UL 969 durable polyester material',
      'Laser-engraved for permanent clarity',
      'Heat and moisture resistant',
      'Installs in under 5 minutes',
      'Includes 5 blank labels for custom circuits'
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
    description: 'Professional labeling solution for 24-slot Eaton BR panels. Features laser-engraved labels with common residential and light commercial circuit names. Made with UL 969 compliant materials for long-lasting performance in electrical environments.',
    shortDescription: 'Professional labeling kit for 24-slot Eaton BR panels with durable laser-engraved labels',
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
      'Perfect fit for Eaton BR panels',
      'NEC 408.4(A) compliant',
      'UL 969 certified materials',
      'Laser-engraved for clarity',
      'Weather and heat resistant',
      'Includes blank labels for custom circuits'
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
    description: 'The ultimate flexibility for any panel configuration. This kit includes 40 labels that can be laser-engraved with your specific circuit names and requirements. Perfect for unusual panel layouts, commercial installations, or panels with specific naming conventions.',
    shortDescription: 'Fully customizable labeling solution for any panel type with laser-engraved custom text',
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
      'Fits any panel type and size',
      'Fully customizable text',
      'NEC 408.4(A) compliant',
      'UL 969 certified materials',
      'Laser-engraved for permanence',
      'Extra labels included for future changes'
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
    description: 'Professional contractor pack containing 10 mixed panel kits at a discounted price. Perfect for electrical contractors who work on multiple panel types. Mix of Square D QO, Eaton BR, and universal kits to cover most residential and light commercial projects.',
    shortDescription: 'Professional contractor pack with 10 mixed panel kits at 20% discount',
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
      '20% discount vs individual kits',
      'Mix of most popular panel types',
      'Perfect for contractor inventory',
      'All kits NEC 408.4(A) compliant',
      'UL 969 certified materials',
      'Bulk packaging for easy storage'
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