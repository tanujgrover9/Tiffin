import { Leaf, Truck, DollarSign } from "lucide-react";
import heroVeg from "../assets/img/hyang-imant-YBkm-PnrSDI-unsplash-min.png";
import heroPlate from "../assets/img/tangerine-newt-yTjiJlWUJG0-unsplash.png";

const features = [
  {
    icon: <Leaf className="text-green-600 w-7 h-7" />,
    title: "Fresh Ingredients",
    desc: "Locally sourced & handpicked daily.",
    tag: "100% Natural",
  },
  {
    icon: <Truck className="text-amber-600 w-7 h-7" />,
    title: "Fast Delivery",
    desc: "Hot & homely meals at your doorstep.",
    tag: "30 Min Delivery",
  },
  {
    icon: <DollarSign className="text-green-700 w-7 h-7" />,
    title: "Affordable Plans",
    desc: "Daily, weekly, or monthly options.",
    tag: "Up to 40% Off",
  },
];

export default function HeroSection() {
  return (
    <section className="relative bg-blue-100 text-gray-900 overflow-hidden">
      <img
        src={heroVeg}
        alt="Veggies"
        className="absolute top-[-40px] left-[-60px] w-80 md:w-[420px] object-contain  float"
      />
      <img
        src={heroPlate}
        alt="Plate"
        className="absolute bottom-[-30px] right-[-40px] w-72 md:w-[400px] object-contain  float"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 py-20 md:py-28 space-y-8">
  <h1 className="text-6xl md:text-7xl font-extrabold leading-tight max-w-3xl text-orange-500 luckiest-guy-regular">
    Fresh,{" "}
    <span className="outlined-text text-yellow-400 luckiest-guy-regular font-bold">
      Ghar ki tiffins
    </span>{" "}
    delivered <br className="hidden md:block" /> hot to your Ghar
  </h1>

  {/* Feature cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center w-full max-w-5xl mt-12">
    {features.map((f, i) => (
      <div
        key={i}
        className="bg-white text-gray-800 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6 flex flex-col justify-between w-60 mx-auto"
      >
        <div className="flex flex-col items-start space-y-3">
          <div className="w-10 h-10 flex items-center justify-center text-orange-500">
            {f.icon}
          </div>
          <h3 className="text-3xl font-bold luckiest-guy-regular">{f.title}</h3>
          <p className="text-sm text-gray-600 leading-snug">{f.desc}</p>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
            {f.tag}
          </span>
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
