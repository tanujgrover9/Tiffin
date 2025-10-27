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
    <section className="relative text-gray-900 overflow-hidden rounded-t-[20px] bg-transparent ">
      <div className="relative bg-orange-500 overflow-hidden rounded-t-[20px] text-white">
        <div className=" py-3 overflow-hidden  bg-yellow-300">
          <div className="flex whitespace-nowrap animate-marquee font-semibold text-lg md:text-base tracking-wide items-center gap-12 text-gray-800">
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
        {/* Background images */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPlate}
            alt="Plate"
            className="absolute left-[-40px] top-[10%] w-40 opacity-30 md:opacity-100 md:w-96 md:-translate-y-1/2 object-contain float"
          />
          <img
            src={heroVeg}
            alt="Veggies"
            className="absolute right-[-40px] top-[40%] w-40 opacity-30 md:opacity-100 md:w-96 md:-translate-y-1/2 object-contain float"
          />
        </div>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 py-10 md:py-5 space-y-8">
          {/* <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-sm luckiest-guy-regular">
            Healthy<span className="text-blue-600">.</span> Fresh<span className="text-green-400">.</span> Affordable<span className="text-yellow-400">.</span>
          </h1>
          <p className="text-lg md:text-xl text-orange-50 max-w-2xl leading-relaxed">
            Discover the taste of home with every bite — meals made with love,
            delivered fast, and priced just right.
          </p> */}

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center w-full max-w-6xl mt-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="relative bg-white text-gray-800 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all w-[90%] sm:w-72 md:w-80 h-[280px] md:h-[300px] mx-auto flex flex-col justify-between p-6"
              >
                {/* Text Section */}
                <div className="flex flex-col items-start space-y-3">
                  <h3 className="text-4xl md:text-4xl font-extrabold luckiest-guy-regular">
                    {f.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-snug">
                    {f.desc}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex items-end justify-between mt-auto pt-4">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-[11px] font-semibold text-orange-600 bg-orange-100 rounded-full px-3 py-1 shadow-sm">
                      {f.tag}
                    </span>
                    <button className="flex items-center gap-1 text-[12px] font-medium text-white bg-orange-500 hover:bg-orange-600 px-3 py-1.5 rounded-full transition">
                      Explore <ArrowRight size={14} />
                    </button>
                  </div>

                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-24 h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🔸 Animations */}
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
