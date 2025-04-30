import React, { use } from "react";
import { AuthContext } from "../ContextApi/AuthContext";
import { Navigate } from "react-router";

function PrivetRoutes({ children }) {
  const { user, userLoder } = use(AuthContext);

  if (userLoder) {
    return <span>Lodding.....</span>;
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
}

export default PrivetRoutes;
