import { Facebook, Instagram, Twitter } from "lucide-react";
// import footerBg from "../../src/assets/projects/42133.png";

export default function Footer() {
  return (
    <footer
      className="relative text-[#1a1a1a] overflow-hidden"
      // style={{
      //   backgroundImage: `url(${footerBg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/90 via-orange-100/80 to-orange-200/90 backdrop-blur-sm" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
          {/* Brand Info */}
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#d04a00] luckiest-guy-regular">
              Tiffin
            </h2>
            <p className="text-xl font-bold text-[#ff7b3f] luckiest-guy-regular">
              Ghar ka Khana
            </p>
            <p className="text-sm text-[#333] max-w-xs">
              Fresh, home-style tiffins delivered daily — hot, healthy & on time.
            </p>
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:gap-10 text-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#d04a00] font-semibold mb-1">Explore</h3>
              <a href="/menu" className="hover:text-[#ff7b3f] transition">
                Menu
              </a>
              <a href="/plans" className="hover:text-[#ff7b3f] transition">
                Meal Plans
              </a>
              <a href="/about" className="hover:text-[#ff7b3f] transition">
                About Us
              </a>
              <a href="/contact" className="hover:text-[#ff7b3f] transition">
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#d04a00] font-semibold mb-1">Support</h3>
              <a href="/faq" className="hover:text-[#ff7b3f] transition">
                FAQs
              </a>
              <a href="/help" className="hover:text-[#ff7b3f] transition">
                Help Center
              </a>
              <a href="/privacy" className="hover:text-[#ff7b3f] transition">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-[#ff7b3f] transition">
                Terms & Conditions
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-[#d04a00] font-semibold mb-1">Contact</h3>
              <p className="text-[#333]">anshumansingh5499@gmail.com</p>
              <p className="text-[#333]">+91 7080216257</p>
              <a
                href="/contact"
                className="inline-block mt-2 bg-[#ff9b7b] hover:bg-[#ff7b3f] text-[#1a1a1a] font-semibold px-4 py-1.5 rounded-full text-xs transition shadow-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-orange-300/50 mt-12 mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#4b4b4b]">
          <p>© {new Date().getFullYear()} TiffinBox. All Rights Reserved.</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-orange-200 hover:bg-[#ff7b3f] hover:text-white transition shadow-md"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-orange-200 hover:bg-[#ff7b3f] hover:text-white transition shadow-md"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-orange-200 hover:bg-[#ff7b3f] hover:text-white transition shadow-md"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-center text-xs text-[#6b4e36] mt-3 italic">
          “Small change. Big impact.”
        </p>
      </div>
    </footer>
  );
}
