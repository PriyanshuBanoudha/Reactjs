import React from 'react';

function Experience() {
  return (
    <section className="py-5 bg-light" id="experience">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-muted">My professional journey and key career milestones.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card card-custom timeline-card h-100">
              <div className="timeline-dot"></div>
              <div className="card-body">
                <span className="badge badge-custom bg-primary mb-3">2026 - Present</span>
                <h4 className="fw-bold text-white mb-2">Full Stack Developer</h4>
                <h6 className="text-gradient-cyan mb-3">independent developer projects</h6>
                <p className="text-muted mb-0">
                  Developed responsive web applications using React, Node.js and MySQL. Worked on REST APIs, state managers, and dashboard designs.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card card-custom timeline-card h-100">
              <div className="timeline-dot"></div>
              <div className="card-body">
                <span className="badge badge-custom bg-success mb-3">2022 - 2024</span>
                <h4 className="fw-bold text-white mb-2"> Frontend  Development Journey</h4>
                <h6 className="text-gradient-cyan mb-3">Foundational Stack</h6>
                <p className="text-muted mb-0">
                  Designed modern user interfaces using HTML, CSS, Bootstrap, Tailwind CSS and React for commercial applications.
                </p>
              </div>
            </div>
          </div>

           <div className="col-md-6"> 
            <div className="card card-custom timeline-card h-100">
              <div className="timeline-dot"></div>
              <div className="card-body">
                <span className="badge badge-custom bg-warning text-dark mb-3">2025 - 2026</span>
                <h4 className="fw-bold text-white mb-2">Backend Development Journey</h4>
                <h6 className="text-gradient-cyan mb-3">Enterprise Systems</h6>
                <p className="text-muted mb-0">
                  Created responsive websites and landing pages using Bootstrap, TailwindCSS, React, Node, Express, MongoDB, MySQL, Zustand, Docker, and Kubernetes.
                </p>
              </div>
            </div>
          </div> 

          <div className="col-md-6">
            <div className="card card-custom timeline-card h-100">
              <div className="timeline-dot"></div>
              <div className="card-body">
                <span className="badge badge-custom bg-danger mb-3">2026</span>
                <h4 className="fw-bold text-white mb-2">Currently interning</h4>
                <h6 className="text-gradient-cyan mb-3">SRDT (College Internship)</h6>
                <p className="text-muted mb-0">
                  Learned frontend development, debugging and website maintenance while working on live production codebases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
