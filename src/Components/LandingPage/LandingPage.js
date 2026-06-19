import React from "react";
import HeroSection from "./HeroSection";
import Work from "./Development";
import People from "./People";
import "../../Styles/LandingPage.css";
import PoliticalPulse from "./PoliticalPulse";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <PoliticalPulse />
      <Work />
      <People />
    </>
  );
}

export default LandingPage;
