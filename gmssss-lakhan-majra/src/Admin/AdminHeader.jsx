import React, { useContext } from "react";
import { RoleContext } from "../context/RoleContext";
import { Link } from "react-router-dom";

const AdminHeader = () => {

  const {handleLogout} = useContext(RoleContext)

  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* Left Side */}
      <h1 className="text-xl font-semibold tracking-wide">
        Admin Dashboard
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4 space-x-4">
       <div className="flex space-x-3">
        <h1 className="text-sm text-slate-300 hover:cursor-pointer"> <Link to="/admin"> About </Link></h1>
         <h1 className="text-sm text-slate-300 hover:cursor-pointer"> <Link to="/adminNotice"> Notice </Link></h1>
         <h1 className="text-sm text-slate-300 hover:cursor-pointer"> <Link to="/form"> Admisson Form  </Link></h1>
        </div> 
        <div className="flex justify-center items-center space-x-3  ">
          <span className="text-sm text-slate-300">Welcome, Admin</span>
        <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm" onClick={handleLogout}>
          Logout
        </button>
        </div>
      </div>

    </header>
  );
};

export default AdminHeader;
