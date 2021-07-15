import React from "react";
import "./Places.css";

function Places() {
  return (
    <>
      <h1 id="places">Places</h1>
      <div className="places-section">
        <div className="place">
          <img src="../resources/8.jpg" alt="place" />
          <h2>Hunza Valley</h2>
          <p>This is beautiful valley situated in the northern pakistan</p>
          <button>Visit Us</button>
        </div>
        <div className="place">
          <img src="../resources/7.jpg" alt="place" />
          <h2>Zyarat Valley</h2>
          <p>This is beautiful valley situated in the northern pakistan</p>
          <button>Visit Us</button>
        </div>
        <div className="place">
          <img src="../resources/6.jpg" alt="place" />
          <h2>Neelam Valley</h2>
          <p>This is beautiful valley situated in the northern pakistan</p>
          <button>Visit Us</button>
        </div>
        <div className="place">
          <img src="../resources/3.jpg" alt="place" />
          <h2>Muree Street</h2>
          <p>This is beautiful valley situated in the northern pakistan</p>
          <button>Visit Us</button>
        </div>
      </div>
    </>
  );
}

export default Places;
