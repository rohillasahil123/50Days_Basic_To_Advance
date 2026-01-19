import React from "react";

const Buttons = ({ text, onClick, variant = "primary" }) => {
  const baseStyle =
    "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus:outline-none";

  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    success: "bg-green-600 text-white hover:bg-green-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    info: "bg-blue-600 text-white hover:bg-blue-700",
     cart:
      "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 shadow-md hover:shadow-lg",

  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {text}
    </button>
  );
};

export default Buttons;
