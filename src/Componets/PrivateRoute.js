import React from "react";
import { Navigate } from "react-router-dom";
import useUserAuth from "../hook/useUserAuth";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useUserAuth();

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
