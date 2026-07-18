import React from 'react';

function Services() {
  return (
    <section className="py-5 bg-light" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">My Services</span>
          </h2>
          <p className="text-muted">Services that I offer to help bring your ideas to life.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100 text-center p-4">
              <div className="mb-3">
                <i className="bi bi-code-slash display-3 text-primary"></i>
              </div>
              <h4 className="fw-bold mb-3">Web Development</h4>
              <p className="text-muted">
                Build responsive and modern websites using HTML, CSS, Bootstrap and React with optimized performance.
              </p>
              <button className="btn btn-premium-outline mt-auto align-self-center">Learn More</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100 text-center p-4">
              <div className="mb-3">
                <i className="bi bi-palette display-3 text-success"></i>
              </div>
              <h4 className="fw-bold mb-3">UI / UX Design</h4>
              <p className="text-muted">
                Design clean, interactive, and user-focused interfaces with professional prototyping configurations.
              </p>
              <button className="btn btn-premium-outline mt-auto align-self-center">Learn More</button>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 mx-auto">
            <div className="card card-custom h-100 text-center p-4">
              <div className="mb-3">
                <i className="bi bi-server display-3 text-danger"></i>
              </div>
              <h4 className="fw-bold mb-3">Backend Development</h4>
              <p className="text-muted">
                Create highly reliable and secure REST APIs using Node.js, Express.js and transactional databases.
              </p>
              <button className="btn btn-premium-outline mt-auto align-self-center">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
