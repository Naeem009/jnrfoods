// Zustand cart store with localStorage persistence
"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  total: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, quantity = 1) => {
        const items = [...get().items];
        const idx = items.findIndex((i) => i.product.id === product.id);
        if (idx >= 0) items[idx] = { ...items[idx], quantity: items[idx].quantity + quantity };
        else items.push({ product, quantity });
        set({ items });
      },
      removeItem: (productId) => set({ items: get().items.filter((i) => i.product.id !== productId) }),
      updateQuantity: (productId, quantity) => {
        const items = get().items.map((i) => (i.product.id === productId ? { ...i, quantity } : i));
        set({ items });
      },
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: "jnrfoods-cart" }
  )
);


