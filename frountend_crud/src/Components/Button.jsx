import React from "react";

const Button = ({ onClick, text, variant = "primary" }) => {
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700",
    green: "bg-emerald-600 text-white hover:bg-emerald-700",
    red: "bg-red-600 text-white hover:bg-red-700",
    gray: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full
        h-11
        rounded-md
        font-semibold
        transition
        duration-200
        ${variants[variant] || variants.primary}
      `}
    >
      {text}
    </button>
  );
};

export default Button;
