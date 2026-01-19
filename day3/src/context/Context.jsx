import {  createContext, useEffect, useState } from 'react'


export const cartContext = createContext()
const ContextCart = ({children}) => {
    const [count , setCount] = useState(0)
   const [cartData, setCartData] = useState([]);

      const countData = cartData.length

    useEffect(()=>{
       const data = JSON.parse(localStorage.getItem("addCart")) || []
       setCartData(data)
      
    },[])



  useEffect(()=>{
    console.log("object")
  },[cartData , setCount])


  
  const handleAdd = (product)=>{
    setCartData((prev)=>{
        const exist = prev.find((item)=> item.id === product.id) 
        let updated
        if(exist){
                updated = prev.map((i)=>(
                    i.id === product.id ? 
                    {...i ,qty :( i.qty || 1 ) + 1 } :
                    i
                ))

        }else{
            updated = [...prev , {product , qty : 1}]
        }
     
       localStorage.setItem("addCart" ,JSON.stringify(updated))
        return  updated
    })
  }




  return (
    
    <cartContext.Provider value={{count , cartData , handleAdd , countData}} >
        {children}
    </cartContext.Provider>
      
)

}

export default ContextCart
