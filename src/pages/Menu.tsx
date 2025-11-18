/* eslint-disable prefer-const */
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Filter, XCircle } from "lucide-react";
import { SAMPLE_MENU } from "../data/sampleMenu";
import DishCard from "../components/DishCard";
// import { useCartStore } from "../store/cartStore";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// --- Category Images --
import all from '../assets/categories/3d-icon-plate-with-traditional-indian-cuisine-illustration-logo_762678-68687.png'
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

  const filtered = useMemo(() => {
    let list = SAMPLE_MENU.filter(
      (m) =>
        (activeCategory === "All" ||
          m.category.toLowerCase() === activeCategory.toLowerCase()) &&
        m.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        m.price <= maxPrice
    );

    // Safe rating sort: treat undefined as 0
    if (sortBy === "priceLowHigh") list.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHighLow") list.sort((a, b) => b.price - a.price);
    if (sortBy === "rating")
      list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));

    return list;
  }, [activeCategory, searchQuery, maxPrice, sortBy]);

  return (
    <div id="indian-food-section" className="min-h-screen font-outfit px-4 md:px-10 py-8">
    

      {/* Header */}
      <div className=" mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          {/* Explore Our{" "} */}
          <span className="text-orange-500 luckiest-guy-regular">
            Delicious Menu
          </span>
        </h1>
        {/* <p className="text-gray-500 mt-2">
          Discover our best food options — browse by category or search your
          favorite dish
        </p> */}
      </div>

      {/* Category Section */}
      <section className="mb-10">
        <h2 className="  text-gray-800 mb-4 ">
          Choose Your Favorite Category
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-5 justify-items-center">
          {categoryItems.map((cat) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.name)}
              className={`cursor-pointer text-center transition-all ${
                activeCategory === cat.name
                  ? "ring-4 ring-orange-400 rounded-2xl"
                  : "opacity-90 hover:opacity-100"
              }`}
            >
              <div className="p-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-20 h-20 object-contain mx-auto drop-shadow-md"
                />
              </div>
              <p
                className={`mt-2 font-medium text-gray-700 ${
                  activeCategory === cat.name
                    ? "text-orange-600 font-semibold"
                    : ""
                }`}
              >
                {cat.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Filter/Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-4 z-20 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-sm px-4 py-3 flex flex-wrap items-center justify-between gap-4"
      >
        {/* Search */}
        <div className="relative flex-1 min-w-[220px]">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for dishes, cuisines..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-10 py-2 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm"
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
            className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-orange-400 bg-white"
          >
            <option value="none">Sort by</option>
            <option value="priceLowHigh">Price: Low → High</option>
            <option value="priceHighLow">Price: High → Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="flex items-center gap-2">
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

      {/* Menu Grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.length > 0 ? (
          filtered.map((d) => (
            <motion.div
              key={d.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DishCard dish={d} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500 text-lg">
            No dishes found. Try adjusting filters or search.
          </div>
        )}
      </motion.div>

      {/* Featured Section */}
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
          {SAMPLE_MENU.slice(0, 6).map((d) => (
            <div key={d.id} className="px-3">
              <DishCard dish={d} />
            </div>
          ))}
        </Carousel>
      </section>
    </div>
  );
}
