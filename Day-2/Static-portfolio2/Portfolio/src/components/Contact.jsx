import React from 'react';

function Contact() {
  return (
    <section className="py-5 bg-light" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">Contact Me</span>
          </h2>
          <p className="text-muted">Have a question or want to work together? Feel free to drop a message.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4">
            <div className="card card-custom h-100">
              <div className="card-body p-4">
                <h4 className="fw-bold text-gradient-cyan mb-4">Get In Touch</h4>
                <p className="d-flex align-items-center mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i>Lucknow, Uttar Pradesh
                </p>
                <p className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill text-primary me-3 fs-5"></i>priyanshubanoudha1@gmail.com
                </p>
                <p className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill text-primary me-3 fs-5"></i>+91 9250596025
                </p>
                <p className="d-flex align-items-center mb-0">
                  <i className="bi bi-globe2 text-primary me-3 fs-5"></i>www.portfolio.com
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card card-custom">
              <div className="card-body p-4">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-white-50">Full Name</label>
                      <input type="text" className="form-control form-control-custom" placeholder="Enter your name" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label text-white-50">Email</label>
                      <input type="email" className="form-control form-control-custom" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white-50">Subject</label>
                    <input type="text" className="form-control form-control-custom" placeholder="Enter subject" />
                  </div>
                  <div className="mb-4">
                    <label className="form-label text-white-50">Message</label>
                    <textarea rows={5} className="form-control form-control-custom" placeholder="Write your message..."></textarea>
                  </div>
                  <button className="btn btn-premium w-100 py-3" type="submit">
                    <i className="bi bi-send-fill me-2"></i>Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
