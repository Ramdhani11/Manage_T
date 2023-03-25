import React from "react";
import Authorization from "../other/Auth";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouter = () => {
  if (Authorization()) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};
export default ProtectedRouter;
