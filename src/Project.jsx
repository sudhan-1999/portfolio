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
        "Built using the MERN stack, it features real-time cart updates and seamless frontend-backend integration.",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://capable-croquembouche-bafeeb.netlify.app/",
    },
    {
      title: "Hotel Booking Application",
      description: [
        "A full-stack hotel booking application that enables users to search for hotels and make reservations effortlessly.",
        "Users can securely register, log in, and manage their bookings with personalized account access.",
        "Built with the MERN stack, the platform ensures seamless integration between frontend and backend for real-time booking updates."
      ],
      tech: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://hotl-booking.netlify.app/",
    },
    {
  title: "Military Asset Management System",
  description: [
    "A role-based full-stack web application designed to efficiently manage military assets across different bases.",
    "Supports functionalities like user authentication, role-based access control (RBAC), asset assignment, transfer, and expenditure tracking.",
    "Built with the MERN stack, it ensures secure operations, real-time data updates, and a responsive user interface for different roles like admin, commander, and logistic staff."
  ],
  tech: ["React", "Node.js", "MongoDB", "Express"],
  liveLink: "https://profound-tartufo-c66400.netlify.app/"
}
  ];

  return (
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
  );
}

export default Projects;
