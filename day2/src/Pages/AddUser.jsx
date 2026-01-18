import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect } from 'react'

const AddUser = () => {
    const [obj, setObj] = useState({
        name: "",
        lastName: "",
        number: "",
        role: "",
        gmail: "",
        password: ""
    })

    const navigate = useNavigate()


    useEffect(()=>{

     const n = JSON.parse(localStorage.getItem("editUser"))
     if(n){
        setObj(n)
     }
    },[])



    const handleChange = (e) => {
        const { name, value } = e.target
        setObj({ ...obj, [name]: value })
    }


    const handleCreate = () => {
        // edit logic
        const box = JSON.parse(localStorage.getItem("editIndex"))
        const n = JSON.parse(localStorage.getItem("editUser"))
        const oldUser = JSON.parse(localStorage.getItem("user")) || []
        if (box !==null ) {
            oldUser[box]= obj
            localStorage.removeItem("editIndex")
            localStorage.removeItem("editUser")
        } else{
            oldUser.push(obj)
        }
         localStorage.setItem("user", JSON.stringify(oldUser)) || []
            
            navigate("/list")
            console.log("4564")
    }





    return (
        <div className="min-h-screen bg-gray-100 pt-24 flex justify-center">
            <div className="bg-white w-full max-w-xl rounded-xl shadow-lg p-6 ">
                <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                    Add User
                </h1>
                <div className="flex flex-col gap-4 ">
                    <Input onChange={handleChange} placeholder=' User Name' name="name" value={obj.name} />
                    <Input onChange={handleChange} placeholder=' Last Name' name="lastName" value={obj.lastName} />
                    <Input onChange={handleChange} placeholder=' Mobile Number' name="number" value={obj.number} />
                    <Input onChange={handleChange} placeholder=' Enter Role' name="role" value={obj.role} />
                    <Input onChange={handleChange} placeholder=' Enter Gmail' name="gmail" value={obj.gmail} />
                    <Input onChange={handleChange} placeholder=' Enter Password' name="password" value={obj.password} />
                </div>
                <div className='mt-6 flex justify-center'>
                    <Button color="blue" text="Create " onClick={handleCreate} />
                </div>
            </div>
        </div>
    )
}

export default AddUser
