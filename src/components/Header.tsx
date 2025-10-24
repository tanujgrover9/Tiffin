/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  Box,
  ClipboardList,
  Phone,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Tif (1).png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const count = useCartStore((s: { items: any[] }) =>
    s.items.reduce((a: any, b: { qty: any }) => a + b.qty, 0)
  );
  const loc = useLocation();

  const navLinks = [
    { to: "/", label: "Home", icon: <Home size={16} /> },
    { to: "/menu", label: "Menu", icon: <Box size={16} /> },
    { to: "/orders", label: "Orders", icon: <ClipboardList size={16} /> },
    { to: "/contact", label: "Contact", icon: <Phone size={16} /> },
  ];

  return (
    <>
      <header className="bg-white/90 backdrop-blur-md border border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between rounded-full mt-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="TiffinToGo Logo"
              className="w-24 h-15 object-contain rounded-md"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-3 text-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                  loc.pathname === link.to || loc.pathname.startsWith(link.to)
                    ? "bg-gray-100 text-gray-900 font-semibold"
                    : "hover:bg-gray-50"
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Cart Icon */}
            <Link
              to="/cart"
              className="relative bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition"
            >
              <ShoppingCart size={22} className="text-gray-700" />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {count}
                </span>
              )}
            </Link>

            {/* CTA Button */}
            <Link to="/auth">
              <button className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-lime-400 text-white font-semibold px-5 py-2 rounded-full transition-all luckiest-guy-regular">
                Open Account
                <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full">
                  <ArrowUpRight size={14} />
                </div>
              </button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden bg-gray-100 p-2 rounded-full"
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
                    loc.pathname === link.to || loc.pathname.startsWith(link.to)
                      ? "bg-gray-100 text-gray-900 font-semibold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}

              <Link to="/auth" onClick={() => setOpen(false)}>
                <button className="w-full flex items-center justify-center gap-2 bg-orange-300 hover:bg-lime-400 text-white font-semibold px-5 py-2 rounded-full transition-all luckiest-guy-regular">
                  Open Account
                  <div className="w-6 h-6 bg-black text-white flex items-center justify-center rounded-full">
                    <ArrowUpRight size={14} />
                  </div>
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Floating Sticky Cart */}
      <AnimatePresence>
  {count > 0 && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden z-50"
    >
      <Link
        to="/cart"
        className="flex items-center justify-center gap-3 
          bg-white/20 backdrop-blur-xl 
          border border-white/30 shadow-lg shadow-orange-500/20 
          px-6 py-3 rounded-full 
          text-white font-semibold
          transition-all duration-300
          hover:bg-white/30 hover:scale-105"
        style={{
          background: "#f97316",
          boxShadow: "0 8px 24px rgba(255,165,0,0.3), 0 0 15px rgba(255,255,255,0.2)",
        }}
      >
        <div className="bg-orange-500/90 p-2 rounded-full shadow-md backdrop-blur-lg">
          <ShoppingCart size={20} className="text-grey-700" />
        </div>
        <span className="text-sm">
          {count} item{count > 1 ? "s" : ""} in cart
        </span>
        <div className="bg-black/60 p-2 rounded-full shadow-inner">
          <ArrowUpRight size={16} className="text-white" />
        </div>
      </Link>
    </motion.div>
  )}
</AnimatePresence>



    </>
  );
}
