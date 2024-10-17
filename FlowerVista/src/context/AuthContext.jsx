import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [user, setUser] = useState(null); // New user state

    const handleLogin = (token) => {
        setToken(token);
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setToken('');
        setIsLoggedIn(false);
        setUser(null); // Reset user state on logout
    };

    const handleData = (userData) => {
        setUser(userData); // Store user details
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, handleLogin, handleLogout, handleData, user }}>
            {children}
        </AuthContext.Provider>
    );
};
