import React ,{useEffect} from 'react'
import { Link , useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/admin") {
      localStorage.removeItem("editInbox");
      localStorage.removeItem("editProduct")
    }
  }, [location.pathname]);

  return (

    <div className='h-14 w-full shadow-xl fixed bg-indigo-500 '>
        <div className='h-full w-full flex justify-center space-x-6 text-center items-center  text-white text-xl font-semibold' >
      <div className=' '> <Link to='/admin' >Admin </Link> </div>
      <div className=''> <Link to="/product" > Add Products </Link> </div>
       <div className=''> <Link to="/product-list" > Product-List </Link> </div>
      </div>
    </div>
  )
}

export default Navbar
