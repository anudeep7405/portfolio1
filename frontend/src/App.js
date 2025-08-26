import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./css/home.css";

import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skill";
import Certifications from "./components/Certification";
import Internships from "./components/Internships";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : ""}>
        <header>
          <button onClick={toggleDarkMode}>
          </button>
        </header>


        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        
        {/* Navigation Links */}




        <Footer />
      </div>
    </Router>
  );
}

export default App;
