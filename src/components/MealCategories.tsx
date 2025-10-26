import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import indianFoodImg from "../assets/categories/3d-icon-plate-with-traditional-indian-cuisine-illustration-logo_762678-68687.png";
import dietFoodImg from "../assets/categories/shawarma.png";

const categories = [
  {
    title: "Indian Food",
    desc: "Delicious meals inspired by traditional Indian recipes 🍛",
    tag: "Popular",
    img: indianFoodImg,
    route: "/",
  },
  {
    title: "Healthy Diet Food",
    desc: "Light, nutritious, and protein-rich meals 🥗",
    tag: "Healthy",
    img: dietFoodImg,
    route: "/diet",
  },
];

export default function MealCategories() {
  const navigate = useNavigate();

  const handleClick = (cat: { title: string; route: string }) => {
    if (cat.title === "Indian Food") {
      const indianSection = document.getElementById("indian-food-section");
      if (indianSection) {
        indianSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(cat.route);
    }
  };

  return (
    <section className="px-8 md:px-16 py-16">
      <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
        <span className="text-orange-500 luckiest-guy-regular">
          Explore Our Meals
        </span>
      </h2>
      <p className="text-gray-600 max-w-2xl mb-12">
        Choose from freshly prepared meals for every taste and preference
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center w-full max-w-5xl mx-auto">
        {categories.map((cat, i) => {
          const isDiet = cat.title.toLowerCase().includes("diet");
          const tagColor = isDiet
            ? "text-lime-600 bg-lime-100"
            : "text-orange-600 bg-orange-100";
          const btnColor = isDiet
            ? "bg-lime-500 hover:bg-lime-600"
            : "bg-orange-500 hover:bg-orange-600";

          return (
            <div
              key={i}
              className="relative bg-white text-gray-800 rounded-3xl border border-gray-100 shadow-lg hover:shadow-xl transition-all w-full h-[280px] md:h-[300px] flex flex-col justify-between p-5 md:p-6 cursor-pointer"
              onClick={() => handleClick(cat)}
            >
              {/* Text Section */}
              <div className="flex flex-col items-start space-y-2">
                <h3
                  className={`text-4xl sm:text-3xl md:text-5xl font-bold luckiest-guy-regular ${
                    isDiet ? "text-lime-600" : "text-orange-500"
                  }`}
                >
                  {cat.title}
                </h3>
                <p className="text-base sm:text-sm md:text-base text-gray-600 leading-snug">
                  {cat.desc}
                </p>
              </div>

              {/* Bottom Section */}
              <div className="flex items-end justify-between mt-auto pt-4">
                <div className="flex flex-col items-start gap-2">
                  <span
                    className={`text-[10px] sm:text-[11px] font-semibold rounded-full px-3 py-1 shadow-sm ${tagColor}`}
                  >
                    {cat.tag}
                  </span>
                  <button
                    className={`flex items-center gap-1 text-[11px] sm:text-[11px] font-medium text-white ${btnColor} px-3 py-1.5 rounded-full transition`}
                  >
                    Explore <ArrowRight size={12} />
                  </button>
                </div>

                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain drop-shadow-md"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
