import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <div className="left-section">
        <h1>Nature Benefits</h1>
        <p>
          Hunza valley is among the best place in the Pakistan for tourists to
          visits.Please click down below to get the more information
        </p>
        <div className="button">
          <a href="#">Book Now</a>
          <a href="#">Gallery</a>
        </div>
      </div>
      <div className="right-section">
        <img src="../resources/nature.svg" alt="nature" />
      </div>
    </div>
  );
}

export default HeroSection;
