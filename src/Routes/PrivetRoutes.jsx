import React, { use } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import { Navigate } from "react-router";

function PrivetRoutes({ children }) {
  const { user } = use(AuthContext);

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default PrivetRoutes;
