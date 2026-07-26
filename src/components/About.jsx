import React from "react";
import { FaUserGraduate, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import "./../styles/About.css";

const About = () => {
  return (
    <section id="about" className="about">

      <div className="container">

        <h2 className="section-title">About Me</h2>

        <div className="about-container">

          <div className="about-left">

            <h3>Hello! I'm Shashi Bhushan</h3>

            <p>
              I am pursuing my Master of Computer Applications (MCA) at
              GL Bajaj Institute of Technology and Management, Greater Noida.
              I am passionate about Full Stack Web Development and enjoy
              building scalable and user-friendly web applications.
            </p>

            <p>
              I have experience working with React.js, Node.js,
              Express.js, MySQL, JavaScript, PHP and Bootstrap.
              I also enjoy exploring Artificial Intelligence and REST APIs.
            </p>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="about-btn"
            >
              View Resume
            </a>

          </div>

          <div className="about-right">

            <div className="about-card">

              <FaUserGraduate className="about-icon"/>

              <h4>Education</h4>

              <p>
                MCA<br/>
                GL Bajaj Institute of Technology and Management
              </p>

            </div>

            <div className="about-card">

              <FaLaptopCode className="about-icon"/>

              <h4>Skills</h4>

              <p>
                React • Node • Express • MySQL • JavaScript
              </p>

            </div>

            <div className="about-card">

              <FaBriefcase className="about-icon"/>

              <h4>Projects</h4>

              <p>
                AI Career Coach<br/>
                Nutrition Agent<br/>
                DietPlan Pro
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;