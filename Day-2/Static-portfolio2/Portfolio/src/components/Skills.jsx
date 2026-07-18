import React from 'react';

function Skills() {
  return (
    <section className="py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">My Skills</span>
          </h2>
          <p className="text-muted">Technologies and tools that I specialize in working with.</p>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card card-custom p-4">
              <h4 className="mb-4 text-gradient-cyan">Frontend Skills</h4>
              <p className="mb-1 fw-medium text-white-50">HTML</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="mb-1 fw-medium text-white-50">CSS</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="mb-1 fw-medium text-white-50">JavaScript</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="mb-1 fw-medium text-white-50">React</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card card-custom p-4">
              <h4 className="mb-4 text-gradient-cyan">Backend & Stack Skills</h4>
              <p className="mb-1 fw-medium text-white-50">Node.js</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="mb-1 fw-medium text-white-50">Express.js</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '78%' }} aria-valuenow={78} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="mb-1 fw-medium text-white-50">MySQL</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '82%' }} aria-valuenow={82} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
              <p className="mb-1 fw-medium text-white-50">Git & GitHub</p>
              <div className="progress progress-custom">
                <div className="progress-bar progress-bar-custom" role="progressbar" style={{ width: '88%' }} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
