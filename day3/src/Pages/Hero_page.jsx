  import React from 'react'
  import ProductList from './ProductList'
  import Comment from './Comment'
  import main from "../assets/main.webp"
  import smain from "../assets/smain.webp"
  import smain2 from "../assets/smain2.webp"
  import smain3 from "../assets/smain3.webp"

  const Hero_page = () => {
    return (
      <>
      <div className="h-[90vh] w-full flex gap-4 px-4 py-4 mt-[10vh]">

        {/* Left big banner */}
        <div className="w-[80%] h-[84vh] shadow-md border bg-green-400 flex items-center justify-center rounded-md">
          <img src={main} alt="" className='h-full w-full object-cover rounded-md' />
          {/* <span className="text-white text-xl">Main Banner</span> */}
        </div>

        {/* Right stacked banners */}
        <div className="w-[20%] h-[84vh] flex flex-col gap-2">
          <div className="h-1/3 w-full  ">
            <img src={smain} alt="" className='h-full w-full object-cover rounded-md' />
          </div>
          <div className="h-1/3 w-full ">
            <img src={smain2} alt="" className='h-full w-full object-cover rounded-md' />
          </div>
          <div className="h-1/3  w-full ">
              <img src={smain3} alt="" className='h-full w-full object-cover rounded-md' />
          </div>
        </div>

      </div>
      <ProductList/>
      <Comment/>


      </>
    )
  }

  export default Hero_page
