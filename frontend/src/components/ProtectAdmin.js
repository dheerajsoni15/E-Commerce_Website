import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectAdmin= ({ element, roleRequired }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || user.role !== roleRequired) {
    // Redirect to login if not authenticated or not authorized
    return <Navigate to="/adminlogin" />;
  }

  return element;
};

export default ProtectAdmin;
