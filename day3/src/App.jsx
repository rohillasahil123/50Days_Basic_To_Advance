import React from 'react'
import Hero_page from './Pages/Hero_page'
import Navbar from './Pages/Navbar'
import ProductList from './Pages/ProductList'
import Comment from './Pages/Comment'
import Footer from './Pages/Footer'
import NotFound from './Pages/NotFound'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login_Page from './Pages/Login_Page'
import AddToCart from './Pages/AddToCart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>    
    <Routes>
      <Route element={ <Hero_page/>} path='/' > </Route>
        <Route element={ <ProductList/>} path='/product' > </Route>
        <Route element={ <Comment/>} path='/comment' > </Route>
        <Route element={<AddToCart/>} path='/cart' ></Route>
        <Route element={<Login_Page/>} path='/login'></Route>

        <Route element={<NotFound/>} path='*' ></Route>
</Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
