import React from "react";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import "./../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h3>Shashi Bhushan</h3>

        <p>
          Full Stack Developer | MCA Student
        </p>

        <div className="footer-icons">
          <a
            href="https://github.com/shashi-repo"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub/>
          </a>

          <a
            href="https://www.linkedin.com/in/shashibhushan-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin/>
          </a>
        </div>

        <p className="copyright">

          © 2026 Shashi Bhushan |
          Built with <FaHeart style={{color:"red"}} /> using React

        </p>
      </div>
    </footer>
  );
};

export default Footer;