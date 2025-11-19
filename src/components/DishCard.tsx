import React, { useState } from "react";
import type { Dish } from "../types.d";
import {
  ShoppingBag,
  Star,
  X,
  Leaf,
  Pizza,
  Coffee,
  Minus,
  Plus,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCartStore } from "../store/cartStore";
import { getDishImage } from "../utils/getDishImage";

export default function DishCard({ dish }: { dish: Dish }) {
  const [open, setOpen] = useState(false);

  const cartItems = useCartStore((s) => s.items);
  const add = useCartStore((s) => s.add);
  const updateQty = useCartStore((s) => s.updateQty);

  const cartItem = cartItems.find((i) => i.dish.id === dish.id);
  const quantity = cartItem ? cartItem.qty : 0;

  const isVeg = dish.category?.toLowerCase() === "veg";

  const getCategoryIcon = () => {
    switch (dish.category?.toLowerCase()) {
      case "veg":
        return <Leaf className="w-4 h-4 text-green-600" />;
      case "non-veg":
        return <Pizza className="w-4 h-4 text-red-500" />;
      case "diet":
        return <Coffee className="w-4 h-4 text-orange-500" />;
      default:
        return null;
    }
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    add(dish, 1);
  };

  const handleIncrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    add(dish, 1);
  };

  const handleDecrease = (e: React.MouseEvent) => {
    e.stopPropagation();
    updateQty(dish.id, Math.max(0, quantity - 1));
  };

  const imageSrc =
    dish.image ||
    getDishImage(dish.name) ||
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800";

  return (
    <>

      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        onClick={() => setOpen(true)}
        className="
    group relative rounded-3xl cursor-pointer 
    overflow-hidden border border-white/30 
    bg-white/60 backdrop-blur-2xl
    shadow-[0_8px_30px_rgb(0,0,0,0.08)]
    hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]
    transition-all duration-500
  "
      >
        {/* ---------- IMAGE ---------- */}
        <div className="relative h-60 overflow-hidden rounded-b-3xl">
          <motion.img
            src={imageSrc}
            alt={dish.name}
            className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

          {/* Veg / Non-Veg Dot */}
          <div
            className={`
        absolute top-4 right-4 w-4 h-4 rounded-full 
        border border-white shadow-md
        ${isVeg ? "bg-green-500" : "bg-red-500"}
      `}
          />

          {/* Floating Price Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="
        absolute bottom-4 left-4 px-4 py-1.5
        rounded-xl text-gray-900 text-base font-semibold
        bg-white/90 backdrop-blur-md shadow-lg
      "
          >
            ₹{dish.price}
          </motion.div>
        </div>

        {/* ---------- CONTENT ---------- */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            {getCategoryIcon()} {dish.name}
          </h3>

          <div className="flex items-center gap-5 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              {dish.rating?.toFixed(1) ?? "4.5"}
            </span>

            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-gray-500" /> 15–20 mins
            </span>
          </div>

          <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-2">
            {dish.description ??
              "Made with fresh premium ingredients and authentic flavors."}
          </p>

          {/* ---------- CART ---------- */}
          <div className="flex items-center justify-between mt-6">
            <AnimatePresence mode="wait" initial={false}>
              {quantity === 0 ? (
                <motion.button
                  key="add"
                  onClick={handleAdd}
                  whileHover={{ scale: 1.07 }}
                  className="
              flex items-center gap-2 px-5 py-2.5
              bg-gradient-to-r from-orange-500 to-amber-400 
              text-white rounded-full text-sm font-medium
              shadow-md hover:shadow-lg transition-all
            "
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </motion.button>
              ) : (
                <motion.div
                  key="counter"
                  className="
              flex items-center gap-3 px-4 py-2
              bg-green-50 border border-green-200
              shadow-sm rounded-full
            "
                >
                  <button onClick={handleDecrease}>
                    <Minus className="w-4 h-4 text-green-700" />
                  </button>
                  <span className="text-gray-900 font-semibold">{quantity}</span>
                  <button onClick={handleIncrease}>
                    <Plus className="w-4 h-4 text-green-700" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>


      {/* ---------------- MODAL ---------------- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed inset-0 z-50 flex items-center justify-center 
              bg-black/60 backdrop-blur-md
            "
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                relative w-[90%] max-w-lg p-6 
                bg-white/90 backdrop-blur-xl 
                rounded-3xl shadow-xl border border-gray-200
              "
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <X size={24} />
              </button>

              <div className="h-64 w-full rounded-2xl overflow-hidden shadow-md mb-6">
                <img src={imageSrc} className="w-full h-full object-cover" />
              </div>

              <h2 className="text-2xl font-semibold flex items-center gap-2">
                {getCategoryIcon()} {dish.name}
              </h2>

              <div className="flex items-center gap-4 mt-2 text-gray-700 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  {dish.rating ? dish.rating.toFixed(1) : "4.5"}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-gray-500" />
                  15–20 mins
                </div>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                {dish.description}
              </p>

              <div className="flex justify-between items-center mt-8">
                <span className="text-2xl font-bold">₹{dish.price}</span>

                <motion.button
                  onClick={() => add(dish, 1)}
                  whileHover={{ scale: 1.05 }}
                  className="
                    px-6 py-2.5 rounded-full 
                    bg-gradient-to-r from-orange-500 to-amber-400 
                    text-white font-medium shadow-md
                  "
                >
                  <ShoppingBag className="inline w-5 h-5 mr-2" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
