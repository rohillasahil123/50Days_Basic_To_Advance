import React from "react"

const ProductList = () => {

  const products = [
    { id: 1, name: "GTA 5", price: 499, category: "PC Game" },
    { id: 2, name: "Ninja V", price: 699, category: "PC Game" },
    { id: 3, name: "ChatGPT", price: 799, category: "Subscription" },
    { id: 4, name: "Youtube Premium", price: 299, category: "Subscription" },
    { id: 5, name: "GTA 5", price: 499, category: "PC Game" },
    { id: 6, name: "Ninja V", price: 699, category: "PC Game" },
    { id: 7, name: "ChatGPT", price: 799, category: "Subscription" },
    { id: 8, name: "Youtube Premium", price: 299, category: "Subscription" },
  ]

  return (
    <div className="h-[80vh] bg-gray-100 w-full overflow-hidden">
      <h1 className="text-4xl font-extrabold uppercase text-center mt-10">
        Popular Game List
      </h1>

      {/* Horizontal Scroll */}
      <div className="mt-10 px-10 flex gap-6 overflow-x-auto hide-scrollbar scroll-smooth">
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[280px] h-[360px] bg-white rounded-xl 
            border shadow-lg hover:shadow-2xl transition-all duration-300 
            p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{p.name}</h2>
              <p className="text-gray-500 text-sm mt-1">
                {p.category}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-600">
                ₹{p.price}
              </span>

              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 
              text-white px-4 py-2 rounded-full text-sm font-semibold 
              hover:scale-105 transition-all duration-200 shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
