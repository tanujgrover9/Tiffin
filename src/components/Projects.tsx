
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const tapeColors = ["bg-pink-300", "bg-yellow-300", "bg-green-300", "bg-blue-300"];

export const Projects = () => {
  return (
        <section id="projects" className="min-h-screen px-6 md:px-20 py-12 relative overflow-hidden font-sans bg-cream">

       <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* faint paper grain + horizontal notebook lines */}
        <defs>
          <pattern id="paper-grain" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
            <rect width="0.5" height="0.5" fill="rgba(255,255,255,0.02)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="#fffdf7" />
        <rect width="100%" height="100%" fill="url(#paper-grain)" />

        {/* notebook faint lines */}
        {Array.from({ length: 16 }).map((_, i) => (
          <line
            key={i}
            x1="0"
            x2="100"
            y1={`${6 + i * 6}%`}
            y2={`${6 + i * 6}%`}
            stroke="rgba(0,0,0,0.03)"
            strokeWidth="0.2"
          />
        ))}
      </svg>
      {/* Floating doodles */}
      <div className="absolute -top-2 left-5 text-pink-400 text-3xl animate-bounce">★</div>
      <div className="absolute top-20 right-10 text-blue-400 text-2xl animate-pulse">➶</div>
      <div className="absolute bottom-10 left-1/4 text-green-500 text-xl animate-spin-slow">〰</div>
      <div className="absolute bottom-1/3 right-0 text-yellow-500 text-4xl animate-wiggle">✦</div>
      <div className="absolute top-5 right-1/4 text-purple-500 text-2xl animate-bounce-slow">➜</div>

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <p className="italic text-pink-600 font-handwriting text-xl">My Work</p>
        <h3 className="text-5xl font-extrabold text-gray-900 mt-6 relative inline-block">
          Featured{" "}
          <span className="bg-pink-300 px-2 rounded-lg font-handwriting relative">
            Projects
            <span className="absolute left-0 -bottom-2 w-full h-[6px] bg-no-repeat bg-contain bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%25%22 height=%226%22><path d=%22M0,3 Q20,0 40,3 T80,3 T120,3%22 stroke=%22%23ec4899%22 stroke-width=%222%22 fill=%22none%22 stroke-linecap=%22round%22/></svg>')]"></span>
          </span>
        </h3>
      </div>

      {/* SVG Doodle Arrows (Behind Cards) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arrow between card 1 → 2 */}
        <path
          d="M 25% 35% C 40% 25%, 60% 25%, 70% 35%"
          stroke="#000"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          className="animate-doodle-line"
          markerEnd="url(#arrowhead)"
        />
        {/* Arrow between card 2 → 3 */}
        <path
          d="M 65% 60% C 75% 70%, 85% 70%, 90% 55%"
          stroke="#000"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          className="animate-doodle-line"
          markerEnd="url(#arrowhead)"
        />
        {/* Arrow between card 1 → 3 (diagonal) */}
        <path
          d="M 28% 75% C 40% 90%, 70% 90%, 80% 75%"
          stroke="#000"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          className="animate-doodle-line"
          markerEnd="url(#arrowhead)"
        />

        {/* Arrowhead marker */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="2"
            orient="auto"
            fill="#000"
          >
            <path d="M0,0 L0,4 L4,2 Z" />
          </marker>
        </defs>
      </svg>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center relative z-10">
        {projects.map((p, i) => {
          const rotateClass = i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]";
          const bgColor =
            i % 3 === 0 ? "bg-yellow-200" : i % 3 === 1 ? "bg-blue-200" : "bg-green-200";
          const tape = tapeColors[i % tapeColors.length];

          return (
            <motion.div
              key={p.id}
              whileHover={{
                rotate: [0, -2, 2, -1, 1, 0],
                scale: 1.05,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`relative w-72 h-[440px] p-6 ${rotateClass} ${bgColor} paper-texture doodle-border shadow-lg`}
              style={{
                borderStyle: "dashed",
                boxShadow: "4px 4px 0px rgba(0,0,0,0.3)",
              }}
            >
              {/* Fake tape */}
              <span
                className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-4 ${tape} rotate-[-6deg] rounded-sm shadow-md`}
              ></span>

              {/* Badge */}
              <span
                className={`absolute -top-3 left-4 bg-white/80 text-gray-800 font-handwriting text-sm px-2 py-1 rounded-sm shadow rotate-[-5deg]`}
              >
                {p.tags[0] || "Project"}
              </span>

              {/* Content */}
              <div className="flex flex-col items-center justify-center h-full text-center">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-40 object-cover rounded-lg shadow mb-4 border border-white/40"
                />
                <h4 className="font-bold text-lg mb-2 font-handwriting">{p.title}</h4>
                <p className="text-sm text-gray-700 mb-4 line-clamp-3 font-handwriting">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-white/60 text-gray-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <Link
                    to={p.link}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-800 transition shadow"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

