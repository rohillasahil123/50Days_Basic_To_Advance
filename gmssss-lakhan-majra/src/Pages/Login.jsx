import React from "react";

const Login = () => {
  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl w-[350px] shadow">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>
        <input className="border w-full p-2 mb-3" placeholder="Email" />
        <input className="border w-full p-2 mb-3" placeholder="Password" />
        <button className="bg-slate-900 text-white w-full py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
