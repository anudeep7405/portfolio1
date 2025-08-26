import React from "react";
import "../css/certification.css";

const Certification = () => {
  const certifications = [
    {
      title: "Demystifying networking",
      issuedBy: "NPTEL (National Programme on Technology Enhanced Learning)",
      duration: "4 Weeks",
      date: "Jul-Aug 2023",
    },
    {
      title: "Python for data science",
      issuedBy: "NPTEL (National Programme on Technology Enhanced Learning)",
      duration: "4 Weeks",
      date: "Jan-Feb 2024",
    },
    {
      title: "CompTIA security+",
      issuedBy: "Udemy",
      duration: "30hrs",
      date: "November 2024",
    },
    {
      title: "Flutter & Dart – The complete guide",
      issuedBy: "Udemy",
      duration: "30hrs",
      date: "December 2024",
    },
  ];

  return (
    <div className="certifications-container">
      <h2>Certifications</h2>
      <div className="certifications-box">
        {certifications.map((cert, index) => (
          <div className="certification" key={index}>
            <h3>{cert.title}</h3>
            <p>
              <strong>Issued by:</strong> {cert.issuedBy}
            </p>
            <p>
              <strong>Duration:</strong> {cert.duration}
            </p>
            <p>
              <strong>Date:</strong> {cert.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
