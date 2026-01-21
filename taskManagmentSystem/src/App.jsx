import React from 'react'
import Navbar from './Pages/Navbar'
import Home_Page from './Pages/Home_Page'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import About_Page from './Pages/About_Page'
import Task_Page from './Pages/Task_Page'

const App = () => {
  return (
    <div>
      <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route element={<Home_Page/>} path='/' ></Route>
   <Route element={<About_Page/>} path='/about' ></Route>
    <Route element={<Task_Page/>} path='/task'></Route>

   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
