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

  // Sync quantity with cart
  const cartItem = cartItems.find((i) => i.dish.id === dish.id);
  const quantity = cartItem ? cartItem.qty : 0;

  const isVeg = dish.category?.toLowerCase() === "veg";

  const getCategoryIcon = () => {
    switch (dish.category?.toLowerCase()) {
      case "veg":
        return <Leaf className="w-4 h-4 text-green-500" />;
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

  // Automatically load image from local assets
  const imageSrc =
    dish.image ||
    getDishImage(dish.name) ||
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop";

  return (
    <>
      {/* Card */}
      <motion.div
        whileHover={{ scale: 1.02, y: -3 }}
        transition={{ type: "spring", stiffness: 250, damping: 18 }}
        onClick={() => setOpen(true)}
        className="group relative flex flex-col overflow-hidden rounded-3xl backdrop-blur-xl border border-gray-100 transition-all duration-500 cursor-pointer"
      >
        {/* Image */}
        <div className="relative w-full h-56 overflow-hidden">
          <motion.img
            src={imageSrc}
            alt={dish.name}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent"></div>
          <div
            className={`absolute top-3 right-3 w-3 h-3 rounded-full border border-white ${
              isVeg ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 p-5">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              {getCategoryIcon()} {dish.name}
            </h3>

            {/* Rating + Time */}
            <div className="flex items-center gap-4 mt-1">
              <div className="flex items-center gap-1 text-sm text-gray-700 font-medium">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {dish.rating ? dish.rating.toFixed(1) : "4.5"}
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-gray-500" />
                15–20 mins
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-2 line-clamp-2 leading-relaxed">
              {dish.description ||
                "Crafted with premium ingredients for a delightful experience."}
            </p>
          </div>

          <div className="flex items-center justify-between mt-5">
            <span className="text-xl font-semibold text-gray-900">
              ₹{dish.price}
            </span>

            {/* Quantity Control */}
            <AnimatePresence mode="wait" initial={false}>
              {quantity === 0 ? (
                <motion.button
                  key="add"
                  onClick={handleAdd}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-500 transition-all"
                >
                  <ShoppingBag className="w-4 h-4" /> Add
                </motion.button>
              ) : (
                <motion.div
                  key="counter"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center bg-gradient-to-r from-green-50 to-green-100 rounded-full px-3 py-1.5 shadow-sm"
                >
                  <button
                    onClick={handleDecrease}
                    className="p-1 text-green-700 hover:text-green-900"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 text-sm font-semibold text-gray-800">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="p-1 text-green-700 hover:text-green-900"
                  >
                    <Plus size={16} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative bg-white/90 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-2xl w-[90%] max-w-lg p-7"
            >
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
              >
                <X size={22} />
              </button>

              {/* Image */}
              <div className="w-full h-64 rounded-2xl overflow-hidden mb-6 shadow-sm">
                <img
                  src={imageSrc}
                  alt={dish.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Modal Info */}
              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                  {getCategoryIcon()} {dish.name}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-700">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    {dish.rating ? dish.rating.toFixed(1) : "4.5"}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    15–20 mins
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {dish.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <span className="text-2xl font-bold text-gray-900">
                  ₹{dish.price}
                </span>
                <motion.button
                  onClick={() => add(dish, 1)}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
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
