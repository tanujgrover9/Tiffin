import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  SlidersHorizontal,
  Filter,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import { DIET_MENU } from "../data/dietMenu";
import DishCard from "../components/DishCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

// import heroDietImg from "../assets/diet/hero-diet-min.jpg";
import All from "../assets/img/WhatsApp Image 2025-10-19 at 17.37.50_d401016b.png";
import HeroSection from "../components/Hero";

export default function DietMenu() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [maxCalories, setMaxCalories] = useState(600);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const categories = useMemo(() => {
    const arr: { name: string; image: string }[] = [{ name: "All", image: All }];
    DIET_MENU.forEach((dish) => {
      arr.push({ name: dish.name, image: dish.image ?? "" });
    });
    return arr;
  }, []);

  const filtered = useMemo(() => {
    let list = DIET_MENU.filter(
      (m) =>
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (m.calories ?? 0) <= maxCalories
    );

    if (selectedCategory !== "All")
      list = list.filter((m) => m.name === selectedCategory);

    if (sortBy === "priceLowHigh") list.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHighLow") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return list;
  }, [searchQuery, maxCalories, sortBy, selectedCategory]);

  // const heroHeading = {
  //   hidden: { opacity: 0, y: -12 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  // };

  // const subHeading = {
  //   hidden: { opacity: 0, y: -6 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  // };

  return (
    <>
    <HeroSection/>
      <div className=" min-h-screen  px-4 md:px-10 py-8 bg-gradient-to-b from-green-100 via-green-100 to-yellow-100">
        {/* 🔙 Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 px-4 py-2 bg-white/90 hover:bg-white rounded-full text-gray-800 shadow-sm"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* 🥗 Hero Section */}
        {/* <div className="relative mb-12 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-700/60 via-lime-600/40 to-transparent z-10" />
          <img
            src={heroDietImg}
            alt="Healthy food banner"
            className="w-full h-72 md:h-80 lg:h-96 object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 z-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={heroHeading}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-md leading-tight"
            >
              Delicious & Healthy Menu
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={subHeading}
              className="mt-4 max-w-2xl text-white text-sm md:text-lg"
            >
              Choose from a wide range of freshly prepared, nutrient-dense dishes — built to
              keep you energized and satisfied.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
              className="mt-6"
            >
              <button
                onClick={() =>
                  categoriesRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-3 bg-white/95 text-lime-700 font-semibold px-5 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                Explore Healthy Dishes
              </button>
            </motion.div>
          </div>
        </div> */}

        {/* 🧩 Category Section (Reduced image size) */}
        <div
          ref={categoriesRef}
          className="flex flex-wrap justify-center gap-8 mt-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`cursor-pointer flex flex-col items-center transition-transform transform-gpu ${
                selectedCategory === cat.name ? "scale-110" : "hover:scale-105"
              }`}
            >
              <div
                className={`w-[88px] h-[88px] md:w-[100px] md:h-[100px] rounded-full border-2 transition-all overflow-hidden ${
                  selectedCategory === cat.name
                    ? "border-lime-500 shadow-lg"
                    : "border-transparent"
                }`}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-22 h-22 object-cover rounded-full"
                />
              </div>
              <span className="mt-3 text-gray-700 font-medium text-sm truncate max-w-[80px]">
                {cat.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* 🔍 Filter/Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-4 z-20 bg-white/30 backdrop-blur-md border border-lime-200/40 rounded-2xl shadow-md px-4 py-3 flex flex-wrap items-center justify-between gap-4 mt-10"
        >
          {/* Search */}
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search diet dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-10 py-2 rounded-xl border border-transparent bg-white/70 focus:outline-none focus:ring-2 focus:ring-lime-400 text-sm"
            />
            {searchQuery && (
              <XCircle
                onClick={() => setSearchQuery("")}
                size={18}
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 cursor-pointer"
              />
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={18} className="text-gray-600" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-lime-400 bg-white/80"
            >
              <option value="none">Sort by</option>
              <option value="priceLowHigh">Price: Low → High</option>
              <option value="priceHighLow">Price: High → Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Calories Filter */}
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-gray-600" />
            <label className="text-sm text-gray-600">Max {maxCalories} kcal</label>
            <input
              type="range"
              min="100"
              max="1000"
              value={maxCalories}
              onChange={(e) => setMaxCalories(Number(e.target.value))}
              className="accent-lime-500 cursor-pointer"
            />
          </div>
        </motion.div>

        {/* 🧆 Menu Grid */}
        <motion.div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length > 0 ? (
            filtered.map((d) => (
              <motion.div
                key={d.id}
                className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-lime-100"
              >
                <DishCard dish={d} />
                <div className="bg-lime-50 p-4 text-sm text-gray-700 flex justify-between items-center">
                  <div>
                    <p>
                      <strong>Calories:</strong> {d.calories ?? "-"} kcal
                    </p>
                    <p>
                      <strong>Protein:</strong> {d.protein ?? "-"} g |{" "}
                      <strong>Fat:</strong> {d.fat ?? "-"} g |{" "}
                      <strong>Sugar:</strong> {d.sugar ?? "-"} g
                    </p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-lg">
              No diet dishes found. Try adjusting filters or search.
            </div>
          )}
        </motion.div>

        {/* 🌟 Featured Section */}
        <section className="mt-20">
          <h2 className="text-3xl md:text-4xl text-center mb-8 font-bold text-lime-600">
            Featured Healthy Picks
          </h2>
          <Carousel
            autoPlay
            autoPlaySpeed={4000}
            infinite
            responsive={{
              desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
              tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
              mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
            }}
          >
            {DIET_MENU.slice(0, 6).map((d) => (
              <div key={d.id} className="px-3">
                <motion.div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all overflow-hidden p-4">
                  <DishCard dish={d} />
                </motion.div>
              </div>
            ))}
          </Carousel>
        </section>
      </div>

      <Footer />
    </>
  );
}
