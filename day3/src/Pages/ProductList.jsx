import React, { useContext, useState } from "react";
import main from "../assets/main.webp";
  import smain from "../assets/smain.webp"
  import smain2 from "../assets/smain2.webp"
  import smain3 from "../assets/smain3.webp"
import Buttons from "../components/Buttons";
import { cartContext } from "../context/Context";

const ProductList = () => {
  const {handleAdd} = useContext(cartContext)


  const products = [
    { id: 1, name: "GTA 5", price: 499, category: "PC Game", image: main },
    { id: 2, name: "Ninja V", price: 699, category: "PC Game", image: smain },
    { id: 3, name: "ChatGPT", price: 799, category: "Subscription", image: smain2 },
    { id: 4, name: "Youtube Premium", price: 299, category: "Subscription", image: smain3 },
    { id: 5, name: "GTA 5", price: 499, category: "PC Game", image: main },
    { id: 6, name: "Ninja V", price: 699, category: "PC Game", image: smain },
    { id: 7, name: "ChatGPT", price: 799, category: "Subscription", image: smain3 },
    { id: 8, name: "Youtube Premium", price: 299, category: "Subscription", image: smain2 },
  ];





  return (
    <div className="w-full min-h-screen bg-gray-100 px-4 md:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-center">
        Popular Game List
      </h1>

      {/* Horizontal Scroll */}
      <div className="mt-10 flex gap-6 overflow-x-auto scroll-smooth pb-4  hide-scrollbar">

        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[260px] sm:min-w-[280px] bg-white rounded-2xl
            border shadow-md hover:shadow-xl transition-all duration-300
            flex flex-col"
          >
            {/* IMAGE */}
            <div className="h-[180px] w-full overflow-hidden rounded-t-2xl">
              <img
                src={p.image}


                alt={p.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4 flex flex-col flex-grow justify-between">
              <div>
                <h2 className="text-lg font-bold">{p.name}</h2>
                <p className="text-gray-500 text-sm mt-1">
                  {p.category}
                </p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-green-600">
                  ₹{p.price}
                </span>
                <Buttons
                  onClick={()=>handleAdd(p)}
                  variant='cart'
                  text=' Add to Cart'
                >
                 
                </Buttons>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ProductList;
