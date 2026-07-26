import React from "react";

const Header = () => {
  return (
    <header className="bg-dark text-white py-5 text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">Shashi Bhushan</h1>
        <h4 className="text-warning">
          Full Stack Developer | MCA Student
        </h4>

        <p className="lead mt-3">
          Passionate about building responsive web applications using
          React.js, Node.js, Express.js and MySQL.
        </p>

        <a href="#contact" className="btn btn-warning mt-3">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;