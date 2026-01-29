import React, { useContext } from 'react'
import { RoleContext } from '../context/RoleContext'
import AdminHeader from '../Admin/AdminHeader'
import Navbar from './Navbar'

const Header = () => {
    const {role} = useContext(RoleContext)
  return (
    <>
      {  role === "admin" ? <AdminHeader/> : <Navbar/>}
    </>
  )
}

export default Header
