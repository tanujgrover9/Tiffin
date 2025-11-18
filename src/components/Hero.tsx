import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import heroVeg from "../assets/categories/shawarma.png";
import heroPlate from "../assets/categories/tangerine-newt-ep09aQX8LUs-unsplash.png";

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
    <section className="relative text-gray-900 overflow-hidden rounded-t-[20px]">
      {/* HERO BACKGROUND */}
      <div
        className={`relative bg-gradient-to-r ${heroGradient} text-white rounded-t-[20px] overflow-hidden`}
      >
        {/* Background Images */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPlate}
            alt="Plate"
            className="absolute left-[-30px] top-[10%] w-48 md:w-80 object-contain float"
          />
          <img
            src={heroVeg}
            alt="Veggies"
            className="absolute right-[-20px] bottom-[5%] w-48 md:w-80 object-contain float"
          />
        </div>

        <div className="relative z-10 py-10 md:py-14 px-6 flex justify-center">
  <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {features.map((f, i) => (
      <div
        key={i}
        className={`relative backdrop-blur-md bg-white/80 rounded-3xl border-2 ${cardBorderColor}
        shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        hover:-translate-y-1 transition-all duration-300 p-7 min-h-[260px]`}
      >

        <div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${cardGradientBorder} pointer-events-none`}
        />

        <div className="relative z-10 space-y-3">
          <h3
            className={`text-3xl font-extrabold bg-gradient-to-r ${cardGradientText} bg-clip-text text-transparent`}
          >
            {f.title}
          </h3>
          <p className="text-sm text-gray-600">{f.desc}</p>
        </div>

        <div className="relative z-10 flex justify-between items-end mt-6">
          <div className="flex flex-col gap-2">
            <span
              className={`text-[12px] font-semibold ${
                isDiet
                  ? "text-green-600 bg-green-100"
                  : "text-orange-600 bg-orange-100"
              } rounded-full px-3 py-1`}
            >
              {f.tag}
            </span>

            <button
              className={`flex items-center gap-1 text-[12px] font-medium text-white bg-gradient-to-r ${cardButtonGradient} px-3 py-1.5 rounded-full`}
            >
              Explore <ArrowRight size={14} />
            </button>
          </div>

          <img
            src={f.img}
            className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg"
          />
        </div>

      </div>
    ))}

  </div>
</div>


        {/* MARQUEE AT BOTTOM */}
        <div className="relative bg-yellow-300 bg-opacity-90 border-t border-yellow-400 py-3 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap font-semibold text-lg tracking-wide items-center gap-12 text-gray-800">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                <span>● No Delivery Charge</span>
                <span>● Fresh Hot Foods</span>
                <span>● No Extra Charges</span>
                <span>● Deliver Within 25 Minutes</span>
              </div>
            ))}
          </div>
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
        animation: marquee 18s linear infinite;
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
