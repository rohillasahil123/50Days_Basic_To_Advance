import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-teal-700 h-16 w-full  flex items-center justify-between  text-white shadow-md fixed ">
      
      {/* Left */}
      <div className="text-2xl font-bold tracking-wide p-[5%]">
        <Link to="/add">
        User Panel
        </Link>
      </div>

      {/* Right */}
      <div className="text-lg font-medium flex space-x-5 p-[5%]">
       <select
          className="bg-teal-600 text-white px-3 py-1 rounded-md outline-none cursor-pointer"
        >
          <option value="admin"><Link to="/add"> Admin </Link></option>
          <option value="user">User</option>
        </select>
        <div className="hover:cursor-pointer" >
            <Link to='/list'>
            User-List </Link></div>
        <div className="hover:cursor-pointer" >Login</div>
      </div>

    </div>
  );
};

export default Navbar;
