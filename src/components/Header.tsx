/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShoppingCart,
  Home,
  ArrowUpRight,
  ClipboardList,
  Leaf,
  Flame,
} from "lucide-react";
import { useCartStore } from "../store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/img/logo.png";

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
        className={`${headerBg} sticky top-0 z-50 backdrop-blur-md border-white/30 shadow-md border-b-6 rounded-b-[25px] mb-1 `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="HomelyBox Logo"
              className="h-[60px] w-[140px] object-contain invert brightness-0 saturate-0"
            />
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

          {/* ==== Toggle Button Wrapper (unchanged) ==== */}
          <motion.button
            onClick={toggleDiet}
            whileTap={{ scale: 0.95 }}
            className="relative flex items-center gap-3"
          >
            {/* === Inline Doodle Text + Arrow (left side) === */}
            <div className="flex items-center gap-1">
              <span className="text-[11px] text-white/90 font-semibold italic whitespace-nowrap">
               Meal Type
              </span>

              {/* Hand-drawn Doodle Arrow */}
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M1 6 C7 2, 14 2, 20 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M15 2 L20 6 L15 10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* ===== Toggle Track ===== */}
            <div
              className={`
      relative w-24 h-10 rounded-full flex items-center
      backdrop-blur-md border border-white/30 shadow-inner
      transition-all duration-500
      ${isDiet ? "bg-white/20" : "bg-black/20"}
    `}
            >
              {/* Sliding Knob */}
              <motion.div
                animate={{
                  x: isDiet ? 56 : 0,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="absolute w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center"
              >
                {isDiet ? (
                  <Leaf size={18} className="text-green-600" />
                ) : (
                  <Flame size={18} className="text-orange-500" />
                )}
              </motion.div>

              {/* Static Icons */}
              <div className="absolute left-3">
                <Flame size={16} className="text-white/70" />
              </div>

              <div className="absolute right-3">
                <Leaf size={16} className="text-white/70" />
              </div>
            </div>
          </motion.button>
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

      {/* Floating Cart Button (mobile) */}
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
