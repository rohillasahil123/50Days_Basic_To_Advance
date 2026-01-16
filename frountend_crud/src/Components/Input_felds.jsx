import React from 'react'

const Input_felds = ({ placeholder, type, onChange , name , value }) => {
  return (
    <input
      onChange={onChange}
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      className="
    w-full 
    h-11 
    px-3 
    border 
    border-gray-300 
    rounded-md 
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-400
    text-sm
  "
    />

  )
}

export default Input_felds
