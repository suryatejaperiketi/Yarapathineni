import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Work from "./Development";
import People from "./People";
import "../../Styles/LandingPage.css";
import PoliticalPulse from "./PoliticalPulse";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <PoliticalPulse/>
      {/* <About /> */}
      <Work />
      {/* <Journey/> */}
      <People />
      {/* <ContactUs/>  */}
    </>
  );
}

export default LandingPage;
