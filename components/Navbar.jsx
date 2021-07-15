import React from "react";
import "./Navbar.css";
function Navbar() {
  const mobileNavbar = () => {
    const icon = document.querySelector(".fa-bars");
    console.log(icon);
    icon.classList.toggle("fa-times");
    const navbar = document.querySelector(".navbar-links");
    navbar.classList.toggle("active");
  };

  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <img src="../resources/logo.svg" alt="logo" />
          <a href="#home">Hunza</a>
        </div>
        <div className="bars">
          <i class="fas fa-bars" onClick={mobileNavbar}></i>
        </div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#places">Places</a>
          <a href="#contactus">Contact Us</a>
        </div>
        <div className="register">
          <a href="#">Log In</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
