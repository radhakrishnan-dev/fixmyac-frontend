// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define the shape of the Auth Context data
interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

// 2. Create the Context with default (unauthenticated) values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define props for the provider
interface AuthProviderProps {
  children: ReactNode;
}

// 3. Create the Provider component
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  // Check local storage for initial authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('adminToken') === 'MOCK_FIXMYAC_TOKEN'
  );

  // MOCK Credentials (In a real app, this is validated against a server)
  const MOCK_USER = 'admin';
  const MOCK_PASS = 'password123';
  const MOCK_TOKEN = 'MOCK_FIXMYAC_TOKEN';

  const login = (username: string, password: string): boolean => {
    if (username === MOCK_USER && password === MOCK_PASS) {
      // Successful Mock Login
      localStorage.setItem('adminToken', MOCK_TOKEN);
      setIsAuthenticated(true);
      return true;
    }
    return false; // Failed login
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  // The value exposed by the context
  const contextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// 4. Custom Hook for easy context consumption
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};