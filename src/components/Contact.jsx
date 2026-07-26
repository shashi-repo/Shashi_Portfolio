import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import "./../styles/Contact.css";


const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(

        "service_lmuhr5c",
        "template_n16d3j9",

        form.current,
        "Jrg9jJGv1X6EecNLc"

      )

      .then(
        () => {

          setStatus(
            "Message sent successfully! ✅"
          );

          form.current.reset();
        },

        () => {
          setStatus(
            "Failed to send message. Try again ❌"
          );
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <h2 className="section-title">
          Contact Me
        </h2>

        <div className="contact-container">

          {/* Contact Information */}
          <div className="contact-info">
            <h3>
              Let's Connect
            </h3>

            <p>
              I am open to internship opportunities,
              software engineering roles, and
              collaborative projects.
            </p>

            <div className="contact-item">
              <FaEnvelope className="contact-icon"/>

              <span>
                shashibhushan96082@gmail.com
              </span>
            </div>

            <div className="contact-item">
              <FaPhoneAlt className="contact-icon"/>

              <span>
                +91 9608291855
              </span>
            </div>

            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon"/>
              <span>
                Greater Noida, Uttar Pradesh
              </span>
            </div>

            <div className="social-links">
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
          </div>

          {/* EmailJS Contact Form */}
          <div className="contact-form">
            <form
              ref={form}
              onSubmit={sendEmail}
            >
              <input type="text" name="user_name" placeholder="Your Name" required/>
              <input type="text" name="your_email" placeholder="Your Email" required/>
              <textarea name="message" rows="6" placeholder="Your Message" required> </textarea>
              <button type="submit" className="send-btn"> Send Message </button> </form>

            {
              status && (
                <p className="form-status">
                  {status}
                </p>
              )
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;