import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "./useUser";
export default function PrivateRoutes() {
  const user = useUser();
  console.log({ user });

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
}
