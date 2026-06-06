import React from 'react'
import HeroSection from './HeroSection'
import About from './About'
import Work from './Work'
import ContactUs from './ContactUs'
import People from './People'
import Journey from './Journey'



function LandingPage() {
  return (
   <>
    <HeroSection/>
    <About/>
    <Work/>
    <Journey/>
    <People/>
    <ContactUs/>
   </>
  )
}

export default LandingPage