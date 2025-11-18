// import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import heroVeg from "../assets/categories/shawarma.png";
import heroPlate from "../assets/categories/icecream.png";

// import imgFresh from "../assets/vectorImg/salad.png";
// import imgFast from "../assets/vectorImg/delivery.png";
// import imgAffordable from "../assets/vectorImg/money.png";

// const features = [
//   {
//     title: "Fresh Ingredients",
//     desc: "Home Made food & handpicked daily.",
//     tag: "100% Natural",
//     img: imgFresh,
//   },
//   {
//     title: "Fast Delivery",
//     desc: "Hot & homely meals at your doorstep.",
//     tag: "30 Min Delivery",
//     img: imgFast,
//   },
//   {
//     title: "Affordable Plans",
//     desc: "Daily, weekly, or monthly options.",
//     tag: "Up to 40% Off",
//     img: imgAffordable,
//   },
// ];

export default function HeroSection() {
  const loc = useLocation();
  const isDiet = loc.pathname === "/diet";

  const heroGradient = isDiet
    ? "from-lime-600 to-green-500"
    : "from-orange-500 to-amber-400";

  // const cardGradientText = isDiet
  //   ? "from-lime-600 to-green-500"
  //   : "from-orange-600 to-amber-500";

  // const cardGradientBorder = isDiet
  //   ? "from-lime-400/20 to-green-300/40"
  //   : "from-orange-400/20 to-amber-300/40";

  // const cardButtonGradient = isDiet
  //   ? "from-lime-600 to-green-500 hover:from-lime-700 hover:to-green-600"
  //   : "from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600";

  // const cardBorderColor = isDiet
  //   ? "border-green-400/60 hover:border-green-500/90"
  //   : "border-orange-400/60 hover:border-orange-500/90";

  return (
    <section className="relative text-gray-900 overflow-hidden rounded-t-[20px]">

      {/* Hero BG */}
      <div className={`relative bg-gradient-to-r ${heroGradient} text-white rounded-t-[20px] overflow-hidden`}>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroPlate}
            alt="Plate"
            className="absolute left-[-50px] bottom-[5%]  w-40 md:w-96 float object-contain"
          />
          <img
            src={heroVeg}
            alt="Veggies"
            className="absolute right-[-40px] bottom-[0%] w-40 md:w-96 float object-contain"
          />
        </div>

        <div className="relative z-10 text-center px-6 md:px-16 py-20">
          <h1 className="text-6xl md:text-8xl font-extrabold drop-shadow-2xl tracking-tight animate-fadeSlide">
    Homely<span className="text-yellow-300">Box</span>
  </h1>
          <h3 className="text-2xl md:text-4xl font-extrabold drop-shadow-lg">
            Fresh • Homely • Everyday Meals
          </h3>
          <p className="text-lg md:text-xl opacity-90 mt-4">
            Delicious & homely food delivered straight to your door!
          </p>
        </div>

        <div className="relative bg-yellow-300 bg-opacity-90 border-t border-yellow-400 py-3 overflow-hidden">
          <div className="animate-marquee flex whitespace-nowrap font-semibold text-lg tracking-wide items-center gap-12 text-gray-800">
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

      {/* Feature Cards */}
      {/* <div className="relative bg-gradient-to-b from-amber-50 to-white py-16 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {features.map((f, i) => (
            <div
              key={i}
              className={`relative backdrop-blur-md bg-white/80 rounded-3xl border-2 ${cardBorderColor}
              shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
              hover:-translate-y-1 transition-all duration-300 
              p-6 flex flex-col justify-between min-h-[180px] sm:min-h-[190px] md:min-h-[200px] w-full`}
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-tr ${cardGradientBorder} pointer-events-none`} />

              <div className="relative z-10 flex flex-col space-y-2">
                <h3
                  className={`text-3xl md:text-4xl font-extrabold bg-gradient-to-r ${cardGradientText} bg-clip-text text-transparent`}
                >
                  {f.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{f.desc}</p>
              </div>

              <div className="relative z-10 flex items-end justify-between mt-4">
                <div className="flex flex-col gap-2">
                  <span
                    className={`text-[11px] font-semibold ${
                      isDiet ? "text-green-600 bg-green-100" : "text-orange-600 bg-orange-100"
                    } rounded-full px-3 py-1`}
                  >
                    {f.tag}
                  </span>

                  <button
                    className={`flex items-center gap-1 text-[12px] font-medium text-white bg-gradient-to-r ${cardButtonGradient} px-3 py-1.5 rounded-full shadow-md`}
                  >
                    Explore <ArrowRight size={14} />
                  </button>
                </div>

                <img src={f.img} alt={f.title} className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-lg" />
              </div>
            </div>
          ))}

        </div>
      </div> */}

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
