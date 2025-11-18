/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  ArrowUpRight,
  Menu,
  X,
  ClipboardList,
  Leaf,
  Flame,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
<<<<<<< HEAD
import logo from "../assets/img/logo.png";
=======
>>>>>>> 92d227ddfcfe31c7138fcdf5c3c7e189d70d16f6

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const loc = useLocation();

  const count = useCartStore((s: { items: any[] }) =>
    s.items.reduce((a: any, b: { qty: any }) => a + b.qty, 0)
  );

  const isDiet = loc.pathname === "/diet";
  const isCartOrCheckout =
    loc.pathname === "/cart" || loc.pathname === "/checkout";

  const headerBg = isDiet
    ? "bg-gradient-to-r from-green-600 to-lime-500"
    : "bg-gradient-to-r from-orange-500 to-red-500";

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={16} /> },
    { to: "/orders", label: "Orders", icon: <ClipboardList size={16} /> },
  ];

  const toggleDiet = () => navigate(isDiet ? "/" : "/diet");

  return (
    <>
      <header
        className={`${headerBg} sticky top-0 z-50 backdrop-blur-md  border-white/30 shadow-md border-b-6 rounded-b-[20px] mb-1`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between  ">
<<<<<<< HEAD
          <Link to="/" className="flex items-center gap-2">
           <img
  src={logo}
  alt="HomelyBox Logo"
className="h-[60px] w-[140px] object-contain invert brightness-0 saturate-0"
/>



=======
          {/* 🌮 Logo */}
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              <span className="text-white">Tiffin</span>
            </h1>
>>>>>>> 92d227ddfcfe31c7138fcdf5c3c7e189d70d16f6
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  loc.pathname === link.to
                    ? "bg-white text-orange-600 font-semibold"
                    : "text-white/90 hover:bg-white/20 hover:text-white"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              onClick={toggleDiet}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center gap-2"
            >
              <span
                className={`text-sm font-semibold ${
                  !isDiet ? "text-white" : "text-white/60"
                }`}
              >
                Meal
              </span>

              <div
                className={`relative w-16 h-8 rounded-full transition-colors duration-500 flex items-center ${
                  isDiet ? "bg-blue-600" : "bg-orange-400"
                }`}
              >
                <motion.div
                  animate={{
                    x: isDiet ? 32 : 0,
                    backgroundColor: isDiet ? "#F9F9F9" : "#fff",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="w-7 h-7 rounded-full shadow-md flex items-center justify-center"
                >
                  {isDiet ? (
                    <Leaf size={16} className="text-green-600" />
                  ) : (
                    <Flame size={16} className="text-orange-500" />
                  )}
                </motion.div>
              </div>

              <span
                className={`text-sm font-semibold ${
                  isDiet ? "text-white" : "text-white/60"
                }`}
              >
                Diet
              </span>
            </motion.button>

            {/* 🛒 Cart Icon */}
            <Link
              to="/cart"
              className="relative bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <ShoppingCart
                size={22}
                className="text-orange-600 group-hover:scale-110 transition-transform duration-200"
              />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {count}
                </span>
              )}
            </Link>

            {/* 🪄 CTA Button */}
            <Link to="/auth">
              <button className="hidden md:flex items-center gap-2 bg-black hover:bg-lime-400 hover:text-black text-white font-semibold px-5 py-2 rounded-full transition-all duration-300">
                Open Account
                <ArrowUpRight size={14} />
              </button>
            </Link>

            {/* 📱 Mobile Menu Toggle */}
            <button
              className="md:hidden bg-white/20 p-2 rounded-full border border-white/40 text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-sm"
            >
              <nav className="flex flex-col p-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      loc.pathname === link.to
                        ? "bg-gray-100 text-gray-900 font-semibold"
                        : "hover:bg-gray-50 text-gray-700"
                    }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                ))}

                {/* Diet Toggle in Mobile */}
                <button
                  onClick={() => {
                    toggleDiet();
                    setOpen(false);
                  }}
                  className={`w-full flex items-center justify-center gap-2 px-5 py-2 rounded-full text-white font-semibold ${
                    isDiet
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-orange-600 hover:bg-orange-700"
                  }`}
                >
                  {isDiet ? <Flame size={18} /> : <Leaf size={18} />}
                  {isDiet ? "Switch to Meal" : "Switch to Diet"}
                </button>

                <Link to="/auth" onClick={() => setOpen(false)}>
                  <button className="w-full flex items-center justify-center gap-2 bg-black hover:bg-lime-400 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300">
                    Open Account
                    <ArrowUpRight size={14} />
                  </button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 🧡 Floating Cart Button (only on non-cart pages) */}
      <AnimatePresence>
        {!isCartOrCheckout && count > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-50"
          >
            <Link
              to="/cart"
              className="flex items-center justify-center gap-3 px-6 py-3 rounded-full 
                bg-gradient-to-r from-orange-500 to-red-400 text-white 
                shadow-lg shadow-orange-600/40 
                backdrop-blur-lg border border-white/20 
                hover:scale-105 hover:shadow-xl active:scale-95
                transition-all duration-300"
            >
              <div className="bg-white/20 p-2 rounded-full">
                <ShoppingCart size={20} />
              </div>
              <span className="text-sm font-semibold">
                {count} item{count > 1 ? "s" : ""} in cart
              </span>
              <div className="bg-black/40 p-2 rounded-full">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
