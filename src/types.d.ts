export type Category = "Veg" | "Non-Veg" | "Diet";

export interface Dish {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rating: any;
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image?: string;
}

export interface CartItem {
  dish: Dish;
  qty: number;
}