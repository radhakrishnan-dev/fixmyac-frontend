// src/components/ProtectedRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import our custom hook

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    // If not authenticated, redirect them to the login page
    return <Navigate to="/admin/login" replace />;
  }
  
  // If authenticated, render the child components (AdminDashboard)
  return <>{children}</>;
};

export default ProtectedRoute;