import React, { useEffect } from "react";
import html from "./image/html.png";
import css from "./image/css-3.png";
import bootstrap from "./image/bootstrap.png";
import js from "./image/js.png";
import react from "./image/physics.png";
import nodejs from "./image/nodejs.png";
import mongodb from "./image/mongodb.png";
import mysql from "./image/sql.png";
import express from "./image/icons8-express-js-50.png";

function Skills() {

useEffect(() => {
  const skills = document.querySelectorAll(".skill-item");

  const handleScroll = () => {
    skills.forEach((skill) => {
      const rect = skill.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        skill.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  let icons = [
    { id: 1, icon: html, name: "Html" },
    { id: 2, icon: css, name: "Css" },
    { id: 3, icon: bootstrap, name: "Bootstrap" },
    { id: 4, icon: js, name: "Javascript" },
    { id: 5, icon: react, name: "React js" },
    { id: 6, icon: nodejs, name: "Node js" },
    { id: 7, icon: mongodb, name: "MongoDB" },
    { id: 8, icon: mysql, name: "Mysql" },
    { id: 9, icon: express, name: "Express" },
  ];
  
  return (
    <div id="skills">
    <div className="container skills-container" >
      <div className="forskills" >
      <p className="skills">Skills</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4" >
        {icons.map((icon) => (
          <div className="col skill-item" id="col" key={icon.id}>
            <div>
              <img className="card-img-top" src={icon.icon} alt={icon.name} />
            </div>
            <div className="card-body">
              <h4 className="card-title">{icon.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Skills;
