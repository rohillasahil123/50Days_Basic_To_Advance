import React, { useEffect, useState } from 'react'
import Button from '../Components/Button'
import { useNavigate } from 'react-router-dom'

const ListProduct = () => {
    const [list, setList] = useState([])
    const naviagte = useNavigate()

    useEffect(() => {
        const oldProduct = JSON.parse(localStorage.getItem("product")) || []
        setList(oldProduct)
        console.log(oldProduct, "list")
    }, [])


    const handleDelete = (index) => {
        // console.log(index, "index")
        const oldProduct = JSON.parse(localStorage.getItem("product")) || []
        const newArray =  [...oldProduct.slice(0 , index)  , ...oldProduct.slice(index +1) ]
        localStorage.setItem( "product" , JSON.stringify(newArray))
        setList(newArray)
    }



    const handleEdit =(index)=>{
          const oldProduct = JSON.parse(localStorage.getItem("product")) || []
        localStorage.setItem("editInbox" , index)
         localStorage.setItem("editProduct" , JSON.stringify(oldProduct[index]))
         naviagte('/product')
    
    }


// const handleEdit = (index) => {
//   const oldProduct = JSON.parse(localStorage.getItem("product")) || []

//   localStorage.setItem("editIndex", index)
//   localStorage.setItem("editProduct", JSON.stringify(oldProduct[index]))

//   console.log(oldProduct[index], "selected product")
// }


    return (
        <div className="min-h-screen w-full pt-20 px-6">
            <h1 className='text-gray-800 font-bold text-3xl text-center' >Product List</h1>

            {
                list.length == 0 ? (
                    <div className="w-full h-[60vh] flex items-center justify-center">
                        <h1 className="text-red-600 text-xl font-semibold">
                            No Product Found
                        </h1>
                    </div>

                ) : (
                    <div className="flex flex-wrap justify-center gap-6 mt-8">

                        {
                            list.map((p, index) => (
                                <div
                                    key={index}
                                    className=" w-full sm:w-[280px] bg-white shadow-md rounded-lg p-4 text-center">
                                    {/* 
                                    <div className="shadow-md rounded-lg p-4 w-[300px] bg-white"> */}
                                    <div className="flex flex-col gap-2 text-gray-700">

                                        <div className="flex justify-between">
                                            <span className="font-semibold">Name</span>
                                            <span>{p.name}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="font-semibold">Price</span>
                                            <span className="text-green-600 font-bold">
                                                ₹ {Number(p.price).toLocaleString("en-IN")}
                                            </span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="font-semibold">Category</span>
                                            <span>{p.category}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="font-semibold">Quantity</span>
                                            <span>{p.quantity}</span>
                                        </div>

                                        <div className="flex justify-between">
                                            <span className="font-semibold">Description</span>
                                            <span className="text-right w-[60%]">{p.description}</span>
                                        </div>

                                    </div>
                                    <div className='h-[15vh] space-y-1 '>
                                        <Button text="Edit" variant="green" onClick={() => handleEdit(index)} />
                                        <Button text="Delete" variant="red" onClick={() => handleDelete(index)} />
                                    </div>
                                    {/* </div> */}

                                </div>
                            ))

                        }

                    </div>
                )

            }

        </div>
    )
}

export default ListProduct
