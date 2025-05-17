import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isLoggedIn }) => {
  return (
    <Route
      render={() => {
        return isLoggedIn ? children : <Navigate to="/" />; // Redirect to landing page if not logged in
      }}
    />
  );
};

export default ProtectedRoute;