/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

import type { CartItem, Dish } from "../types.d";

interface CartState {
  items: CartItem[];
  add: (dish: Dish, qty?: number) => void;
  updateQty: (dishId: string, qty: number) => void;
  remove: (dishId: string) => void;
  clear: () => void;
  subtotal: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  add: (dish, qty = 1) => {
    set((prev) => {
      const found = prev.items.find((i) => i.dish.id === dish.id);
      if (found) {
        return {
          items: prev.items.map((i) =>
            i.dish.id === dish.id ? { ...i, qty: i.qty + qty } : i
          ),
        } as any;
      }
      return { items: [...prev.items, { dish, qty }] } as any;
    });
  },
  updateQty: (dishId, qty) => {
    set(
      (prev) =>
        ({
          items: prev.items
            .map((i) => (i.dish.id === dishId ? { ...i, qty } : i))
            .filter((i) => i.qty > 0),
        }) as any
    );
  },
  remove: (dishId) =>
    set(
      (prev) =>
        ({ items: prev.items.filter((i) => i.dish.id !== dishId) }) as any
    ),
  clear: () => set({ items: [] }),
  subtotal: () => get().items.reduce((s, i) => s + i.qty * i.dish.price, 0),
}));
