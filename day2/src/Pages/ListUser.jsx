import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("user")) || [];
    setUsers(data);
  }, []);

  const handleEdit = (index)=>{
    const data = JSON.parse(localStorage.getItem("user")) || [];
    localStorage.setItem("editIndex" , JSON.stringify(index))
    let userArray = data[index]
    localStorage.setItem("editUser" ,JSON.stringify(userArray))
    navigate("/add")
    
  }


  const handleDelete = (index)=>{
    const data = JSON.parse(localStorage.getItem("user")) || [];
    console.log(data , index , "both")
    const updateData  = data.filter((_ , i) =>  i !== index)
      localStorage.setItem("user" , JSON.stringify(updateData))
    setUsers(updateData)
    alert("Delete success")
  }




  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-5">
      
      <h1 className="text-3xl font-bold text-center text-teal-700 mb-8">
        User List
      </h1>

      {users.length === 0 ? (
        <p className="text-center text-gray-600">No users found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {users.map((u, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              
              {/* Card Header */}
              <div className="bg-teal-600 text-white rounded-t-xl px-4 py-3">
                <h2 className="text-lg font-semibold">
                  {u.name} {u.lastName}
                </h2>
                <p className="text-sm opacity-90">
                  Role: {u.role || "User"}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-4 text-gray-700 space-y-2">
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {u.gmail || "N/A"}
                </p>
                <p>
                  <span className="font-semibold">Phone:</span>{" "}
                  {u.number || "N/A"}
                </p>
                              <div className="flex justify-between items-center px-4 py-3 border-t">
                <button className="text-sm text-blue-600 hover:underline" onClick={()=>handleEdit(index)}>
                  Edit
                </button>
                <button className="text-sm text-red-600 hover:underline" onClick={()=>handleDelete(index)}>
                  Delete
                </button>
              </div>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default ListUser;
