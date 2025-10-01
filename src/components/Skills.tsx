
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiGraphql,
} from "react-icons/si";

export const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-pink-500" },
    { name: "GraphQL", icon: <SiGraphql />, color: "text-fuchsia-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  ];

  const stickyColors = ["#FFEB99", "#FFB3B3", "#B3E5FC", "#C8E6C9"];

  return (
       <section className="min-h-screen px-6 md:px-20 py-12 relative overflow-hidden font-sans bg-cream">

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
      <div className="absolute -top-2 left-5 text-pink-400 text-3xl animate-bounce">★</div>
      <div className="absolute top-20 right-10 text-blue-400 text-2xl animate-pulse">➶</div>
      <div className="absolute bottom-10 left-1/4 text-green-500 text-xl animate-spin-slow">〰</div>
      <div className="absolute bottom-1/3 right-0 text-yellow-500 text-4xl animate-wiggle">✦</div>
      <div className="absolute top-5 right-1/4 text-purple-500 text-2xl animate-bounce-slow">➜</div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <p className="italic text-pink-600 font-handwriting text-xl mb-2">
          Tools I play with
        </p>
        <h3 className="text-5xl font-extrabold text-black relative inline-block">
          My{" "}
          <span className="relative text-yellow-600 font-handwriting rotate-[-2deg] inline-block">
            Skills
            <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-black"></span>
          </span>
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 relative z-10">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className={`relative p-6 w-36 h-36 flex flex-col items-center justify-center text-center rounded-xl border-2 border-black shadow-lg transition-transform duration-300 hover:scale-110 hover:rotate-[-1deg]`}
            style={{
              backgroundColor: stickyColors[i % stickyColors.length],
              transform: `rotate(${(Math.random() * 6 - 3).toFixed(2)}deg)`,
            }}
          >
            {/* Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 bg-red-500 rounded-full border border-black/30 shadow-md"></div>

            {/* Icon */}
            <div className="text-4xl mb-2">
              <span className={s.color}>{s.icon}</span>
            </div>

            {/* Label */}
            <p className="text-sm font-handwriting font-bold text-black">
              {s.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
