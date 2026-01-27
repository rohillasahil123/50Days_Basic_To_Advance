import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-extrabold">
          <Link to="/">GMSSSS Lakhan Majra</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center font-semibold">
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
          <Link to="/about" className="hover:text-amber-400 transition">About</Link>
          <Link to="/admissions" className="hover:text-amber-400 transition">Admissions</Link>
          <Link to="/notices" className="hover:text-amber-400 transition">Notices</Link>
          <Link to="/gallery" className="hover:text-amber-400 transition">Gallery</Link>
          <Link to="/contact" className="px-4 py-1 border border-white rounded hover:bg-white hover:text-blue-900 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <span className="text-2xl">&#10005;</span> // X icon
            ) : (
              <span className="text-2xl">&#9776;</span> // Hamburger
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 text-white px-6 py-4 space-y-3">
          <Link to="/" className="block hover:text-amber-400 transition">Home</Link>
          <Link to="/about" className="block hover:text-amber-400 transition">About</Link>
          <Link to="/admissions" className="block hover:text-amber-400 transition">Admissions</Link>
          <Link to="/notices" className="block hover:text-amber-400 transition">Notices</Link>
          <Link to="/gallery" className="block hover:text-amber-400 transition">Gallery</Link>
          <Link to="/contact" className="block px-4 py-1 border border-white rounded hover:bg-white hover:text-blue-900 transition">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
