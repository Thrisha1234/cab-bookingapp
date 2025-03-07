// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    console.log('Auth state updated, isAuthenticated:', true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    console.log('Auth state updated, isAuthenticated:', false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
