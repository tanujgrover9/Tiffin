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

  const category = dish.category?.toLowerCase() || "";
  const isVeg = category === "veg";
  const isDiet = category === "diet";

  const getCategoryIcon = () => {
    switch (category) {
      case "veg":
        return <Leaf className="w-4 h-4 text-emerald-600" />;
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

  const rating = dish.rating ?? 4.5;
  const isTopRated = rating >= 4.7;

  const accentRing =
    category === "diet"
      ? "ring-amber-200/60"
      : isVeg
      ? "ring-emerald-200/60"
      : "ring-red-200/60";

  const accentDot =
    category === "diet"
      ? "bg-amber-400"
      : isVeg
      ? "bg-emerald-500"
      : "bg-red-500";

  return (
    <>
      {/* CARD */}
      <motion.div
        whileHover={{ scale: 1.03, y: -4 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        onClick={() => setOpen(true)}
        className={`
          group relative rounded-3xl cursor-pointer overflow-hidden
          border border-white/60 bg-white/80 backdrop-blur-2xl
          shadow-[0_10px_35px_rgba(15,23,42,0.12)]
          hover:shadow-[0_16px_45px_rgba(15,23,42,0.16)]
          transition-all duration-500
          ring-1 ring-transparent hover:${accentRing}
        `}
      >
        {/* Top accent line */}
        <div
          className={`
            absolute inset-x-0 top-0 h-1
            ${isDiet ? "bg-gradient-to-r from-amber-300 to-emerald-300" : ""}
            ${
              !isDiet && isVeg
                ? "bg-gradient-to-r from-emerald-300 to-lime-300"
                : ""
            }
            ${
              category === "non-veg"
                ? "bg-gradient-to-r from-red-300 to-orange-300"
                : ""
            }
          `}
        />

        {/* IMAGE */}
        <div className="relative h-52 md:h-56 overflow-hidden rounded-3xl rounded-b-2xl">
          <motion.img
            src={imageSrc}
            alt={dish.name}
            className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent" />

          {/* Veg / Non-Veg Dot */}
          <div
            className={`
              absolute top-4 right-4 w-4 h-4 rounded-full 
              border border-white shadow-md
              ${accentDot}
            `}
          />

          {/* Floating Price Tag */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              absolute bottom-4 left-4 px-4 py-1.5
              rounded-full text-gray-900 text-sm font-semibold
              bg-white/95 backdrop-blur-md shadow-[0_8px_20px_rgba(15,23,42,0.3)]
            "
          >
            ₹{dish.price}
          </motion.div>

          {/* Floating Badge (Diet / Top Rated) */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {isDiet && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-amber-100/95 text-amber-700 shadow-sm">
                <Coffee className="w-3.5 h-3.5" />
                Diet Friendly
              </span>
            )}
            {isTopRated && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium bg-white/90 text-yellow-600 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                Best Rated
              </span>
            )}
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6">
          {/* Title + Category Chip */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 flex items-center gap-2">
              {getCategoryIcon()}
              <span className="line-clamp-1">{dish.name}</span>
            </h3>

            {category && (
              <span
                className={`
                  inline-flex items-center gap-1 px-2.5 py-1
                  rounded-full text-[11px] font-medium
                  ${
                    isDiet
                      ? "bg-amber-50 text-amber-700"
                      : isVeg
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-600"
                  }
                `}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {dish.category}
              </span>
            )}
          </div>

          {/* Rating + Time */}
          <div className="flex items-center gap-4 mt-3 text-xs md:text-sm text-gray-600">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{rating.toFixed(1)}</span>
              <span className="text-gray-400">/ 5</span>
            </span>

            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-gray-500" />{" "}
              <span className="text-gray-700">15–20 mins</span>
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 text-gray-600 text-xs md:text-sm leading-relaxed line-clamp-2">
            {dish.description ??
              "Made with fresh premium ingredients and authentic, homely flavors."}
          </p>

          {/* CART AREA */}
          <div className="flex items-center justify-between mt-5">
            <AnimatePresence mode="wait" initial={false}>
              {quantity === 0 ? (
                <motion.button
                  key="add"
                  onClick={handleAdd}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="
                    flex items-center gap-2 px-5 py-2.5
                    bg-orange-500
                    text-white rounded-full text-xs md:text-sm font-semibold
                    shadow-[0_10px_25px_rgba(249,115,22,0.55)]
                    hover:shadow-[0_12px_30px_rgba(249,115,22,0.7)]
                    transition-all
                  "
                >
                  <ShoppingBag className="w-4 h-4" /> Add to Cart
                </motion.button>
              ) : (
                <motion.div
                  key="counter"
                  className="
                    flex items-center gap-3 px-4 py-2
                    bg-emerald-50 border border-emerald-200
                    shadow-sm rounded-full
                  "
                >
                  <button
                    onClick={handleDecrease}
                    className="p-1 rounded-full hover:bg-emerald-100 transition"
                  >
                    <Minus className="w-4 h-4 text-emerald-700" />
                  </button>
                  <span className="text-gray-900 font-semibold text-sm min-w-[1.5rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrease}
                    className="p-1 rounded-full hover:bg-emerald-100 transition"
                  >
                    <Plus className="w-4 h-4 text-emerald-700" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Small price echo on the right for balance */}
            <div className="hidden sm:flex flex-col items-end text-xs text-gray-500">
              <span className="uppercase tracking-wide">Starting at</span>
              <span className="text-sm font-semibold text-gray-900">
                ₹{dish.price}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MODAL */}
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
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="
                relative w-[92%] max-w-xl p-6 md:p-7 
                bg-white/95 backdrop-blur-xl 
                rounded-3xl shadow-[0_20px_60px_rgba(15,23,42,0.35)] 
                border border-gray-200/80
              "
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 rounded-full p-1 hover:bg-gray-100"
              >
                <X size={22} />
              </button>

              {/* Modal image */}
              <div className="h-56 md:h-64 w-full rounded-2xl overflow-hidden shadow-md mb-5 md:mb-6">
                <img
                  src={imageSrc}
                  className="w-full h-full object-cover"
                  alt={dish.name}
                />
              </div>

              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2 text-gray-900">
                    {getCategoryIcon()} <span>{dish.name}</span>
                  </h2>

                  <div className="flex items-center gap-3 mt-2 text-xs md:text-sm text-gray-700">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">
                        {rating.toFixed(1)}
                      </span>
                      <span className="text-gray-400">/ 5</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span>15–20 mins</span>
                    </div>
                  </div>
                </div>

                {category && (
                  <span
                    className={`
                      inline-flex items-center gap-1 px-3 py-1
                      rounded-full text-[11px] font-medium
                      ${
                        isDiet
                          ? "bg-amber-50 text-amber-700"
                          : isVeg
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-600"
                      }
                    `}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {dish.category}
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm md:text-[15px] text-gray-700 leading-relaxed">
                {dish.description ??
                  "Made with fresh ingredients, balanced spices, and a homely touch. Perfect for your everyday cravings."}
              </p>

              <div className="flex justify-between items-center mt-7 md:mt-8">
                <span className="text-xl md:text-2xl font-bold text-gray-900">
                  ₹{dish.price}
                </span>

                <motion.button
                  onClick={() => add(dish, 1)}
                  whileHover={{ scale: 1.05, y: -1 }}
                  className="
                    px-6 md:px-7 py-2.5 rounded-full 
                    bg-orange-500
                    text-white font-semibold text-sm md:text-base
                    shadow-[0_12px_30px_rgba(249,115,22,0.6)]
                    hover:shadow-[0_16px_38px_rgba(249,115,22,0.8)]
                    transition-all
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
