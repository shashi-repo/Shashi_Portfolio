import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import "./../styles/Projects.css";

const projects = [

  {
    title: "AI Career Coach",
    image: "/images/AI_CAREER_COACH.png",

    description:
      "AI-powered career guidance platform with Resume Analysis, JWT Authentication, Dashboard, Career Roadmap, and Interview Preparation.",

    technologies:
      "React • Node.js • Express • MySQL • JWT",

    github:
      "https://github.com/shashi-repo/ai-career-coach",

    demo:
      "#"
  },

  {
    title: "Nutrition Agent",

    image: "/images/Nutrition Agent.jpg",

    description:
      "AI Nutrition Assistant that recommends healthy meals, diet plans and nutrition insights using modern web technologies.",

    technologies:
      "React • Node.js • Express",

    github:
      "https://github.com/shashi-repo",

    demo:
      "#"
  },

  {
    title: "DietPlan Pro",

    image: "/images/healthy-food.png",

    description:
      "Diet Planning System featuring Razorpay Payment Gateway, Google OAuth Login and MySQL Database.",

    technologies:
      "PHP • MySQL • Bootstrap • Razorpay",

    github:
      "https://github.com/shashi-repo",

    demo:
      "https://dietplanapp.kesug.com/"
  }

];

const Projects = () => {

  return (

    <section
      id="projects"
      className="projects"
    >

      <div className="container">

        <h2 className="section-title">

          My Projects

        </h2>

        <div className="projects-grid">

          {projects.map((project, index) => (

            <div
              className="project-card"
              key={index}
            >

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-content">

                <h3>

                  {project.title}

                </h3>

                <p>

                  {project.description}

                </p>

                <h5>

                  {project.technologies}

                </h5>

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >

                    <FaGithub />

                    GitHub

                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-btn"
                  >

                    <FaExternalLinkAlt />

                    Live Demo

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default Projects;