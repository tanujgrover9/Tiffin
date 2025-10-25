/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const count = useCartStore((s: { items: any[] }) =>
    s.items.reduce((a: any, b: { qty: any }) => a + b.qty, 0)
  );
  const loc = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={16} /> },
  ];

  return (
    <>
      {/* Header */}
      <header className="bg-orange-500 backdrop-blur-md sticky top-0 z-50 border-b-4 border-white rounded-b-[20px] shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <h1 className="text-4xl font-extrabold luckiest-guy-regular text-white">
              Tiffin<span className="text-white">.</span>
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3 text-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  loc.pathname === link.to
                    ? "bg-white text-orange-600 font-semibold"
                    : "hover:bg-white/20 hover:text-white"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative group bg-white p-3 rounded-full shadow-md hover:shadow-lg hover:bg-orange-100 transition-all duration-300"
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

            {/* CTA Button */}
            <Link to="/auth">
              <button className="hidden md:flex items-center gap-2 bg-black hover:bg-lime-400 hover:text-black text-white font-semibold px-5 py-2 rounded-full transition-all luckiest-guy-regular">
                Open Account
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full">
                  <ArrowUpRight size={14} />
                </div>
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden bg-white/20 p-2 rounded-full border border-white/40 text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-sm animate-slideDown">
            <nav className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                    loc.pathname === link.to
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}

              <Link to="/auth" onClick={() => setOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 bg-black hover:bg-lime-400 text-white font-semibold px-5 py-2 rounded-full transition-all luckiest-guy-regular">
                  Open Account
                  <div className="w-6 h-6 bg-white/20 flex items-center justify-center rounded-full">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Sticky Cart - Mobile */}
      <AnimatePresence>
        {count > 0 && (
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
