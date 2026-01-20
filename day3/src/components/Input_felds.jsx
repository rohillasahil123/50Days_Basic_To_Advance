import React from 'react'

const Input_felds = ({placeholder , name , value , onChange}) => {
  return (
    <>
        <input placeholder={placeholder} value={value} name={name} onChange={onChange} className=' h-9 w-[80%] px-3 border hover:border-blue-500 rounded-md'  ></input>
    </>
  )
}

export default Input_felds
