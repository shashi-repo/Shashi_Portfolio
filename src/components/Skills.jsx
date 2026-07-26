import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiExpress,
  SiMysql,
  SiPhp,
  SiPostman,
  SiC,
  SiCplusplus
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "./../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <div className="container">

        <h2 className="section-title">
          Technical Skills
        </h2>

        <div className="skills-grid">

          {/* Frontend */}

          <div className="skill-card">
            <FaHtml5 className="skill-icon html" />
            <h4>HTML5</h4>
          </div>

          <div className="skill-card">
            <FaCss3Alt className="skill-icon css" />
            <h4>CSS3</h4>
          </div>

          <div className="skill-card">
            <FaBootstrap className="skill-icon bootstrap" />
            <h4>Bootstrap</h4>
          </div>

          <div className="skill-card">
            <FaJsSquare className="skill-icon js" />
            <h4>JavaScript</h4>
          </div>

          <div className="skill-card">
            <FaReact className="skill-icon react" />
            <h4>React.js</h4>
          </div>

          {/* Backend */}

          <div className="skill-card">
            <FaNodeJs className="skill-icon node" />
            <h4>Node.js</h4>
          </div>

          <div className="skill-card">
            <SiExpress className="skill-icon express" />
            <h4>Express.js</h4>
          </div>

          <div className="skill-card">
            <SiPhp className="skill-icon php" />
            <h4>PHP</h4>
          </div>

          {/* Database */}

          <div className="skill-card">
            <SiMysql className="skill-icon mysql" />
            <h4>MySQL</h4>
          </div>

          {/* Programming Languages */}

          <div className="skill-card">
            <FaJava className="skill-icon java" />
            <h4>Java</h4>
          </div>

          <div className="skill-card">
            <SiC className="skill-icon c" />
            <h4>C</h4>
          </div>

          <div className="skill-card">
            <SiCplusplus className="skill-icon cpp" />
            <h4>C++</h4>
          </div>

          {/* Tools */}

          <div className="skill-card">
            <FaGitAlt className="skill-icon git" />
            <h4>Git</h4>
          </div>

          <div className="skill-card">
            <FaGithub className="skill-icon github" />
            <h4>GitHub</h4>
          </div>

          <div className="skill-card">
            <SiPostman className="skill-icon postman" />
            <h4>Postman</h4>
          </div>

          <div className="skill-card">
            <VscVscode className="skill-icon vscode" />
            <h4>VS Code</h4>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Skills;