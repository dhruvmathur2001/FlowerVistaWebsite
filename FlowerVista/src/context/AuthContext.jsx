import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Mail,setMail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // Set login state if token exists
    }
  }, []);

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
  };

  const handleData = (email) =>{
    setMail(email);
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setMail("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, handleData ,Mail }}>
      {children}
    </AuthContext.Provider>
  );
};
