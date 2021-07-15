import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Places from "../components/Places";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Gallery />
      <Places />
      <Contact />
      {/* footer  */}
      <Footer />
    </>
  );
}

export default App;
