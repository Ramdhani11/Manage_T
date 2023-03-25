import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Barang from "../dashboard/barang/Barang";
import ProtectedRouter from "./ProtectedRouter";
import PrivateRouter from "./PrivateRouter";

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouter />}>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRouter />}>
          <Route index element={<Barang />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouter;
