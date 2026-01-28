import React, { useContext , useEffect } from "react";
import { RoleContext } from "../context/RoleContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    role
  } = useContext(RoleContext);
const navigate = useNavigate()


    useEffect(() => {
    if (role === "admin") {
      navigate("/adminNotice");
    }
  }, [role]);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };





  return (
    <div className="pt-20 min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl w-[350px] shadow">
        <h1 className="text-xl font-bold mb-4">Admin Login</h1>

        <input
          type="email"
          className="border w-full p-2 mb-3"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleLoginChange}
        />

        <input
          type="password"
          className="border w-full p-2 mb-3"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleLoginChange}
        />

        <button
          className="bg-slate-900 text-white w-full py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
