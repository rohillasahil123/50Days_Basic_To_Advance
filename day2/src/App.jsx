import React from 'react'
import {BrowserRouter , Route ,Routes }  from "react-router-dom"
import Navbar from './Pages/Navbar'
import Input from './components/Input'
import AddUser from './Pages/AddUser'
import ListUser from './Pages/ListUser'

const App = () => {
  return (
    <>

    <BrowserRouter>
        <Navbar/>
        <Routes>
      <Route element={<AddUser/>} path='/add' ></Route>
      <Route element={<ListUser/>} path='/list'></Route>
        </Routes>
       
       </BrowserRouter>
    </>
  )
}

export default App
