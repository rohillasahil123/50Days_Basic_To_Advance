import React, { createContext , useEffect , useState } from 'react'


export const NoticeContext = createContext()

const NoticeProvider = ({children}) => {
      const [obj, setObj] = useState({
            title: "",
            date: "",
            category: "",
            check: false
        })
  const [notices, setNotices] = useState([])

   useEffect(() => {
        const localNotice = JSON.parse(localStorage.getItem("notice")) || []
        setNotices(localNotice)
    }, [])

    useEffect(() => {
        console.log(notices, "admin")
    }, [notices])

    const handleSave = () => {
        const getNotice = JSON.parse(localStorage.getItem("notice")) || []
        const updatedNotice = [...getNotice, obj]
        localStorage.setItem("notice", JSON.stringify(updatedNotice))
        setNotices(updatedNotice)
    }

      const handleDelete = (index)=>{
    const deleteNotice = notices.filter((_ , i)=> i !== index)
    setNotices(deleteNotice)
    localStorage.setItem("notice" , JSON.stringify(deleteNotice))
  }

  return (
    <NoticeContext.Provider value={{handleDelete , handleSave , notices , obj , setObj}} >
        {children}
    </NoticeContext.Provider>
  )
}

export default NoticeProvider
