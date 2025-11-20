import { useLocation } from "react-router-dom";
import heroVeg from "../assets/img/ChatGPT Image Nov 19, 2025, 09_20_22 AM (1).png";

const BENEFITS = [
  "No Delivery Charge",
  "Fresh Hot Foods",
  "No Extra Charges",
  "Deliver Within 25 Minutes",
  "No Delivery Charge",
  "Fresh Hot Foods",
  "No Extra Charges",
  "Deliver Within 25 Minutes",
];

const AVATAR_URLS = [
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_34.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_24.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_8.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_10.png",
  "https://cdn.jsdelivr.net/gh/alohe/avatars/png/memo_12.png",
];

export default function HeroSection() {
  const loc = useLocation();
  const isDiet = loc.pathname === "/diet";

  const heroGradient = isDiet
    ? "from-emerald-50 via-white to-emerald-50"
    : "from-amber-50 via-white to-orange-50";

  const description = isDiet
    ? "Balanced, calorie-counted diet meals delivered fresh to your door — perfect for weight loss and fitness goals."
    : "Fresh, homely food cooked like at home, packed with love and delivered hot to your doorstep every single day.";

  const primaryText = isDiet ? "text-emerald-700" : "text-orange-600";
  const softText = isDiet ? "text-emerald-600" : "text-orange-500";
  const accentText = isDiet ? "text-emerald-400" : "text-orange-400";
  const borderSoft = isDiet ? "border-emerald-100" : "border-amber-100";
  const marqueeBg = isDiet
    ? "bg-emerald-50/90 border-emerald-100"
    : "bg-amber-50/90 border-amber-100";
  const marqueeText = isDiet ? "text-emerald-700" : "text-amber-800";
  const ctaGradient = isDiet
    ? "from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
    : "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700";

  return (
    <section className="relative overflow-hidden rounded-t-[20px] text-gray-900">
      {/* TOP MARQUEE */}
      <div
        className={`relative border-b py-2 overflow-hidden z-20 ${marqueeBg}`}
      >
        <div
          className={`animate-marquee flex whitespace-nowrap font-medium text-[11px] md:text-xs tracking-wide items-center gap-8 ${marqueeText}`}
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-8">
              {BENEFITS.map((item, idx) => (
                <span key={`${i}-${idx}`}>• {item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* HERO WRAPPER */}
      <div
        className={`
          relative bg-gradient-to-r ${heroGradient}
          rounded-[20px] border ${borderSoft}
          shadow-[0_14px_35px_rgba(15,23,42,0.12)]
        `}
      >
        {/* FLOATING IMAGE + PRICE TAG (DESKTOP/TABLET ONLY) */}
        <div
          className="
            hidden md:block
            absolute 
            left-2 bottom-1
            md:left-auto md:bottom-auto 
            md:right-4 md:top-1/2 md:-translate-y-1/2 md:pr-4
            z-0 pointer-events-none
          "
        >
          <div className="relative">
            {/* Steam doodles */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-4 md:-top-8 flex gap-2 md:gap-2.5">
              {[0, 1, 2].map((i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 48"
                  className="w-3.5 md:w-5 h-7 md:h-9 steam-rise opacity-70"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <path
                    d="M8 44 C4 36, 4 32, 8 26 C12 20, 12 16, 8 10 C4 4, 6 2, 10 4"
                    fill="none"
                    stroke={isDiet ? "#059669" : "#fb923c"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ))}
            </div>

            {/* DESKTOP/TABLET PRICE CARD (overlapping pill) */}
            <div className="absolute bottom-4 left-[-40px] z-20 pointer-events-auto">
              <div className="relative inline-flex items-center">
                {/* Main card */}
                <div
                  className={`
                    flex flex-col gap-1 rounded-2xl
                    border border-white/80 bg-white/95 backdrop-blur-md
                    shadow-[0_18px_45px_rgba(15,23,42,0.4)]
                    px-4 py-2.5 pr-24
                    -rotate-2 hover:-rotate-1 transition-transform duration-300
                  `}
                >
                  <span
                    className={`
                      text-[10px] font-semibold tracking-[0.22em]
                      uppercase flex items-center gap-1
                      ${isDiet ? "text-emerald-500" : "text-orange-500"}
                    `}
                  >
                    <span className="text-[12px]">●</span>
                    HomelyBox
                  </span>

                  <span className="text-[11px] font-medium text-slate-600">
                    • daily meals • home meals
                  </span>
                </div>

                {/* Overlapping price pill */}
                <div className="absolute right-[-10px] top-1/2 -translate-y-1/2">
                  <div
                    className={`
                      inline-flex items-baseline gap-1 rounded-full
                      px-4 py-1.5
                      text-white shadow-[0_14px_35px_rgba(15,23,42,0.55)]
                      bg-gradient-to-r
                      ${
                        isDiet
                          ? "from-emerald-500 to-emerald-600"
                          : "from-orange-500 to-orange-600"
                      }
                    `}
                  >
                    <span className="text-[11px] font-semibold opacity-90">
                      Starts at
                    </span>
                    <span className="flex items-baseline leading-none">
                      <span className="text-xs mr-0.5 font-semibold">₹</span>
                      <span className="text-lg font-extrabold">80</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE (DESKTOP/TABLET) */}
            <img
              src={heroVeg}
              alt="Homely food tiffin"
              className="w-24 md:w-70 lg:w-80 object-contain float drop-shadow-[0_14px_28px_rgba(15,23,42,0.18)]"
            />
          </div>
        </div>

        {/* TEXT CONTENT + MOBILE IMAGE / PRICE CARD */}
        <div className="relative z-10 px-5 md:px-12 pt-7 pb-10 md:pt-9 md:pb-12">
          <div className="max-w-lg mx-auto md:mx-0 text-center md:text-left">
            {/* MOBILE HERO IMAGE + PRICE (INLINE, NO OVERLAP) */}
            <div className="md:hidden flex flex-col items-center gap-3 mb-4">
              <img
                src={heroVeg}
                alt="Homely food tiffin"
                className="w-32 h-auto object-contain drop-shadow-[0_10px_20px_rgba(15,23,42,0.18)]"
              />

              {/* MOBILE PRICE CARD – INLINE */}
              <div className="relative inline-flex items-center">
                {/* Main white card */}
                <div
                  className={`
                    flex flex-col gap-0.5 rounded-2xl
                    border border-white/80 bg-white/95 backdrop-blur-md
                    shadow-[0_12px_32px_rgba(15,23,42,0.35)]
                    px-3 py-2 pr-16
                    -rotate-2
                  `}
                >
                  <span
                    className={`
                      text-[9px] font-semibold tracking-[0.2em]
                      uppercase flex items-center gap-1
                      ${isDiet ? "text-emerald-500" : "text-orange-500"}
                    `}
                  >
                    <span className="text-[11px]">●</span>
                    HomelyBox
                  </span>

                  <span className="text-[10px] font-medium text-slate-600">
                    daily meals • home meals
                  </span>
                </div>

                {/* Overlapping price pill */}
                <div className="absolute right-[-6px] top-1/2 -translate-y-1/2">
                  <div
                    className={`
                      inline-flex items-center gap-1 rounded-full
                      px-3 py-1.5
                      text-[11px] font-semibold text-white
                      shadow-[0_10px_26px_rgba(15,23,42,0.45)]
                      bg-gradient-to-r
                      ${
                        isDiet
                          ? "from-emerald-500 to-emerald-600"
                          : "from-orange-500 to-orange-600"
                      }
                    `}
                  >
                    <span>Starts at</span>
                    <span className="flex items-baseline leading-none">
                      <span className="text-[10px] mr-0.5 font-semibold">₹</span>
                      <span className="text-sm font-extrabold">80</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TITLE AREA */}
            <h1
              className="
                text-4xl md:text-6xl lg:text-7xl
                font-extrabold tracking-tight leading-tight
                flex flex-col md:flex-row
                items-center md:items-start
                gap-2 relative
                text-center md:text-left
              "
            >
              <span className={`relative inline-block ${primaryText}`}>
                Homely
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 120 15"
                  className="absolute left-0 bottom-[-12%] w-24 md:w-32 rotate-[-2deg] opacity-80 pointer-events-none"
                >
                  <path
                    d="M2 10 C 30 2, 90 2, 118 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    className={accentText}
                  />
                </svg>
              </span>

              <span className="inline-flex">
                <span
                  className={`
                    relative inline-flex items-center gap-2.5
                    px-4 py-1.5
                    text-3xl md:text-4xl font-extrabold tracking-tight
                    rounded-2xl bg-white/90
                    border
                    -rotate-1 md:-rotate-2
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(15,23,42,0.22)]
                    ${
                      isDiet
                        ? "border-emerald-100 text-emerald-700"
                        : "border-orange-100 text-orange-600"
                    }
                  `}
                >
                  <span
                    className={`
                      inline-flex items-center justify-center
                      w-7 h-7 md:w-8 md:h-8
                      rounded-full
                      shadow-[0_3px_8px_rgba(15,23,42,0.2)]
                      ${
                        isDiet
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-orange-50 text-orange-600"
                      }
                    `}
                  >
                    ❤️
                  </span>
                  <span>Box.</span>
                  {isDiet && (
                    <span className="text-base md:text-lg -mt-0.5 opacity-90">
                      🌿
                    </span>
                  )}
                </span>
              </span>
            </h1>

            <h3
              className={`
                text-xs md:text-sm font-semibold mt-3 tracking-wide
                flex flex-wrap items-center gap-2
                justify-center md:justify-start
                ${primaryText}
              `}
            >
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/70 shadow-[0_4px_12px_rgba(15,23,42,0.08)] border border-white/70">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Fresh
              </span>
              <span>• Homely • Everyday Meals</span>
            </h3>

            {/* DESCRIPTION */}
            <p
              className={`mt-3 text-[13px] md:text-sm leading-relaxed ${softText}`}
            >
              {description}
            </p>

            {/* CTA + STATS + TRUSTED CUSTOMERS */}
            <div className="mt-5 flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6 justify-center md:justify-start">
              <div className="w-full md:w-auto space-y-3">
                <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-3 sm:gap-3 justify-start">
                  <button
                    onClick={() => {
                      const section = document.getElementById(
                        "indian-food-section"
                      );
                      section?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className={`
                      px-6 py-3 
                      text-sm md:text-base
                      text-white font-semibold rounded-full
                      shadow-[0_8px_24px_rgba(15,23,42,0.25)]
                      hover:shadow-[0_10px_30px_rgba(15,23,42,0.3)]
                      active:scale-95 transition-all duration-300
                      mx-auto md:mx-0 block
                      bg-gradient-to-r ${ctaGradient}
                      border border-white/20
                      hover:-translate-y-0.5
                    `}
                  >
                    Order Now
                  </button>
                </div>

                <div
                  className={`
                    flex flex-wrap gap-x-3 gap-y-1 text-[11px] md:text-xs 
                    justify-center md:justify-start items-center ${primaryText}
                  `}
                >
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                    1,500+ meals served
                  </span>
                  <span className="hidden sm:inline-block h-1 w-[1px] bg-gray-300/70" />
                  <span className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span> 4.9/5 rated by
                    customers
                  </span>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-start gap-3 md:gap-4">
                <div className="flex -space-x-3">
                  {AVATAR_URLS.map((url, i) => (
                    <img
                      key={i}
                      src={url}
                      alt={`Customer ${i + 1}`}
                      className={`
                        w-9 h-9 rounded-full border-2 border-white object-cover
                        hover:scale-110 transition-transform duration-300
                        ${isDiet ? "bg-emerald-400" : "bg-orange-400"}
                      `}
                    />
                  ))}
                </div>

                <div
                  className={`flex items-center gap-2 font-semibold text-sm md:text-base relative ${primaryText}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 30"
                    className={`w-10 md:w-12 ${accentText}`}
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
                  <span>Happy Serving</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 📞 CALL NOW – rotated button on right center (ALL SIZES) */}
        <a
          href="tel:+917080216257"
          className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-[-32px] origin-center rotate-90"
        >
          <button
            className="
              px-3 py-2
              text-xs font-semibold tracking-wide
              border-orange-300/70
              bg-red-500 text-white
              hover:bg-orange-50 hover:text-red-600 hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Connect us
          </button>
        </a>
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

          @keyframes steamUp {
            0% {
              transform: translateY(8px) scale(0.95);
              opacity: 0;
            }
            30% {
              opacity: 0.7;
            }
            100% {
              transform: translateY(-8px) scale(1.05);
              opacity: 0;
            }
          }
          .steam-rise {
            animation: steamUp 3.5s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
}
