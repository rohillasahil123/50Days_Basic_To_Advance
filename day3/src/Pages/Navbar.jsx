import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[10vh] w-full bg-pink-400 fixed top-0 left-0 z-50 flex items-center px-10">
      <div className="flex gap-6 font-semibold">
        <div>Home</div>
        <div>Product</div>
        <div>Gallery</div>
        <div>About</div>
        <div>Login</div>
      </div>
    </div>
  )
}

export default Navbar
