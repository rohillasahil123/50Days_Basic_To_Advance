import React from 'react'

const ButtonFields = ({ label, color = "teal" , onClick }) => {
  const buttonColors = {
    teal: "bg-teal-600 hover:bg-teal-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
    purple: "bg-purple-600 hover:bg-purple-700",
    pink: "bg-pink-600 hover:bg-pink-700",
    orange: "bg-orange-600 hover:bg-orange-700",
    gray: "bg-gray-600 hover:bg-gray-700",
    black: "bg-black hover:bg-gray-900",
  }

  return (
    <button
      className={`px-6 w-[40%] h-8 text-white rounded-md text-[12px] sm:text-md font-medium transition ${buttonColors[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default ButtonFields
