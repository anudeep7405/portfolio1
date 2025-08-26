import React from "react";

const sections = ["education", "skills", "certifications", "internships", "projects", "contact"];

function QuickLinks() {
  return (
    <section id="projects">
      <div className="project-grid">
        {sections.map((section) => (
          <div className="project" key={section}>
            <h3>
              <a className="anchor" href={`#${section}`}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;
