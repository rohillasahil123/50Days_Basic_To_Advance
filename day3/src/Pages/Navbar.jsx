import React, { useContext } from 'react'
import { CiLogin, CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { cartContext } from '../context/Context';

const Navbar = () => {
  const { countData } = useContext(cartContext)




  return (
    <div className="h-[10vh] w-full bg-gray-100 fixed top-0 left-0 z-50 flex items-center px-10 shadow-md">
      <div className="flex gap-6 font-semibold justify-between w-full">
        <div className='text-xl font-extrabold hover:cursor-pointer'> <Link to='/' >LOGO</Link></div>
        <div className='flex  space-x-6 text-gray-800  ' >
          <div className='text-md hover:cursor-pointer hover:text-gray-900'> <Link to="/" >Home </Link></div>
          <div className='text-md hover:cursor-pointer hover:text-gray-900' > <Link to="/product" > Product </Link></div>
          <div className='text-md hover:cursor-pointer hover:text-gray-900' > <Link to="gallery" > Gallery </Link></div>
          <div className='text-md hover:cursor-pointer hover:text-gray-900'> <Link to="/about" >About</Link></div>

        </div>
        <input className=' border h-9 w-[30%] text-md px-3 font-semibold ' placeholder='Search Items'>
        </input>
        <div className='text-md hover:cursor-pointer hover:text-gray-900 flex space-x-4 '>
          <div className="relative">
  <Link to="/cart">
    <CiShoppingCart size={30} />
  </Link>

  {countData > 0 && (
    <span className="absolute -top-2 right-[0.5rem]
      bg-red-600 text-white rounded-full 
      w-4 h-4 flex items-center justify-center text-[10px]">
      {countData}
    </span>
  )}
</div>

          <div><Link to="/login"> <CiLogin size={30} /> </Link>  </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
