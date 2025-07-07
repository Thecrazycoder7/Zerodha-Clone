import React from "react"
import NavBar from "../NavBar"
import Hero from "./Hero"
import Stats from "./Stats"
import Awards from "./Awards"
import Education from "./Education"
import Pricing from "./Pricing"
import OpenAccount from "../OpenAccount"
import Footer from "../Footer"
const HomePage = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}

export default HomePage