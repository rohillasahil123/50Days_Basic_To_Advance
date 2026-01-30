import react from "react"

const categories = [
  { id: 1, name: "Grocery", emoji: "🥦", desc: "Daily essentials" },
  { id: 2, name: "Milk", emoji: "🥛", desc: "Fresh & healthy" },
  { id: 3, name: "Snacks", emoji: "🍪", desc: "Quick bites" },
  { id: 4, name: "Daily Use", emoji: "🧼", desc: "Home needs" },
];

const CategorySection = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <section id="categories" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`
                cursor-pointer rounded-3xl p-6 text-center transition
                ${selectedCategory === cat.name
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white hover:shadow-xl"}
              `}
            >
              <div className="text-3xl mb-3">{cat.emoji}</div>
              <p className="font-semibold">{cat.name}</p>
              <p className="text-xs opacity-80 mt-1">{cat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;