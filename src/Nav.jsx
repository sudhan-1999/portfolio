import React, { useState } from "react";
import {  Github, Linkedin, Mail, Menu } from "lucide-react";
import Home from "./Home";

function Content() {
  const [isOpen, setIsopen] = useState(false);
  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <div className="container">
      <nav className="nabar">
        <div className="container-container">
          <div className="portfolio">Portoflio</div>

          {/*desktop-menu*/}
          <div className="desktop-menu">
            <a href="#home" className="menu-link">
              Home
            </a>
            <a href="#about" className="menu-link">
              About
            </a>
            <a href="#skills" className="menu-link">
              Skills
            </a>
            <a href="#services" className="menu-link">
              Services
            </a>
            <a href="#projects" className="menu-link">
              Project
            </a>
            <a href="#certificates" className="menu-link">
              Certificates
            </a>
            <a href="#contact" className="menu-link">
              Contact
            </a>
          </div>

          {/*mobile-menu-button*/}
          <div className="mobile-menu-button" onClick={toggle}>
            <Menu size={24} />
          </div>
          {/*Mobile-menu*/}
          {isOpen && (
            <div className="mobile-menu">
              <a href="#home" className="mobile-menu-link">
                Home
              </a>
              <a href="#about" className="mobile-menu-link">
                About
              </a>
              <a href="#skills" className="mobile-menu-link">
                Skills
              </a>
              <a href="#services" className="mobile-menu-link">
                Services
              </a>
              <a href="#projects" className="mobile-menu-link">
                Project
              </a>
              <a href="#certificates" className="mobile-menu-link">
                Certificates
              </a>
              <a href="#contact" className="mobile-menu-link">
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
      <div className="home" id="home">
        Hello , I'm jayasudhan A.<br/>
        <Home/>
        <Linkedin size={20}/>
        <Github size={20}/>
        <Mail size={20}/>
      </div>
      <div className="about" id="about"></div>
    </div>
  );
}

export default Content;
