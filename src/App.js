import React from "react";
import NavBar from "./components/NavBar";
import HeroSec from "./components/HeroSec";
import SocialLInks from "./components/SocialLInks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <NavBar />
    <HeroSec />
    <SocialLInks />
    <About />
    <Portfolio />
    <Contact />
    <Footer/>
    </div>
  )
}

export default App;
