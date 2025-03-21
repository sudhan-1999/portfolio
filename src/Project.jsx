import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

 

function Projects() {
   const [projects, setProjects] = useState([]);

   useEffect(() => {
    axios.get("https://jayasudhanportfolio.onrender.com/projects")
        .then((response) => {
            setProjects(response.data);
        })
        .catch((error) => {
            console.error("Error fetching projects:", error);
        });
}, []);


  return (
    <div className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              {project.github.map((git) => (
              <a href={git} target="_blank" rel="noopener noreferrer" className="btn github-btn">GitHub</a>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
