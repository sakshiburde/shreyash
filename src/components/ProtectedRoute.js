// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from './Auth/UserContext'; // Use the UserContext to check if the user is logged in

const ProtectedRoute = ({ children }) => {
  const { userData } = useUser(); // Get userData from the UserContext

  if (!userData) {
    // If no user data, redirect to login page
    return <Navigate to="/" />;
  }

  // If user data exists, render the children (protected page)
  return children;
};

export default ProtectedRoute;
