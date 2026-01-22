import React, { useState } from "react";

const Task_Page = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React Basics",
      description: "Revise useState, controlled inputs, and component structure.",
      priority: "High Priority",
      due: "25 Jan",
      status: "Pending",
    },
    {
      id: 2,
      title: "Practice Tailwind",
      description: "Build cards and layouts using Tailwind CSS.",
      priority: "Medium Priority",
      due: "26 Jan",
      status: "Pending",
    },
    {
      id: 3,
      title: "Learn useEffect",
      description: "Understand side effects and lifecycle in React.",
      priority: "High Priority",
      due: "27 Jan",
      status: "Pending",
    },
    {
      id: 4,
      title: "JavaScript Revision",
      description: "Revise array methods and ES6 concepts.",
      priority: "Low Priority",
      due: "28 Jan",
      status: "Pending",
    },
    {
      id: 5,
      title: "Build Todo App",
      description: "Create a simple CRUD Todo application.",
      priority: "High Priority",
      due: "29 Jan",
      status: "Pending",
    },
    {
      id: 6,
      title: "API Integration",
      description: "Fetch data using fetch / axios.",
      priority: "Medium Priority",
      due: "30 Jan",
      status: "Pending",
    },
    {
      id: 7,
      title: "React Router",
      description: "Learn routing and navigation.",
      priority: "Medium Priority",
      due: "31 Jan",
      status: "Pending",
    },
    {
      id: 8,
      title: "Redux Basics",
      description: "Understand global state management.",
      priority: "Low Priority",
      due: "1 Feb",
      status: "Pending",
    },
    {
      id: 9,
      title: "Project Cleanup",
      description: "Refactor code and improve folder structure.",
      priority: "Low Priority",
      due: "2 Feb",
      status: "Pending",
    },
    {
      id: 10,
      title: "Deployment",
      description: "Deploy React app on Netlify/Vercel.",
      priority: "High Priority",
      due: "3 Feb",
      status: "Pending",
    },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    alert(`Edit task with id: ${id}`);
  };

  return (
    <div className="bg-gray-300 min-h-screen w-full pt-14">
      <div className="w-full flex flex-wrap justify-center gap-6 p-6">
        {tasks.map((task) => (
          <div
            key={task.id}
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
                <span className="text-gray-500">Due: {task.due}</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-semibold text-blue-600">
                  Status: {task.status}
                </span>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(task.id)}
                    className="text-sm px-3 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
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
    </div>
  );
};

export default Task_Page;
