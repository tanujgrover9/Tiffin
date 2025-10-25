import type { Dish } from "../types.d";

// Import local images
import quinoaSaladImg from "../assets/catimg/quinoa-salad.png";
import oatsUpmaImg from "../assets/catimg/oats-upma.png";
import grilledChickenSaladImg from "../assets/catimg/grilled-chicken-salad.png";
import oatsImg from "../assets/catimg/Oats.png"
import greekYogurtBowlImg from "../assets/catimg/greek-yogurt-bowl.png";
import sproutSaladImg from "../assets/catimg/sprout-salad.png";

export const DIET_MENU: Dish[] = [
  {
    id: "dm1",
    name: "Quinoa Salad",
    description:
      "Wholesome quinoa mixed with crunchy veggies, olive oil dressing, and herbs for a light, healthy meal.",
    price: 140,
    category: "Diet",
    rating: 4.5,
    calories: 280,
    protein: 9,
    fat: 7,
    sugar: 3,
    image: quinoaSaladImg,
  },
  {
    id: "dm2",
    name: "Oats Upma",
    description:
      "A fiber-rich twist to traditional upma made with oats, veggies, and mild Indian spices.",
    price: 90,
    category: "Diet",
    rating: 4.3,
    calories: 220,
    protein: 6,
    fat: 5,
    sugar: 2,
    image: oatsUpmaImg,
  },
  {
    id: "dm3",
    name: "Grilled Chicken Salad",
    description:
      "High-protein grilled chicken breast served with lettuce, cucumber, and lemon dressing.",
    price: 180,
    category: "Diet",
    rating: 4.7,
    calories: 320,
    protein: 28,
    fat: 10,
    sugar: 2,
    image: grilledChickenSaladImg,
  },
  {
    id: "dm4",
    name: "Oats",
    description:
      "Protein-rich green gram pancakes with mint chutney — light yet satisfying.",
    price: 100,
    category: "Diet",
    rating: 4.4,
    calories: 240,
    protein: 14,
    fat: 4,
    sugar: 1,
    image: oatsImg,
  },
  {
    id: "dm5",
    name: "Greek Yogurt Bowl",
    description:
      "Creamy yogurt with fruits, chia seeds, and honey drizzle — perfect balance of taste and nutrition.",
    price: 120,
    category: "Diet",
    rating: 4.6,
    calories: 190,
    protein: 12,
    fat: 5,
    sugar: 8,
    image: greekYogurtBowlImg,
  },
  {
    id: "dm6",
    name: "Sprout Salad",
    description:
      "Boiled mixed sprouts tossed with lemon, salt, and spices — rich in protein and fiber.",
    price: 70,
    category: "Diet",
    rating: 4.2,
    calories: 160,
    protein: 10,
    fat: 2,
    sugar: 1,
    image: sproutSaladImg,
  },
];
