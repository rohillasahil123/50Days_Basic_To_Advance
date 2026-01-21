import React from 'react'

const Task_Page = () => {
  return (
    <div className="bg-gray-300 min-h-screen w-full pt-14">
      <div className="w-full flex justify-center items-start p-6">
        
        {/* Task Card */}
        <div className="bg-white w-[320px] rounded-lg shadow-md overflow-hidden">
          
          {/* Header */}
          <div className="bg-teal-700 px-4 py-3">
            <h2 className="text-white text-lg font-semibold">
              Learn React Basics
            </h2>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <p className="text-gray-600 text-sm">
              Revise useState, controlled inputs, and component structure.
            </p>

            <div className="flex justify-between text-sm">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                High Priority
              </span>
              <span className="text-gray-500">
                Due: 25 Jan
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-xs font-semibold text-blue-600">
                Status: Pending
              </span>

              <div className="flex space-x-2">
                <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded">
                  Edit
                </button>
                <button className="text-sm px-3 py-1 bg-red-500 text-white rounded">
                  Delete
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Task_Page
