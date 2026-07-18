import React from 'react';
import heroPic from '../assets/pictures/profile.jpeg';

function Hero() {
  return (
    <section className="container py-5" id="Home">
      <div className="row align-items-center min-vh-75 py-4">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <p className="text-gradient-cyan fw-bold mb-2" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>HELLO, I'M</p>
          <h1 className="display-3 fw-bold mb-2">
            <span className="text-gradient">Priyanshu Banoudha</span>
          </h1>
          <h3 className="text-secondary fw-semibold mb-4">Full Stack Web Developer</h3>
          <p className="lead text-muted mb-5">
            I design and develop modern, responsive and user-friendly web applications using the latest web technologies.
          </p>
          <div className="d-flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-premium btn-lg">Hire Me</a>
            <a href="#About" className="btn btn-premium-outline btn-lg">Explore More</a>
          </div>
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          <div className="hero-image-glow d-inline-block">
            <img
              src={heroPic}
              className="img-fluid rounded-circle shadow-lg"
              alt="Profile"
              style={{ width: '100%', maxWidth: '340px', aspectRatio: '1/1', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.05)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
