'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Check } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';
import { Card, CardContent } from './card';
import { PanelLabelKit } from '@/types';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';

interface ProductCardProps {
  product: PanelLabelKit;
  variant?: 'default' | 'compact';
  showAddToCart?: boolean;
}

export default function ProductCard({ 
  product, 
  variant = 'default',
  showAddToCart = true 
}: ProductCardProps) {
  const { addItem } = useCart();
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    toast.success('Added to cart!', {
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <Link href={`/products/${product.slug}`}>
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-t-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={variant === 'compact' ? 200 : 300}
                className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.category === 'bulk' && (
                  <Badge className="bg-safety-orange text-white">
                    Bulk Pack
                  </Badge>
                )}
                {discountPercentage > 0 && (
                  <Badge className="bg-red-500 text-white">
                    {discountPercentage}% OFF
                  </Badge>
                )}
                {product.tags.includes('most popular') && (
                  <Badge className="bg-electric-blue text-white">
                    Most Popular
                  </Badge>
                )}
              </div>

              {/* Stock Status */}
              <div className="absolute top-3 right-3">
                {product.inStock ? (
                  <div className="flex items-center space-x-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    <Check className="w-3 h-3" />
                    <span>In Stock</span>
                  </div>
                ) : (
                  <div className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                    Out of Stock
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-electric-blue transition-colors">
                {product.name}
              </h3>

              {/* Short Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.shortDescription}
              </p>

              {/* Features */}
              <div className="space-y-1 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>{product.slots} circuits</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>NEC 408.4(A) compliant</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  <span>UL 969 certified</span>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-safety-yellow fill-current"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  4.9 (250+ reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                {product.category === 'bulk' && (
                  <span className="text-sm text-green-600 font-medium">
                    Save ${((product.originalPrice || 0) - product.price).toFixed(2)}
                  </span>
                )}
              </div>

              {/* Actions */}
              {showAddToCart && (
                <div className="flex space-x-2">
                  <Button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-electric-blue hover:bg-electric-blue/90"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                  >
                    <Link href={`/products/${product.slug}`}>
                      Details
                    </Link>
                  </Button>
                </div>
              )}
            </div>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
} 