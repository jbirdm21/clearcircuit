import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, PanelLabelKit, Cart } from '@/types';

interface CartState {
  items: CartItem[];
  addItem: (product: PanelLabelKit, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getSubtotal: () => number;
  getTotal: () => number;
  getCart: () => Cart;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product: PanelLabelKit, quantity = 1) => {
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          
          return {
            items: [...state.items, { id: product.id, product, quantity }],
          };
        });
      },
      
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter(item => item.id !== id),
        }));
      },
      
      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },
      
      getSubtotal: () => {
        return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
      },
      
      getTotal: () => {
        const subtotal = get().getSubtotal();
        const tax = subtotal * 0.08; // 8% tax
        const shipping = subtotal >= 50 ? 0 : 9.99; // Free shipping over $50
        return subtotal + tax + shipping;
      },
      
      getCart: () => {
        const subtotal = get().getSubtotal();
        const tax = subtotal * 0.08;
        const shipping = subtotal >= 50 ? 0 : 9.99;
        const total = subtotal + tax + shipping;
        
        return {
          items: get().items,
          subtotal,
          tax,
          shipping,
          total,
          discount: 0,
          discountCode: undefined,
        };
      },
    }),
    {
      name: 'cart-storage',
      version: 1,
    }
  )
); 