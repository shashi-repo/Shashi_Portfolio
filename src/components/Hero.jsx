import React from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "./../styles/Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">

          <h3>Hello, I'm</h3>
          <h1>Shashi Bhushan</h1>
          <h2>Full Stack Developer & MCA Student</h2>

          <p>
            Passionate about building responsive web applications using
            React.js, Node.js, Express.js, MySQL, and Artificial Intelligence.
            I enjoy solving real-world problems through clean and efficient code.
          </p>

          <div className="hero-buttons">

            <a href="/resume.pdf" download className="btn-primary" >
              <FaDownload /> Download Resume
            </a>

            <a href="https://github.com/shashi-repo" target="_blank" rel="noreferrer" className="btn-dark">
              <FaGithub /> GitHub
            </a>

            <a href="https://www.linkedin.com/in/shashibhushan-dev/" target="_blank" rel="noreferrer"
              className="btn-linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src="/images/Shashi.jpg" alt="Shashi Bhushan"/>

        </div>
      </div>
    </section>
  );
};

export default Hero;