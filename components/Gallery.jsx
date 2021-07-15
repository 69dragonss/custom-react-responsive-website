import React from "react";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <h1 id="gallery">Gallery</h1>
      <div className="gallery-section">
        <div className="pics">
          <img src="../resources/1.jpg" alt="pics" />
          <h2>Africa</h2>
        </div>
        <div className="pics">
          <img src="../resources/2.jpg" alt="pics" />
          <h2>Australia</h2>
        </div>
        <div className="pics">
          <img src="../resources/3.jpg" alt="pics" />
          <h2>England</h2>
        </div>
        <div className="pics">
          <img src="../resources/4.jpg" alt="pics" />
          <h2>South America </h2>
        </div>
        <div className="pics">
          <img src="../resources/5.jpg" alt="pics" />
          <h2>India</h2>
        </div>
        <div className="pics">
          <img src="../resources/6.jpg" alt="pics" />
          <h2>Pakistan</h2>
        </div>
      </div>
    </>
  );
}

export default Gallery;
