import React, { createContext, useEffect, useState } from "react";

export const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (
      email === "rohillasahil@gmail.com" &&
      password === "ShyamBaba"
    ) {
      setRole("admin");
      localStorage.setItem("role", JSON.stringify("admin"));
      alert("Admin Login Successful");
    } else {
      alert("Email or Password wrong");
    }
  };

  useEffect(() => {
    const savedRole = JSON.parse(localStorage.getItem("role"));
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
