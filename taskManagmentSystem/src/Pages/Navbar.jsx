import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"



const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    <div className='h-14 w-full flex bg-teal-800 shadow-md fixed '>
      <div className=' flex h-full w-full justify-between  '>
        <div className='pl-8 flex justify-center items-center text-2xl font-bold text-white' >
          <h1 className=''> <Link to="/" > Logo </Link> </h1>
        </div>
      
         <div className='md:flex hidden  space-x-5 gap-3 items-center justify-center pr-9 text-white font-semibold text-lg ' >
          <div className='hover:cursor-pointer'> <Link to="/" > Home </Link></div>
          <div className='hover:cursor-pointer' ><Link to="/task" >Task</Link></div>
          <div className='hover:cursor-pointer'> <Link to="/about" > About </Link></div>
          <div className='hover:cursor-pointer'> <Link to="/login">Login</Link> </div>
        </div>   

      <div className='md:hidden  flex justify-center items-center pr-3' >    
<GiHamburgerMenu size={30} color='white' onClick={()=>setOpen(!open)} />
</div>

      {open && (
          <div className='md:hidden absolute top-14 left-0 w-full bg-teal-800 flex flex-col items-center space-y-4 py-4 text-white font-semibold' >
         <div className='hover:cursor-pointer'> <Link to="/" > Home </Link></div>
          <div className='hover:cursor-pointer' ><Link to="/task" >Task</Link></div>
          <div className='hover:cursor-pointer'> <Link to="/about" > About </Link></div>
          <div className='hover:cursor-pointer'> <Link to="/login">Login</Link> </div>
        </div>
      )
      }
       
      </div>
    </div>
  )
}

export default Navbar
