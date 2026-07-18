import React from 'react';
import aboutPic from '../assets/pictures/profile.jpeg';

function About() {
  return (
    <section className="py-5 bg-light" id="About">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-muted">Learn more about my background and experience.</p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <div className="position-relative hero-image-glow d-inline-block">
              <img
                src={aboutPic}
                alt="Profile"
                className="img-fluid rounded-4 shadow-lg"
                style={{ maxWidth: '360px', width: '100%', height: 'auto', border: '1px solid var(--border-dark)' }}
              />
            </div>
          </div>
          <div className="col-lg-7">
            <h3 className="fw-bold mb-3 text-gradient-cyan">Full Stack Web Developer</h3>
            <p className="text-muted lead mb-4">
              Passionate developer with experience in building responsive websites and web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js and MySQL.
            </p>
            <div className="row mt-4 g-3">
              <div className="col-md-6">
                <p className="mb-2">
                  <strong className="text-white">Name :</strong> Priyanshu Banoudha
                </p>
                <p className="mb-2">
                  <strong className="text-white">Email :</strong> priyanshubanoudha1@gmail.com
                </p>
                <p className="mb-2">
                  <strong className="text-white">Phone :</strong> +91 9250956025
                </p>
              </div>
              <div className="col-md-6">
                <p className="mb-2">
                  <strong className="text-white">Experience :</strong> Fresher
                </p>
                <p className="mb-2">
                  <strong className="text-white">Location :</strong> Uttar Pradesh
                </p>
                <p className="mb-2">
                  <strong className="text-white">Freelance :</strong> Available
                </p>
              </div>
            </div>
            <button className="btn btn-premium mt-4">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
