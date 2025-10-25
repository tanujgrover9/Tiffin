import { ArrowRight } from "lucide-react";
import heroVeg from "../assets/img/tangerine-newt-q2PMPo8gBBk-unsplash-min-min.png";
import heroPlate from "../assets/img/3d-icon-plate-with-traditional-indian-cuisine-illustration-logo_762678-68687.png";

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
  return (
    <section className="relative bg-orange-500 text-gray-900 overflow-hidden rounded-t-[20px] border-t-4 border-white">
      {/* Background images adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={heroPlate}
          alt="Plate"
          className="absolute left-[-40px] top-[10%] w-40 opacity-40 md:opacity-100 md:w-96 md:-translate-y-1/2 object-contain float"
        />
        <img
          src={heroVeg}
          alt="Veggies"
          className="absolute right-[-40px] top-[40%] w-40 opacity-40 md:opacity-100 md:w-96 md:-translate-y-1/2 object-contain float"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 py-20 md:py-28 space-y-8">
       

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-center w-full max-w-5xl mt-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="relative bg-white text-gray-800 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all w-[90%] sm:w-72 md:w-80 h-[280px] md:h-[300px] mx-auto flex flex-col justify-between p-5 md:p-6"
            >
              {/* Text Section */}
              <div className="flex flex-col items-start space-y-2">
                {/* Increased font sizes on mobile */}
                <h3 className="text-4xl sm:text-3xl md:text-5xl font-bold luckiest-guy-regular">
                  {f.title}
                </h3>
                <p className="text-base sm:text-sm md:text-base text-gray-600 ">
                  {f.desc}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex items-end justify-between mt-auto pt-4">
                {/* Left: Tag + Button */}
                <div className="flex flex-col items-start gap-2">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-orange-600 bg-orange-100 rounded-full px-3 py-1 shadow-sm">
                    {f.tag}
                  </span>
                  <button className="flex items-center gap-1 text-[11px] sm:text-[11px] font-medium text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-full transition">
                    Explore <ArrowRight size={12} />
                  </button>
                </div>

                {/* Right: Image */}
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
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
