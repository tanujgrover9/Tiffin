import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

const items = new Array(6).fill(0).map((_, i) => ({
  id: i,
  title: `Featured #${i + 1}`,
  creator: "AI Creator",
  img: `https://picsum.photos/600/400?random=${i + 1}`, // demo placeholder
}));

export default function FeaturedCarousel() {
  return (
    <section className="relative overflow-hidden rounded-3xl shadow-xl border border-white/10 bg-gradient-to-br from-gray-950 via-gray-900 to-black">
      <div className="relative z-10 px-6 py-16">
        {/* 🌟 Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-400 bg-clip-text text-transparent"
          >
            Featured Creations
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
            className="h-1 w-20 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mt-3 origin-left"
          />
        </div>

        {/* 🎠 Swiper Carousel */}
        <Swiper
          slidesPerView={3}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination]}
          className="pb-12"
        >
          {items.map((it, index) => (
            <SwiperSlide key={it.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-white/5 backdrop-blur-md"
              >
                {/* ✨ Floating Blue Glow */}
                <motion.div
                  className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 6 + Math.random() * 4,
                    repeat: Infinity,
                  }}
                />

                {/* Card Image */}
                <div className="relative">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-80" />
                </div>

                {/* Info */}
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg text-white">
                      {it.title}
                    </h3>
                    <p className="text-xs text-gray-400">by {it.creator}</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-1.5 text-sm rounded-lg bg-gradient-to-r from-blue-500 to-sky-500 text-white font-medium shadow-md hover:opacity-90 transition"
                  >
                    View
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🚀 CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400">
            Ready to share your AI creations?
          </h3>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/upload"
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-sky-500 text-white font-semibold shadow-md hover:scale-105 transition"
            >
              Upload Now
            </a>
            <a
              href="/marketplace"
              className="px-6 py-2.5 rounded-xl border border-white/20 text-gray-200 hover:bg-white/10 transition"
            >
              Explore Marketplace
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
