
import { motion } from "framer-motion";

const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];
const rotations = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

// Hand-drawn sketch animation variant
const sketchVariant = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

// Floating doodle motion
const floatAnim = {
  y: [0, -10, 0],
  transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
};

export const About = () => {
  return (
    <section id="about" className="relative px-8 py-20 space-y-16 overflow-hidden min-h-screen bg-cr-200">
      {/* Background like sketchbook paper */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="paper-grain" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect width="0.5" height="0.5" fill="rgba(255,255,255,0.04)" />
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
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute top-16 left-12 w-20 text-purple-500"
        variants={sketchVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d="M10 50 Q50 10, 90 50 T 10 50"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          variants={sketchVariant}
        />
      </motion.svg>

      <motion.div
        className="absolute right-10 top-20 text-yellow-500 text-4xl"
        animate={floatAnim}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute bottom-24 left-10 text-blue-500 text-4xl"
        animate={floatAnim}
      >
        💡
      </motion.div>

      {/* Heading */}
      <h3 className="text-5xl font-extrabold text-center mb-12 font-handwriting relative z-10">
        About <span className="text-pink-500 px-3 rounded-lg">Me</span>
      </h3>

      {/* Sticky Notes Grid */}
      <div className="grid md:grid-cols-2 gap-12 items-start justify-center relative z-10">
        {/* Sticky Note 1 */}
        <motion.div
          className={`sticky-note p-8 relative ${rotations[0]}`}
          style={{ backgroundColor: stickyColors[0] }}
          whileHover={{ scale: 1.05, rotate: -1 }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
          <h4 className="text-2xl font-handwriting mb-4">Hello! I’m Anshuman</h4>
          <p className="text-gray-700 font-handwriting">
            I’m a passionate frontend developer & designer who loves turning
            ideas into beautiful, interactive web experiences. I specialize in
            React, Tailwind, and creating doodle-style UI designs.
          </p>
        </motion.div>

        {/* Sticky Note 2 */}
        <motion.div
          className={`sticky-note p-8 relative ${rotations[1]}`}
          style={{ backgroundColor: stickyColors[1] }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
          <h4 className="text-2xl font-handwriting mb-4">What I Do</h4>
          <ul className="list-disc ml-5 space-y-2 text-gray-700 font-handwriting">
            <li>Designing user-friendly web interfaces</li>
            <li>Creating doodle & playful UI themes</li>
            <li>Developing responsive React applications</li>
            <li>Bringing ideas to life with modern frontend tech</li>
          </ul>
        </motion.div>

        {/* Sticky Note 3 */}
        <motion.div
          className={`sticky-note p-8 relative ${rotations[2]}`}
          style={{ backgroundColor: stickyColors[2] }}
          whileHover={{ scale: 1.05, rotate: -2 }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
          <h4 className="text-2xl font-handwriting mb-4">My Philosophy</h4>
          <p className="text-gray-700 font-handwriting italic">
            “Design is not just what it looks like. Design is how it works.” – I
            bring creativity and functionality together in every project.
          </p>
        </motion.div>

        {/* Sticky Note 4 */}
        <motion.div
          className={`sticky-note p-8 relative ${rotations[3]}`}
          style={{ backgroundColor: stickyColors[3] }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full shadow-md border border-black/30"></div>
          <h4 className="text-2xl font-handwriting mb-4">Fun Fact</h4>
          <p className="text-gray-700 font-handwriting">
            I love combining doodle sketches with digital design to make
            interfaces more playful and engaging. My workspace? A virtual
            corkboard full of sticky notes and ideas!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
