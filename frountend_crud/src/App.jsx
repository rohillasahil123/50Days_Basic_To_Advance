import React from 'react'
import Navbar from './Pages/Navbar'
import { BrowserRouter, Router , Route, Routes } from 'react-router-dom'
import Add_Product from './Pages/Add_Product'
import ListProduct from './Pages/ListProduct'
import Admin from './Pages/Admin'

const App = () => {
  return (
    <>
 
      <BrowserRouter>
           <Navbar/> 
        <Routes>
            <Route element={<Admin/>} path='/admin'></Route>
          <Route element={<Add_Product/>} path='/product'></Route>
          <Route element={<ListProduct/>} path='/product-list'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
