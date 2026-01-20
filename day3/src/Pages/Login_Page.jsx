import React, { useState } from 'react'
import Input_felds from '../components/Input_felds'

const Login_Page = () => {

  const [ obj, setObj] = useState({
    username:"",
    password:""
  })


  const handleChange = (e)=>{
    const {name ,value} = e.target
    setObj({...obj , [name] : value})
  }

  const handleLogin = ()=>{
    console.log(obj , "login")
  }



  return (
    <div className='h-[100vh] w-full flex justify-center  itmes-center bg-gray-100 '>
        <div className=' shadow-lg border  bg-white space-y-2 w-[30%] h-[80%] mt-[6%] rounded-md flex flex-col justify-center items-center ' >
             <div className=' text-3xl font-extrabold'>
        <h1 className='text-blue-600' >Login Form</h1>
      </div>
          <div className='space-y-2 w-[90%] h-[30%] mt-[6%] rounded-md flex flex-col justify-center items-center'>
              <Input_felds placeholder='Username' name="username" value={obj.username} onChange={handleChange} />
            <Input_felds placeholder='*********'  name="password" value={obj.password} onChange={handleChange} />
            <button className='mt-4 w-[50%] h-9  bg-blue-700 rounded-md text-white' onClick={handleLogin}>Login</button>
          </div>
        </div> 
      
    </div>
  )
}

export default Login_Page
