import { useLocation } from "react-router-dom";
import heroVeg from "../assets/img/ChatGPT Image Nov 19, 2025, 09_20_22 AM (1).png";

export default function HeroSection() {
  const loc = useLocation();
  const isDiet = loc.pathname === "/diet";

  const heroGradient = isDiet
    ? "from-lime-600/70 to-green-500/70"
    : "from-amber-100/70 to-amber-100/70";

  const benefits = [
    "No Delivery Charge",
    "Fresh Hot Foods",
    "No Extra Charges",
    "Deliver Within 25 Minutes",
  ];

  return (
    <section className="relative overflow-hidden rounded-t-[20px] text-gray-900">

      {/* TOP MARQUEE */}
      <div className="relative bg-yellow-300 bg-opacity-90 border-b border-yellow-400 py-2 overflow-hidden z-20">
        <div className="animate-marquee flex whitespace-nowrap font-semibold text-base md:text-lg tracking-wide items-center gap-8 text-gray-800">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              {benefits.map((item, idx) => (
                <span key={`${i}-${idx}`}>● {item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HERO WRAPPER */}
      <div className={`relative bg-gradient-to-r ${heroGradient} text-white rounded-[20px]`}>

        {/* FLOATING IMAGE (reduced size) */}
        {/* FLOATING IMAGE — Responsive Position */}
<div
  className="
    absolute 
    /* Mobile position */
    left-0 bottom-0 translate-y-0 pb-2

    /* Desktop overrides */
    md:left-auto md:bottom-auto 
    md:right-0 md:top-1/2 md:-translate-y-1/2 md:pr-10

    z-0 pointer-events-none
  "
>
  <img
    src={heroVeg}
    alt="Food"
    className="w-32 md:w-80 lg:w-96 object-contain float"
  />
</div>



        {/* TEXT CONTENT */}
        <div className="relative z-10 px-6 md:px-16 pt-10 pb-16 md:pb-24 text-center md:text-left">

          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tight leading-none">
              <span className="text-orange-500">Homely</span>
              <span className="text-orange-400">Box</span>
            </h1>

            <h3 className="text-base md:text-xl font-semibold mt-2 text-orange-500 tracking-wide">
              Fresh • Homely • Everyday Meals
            </h3>

          <button
  onClick={() => {
    const section = document.getElementById("indian-food-section");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
  className="
    mt-4 px-6 py-3 
    bg-gradient-to-r from-orange-500 to-orange-600
    text-white font-semibold rounded-ful
    shadow-[0_4px_12px_rgba(255,120,40,0.4)]
    hover:shadow-[0_6px_16px_rgba(255,120,40,0.55)]
    hover:from-orange-600 hover:to-orange-700
    active:scale-95 transition-all duration-300
    mx-auto md:mx-0 block
  "
>
  Order Now
</button>



            {/* TRUSTED CUSTOMERS */}
            <div className="flex flex-col md:flex-row items-center md:items-center justify-start mt-6 gap-3">
              
              {/* Avatars */}
              <div className="flex -space-x-4">
                {[
                  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png",
                  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png",
                  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_8.png",
                  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_10.png",
                  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png",
                ].map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`User ${i + 1}`}
                    className="bg-white w-10 h-10 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform duration-300"
                  />
                ))}
              </div>

              {/* Text + Arrow inline */}
              <div className="flex items-center gap-2 text-orange-600 font-semibold text-base relative">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 30"
                  className="w-14 text-orange-400"
                >
                  <path
                    d="M10 20 C30 10, 70 10, 90 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M85 18 L90 20 L85 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Happy Family</span>

              
              </div>

            </div>

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
            animation: marquee 16s linear infinite;
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
