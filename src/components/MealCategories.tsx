import breakfast from "../assets/categories/breakfast.png";
import lunch from "../assets/categories/lunch.png";
import dinner from "../assets/categories/dinner.png";
import snacks from "../assets/categories/Sancks.png";
import beverages from "../assets/categories/beverages.png";
import desserts from "../assets/categories/dessert.png";

const categories = [
  { name: "Breakfast", img: breakfast, desc: "Start your day right 🍳" },
  { name: "Lunch", img: lunch, desc: "Nutritious & filling meals 🍛" },
  { name: "Dinner", img: dinner, desc: "Comfort food for evenings 🍲" },
  { name: "Snacks", img: snacks, desc: "Tasty treats for cravings 🥪" },
  { name: "Beverages", img: beverages, desc: "Refreshing drinks 🧃" },
  { name: "Desserts", img: desserts, desc: "Sweet endings 🍰" },
];

export default function MealCategories() {
  return (
    <section className="px-4 sm:px-8 md:px-16 py-12 md:py-16 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Explore Our{" "}
        <span className="text-orange-500 luckiest-guy-regular">
          Meal Categories
        </span>
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mx-auto mb-12">
        Choose from freshly prepared meals for every time of day — healthy,
        delicious, and made with love.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-orange-100 rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow flex items-center justify-center mb-3 sm:mb-4 overflow-hidden">
              <img
                src={cat.img}
                alt={cat.name}
                className="object-contain w-10 h-10 sm:w-12 sm:h-12 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 luckiest-guy-regular">
              {cat.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-sm text-gray-600 mt-1">
              {cat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
