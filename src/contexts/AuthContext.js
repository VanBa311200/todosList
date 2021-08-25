import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const onSetAuthenticated = () => {
    setIsAuthenticated(!isAuthenticated);
  }

  const authContextData = {
    isAuthenticated,
    onSetAuthenticated
  }

  return (

    <AuthContext.Provider value={authContextData} >
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContextProvider
