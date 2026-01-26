import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input_felds from "../Components/Input_felds";
import axios from "axios";

const Task_Page = () => {
  const [tasks, setTasks] = useState([])
  const [search, setSearch] = useState("")
  const [error , setError] = useState(false)
  const [loading , setLoading] = useState(false)
  const navigate = useNavigate()

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("Task")) || []
  //   setTasks(data)
  // }, [])


  const FilterTask =  tasks.filter((task) => task.title.toLowerCase().includes(search.toLocaleLowerCase()))||tasks.filter((task) => task.description.toLowerCase().includes(search.toLocaleLowerCase()))

  const gernateApiDataFromManual = (todos)=>{
    return todos.map((item)=>({
      title : item.todo ,
      description: "Get Data from APi" ,
      dueDate : "False" ,
      priority : item.completed ? "High" : "Low",
      status : item.completed ? "complete" : "Panding" ,
      createdAt : Date.now()
    }))
  }


   useEffect(()=>{
const handleData =async ()=>{
  try {
    setLoading(true)
    setError("")
    const fetchApiData = await axios.get("https://dummyjson.com/todos")
    const data = gernateApiDataFromManual(fetchApiData.data.todos)
    localStorage.setItem("Task" , JSON.stringify(data))
    setTasks(data )
  } catch (error) {
    setError("Api not working and data not showig")
  }finally{
    setLoading(false)
  }
}
handleData()
 },[])




   useEffect(() => {
    console.log(tasks, "statte")
  }, [tasks])


  const handleDelete = (id) => {
    const product = tasks.filter((_, i) => i !== id)
    console.log(product, "delte")
    setTasks(product)
    localStorage.setItem("Task", JSON.stringify(product))
  }


  const handleEdit = (id) => {
    const editTask = tasks[id]
    localStorage.setItem("editTask", JSON.stringify(editTask))
    localStorage.setItem("editIndex", JSON.stringify(id))
    navigate("/")
  };

  return (
    <div className="bg-gray-300 min-h-screen w-full pt-14">
      <div className="justify-center flex  mt-4 w-full " >
        <div className="h-10 w-[40%] flex justify-center ">
                  <input
                    type="text"
                    placeholder="Search tasks..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border px-3 py-2 rounded-md w-full"
                  />
                </div>
                </div>
      {
        FilterTask.length === 0 ?
          <div className="w-full flex flex-wrap justify-center gap-6 p-6">
            <h1 className="text-center items-center text-3xl font-bold text-teal-700">
              No product in your List
            </h1>
          </div> : (
            <div className="w-full flex flex-wrap justify-center gap-6 p-6">


              {FilterTask.map((task, id) => (
                <div
                  key={id}
                  className="bg-white w-[320px] rounded-lg shadow-md overflow-hidden"
                >
                  {/* Header */}
                  <div className="bg-teal-700 px-4 py-3">
                    <h2 className="text-white text-lg font-semibold">
                      {task.title}
                    </h2>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    <p className="text-gray-600 text-sm">{task.description}</p>

                    <div className="flex justify-between text-sm">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                        {task.priority}
                      </span>
                      <span className="text-gray-500">Due: {task.dueDate}</span>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <span className="text-xs font-semibold text-blue-600">
                        Status: {task.status}
                      </span>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEdit(id)}
                          className="text-sm px-3 py-1 bg-blue-500 text-white rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(id)}
                          className="text-sm px-3 py-1 bg-red-500 text-white rounded"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
              {loading && (
  <p className="text-center text-xl font-semibold mt-10">
    Loading tasks...
  </p>
)}

  {error && (
  <p className="text-center text-red-600 mt-6">
    {error}
  </p>
)}



    </div>
  );
};

export default Task_Page;
