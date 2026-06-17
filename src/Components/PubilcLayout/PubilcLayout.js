import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../LandingPage/Footer";

function PublicLayout() {
  return (
    <>
      <Navbar/>
       <Outlet/> 
       <Footer/>
    </>
     );
}

export default PublicLayout;