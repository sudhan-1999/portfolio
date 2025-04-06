import React, { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("https://jayasudhanportfolio.onrender.com/projects", {
          timeout: 5000,
        });
        setProjects(response.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Unable to fetch projects. Please try again later.");
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>


      {!error && (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                {project.github.map((git, idx) => (
                  <a key={idx} href={git} target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Projects;
