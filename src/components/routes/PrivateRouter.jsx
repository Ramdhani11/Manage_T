import React from "react";
import Authorization from "../other/Auth";
import { Navigate, Outlet } from "react-router-dom";
import Layout from "../dashboard/Layout";

const PrivateRouter = () => {
  if (Authorization()) {
    return <Layout>{/* <Outlet /> */}</Layout>;
  }
  return <Navigate to={"/"} replace />;
};

export default PrivateRouter;
