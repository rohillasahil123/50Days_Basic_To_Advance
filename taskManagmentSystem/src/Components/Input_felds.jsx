import React from 'react'

const Input_felds = ({placeholder , value , name , onChange}) => {
  return (
    <>
        <input className=' h-9 w-[70%] focus:border-blue-600 p-2 border shadow-sm rounded-md '
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        ></input>
    </>
  )
}

export default Input_felds
