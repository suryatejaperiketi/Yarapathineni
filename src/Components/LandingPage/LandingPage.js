import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Work from "./Work";

import People from "./People";

import "../../Styles/LandingPage.css";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <About />
      <Work />
      {/* <Journey/> */}
      <People />
      {/* <ContactUs/>  */}
    </>
  );
}

export default LandingPage;
