/* eslint-disable prefer-const */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Filter, XCircle } from "lucide-react";
import { SAMPLE_MENU } from "../data/sampleMenu";
import DishCard from "../components/DishCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// --- Category Images --
import all from "../assets/categories/3d-icon-plate-with-traditional-indian-cuisine-illustration-logo_762678-68687.png";
import momo from "../assets/categories/momo.png";
import biryani from "../assets/categories/biryani.png";
import pasta from "../assets/categories/pasta.png";
import samosa from "../assets/categories/samosa.png";
import gulabjamun from "../assets/categories/gulabjamun.png";
import icecream from "../assets/categories/icecream.png";
import shawarma from "../assets/categories/shawarma.png";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("none");
  const [maxPrice, setMaxPrice] = useState(1000);

  // Category list
  const categoryItems = [
    { name: "All", image: all },
    { name: "Momo", image: momo },
    { name: "Biryani", image: biryani },
    { name: "Pasta", image: pasta },
    { name: "Samosa", image: samosa },
    { name: "Gulab Jamun", image: gulabjamun },
    { name: "Ice Cream", image: icecream },
    { name: "Shawarma", image: shawarma },
  ];

  // ------------------------ FILTER LOGIC ------------------------
  const filtered = useMemo(() => {
    let list = SAMPLE_MENU.filter((item) => {
      const categoryMatch =
        activeCategory === "All" ||
        item.category?.toLowerCase() === activeCategory.toLowerCase();

      const searchMatch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const priceMatch = item.price <= maxPrice;

      return categoryMatch && searchMatch && priceMatch;
    });

    // Sorting
    if (sortBy === "priceLowHigh") list.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHighLow") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating")
      list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return list;
  }, [activeCategory, searchQuery, maxPrice, sortBy]);

  return (
    <div id="indian-food-section" className="min-h-screen px-4 md:px-10 py-10">
      
      {/* ------------------------------ HEADER ------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 "
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r 
          from-orange-500 to-amber-600 bg-clip-text text-transparent">
          Our Delicious Menu
        </h1>
      </motion.div>

      {/* ------------------------------ CATEGORY FILTER ------------------------------ */}
      <section className="mb-10">
       

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-items-center">
          {categoryItems.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.name)}
              className={`cursor-pointer text-center px-4 py-3 rounded-2xl transition-all border shadow-sm 
                ${
                  activeCategory === cat.name
                    ? "border-orange-500 bg-orange-50 shadow-md"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-16 h-16 mx-auto object-contain"
              />
              <p
                className={`mt-2 text-sm font-medium ${
                  activeCategory === cat.name
                    ? "text-orange-600"
                    : "text-gray-700"
                }`}
              >
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ------------------------------ FILTER BAR ------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-4 z-20 bg-white/90 backdrop-blur-xl border border-gray-200 
        rounded-2xl shadow-md px-4 py-3 flex flex-wrap items-center justify-between gap-4"
      >
        
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for dishes, cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-200 bg-white 
              focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
          />
          {searchQuery && (
            <XCircle
              onClick={() => setSearchQuery("")}
              size={18}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 cursor-pointer"
            />
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gray-600" />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 
              focus:outline-none focus:ring-1 focus:ring-orange-400 bg-white"
          >
            <option value="none">Sort by</option>
            <option value="priceLowHigh">Price: Low → High</option>
            <option value="priceHighLow">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Price Slider */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Filter size={18} className="text-gray-600" />
          <label className="text-sm text-gray-600">Max ₹{maxPrice}</label>
          <input
            type="range"
            min="100"
            max="1000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="accent-orange-500 cursor-pointer"
          />
        </div>
      </motion.div>

      {/* ------------------------------ GRID ------------------------------ */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.length > 0 ? (
          filtered.map((dish) => (
            <motion.div
              key={dish.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 text-lg">
            No dishes found. Try adjusting filters.
          </div>
        )}
      </motion.div>

      {/* ------------------------------ FEATURED SECTION ------------------------------ */}
      <section className="mt-20">
        <h2 className="text-4xl text-center mb-8 font-bold text-orange-500">
          Featured Dishes
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
          {SAMPLE_MENU.slice(0, 6).map((dish) => (
            <div key={dish.id} className="px-3">
              <DishCard dish={dish} />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
