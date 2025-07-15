'use client';

// Cart page imports
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingCart, ArrowRight, Shield, Truck, Clock, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import { toast } from 'sonner';
import { SecurityBadges } from '@/components/ui/TrustBadges';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getCart, clearCart } = useCart();
  const cart = getCart();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeItem(id);
    toast.success('Item removed from cart');
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared');
  };

  // Calculate estimated delivery date
  const getEstimatedDelivery = () => {
    const date = new Date();
    date.setDate(date.getDate() + 3); // 3 business days
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className="mx-auto w-16 h-16 text-gray-400 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven&apos;t added any panel labeling kits yet.
            </p>
            <Button asChild className="bg-electric-blue hover:bg-electric-blue/90">
              <Link href="/products">
                Shop Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            
            {/* Trust signals for empty cart */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <Shield className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600">NEC Compliant</p>
              </div>
              <div className="text-center">
                <Truck className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping $50+</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-electric-blue mx-auto mb-2" />
                <p className="text-sm text-gray-600">5-Year Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Trust Signals */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <Button
              variant="ghost"
              onClick={handleClearCart}
              className="text-red-600 hover:text-red-700"
            >
              Clear Cart
            </Button>
          </div>
          
          {/* Trust indicators bar */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center">
              <Shield className="w-4 h-4 text-electric-blue mr-2" />
              <span>Secure SSL Checkout</span>
            </div>
            <div className="flex items-center">
              <Truck className="w-4 h-4 text-electric-blue mr-2" />
              <span>Free Shipping Over $50</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 text-electric-blue mr-2" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-electric-blue mr-2" />
              <span>4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="border-0 shadow-sm">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                      {/* Product Image */}
                      <div className="flex-shrink-0 w-full sm:w-auto">
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover w-20 h-20 sm:w-20 sm:h-20 mx-auto sm:mx-0"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          <Link 
                            href={`/products/${item.product.slug}`}
                            className="hover:text-electric-blue transition-colors"
                          >
                            {item.product.name}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {item.product.shortDescription}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{item.product.slots} circuits</span>
                          <span>•</span>
                          <span>{item.product.panelType}</span>
                        </div>
                        
                        {/* Quality badges */}
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary" className="text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            NEC Compliant
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            <Award className="w-3 h-3 mr-1" />
                            5-Year Warranty
                          </Badge>
                        </div>
                      </div>

                      {/* Mobile: Quantity, Price, Remove in flexible layout */}
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-center sm:text-right">
                          <p className="text-lg font-bold text-gray-900">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.product.price.toFixed(2)} each
                          </p>
                        </div>

                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-sm sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${cart.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {cart.shipping === 0 ? 'Free' : `$${cart.shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">${cart.tax.toFixed(2)}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>${cart.total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {cart.subtotal < 50 && (
                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center text-yellow-800">
                      <Truck className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        Add <strong>${(50 - cart.subtotal).toFixed(2)}</strong> more for free shipping!
                      </span>
                    </div>
                  </div>
                )}

                {/* Estimated Delivery */}
                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center text-green-800">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      Estimated delivery: <strong>{getEstimatedDelivery()}</strong>
                    </span>
                  </div>
                </div>

                {/* Security Badge */}
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center text-blue-800">
                    <Shield className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      <strong>Secure Checkout</strong> - SSL encrypted
                    </span>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-electric-blue hover:bg-electric-blue/90"
                  size="lg"
                >
                  <Link href="/checkout">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-3"
                  size="lg"
                >
                  <Link href="/products">
                    Continue Shopping
                  </Link>
                </Button>

                {/* Security badges */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <SecurityBadges className="justify-center" />
                </div>

                {/* Payment methods */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 mb-2">We accept:</p>
                  <div className="flex justify-center space-x-2 text-xs text-gray-500">
                    <span>Visa</span>
                    <span>•</span>
                    <span>Mastercard</span>
                    <span>•</span>
                    <span>American Express</span>
                    <span>•</span>
                    <span>PayPal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 