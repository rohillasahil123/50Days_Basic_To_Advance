import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 px-6">
      <div className="max-w-xl text-center bg-white p-10 rounded-2xl shadow-2xl">

        {/* 404 Text */}
        <h1 className="text-8xl font-extrabold text-blue-900 tracking-widest">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-blue-900 mx-auto my-6 rounded"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition"
          >
            Go to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-blue-900 text-blue-900 rounded-xl font-semibold hover:bg-blue-50 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
