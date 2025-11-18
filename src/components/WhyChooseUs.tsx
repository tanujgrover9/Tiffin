import { motion } from "framer-motion";
import { UtensilsCrossed, Truck, Wallet } from "lucide-react";

export default function WhyChooseUs() {
  const items = [
    {
      icon: <UtensilsCrossed className="w-10 h-10 text-white" />,
      title: "Fresh Ingredients",
      desc: "Our meals are made daily using handpicked, farm-fresh ingredients to give you both taste and nutrition in every bite.",
      color: "from-green-400 to-green-600",
    },
    {
      icon: <Wallet className="w-10 h-10 text-white" />,
      title: "Affordable Plans",
      desc: "Choose from flexible daily, weekly, or monthly tiffin plans that fit your budget while maintaining high quality.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: <Truck className="w-10 h-10 text-white" />,
      title: "On-Time Delivery",
      desc: "We ensure your tiffin reaches your doorstep hot and on time, so you never skip a fresh, healthy meal.",
      color: "from-red-400 to-pink-500",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Decorative glowing circles */}

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
            Delicious, Healthy &{" "}
            <span className="text-orange-600 luckiest-guy-regular">
              Delivered with Love
            </span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We’re passionate about serving food that feels like home — fresh,
            affordable, and always on time. Here’s why our customers love us.
          </p>
        </motion.div>

        {/* Cards Layout */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative group rounded-3xl p-8 bg-white shadow-xl hover:shadow-2xl border border-amber-100 transition-transform duration-300 ${
                index === 1
                  ? "md:scale-110 md:-translate-y-4 bg-gradient-to-b from-amber-50 to-white"
                  : "hover:-translate-y-3"
              }`}
            >
              {/* Gradient Icon Circle */}
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
              >
                {item.icon}
              </div>

              {/* Card Content */}
              <div className="mt-10 text-center px-2">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    index === 1 ? "text-amber-600" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
