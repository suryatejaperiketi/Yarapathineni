import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminContactus from "../DashboardRoutes/AdminContactus";
import ViewContact from "../DashboardRoutes/ViewContact";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/admincontact" element={<AdminContactus />} />
      <Route path="/viewcontact" element={<ViewContact/>} />
    </Routes>
  );
}

export default DashboardRoutes;
