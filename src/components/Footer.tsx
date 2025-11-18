import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/img/logo.png";


export default function Footer() {
  return (
    <footer className="relative text-[#1a1a1a] overflow-hidden bg-gradient-to-b from-orange-100 via-orange-200/80 to-orange-50 backdrop-blur-sm border-t border-orange-200/60">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-orange-50/60 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16 space-y-12">
        {/* 🔶 Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
          {/* Logo & Description */}
          <div className="space-y-3 md:max-w-xs">
             <img
              src={logo}
              alt="HomelyBox Logo"
              className="h-20 w-auto object-contain"
            />
            <p className="text-lg font-semibold text-[#ff7b3f] uppercase tracking-wide  luckiest-guy-regular">
              Ghar ka Khana
            </p>
            <p className="text-sm text-[#333] leading-relaxed">
              Fresh, nutritious, and home-cooked meals — crafted with love and
              delivered hot every day.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12 text-sm">
            {/* Explore */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#d04a00] font-bold mb-2 uppercase tracking-wide text-xs">
                Explore
              </h3>
              {[
                { name: "Menu", link: "/menu" },
                { name: "Meal Plans", link: "/plans" },
                { name: "About Us", link: "/about" },
                { name: "Contact", link: "/contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="hover:text-[#ff7b3f] transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Support */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#d04a00] font-bold mb-2 uppercase tracking-wide text-xs">
                Support
              </h3>
              {[
                { name: "FAQs", link: "/faq" },
                { name: "Help Center", link: "/help" },
                { name: "Privacy Policy", link: "/privacy" },
                { name: "Terms & Conditions", link: "/terms" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="hover:text-[#ff7b3f] transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#d04a00] font-bold mb-2 uppercase tracking-wide text-xs">
                Contact
              </h3>
              <p className="text-[#333] text-sm">
                anshumansingh5499@gmail.com
              </p>
              <p className="text-[#333] text-sm">+91 7080216257</p>
              <a
                href="/contact"
                className="inline-block mt-2 bg-[#ff7b3f] hover:bg-[#ff9b7b] text-white font-semibold px-4 py-1.5 rounded-full text-xs transition shadow-md hover:shadow-lg"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* 🔸 Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-300/60 to-transparent" />

        {/* 🔻 Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-sm text-[#4b4b4b]">
          <p>© {new Date().getFullYear()} <span className="font-semibold">TiffinBox</span>. All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {[Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 rounded-full bg-white/80 border border-orange-200 hover:bg-[#ff7b3f] hover:text-white transition shadow-sm hover:shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* 💬 Tagline */}
        <p className="text-center text-xs text-[#6b4e36] mt-3 italic">
          “A taste of home, wherever you are.”
        </p>
      </div>

      {/* Subtle glow */}
      <div className="absolute -bottom-8 left-0 right-0 h-20 bg-gradient-to-t from-orange-200/40 to-transparent blur-2xl" />
    </footer>
  );
}
