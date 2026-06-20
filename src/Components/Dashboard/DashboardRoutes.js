import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminContactus from "../DashboardRoutes/AdminContactus";
import ViewContact from "../DashboardRoutes/ViewContact";
import DashboardHome from "../Pages/DashboardHome";
import CrmFunds from "../DashboardRoutes/CrmFunds";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome/>} />
      <Route path="/dashboard-home" element={<DashboardHome/>} />
      <Route path="/admincontact" element={<AdminContactus />} />
      <Route path="/viewcontact" element={<ViewContact/>} /> 
      <Route path="/crm-funds" element={<CrmFunds/>} />  
    </Routes>
  );
}

export default DashboardRoutes;
