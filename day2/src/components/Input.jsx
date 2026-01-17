import React from 'react'

const Input = ({ placeholder, value, name, onChange }) => {
    return (
        <>
            <input type="text"
                className='  w-full 
                  h-11 
                  px-3 
                 border 
    border-gray-300 
    rounded-md 
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-400
    text-sm'
                value={value}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
            />


        </>
    )
}

export default Input
