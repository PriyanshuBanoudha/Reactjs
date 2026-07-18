import React from 'react';

function Footer() {
  return (
    <footer className="pt-5 pb-4" style={{ backgroundColor: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)' }}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 mb-4">
            <h3 className="fw-bold mb-3"><span className="text-gradient">Portfolio</span></h3>
            <p className="text-white-50">
              A modern portfolio website built using React, Bootstrap 5 and premium custom dark theme styling.
            </p>
          </div>
          <div className="col-lg-4 mb-4">
            <h4 className="fw-semibold text-white mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#Home" className="text-white-50 text-decoration-none nav-link-hover">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#About" className="text-white-50 text-decoration-none nav-link-hover">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#projects" className="text-white-50 text-decoration-none nav-link-hover">
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50 text-decoration-none nav-link-hover">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h4 className="fw-semibold text-white mb-3">Follow Me</h4>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-premium-outline rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="btn btn-premium-outline rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="btn btn-premium-outline rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-premium-outline rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'var(--border-dark)', margin: '2rem 0' }} />
        <div className="text-center">
          <p className="mb-0 text-white-50">© 2026 Priyanshu Banoudha. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
