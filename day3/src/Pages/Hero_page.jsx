import React from 'react'

const Hero_page = () => {
  return (
    <div className="h-[90vh] w-full flex gap-4 px-4 py-4 mt-[10vh]">

      {/* Left big banner */}
      <div className="w-[90%] h-[84vh] shadow-md border bg-green-400 flex items-center justify-center rounded-md">
        <span className="text-white text-xl">Main Banner</span>
      </div>

      {/* Right stacked banners */}
      <div className="w-[20%] h-[84vh] flex flex-col gap-2">
        <div className="h-1/3 bg-blue-400 shadow-md rounded-md "></div>
        <div className="h-1/3 bg-red-400 shadow-md rounded-md"></div>
        <div className="h-1/3 bg-orange-400 shadow-md rounded-md "></div>
      </div>

    </div>
  )
}

export default Hero_page
