import React from "react";
import { CheckCircle } from "lucide-react";
import aboutImg from "../assets/projects/7509794.png";

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* --- Left Text Section --- */}
        <div className="flex-1 text-center lg:text-left">
          <span className="text-sm sm:text-base font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full inline-block">
            ABOUT US
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mt-4 leading-snug">
            Nourishing You With{" "}
            <span className="luckiest-guy-regular font-bold text-orange-500">
              Fresh, Healthy
            </span>{" "}
            & Affordable Meals
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
            We’re more than just a tiffin service — we’re your daily meal
            partner. Our mission is to bring you{" "}
            <span className="font-semibold text-green-600">
              home-style, nutritious, and budget-friendly
            </span>{" "}
            food prepared with love and hygiene. From busy students to working
            professionals, we make sure every bite is wholesome, tasty, and
            comforting.
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
            Thank you to all our amazing customers who trust us and make us a
            part of their everyday meals. Your love and support inspire us to
            serve better every day!
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Freshly Cooked Daily</span> – Every meal is
                made with fresh ingredients for the best taste and nutrition.
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Healthy & Hygienic</span> – Cooked in clean
                kitchens following strict hygiene standards.
              </p>
            </div>

            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <CheckCircle className="text-green-600 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Affordable for Everyone</span> – Delicious
                home-cooked meals that fit your budget.
              </p>
            </div>
          </div>
        </div>

        {/* --- Right Image Section --- */}
        <div className="flex-1 flex justify-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
            <img
              src={aboutImg}
              alt="About our team"
              className="w-full h-auto rounded-2xl drop-shadow-lg"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0 bg-white bg-opacity-95 px-4 py-3 rounded-xl shadow-lg flex flex-col gap-1 text-center sm:text-left">
              <p className="text-sm text-gray-800 font-medium flex items-center justify-center sm:justify-start gap-1">
                <CheckCircle className="text-green-600" size={16} />
                100% Fresh Ingredients
              </p>
              <p className="text-sm text-gray-800 font-medium flex items-center justify-center sm:justify-start gap-1">
                <CheckCircle className="text-green-600" size={16} />
                Trusted by 500+ Customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
