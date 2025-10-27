import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import heroVeg from "../assets/img/tangerine-newt-q2PMPo8gBBk-unsplash-min-min.png";
import heroPlate from "../assets/img/javier-kober-L5wFsLfp0GY-unsplash-min-min (1) (1).png";

import imgFresh from "../assets/vectorImg/salad.png";
import imgFast from "../assets/vectorImg/delivery.png";
import imgAffordable from "../assets/vectorImg/money.png";

const features = [
  {
    title: "Fresh Ingredients",
    desc: "Home Made food & handpicked daily.",
    tag: "100% Natural",
    img: imgFresh,
  },
  {
    title: "Fast Delivery",
    desc: "Hot & homely meals at your doorstep.",
    tag: "30 Min Delivery",
    img: imgFast,
  },
  {
    title: "Affordable Plans",
    desc: "Daily, weekly, or monthly options.",
    tag: "Up to 40% Off",
    img: imgAffordable,
  },
];

export default function HeroSection() {
  const loc = useLocation();
  const isDiet = loc.pathname === "/diet";

  const heroGradient = isDiet
    ? "from-lime-600 to-green-500"
    : "from-orange-500 to-amber-400";

  const cardGradientText = isDiet
    ? "from-lime-600 to-green-500"
    : "from-orange-600 to-amber-500";

  const cardGradientBorder = isDiet
    ? "from-lime-400/20 to-green-300/40"
    : "from-orange-400/20 to-amber-300/40";

  const cardButtonGradient = isDiet
    ? "from-lime-600 to-green-500 hover:from-lime-700 hover:to-green-600"
    : "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600";

  const cardBorderColor = isDiet
    ? "border-green-400/60 hover:border-green-500/90"
    : "border-orange-400/60 hover:border-orange-500/90";

  return (
    <section className="relative text-gray-900 overflow-hidden rounded-t-[20px] bg-transparent">
      <div
        className={`relative bg-gradient-to-r ${heroGradient} text-white rounded-t-[20px] overflow-hidden`}
      >
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPlate}
            alt="Plate"
            className="absolute left-[-0px] sm:top-[-35%] top-[10px] w-40 md:w-96 opacity-100 object-contain float"
          />
          <img
            src={heroVeg}
            alt="Veggies"
            className="absolute right-[-40px] bottom-[10%] w-40 md:w-96 opacity-100 object-contain float"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 py-20 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-md">
            Healthy<span className="text-blue-300">.</span> Fresh
            <span className="text-green-400">.</span> Affordable
            <span className="text-yellow-400">.</span>
          </h1>
        </div>

        {/* Moving Banner */}
        <div className="relative bg-yellow-300 bg-opacity-90 border-t border-yellow-400 py-3 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee font-semibold text-lg tracking-wide items-center gap-12 text-gray-800">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>● No Delivery Charge</span>
                <span>● Fresh Hot Foods</span>
                <span>● No Extra Charges</span>
                <span>● Deliver Within 25 Minutes</span>
                <span>● No Delivery Charge</span>
                <span>● Fresh Hot Foods</span>
                <span>● No Extra Charges</span>
                <span>● Deliver Within 25 Minutes</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="relative bg-gradient-to-b from-amber-50 to-white py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center w-full max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`relative bg-white/80 backdrop-blur-md text-gray-800 rounded-3xl border-2 ${cardBorderColor}
              shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col justify-between overflow-hidden`}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${cardGradientBorder} pointer-events-none`}
              ></div>

              <div className="flex flex-col items-start space-y-3 relative z-10">
                <h3
                  className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${cardGradientText} bg-clip-text text-transparent`}
                >
                  {f.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-snug">
                  {f.desc}
                </p>
              </div>

              <div className="flex items-end justify-between mt-auto pt-4 relative z-10">
                <div className="flex flex-col items-start gap-2">
                  <span
                    className={`text-[11px] font-semibold ${
                      isDiet
                        ? "text-green-600 bg-green-100"
                        : "text-orange-600 bg-orange-100"
                    } rounded-full px-3 py-1 shadow-sm`}
                  >
                    {f.tag}
                  </span>
                  <button
                    className={`flex items-center gap-1 text-[12px] font-medium text-white bg-gradient-to-r ${cardButtonGradient} px-3 py-1.5 rounded-full shadow-md transition-all`}
                  >
                    Explore <ArrowRight size={14} />
                  </button>
                </div>

                <img
                  src={f.img}
                  alt={f.title}
                  className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 18s linear infinite;
            align-items: center;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
