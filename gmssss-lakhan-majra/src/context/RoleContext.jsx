import React, { createContext, useEffect, useState } from "react";
import About from "../Pages/About";

export const RoleContext = createContext();

const RoleProvider = ({ children }) => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aboutText, setAboutText] = useState("");

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

  const handleLogout = () => {
    localStorage.removeItem("role")
    setRole("user")
  }


  const handleSaveAbout = () => {
    if (aboutText.trim() === "") {
      alert("Text likho pehle");
      return;
    }

    localStorage.setItem("about", JSON.stringify(aboutText));
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
        handleLogout,
        handleSaveAbout,
        setAboutText,
        aboutText
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export default RoleProvider;
