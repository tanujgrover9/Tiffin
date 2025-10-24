import { Facebook, Instagram, Twitter } from "lucide-react";
import footerBg from "../../src/assets/projects/42133.png";

export default function Footer() {
  return (
    <footer
      className="relative text-black overflow-hidden"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-orange-100" />

      <div className="relative z-10 max-w-full mx-auto px-6  py-16 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold  mb-4 ">
          Tiffin <br />{" "}
          <span className="luckiest-guy-regular">Ghar ka Khana</span>
        </h2>

        {/* Tagline */}
        <p className=" text-sm mb-10">
          Fresh, home-style tiffins delivered daily to your doorstep.
        </p>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm  mb-8">
          <a href="/menu" className="hover:text-orange-500 transition">
            Menu
          </a>
          <a href="/plans" className="hover:text-orange-500 transition">
            Meal Plans
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-orange-500 transition">
            Contact
          </a>
          <a href="/faq" className="hover:text-orange-500 transition">
            FAQs
          </a>
          <a href="/terms" className="hover:text-orange-500 transition">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-orange-500 transition">
            Privacy Policy
          </a>
          <a href="/help" className="hover:text-orange-500 transition">
            Help Center
          </a>
        </div>

        {/* Contact Button */}
        <a
          href="/contact"
          className="bg-[#ff9b7b] hover:bg-[#ff8763] text-[#0a3d2c] font-semibold px-6 py-2 rounded-md transition"
        >
          CONTACT US
        </a>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-8">
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
          >
            <Facebook size={18} />
          </a>
        </div>

        {/* Divider */}
        <div className="h-px w-2/3 bg-white/20 my-8"></div>

        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-green-200 gap-2">
          <p>© {new Date().getFullYear()} TiffinBox. All Rights Reserved.</p>
          <p>Small change. Big impact.</p>
        </div>
      </div>
    </footer>
  );
}
