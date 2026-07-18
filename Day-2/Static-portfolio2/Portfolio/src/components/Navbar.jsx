import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#Home" className="nav-link active">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#experience" className="nav-link">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a href="#certificates" className="nav-link">
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
