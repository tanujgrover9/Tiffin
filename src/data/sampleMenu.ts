import type { Dish } from "../types.d";

export const SAMPLE_MENU: Dish[] = [
  { id: "d1", name: "Aloo Paratha", description: "Whole wheat paratha with butter", price: 60, category: "Veg", rating: 4.2 },
  { id: "d2", name: "Paneer Bhurji", description: "Spiced cottage cheese", price: 120, category: "Veg", rating: 4.5 },
  { id: "d3", name: "Chicken Curry", description: "Home-style chicken curry", price: 150, category: "Non-Veg", rating: 4.7 },
  { id: "d4", name: "Grilled Fish", description: "Lemon pepper fish", price: 180, category: "Non-Veg", rating: 4.6 },
  { id: "d5", name: "Quinoa Salad", description: "Protein-rich salad", price: 140, category: "Diet", rating: 4.3 },
  { id: "d6", name: "Moong Chilla", description: "Low-calorie lentil crepe", price: 90, category: "Diet", rating: 4.1 },
];
