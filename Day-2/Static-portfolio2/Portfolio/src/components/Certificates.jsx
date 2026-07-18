import React from 'react';

function Certificates() {
  return (
    <section className="py-5" id="certificates">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">My Certificates</span>
          </h2>
          <p className="text-muted">Professional certifications and verified technical credentials.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-body p-4 d-flex flex-column">
                <div className="mb-3">
                  <span className="badge badge-custom bg-primary">GeeksForGeeks</span>
                </div>
                <h5 className="card-title fw-bold text-white mb-2"> Front-End Developer</h5>
                <p className="text-muted text-secondary mb-4 flex-grow-1">Professional Certificate Program</p>
                <button className="btn btn-premium w-100 mt-auto">View Certificate</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-body p-4 d-flex flex-column">
                <div className="mb-3">
                  <span className="badge badge-custom bg-success">TCS</span>
                </div>
                <h5 className="card-title fw-bold text-white mb-2">Software Engineering Job Simulation</h5>
                <p className="text-muted text-secondary mb-4 flex-grow-1">Credential issued by Forage</p>
                <button className="btn btn-premium w-100 mt-auto">View Certificate</button>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-body p-4 d-flex flex-column">
                <div className="mb-3">
                  <span className="badge badge-custom bg-warning text-dark">ORACLE</span>
                </div>
                <h5 className="card-title fw-bold text-white mb-2">SQL (Advanced) Certification</h5>
                <p className="text-muted text-secondary mb-4 flex-grow-1">Verified SQL coding proficiency</p>
                <button className="btn btn-premium w-100 mt-auto">View Certificate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;