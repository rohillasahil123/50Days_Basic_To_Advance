import React, { useContext, useState } from "react";
import { RoleContext } from "../context/RoleContext";

const AdminHero = () => {
  
    const {setAboutText , handleSaveAbout , aboutText} = useContext(RoleContext)



  return (
    <div className="min-h-screen w-full bg-gray-100 flex justify-center items-start p-6">
      
      {/* Main Container */}
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-6">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Admin Dashboard
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">
          <div className="bg-blue-100 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Total Notices</h3>
            <p className="text-2xl font-bold text-blue-700">24</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Active Users</h3>
            <p className="text-2xl font-bold text-green-700">120</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Admissions</h3>
            <p className="text-2xl font-bold text-yellow-700">18</p>
          </div>

          <div className="bg-red-100 p-4 rounded-lg">
            <h3 className="text-sm text-gray-600">Pending Requests</h3>
            <p className="text-2xl font-bold text-red-700">5</p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Edit About Section
          </h3>

          <textarea
            className="w-full h-40 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={aboutText}
            onChange={(e) => setAboutText(e.target.value)}
          />

          <div className="flex justify-end mt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md" onClick={handleSaveAbout}>
              Save About
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminHero;
