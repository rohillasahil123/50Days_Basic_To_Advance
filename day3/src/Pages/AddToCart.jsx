import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { cartContext } from "../context/Context";
// import Buttons from "./Buttons"sss;

const AddToCart = () => {
    const {cartData} = useContext(cartContext)

  if (cartData.length === 0) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Your cart is empty
      </p>
    );
  }

  return (
    <div className="mt-10  flex gap-6 overflow-x-auto scroll-smooth pb-4 hide-scrollbar">
        <div className=" pt-12 flex  gap-5">
      {Array.isArray(cartData) && cartData.map((p , index) => (
        <div
          key={index}
          className="min-w-[260px] sm:min-w-[280px]  bg-white rounded-2xl
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

       
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AddToCart;
