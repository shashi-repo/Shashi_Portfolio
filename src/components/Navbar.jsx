import React from "react";
import "./../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-custom">
      <div className="container navbar-container">

        <div className="logo">
          Shashi Bhushan
        </div>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>

        <a href="/resume.pdf" className="resume-btn" target="_blank" rel="noreferrer">Resume </a>
      </div>
    </nav>
  );
};

export default Navbar;