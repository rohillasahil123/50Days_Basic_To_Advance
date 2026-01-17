import React from "react";

const Button = ({ color = "blue", text, onClick }) => {

  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    teal: "bg-teal-500 hover:bg-teal-600",
  };

  return (
    <button
      onClick={onClick}
      className={`h-11 w-[80%]  text-white rounded-md font-semibold transition ${colorClasses[color]}`}
    >
      {text}
    </button>
  );
};

export default Button;
