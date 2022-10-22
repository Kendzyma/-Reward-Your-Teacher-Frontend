import { Navigate } from "react-router-dom";
import React from "react";

function ProtectedRoute({ children }) {
  const isLogin = localStorage.getItem("token");
  console.log("Is User Login?", isLogin);

  return isLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;