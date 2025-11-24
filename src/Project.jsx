import React, { useEffect } from "react";

function Projects() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  let projects = [
  {
    title: "E-Commerce Website",
    description: [
      "A full-stack e-commerce web application that enables users to browse products, add them to their cart, and securely complete purchases.",
      "The platform includes user authentication for secure login and registration, ensuring personalized shopping experiences.",
      "Built using the MERN stack, it features real-time cart updates and seamless frontend-backend integration."
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://capable-croquembouche-bafeeb.netlify.app/"
  },
  {
    title: "Hotel Booking Application",
    description: [
      "A full-stack hotel booking application that enables users to search for hotels and make reservations effortlessly.",
      "Users can securely register, log in, and manage their bookings with personalized account access.",
      "Built with the MERN stack, the platform ensures seamless integration between frontend and backend for real-time booking updates."
    ],
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://hotl-booking.netlify.app/"
  }
];

// --------------------------
// FREELANCE PROJECTS
// --------------------------

let freelanceProjects = [
  {
    title: "UyirMai E-Commerce Platform (Freelance Project)",
    description: [
      "A production-ready e-commerce platform built for UyirMai Enterprises.",
      "Features include product management, secure checkout, user authentication, order tracking, and an admin dashboard.",
      "Developed end-to-end using the MERN stack with fully responsive UI, optimized performance, and real-world deployment."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://uyirmai.in/"
  }
];


  /*return (
    <div className="projects-section animate-on-scroll" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            {project.description.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}

            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );*/
  return (
  <div className="projects-section animate-on-scroll" id="projects">
    {/* FREELANCE PROJECTS FIRST */}
    <h3 className="section-title">Freelance Projects</h3>
    <div className="projects-grid">
      {freelanceProjects.map((project, index) => (
        <div className="project-card" key={`f-${index}`}>
          <h3>{project.title}</h3>
          {project.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          <div className="tech-stack">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* PERSONAL PROJECTS */}
    <h3 className="section-title">Personal Projects</h3>
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div className="project-card" key={`p-${index}`}>
          <h3>{project.title}</h3>
          {project.description.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
          <div className="tech-stack">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="tech">{tech}</span>
            ))}
          </div>
          <div className="project-links">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

}

export default Projects;
