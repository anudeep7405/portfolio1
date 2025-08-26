import React from "react";
import "../css/internships.css";

const Internships = () => {
  return (
    <div className="internships-container">
      <p className="intern">Internships</p>

      <div className="internships-box">
        {/* Internship 1 */}
        <div className="internship">
          <div className="main">
            <h3>Web Stack Academy</h3>
            <h3>Full Stack Development in MERN</h3>
            <h3>12 Feb 2024 - 23 Apr 2024, Bangalore</h3>
          </div>
          <p>MongoDB, Express.js, React.js, Node.js</p>
          <p>
            Built a Homely Hub website using MERN to book rooms in tourist
            places.
          </p>
          <p>Implemented bank payouts with Stripe API to allow transactions.</p>
        </div>

        {/* Internship 2 */}
        <div className="internship">
          <div className="main">
            <h3>Snipe Tech Private Limited</h3>
            <h3>Detecting Discrimination by Evaluating Divergent Attributes</h3>
            <h3>25 July 2024 - 25 Sep 2024, Bangalore</h3>
          </div>
              
            <p><strong>Frontend</strong>: HTML, CSS, JavaScript</p>
            <p><strong>Backend</strong>: Java</p>
            <p><strong>Database</strong>: SQL</p>
        
      
          <p>Built a website for detecting discrimination based on tweets.</p>
          <p>Dataset is taken from Kaggle, pre-processed and cleaned.</p>
          <p>Removed noisy data and generated graphs to analyze tweets.</p>
        </div>
      </div>
    </div>
  );
};

export default Internships;
