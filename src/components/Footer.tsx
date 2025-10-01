
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaStar, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];
const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

export const Footer = () => {
  return (
    <footer className="relative px-8 py-20 min-h-[60vh] space-y-16 bg-cream font-handwriting overflow-hidden">
      {/* Paper Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="paper-grain" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect width="0.5" height="0.5" fill="rgba(0,0,0,0.03)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#fffdf7" />
        <rect width="100%" height="100%" fill="url(#paper-grain)" />
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="100"
            y1={`${6 + i * 6}%`}
            y2={`${6 + i * 6}%`}
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Floating doodles */}
      <motion.div className="absolute inset-0 pointer-events-none z-10">
        {[
          { icon: <FaStar className="text-yellow-400" />, x: 10, y: 20, size: 20 },
          { icon: <FaHeart className="text-pink-500" />, x: 70, y: 10, size: 18 },
          { icon: <FaStar className="text-yellow-300" />, x: 40, y: 60, size: 16 },
          { icon: <FaHeart className="text-red-400" />, x: 80, y: 70, size: 22 },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: `${item.y}%`, left: `${item.x}%` }}
            animate={{ y: [0, -12, 0], x: [0, 8, -4, 0] }}
            transition={{ repeat: Infinity, duration: 6 + i, ease: "easeInOut" }}
          >
            <div style={{ fontSize: item.size }}>{item.icon}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main CTA Sticky Note */}
      <motion.div
        className={`sticky-note p-8 md:p-12 relative ${rotations[0]} max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-lg`}
        whileHover={{ rotate: 0, scale: 1.03 }}
        style={{ backgroundColor: stickyColors[0] }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full shadow-md border border-black/30"></div>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
          Ready to transform <br /> your space?
        </h2>

        <motion.button
          whileHover={{ rotate: 10, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 md:mt-0 w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-xl hover:bg-pink-600 transition relative"
        >
          <FiArrowUpRight className="w-7 h-7" />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
          </svg>
        </motion.button>
      </motion.div>

      {/* Social Links Sticky Note */}
      <motion.div
        className={`sticky-note p-8 relative ${rotations[1]} max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between shadow-lg`}
        style={{ backgroundColor: stickyColors[1] }}
        whileHover={{ scale: 1.02 }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>

        <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">Follow Me</h3>

        <div className="flex gap-5 justify-center md:justify-end">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            <FaFacebookF className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white transition"
          >
            <FaTwitter className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 text-pink-500 hover:bg-pink-500 hover:text-white transition"
          >
            <FaInstagram className="w-5 h-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-white transition"
          >
            <FaGithub className="w-5 h-5" />
          </motion.a>
        </div>
      </motion.div>

      {/* Copyright Sticky Note */}
      <motion.div
        className={`sticky-note p-4 relative ${rotations[2]} max-w-6xl mx-auto text-center shadow-md`}
        style={{ backgroundColor: stickyColors[2] }}
        whileHover={{ rotate: 0, scale: 1.01 }}
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
        <p className="text-gray-700 text-sm">
          © {new Date().getFullYear()} Anshuman Singh. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
};
