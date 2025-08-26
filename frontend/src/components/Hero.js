import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
       <img 
  className="hero-img" 
  src="/images/portimg.jpg"  // starts from public folder
  alt="Portfolio" 
/>

        <div>
          <h2>Hi, I'm <span>Anudeep</span></h2>
          <p>
            Developer passionate about building websites, mobile applications, and cyber security.
          </p>
        </div>
      </section>

      {/* Navigation Boxes (outside Hero section) */}
      <nav className="nav-links">
        <Link to="/education" className="nav-box">Education</Link>
        <Link to="/skills" className="nav-box">Skills</Link>
        <Link to="/certifications" className="nav-box">Certifications</Link>
        <Link to="/internships" className="nav-box">Internship</Link>
        <Link to="/projects" className="nav-box">Projects</Link>
        <Link to="/contact" className="nav-box">Contact</Link>
      </nav>
    </>
  );
}

export default Hero;
