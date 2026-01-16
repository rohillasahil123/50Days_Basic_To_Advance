import React, { useEffect, useState } from 'react'
import Input_felds from '../Components/Input_felds'
import Button from '../Components/Button'


const Add_Product = () => {
  const [obj, setObj] = useState({
    id: "",
    name: "",
    price: "",
    quantity: "",
    category: "",
    description: ""
  })

useEffect(()=>{
 const d = JSON.parse(localStorage.getItem("editProduct")) || []
 setObj(d)
},[])


  const handleInput = (e) => {
    const { name, value } = e.target
    setObj({ ...obj, [name]: value })
  }


  const handleSave = () => {
    const OldProduct = JSON.parse(localStorage.getItem("product")) || []
    const editProduct = JSON.parse(localStorage.getItem("editInbox"))
    if(editProduct !== null){
      OldProduct[editProduct] = obj
      localStorage.removeItem("editProduct")
      localStorage.removeItem("editInbox")
    }else{
       OldProduct.push(obj)
    }
   
    localStorage.setItem("product", JSON.stringify(OldProduct))
    console.log(OldProduct)
  }



  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-20">
      <div className="w-full max-w-xl h-[60%] bg-white rounded-xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-6">
          Add Product
        </h1>

        <div className="flex flex-col gap-4">
          <Input_felds placeholder="ID" type="text" name='id' onChange={handleInput} value={obj.id} />
          <Input_felds placeholder="Name" type="text" name='name' onChange={handleInput} value={obj.name} />
          <Input_felds placeholder="Price" type="text" name='price' onChange={handleInput} value={obj.price} />
          <Input_felds placeholder="Quantity" type="text" name='quantity' onChange={handleInput} value={obj.quantity} />
          <Input_felds placeholder="Category" type="text" name='category' onChange={handleInput} value={obj.category} />
          <Input_felds placeholder="Description" type="text" name='description' onChange={handleInput} value={obj.description} />
        </div>
        <div className='pt-4'>
        <Button text="Save" variant='blue' onClick={handleSave} />
        </div>
      </div>

    </div>

  )
}

export default Add_Product
