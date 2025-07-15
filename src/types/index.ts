// Product data types
export interface PanelLabelKit {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'standard' | 'custom' | 'bulk';
  slots: number;
  panelType: string;
  features: string[];
  specifications: {
    material: string;
    adhesive: string;
    dimensions: string;
    compliance: string[];
    warranty: string;
  };
  contents: string[];
  inStock: boolean;
  stockCount: number;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  weight: number; // for shipping calculations
}

// Cart related types
export interface CartItem {
  id: string;
  product: PanelLabelKit;
  quantity: number;
  customizations?: Record<string, unknown>;
}

export interface Cart {
  items: CartItem[];
  total: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
  discountCode?: string;
}

// Order types
export interface ShippingAddress {
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

export interface BillingAddress extends ShippingAddress {
  sameAsShipping: boolean;
}

export interface PaymentInfo {
  method: 'credit_card' | 'paypal' | 'stripe';
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  cardholderName?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  cart: Cart;
  shippingAddress: ShippingAddress;
  billingAddress: BillingAddress;
  paymentInfo: PaymentInfo;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  trackingNumber?: string;
  notes?: string;
}

// User/Customer types
export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  company?: string;
  customerType: 'electrician' | 'facility_manager' | 'diy_homeowner' | 'other';
  defaultShippingAddress?: ShippingAddress;
  defaultBillingAddress?: BillingAddress;
  orders: Order[];
  createdAt: Date;
  preferences: {
    emailMarketing: boolean;
    smsMarketing: boolean;
    newsletter: boolean;
  };
}

// Testimonial types
export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  role?: string;
  rating: number;
  content: string;
  image?: string;
  verified: boolean;
  featured: boolean;
  createdAt: Date;
  productId?: string;
}

// Blog/Content types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  featured: boolean;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  image: string;
  readTime: number;
}

// FAQ types
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'installation' | 'compliance' | 'shipping' | 'returns';
  priority: number;
  helpful: number;
  notHelpful: number;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject: string;
  customerType: Customer['customerType'];
}

export interface NewsletterSignup {
  email: string;
  firstName?: string;
  lastName?: string;
  interests: string[];
  source?: string;
}

// UI Component types
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export interface TrustBadge {
  id: string;
  title: string;
  description: string;
  icon: string;
  link?: string;
}

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

// Analytics and SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: Record<string, unknown>;
}

export interface AnalyticsEvent {
  name: string;
  properties: Record<string, unknown>;
  timestamp: Date;
  userId?: string;
  sessionId: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Step types for multi-step forms
export interface OrderStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
  href?: string;
}

// Discount and pricing types
export interface Discount {
  code: string;
  type: 'percentage' | 'fixed' | 'free_shipping';
  value: number;
  minOrderValue?: number;
  maxDiscount?: number;
  validFrom: Date;
  validUntil: Date;
  usageLimit?: number;
  usageCount: number;
  active: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  minQuantity: number;
  maxQuantity?: number;
  discountPercentage: number;
  description: string;
}

// Notification types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  dismissible: boolean;
  actions?: {
    label: string;
    action: () => void;
  }[];
} 