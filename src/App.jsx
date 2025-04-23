import { useState } from "react";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="portfolio">
      <ParticleBackground />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <div className="content-container">
        <Home scrollToSection={scrollToSection} />
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;