import React from "react";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaDownload
} from "react-icons/fa";

import "./../styles/Certificates.css";

// Import PDF files
import IBMCertificate from "../assets/certificates/IBMDesign2026.pdf";
import FullStackCertificate from "../assets/certificates/Certificate.pdf";

const certificates = [
  {
    title: "IBM SkillsBuild Training",
    organization: "IBM SkillsBuild & Edunet Foundation",
    year: "2026",
    pdf: IBMCertificate
  },

  {
    title: "Full Stack Web Development",
    organization: "Internship Certificate",
    year: "2025",
    pdf: FullStackCertificate
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="certificates">
      <div className="container">

        <h2 className="section-title">
          Certificates
        </h2>

        <div className="certificate-grid">

          {certificates.map((certificate, index) => (

            <div className="certificate-card" key={index} >
              <div className="certificate-icon-box">
                <FaCertificate className="certificate-icon" />
              </div>

              <h3 className="certificate-title">
                {certificate.title}
              </h3>

              <p className="certificate-organization">
                {certificate.organization}
              </p>

              <span className="certificate-year">
                {certificate.year}
              </span>

              <div className="certificate-buttons">

                <a href={certificate.pdf} target="_blank" rel="noopener noreferrer"  className="certificate-btn">
                  <FaExternalLinkAlt />
                  <span>View</span>
                </a>

                <a href={certificate.pdf} download className="certificate-btn download-btn">
                  <FaDownload />
                  <span>Download</span>
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Certificates;