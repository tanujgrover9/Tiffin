import {create} from "zustand";
import type { CartItem } from "../types.d";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: "Pending" | "Preparing" | "Out for Delivery" | "Delivered";
  date: string;
}

interface OrderState {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateStatus: (id: string, status: Order["status"]) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  addOrder: (order) => set((prev) => ({ orders: [...prev.orders, order] })),
  updateStatus: (id, status) =>
    set((prev) => ({
      orders: prev.orders.map((o) =>
        o.id === id ? { ...o, status } : o
      ),
    })),
}));
