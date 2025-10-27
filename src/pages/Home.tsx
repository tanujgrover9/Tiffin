
// import { useState } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
// import {  useAnimation } from "framer-motion";

import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Menu from "./Menu";
import HeroSection from "../components/Hero";
// import MealCategories from "../components/MealCategories";

import dish1 from "../../src/assets/projects/Best-Kadai-Paneer-Recipe.jpg";
import dish2 from "../../src/assets/projects/Restaurant-Style-Dal-Makhani.jpg";
import dish3 from "../../src/assets/projects/images (3).jpeg";
import dish4 from "../../src/assets/projects/images (4).jpeg";
import dish5 from "../../src/assets/projects/Desi-Chicken-Curry-2-3.jpg";
import dish6 from "../../src/assets/projects/Kerala-Style-Egg-Curry-2-3.jpg";
import dish7 from "../../src/assets/projects/masala-dosa-1024x682.jpg";
import dish8 from "../../src/assets/projects/download (3).jpeg";
import dish9 from "../../src/assets/projects/download (4).jpeg";

// Mock Cart Store
// const useCartStore = () => {
//   const [items, setItems] = useState<{ id: number; qty: number; price: number }[]>([]);
//   return { items, setItems };
// };

export default function Home() {
  // const cartStore = useCartStore();
  // const controls = useAnimation(); 

  const SAMPLE_MENU = [
    { id: 1, name: "Paneer Butter Masala", description: "Rich creamy gravy with soft paneer cubes.", price: 180, image: dish1 },
    { id: 2, name: "Dal Tadka", description: "Yellow lentils tempered with ghee and spices.", price: 120, image: dish2 },
    { id: 3, name: "Veg Pulao", description: "Fragrant rice with fresh vegetables and spices.", price: 150, image: dish3 },
    { id: 4, name: "Dal Chawal", description: "Comforting lentils served with steamed rice.", price: 100, image: dish4 },
    { id: 5, name: "Chicken Curry", description: "Spicy and flavorful chicken curry with Indian spices.", price: 250, image: dish5 },
    { id: 6, name: "Egg Curry", description: "Boiled eggs cooked in rich tomato-onion gravy.", price: 150, image: dish6 },
    { id: 7, name: "Masala Dosa", description: "Crispy dosa filled with spiced potato filling, served with chutney.", price: 120, image: dish7 },
    { id: 8, name: "Aloo Paratha", description: "Boiled eggs cooked in rich tomato-onion gravy.", price: 150, image: dish8 },
    { id: 9, name: "Chole Bhature", description: "Crispy dosa filled with spiced potato filling, served with chutney.", price: 120, image: dish9 },
  ];

 

  return (
    <div className="min-h-screen relative">
      <HeroSection />
      {/* <MealCategories /> */}
      <Menu />

      {/* Popular Dishes */}
      <section className="py-20 px-8 md:px-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-amber-600 px-3 py-1 rounded-full">
              POPULAR DISHES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
              Today’s <span className="text-orange-600 luckiest-guy-regular">Customer Favorites</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Handpicked meals that our customers love the most — fresh, healthy, and cooked with care every single day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mt-10">
            {SAMPLE_MENU.slice(0, 9).map((d, i) => (
              <div key={d.id} className={`relative group rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-3 ${i === 1 ? "md:scale-105" : ""}`}>
                <div className="relative h-64">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold drop-shadow-lg">{d.name}</h3>
                    <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-sm">
                      <Star size={14} className="text-yellow-400" />
                      <span>4.{7 + i}</span>
                    </div>
                  </div>
                  <p className="text-sm mt-1 text-gray-100 line-clamp-2">{d.description}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="inline-block bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      ₹{d.price}
                    </div>
                    {/* <button
                      onClick={() => handleAddToCart(d)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-white bg-orange-500 shadow-md hover:shadow-lg"
                    >
                      <ShoppingCart size={16}/> Add
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu" className="inline-block bg-orange-600 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      <AboutUs />
      <section className="px-8 md:px-16">
        <WhyChooseUs />
      </section>
      <Footer />

    
      {/* <AnimatePresence>
        {count > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
            drag
            dragConstraints={{
              top: 0,
              bottom: window.innerHeight - 120,
              left: 0,
              right: window.innerWidth - 250,
            }}
            dragElastic={0.25}
          >
            <motion.div
              animate={controls}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative"
            >
              <div className="absolute inset-0 blur-lg bg-gradient-to-r from-orange-400 via-amber-500 to-green-400 opacity-50 animate-pulse rounded-full"></div>

              <Link
                to="/cart"
                className="relative flex items-center justify-center gap-3 px-6 md:px-7 py-3 md:py-4 rounded-full 
                bg-white/10 backdrop-blur-md border border-white/20 
                text-white font-semibold shadow-[0_8px_30px_rgba(255,140,0,0.3)] 
                hover:bg-white/20 hover:shadow-[0_8px_30px_rgba(255,165,0,0.5)] transition-all"
              >
                <div className="bg-gradient-to-r from-orange-500 to-amber-400 p-2 rounded-full shadow-lg">
                  <ShoppingCart size={22} className="text-white" />
                </div>
                <span className="whitespace-nowrap text-sm md:text-base">
                  {count} item{count > 1 ? "s" : ""} • ₹{totalPrice}
                </span>
                <ArrowUpRight size={18} className="text-white" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* <style>
        {`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          .float-cart {
            animation: gentleFloat 5s ease-in-out infinite;
          }
        `}
      </style> */}


    </div>
  );
}
