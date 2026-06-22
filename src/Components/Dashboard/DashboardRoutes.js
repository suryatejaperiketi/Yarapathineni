import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminContactus from "../DashboardRoutes/AdminContactus";
import ViewContact from "../DashboardRoutes/ViewContact";
import DashboardHome from "../Pages/DashboardHome";
import CmrffundsDetails from "../DashboardRoutes/CmrffundsDetails";
import CmrFunds from "../DashboardRoutes/CmrFunds";

function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardHome/>} />
      <Route path="/dashboard-home" element={<DashboardHome/>} />
      <Route path="/admincontact" element={<AdminContactus />} />
      <Route path="/viewcontact" element={<ViewContact/>} /> 
      <Route path="/cmr-funds" element={<CmrFunds/>} />
      <Route path="/cmr-funds-details" element={<CmrffundsDetails/>} />  
    </Routes>
  );
}

export default DashboardRoutes;
