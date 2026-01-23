import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Task_Page = () => {
  const [tasks, setTasks] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Task")) || []
    setTasks(data)
  }, [])


useEffect(() => {
    console.log(tasks , "statte")
  }, [tasks])


const handleDelete = (index) => {
  const updel = tasks.filter((_, i) => i !== index);
  setTasks(updel);
  localStorage.setItem( "Task" , JSON.stringify(updel ))
};


  const handleEdit = (id) => {
   const editTask = tasks[id]
    localStorage.setItem("editTask", JSON.stringify(editTask))
    localStorage.setItem("editIndex", JSON.stringify(id))
    navigate("/") 
  };

  return (
    <div className="bg-gray-300 min-h-screen w-full pt-14">
{
      tasks.length === 0  ?
  <div className="w-full flex flex-wrap justify-center gap-6 p-6"> 
  <h1 className="text-center items-center text-3xl font-bold text-teal-700">
  No product in your List 
 </h1> 
  </div> : (
    
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {tasks.map((task , id) => (
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
    </div>
  );
};

export default Task_Page;
