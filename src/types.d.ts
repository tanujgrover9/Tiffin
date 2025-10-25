export type Category = "Veg" | "Non-Veg" | "Diet";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  rating?: number;    // optional and typed safely
  image?: string;     // optional image

  // Nutrition info (optional)
  sugar?: number;
  fat?: number;
  protein?: number;
  calories?: number;
}

export interface CartItem {
  dish: Dish;
  qty: number;
}
