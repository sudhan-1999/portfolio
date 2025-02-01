import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";

function Home() {
    
  return (
    <div className="homediv" id="homediv">
    <p>Hello , I'm jayasudhan A.</p>
    <p className="typer" id="typer">
      I'm a{" "}
      <ReactTyped
        strings={[
          "Full Stack Developer",
          "Frontend Developer",
          "Backend Developer",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </p>
    <div className="icons" id="icons">
      <a href="https://github.com/" target="_blank">
        {" "}
        <FontAwesomeIcon icon={faGithub} style={{ color: "#000" }} />
      </a>
      <a
        href="https://www.linkedin.com/in/jayasudhan-a-9593b4217/ "
        target="_blank"
      >
        {" "}
        <FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} />
      </a>
      <a href="mailto:jayasudhanwebdev@gmail.com" target="_blank" mailto>
        {" "}
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#D44638" }} />
      </a>
    </div>
  </div>
  )
}

export default Home