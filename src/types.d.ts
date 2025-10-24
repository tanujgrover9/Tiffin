export type Category = "Veg" | "Non-Veg" | "Diet";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  rating?: number;    
  image?: string;     
}

export interface CartItem {
  dish: Dish;
  qty: number;
}
