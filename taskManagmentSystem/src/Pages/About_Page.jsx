import React from 'react'

const About_Page = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 pt-14 flex justify-center">
      <div className="w-full max-w-4xl px-6 py-10">
        
        {/* Heading */}
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">
          Task Manager
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">
          Task Manager is a simple and efficient application designed to help
          users manage their daily tasks, priorities, and deadlines in one
          place.
        </p>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Key Features
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Add, edit, and delete tasks</li>
            <li>Mark tasks as completed</li>
            <li>Set priorities and due dates</li>
            <li>Tasks saved using local storage</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Built With
          </h2>
          <p className="text-gray-600">
            React, JavaScript, and Tailwind CSS
          </p>
        </div>

      </div>
    </div>
  )
}

export default About_Page
