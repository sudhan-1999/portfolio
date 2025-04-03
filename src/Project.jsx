
import React, { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get("https://jayasudhanportfolio.onrender.com/projects", {
          timeout: 5000, // Set timeout to 5s
        });
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProjects()
  }, []);

 

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
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
    </div>
  );
}

export default Projects;

