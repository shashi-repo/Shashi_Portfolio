import React from "react";
import {
  FaGraduationCap,
  FaBriefcase
} from "react-icons/fa";

import "./../styles/Education.css";

const Education = () => {
  return (
    <section id="education" className="education">

  <div className="container">

    <h2 className="section-title">
      Education & Experience
    </h2>


    {/* Education Sub Section */}
    <div className="sub-section">

      <h3 className="sub-title">
        Education
      </h3>


      <div className="timeline">

        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>


          <div className="timeline-content">

            <h3>
              Master of Computer Applications (MCA)
            </h3>

            <span>
              2025 – Present
            </span>

            <p>
              GL Bajaj Institute of Technology and Management,
              Greater Noida
            </p>

          </div>

        </div>



        <div className="timeline-item">

          <div className="timeline-icon">
            <FaGraduationCap />
          </div>


          <div className="timeline-content">

            <h3>
              Bachelor of Computer Applications (BCA)
            </h3>

            <span>
              2022 - 2025
            </span>

            <p>
              Built a strong foundation in programming,
              databases and software engineering.
            </p>

          </div>

        </div>

      </div>

    </div>



    {/* Experience Sub Section */}

    <div className="sub-section">

      <h3 className="sub-title">
        Experience
      </h3>


      <div className="timeline">


        <div className="timeline-item">

          <div className="timeline-icon">
            <FaBriefcase />
          </div>


          <div className="timeline-content">

            <h3>
              Web Development Intern
            </h3>

            <span>
              Webroj Technologies
            </span>


            <p>
              Developed responsive web applications,
              optimized website performance,
              and collaborated on real-world projects.
            </p>

          </div>

        </div>


      </div>

    </div>


  </div>

</section>
  );
};

export default Education;