import { useLocation } from "react-router-dom";
import heroVeg from "../assets/img/ChatGPT Image Nov 19, 2025, 09_20_22 AM (1).png";
import heroPlate from "../assets/categories/shawarma.png";

export default function HeroSection() {
  const loc = useLocation();
  const isDiet = loc.pathname === "/diet";

  const heroGradient = isDiet
    ? "from-lime-600 to-green-500"
    : "from-orange-500 to-amber-400";

  const benefits = [
    "No Delivery Charge",
    "Fresh Hot Foods",
    "No Extra Charges",
    "Deliver Within 25 Minutes",
  ];

  return (
    <section className="relative text-gray-900 overflow-hidden rounded-t-[20px]">
      {/* HERO BACKGROUND */}
      <div
        className={`relative bg-gradient-to-r ${heroGradient} text-white rounded-t-[20px] overflow-hidden`}
      >
        {/* FLOATING IMAGES */}
        <div className="absolute inset-0 pt-10">
          <img
            src={heroPlate}
            alt="Food Plate"
            className="absolute left-[-10px] bottom-[10%] w-36 md:w-80 lg:w-96 object-contain float"
          />

          <img
            src={heroVeg}
            alt="Fresh Vegetables"
            className="absolute right-[5px] bottom-[10%] w-36 md:w-80 lg:w-96 object-contain float"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 text-center px-6 md:px-16 py-20 md:py-20">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent drop-shadow-xl">
              Homely
            </span>
            <span className="text-green-400">Box</span>
          </h1>

          <h3 className="text-xl md:text-3xl font-semibold mt-3 text-white/90 tracking-wide">
            Fresh • Homely • Everyday Meals
          </h3>

          {/* DELIVERY LABEL */}
          {/* <div className="mt-6 inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full backdrop-blur-md shadow-sm mb-10">
            <Truck className="w-5 h-5 text-white" />
            <p className="text-sm md:text-base font-medium text-white tracking-wide">
              Delicious & homely meals delivered fast!
            </p>
          </div> */}
        </div>

        {/* MARQUEE SCROLLER */}
        <div className="relative bg-yellow-300 bg-opacity-90 border-t border-yellow-400 py-3 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap font-semibold text-lg tracking-wide items-center gap-12 text-gray-800">
            {/* Duplicate once for seamless scroll */}
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {benefits.map((item, idx) => (
                  <span key={`${i}-${idx}`}>● {item}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
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
