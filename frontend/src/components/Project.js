import React from "react";
import "../css/projects.css"; // Import your CSS

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        
        {/* Project 1 */}
        <div className="project-card">
          <h3>Blood Donation</h3>
          <p>
            The blood donation management system is a vital project designed to address 
            the urgent need for blood in critical situations, aiming to save millions of lives.
          </p>
          <p>
            Developed using Python and Django, the platform facilitates seamless 
            communication between donors and patients.
          </p>
          <p>
            The project's objectives include efficient blood matching, user-friendly 
            accessibility, and robust security measures.
          </p>
          <p><strong>Technologies used:</strong></p>
          <ul>
            <li>Frontend: HTML, CSS, JavaScript</li>
            <li>Backend: Python, Django</li>
            <li>Database: MySQL</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Smart Parking System using Arduino with Web Portal</h3>
          <p>
            This is a prototype project designed to get accurate and real-time slot availability 
            information from parking slots.
          </p>
          <p>
            The home page of the project provides a register and login interface.
          </p>
          <p>
            After login, the website shows the availability of slots in the parking area, 
            whether the slots are filled or empty.
          </p>
          <p><strong>Technologies used:</strong></p>
          <ul>
            <li>
              Hardware: Arduino board, power supply board, IR sensor, servo motor, jumper wires.
            </li>
            <li>
              Software: Arduino IDE, Embedded C, HTML, CSS, JavaScript, Python Flask, SQLite3
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;
