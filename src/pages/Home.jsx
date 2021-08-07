import React from "react";
import Portfolio from "./Portfolio";
import Works from "./Works";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import HeroBanner from "../components/HeroBanner";

function Home() {
  return (
    <>
      <HeroBanner />
      <Portfolio />
      <Works />
      <Testimonial />
      <Contact />
    </>
  );
}

export default Home;
