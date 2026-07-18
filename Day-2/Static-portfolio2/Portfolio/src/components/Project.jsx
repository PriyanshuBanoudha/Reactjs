
import githubFinderPic from '../assets/pictures/github_finder_pro.png';
import keeperNotesPic from '../assets/pictures/keeper_notes.png';
import ecommerceShopPic from '../assets/pictures/ecommerce_shop_pro.png';

const Project = () => {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3">
            <span className="text-gradient">My Projects</span>
          </h2>
          <p className="text-muted">Here are some of my recent projects featuring live demos and codebases.</p>
        </div>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100">
              <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                <img src={ecommerceShopPic} className="card-img-top w-100 h-100" style={{ objectFit: 'cover' }} alt="E-Commerce Shop" />
              </div>
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold mb-3 text-gradient-cyan">E-Commerce Shop</h4>
                <p className="card-text text-muted flex-grow-1">
                  A fully responsive online shopping cart application. Built with React, Context API, and modern layout layouts.
                </p>
                <div className="mt-3">
                  <span className="badge badge-custom bg-danger me-2">React</span>
                  <span className="badge badge-custom bg-dark text-info">Bootstrap</span>
                </div>
              </div>
              <div className="card-footer card-custom-footer pb-4 pt-0 px-4">
                <div className="d-flex gap-2">
                  <a
                    href="https://react-shopping-cart-demo.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-premium flex-fill text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/jeffersonRibeiro/react-shopping-cart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-premium-outline"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Project 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100">
              <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                <img src={githubFinderPic} className="card-img-top w-100 h-100" style={{ objectFit: 'cover' }} alt="GitHub Finder" />
              </div>
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold mb-3 text-gradient-cyan">GitHub Finder</h4>
                <p className="card-text text-muted flex-grow-1">
                  Search GitHub users, view their profiles, repositories, and statistics in real-time. Built with React, TailwindCSS, and GitHub REST API.
                </p>
                <div className="mt-3">
                  <span className="badge badge-custom bg-primary me-2">React</span>
                  <span className="badge badge-custom bg-dark text-cyan">REST API</span>
                </div>
              </div>
              <div className="card-footer card-custom-footer pb-4 pt-0 px-4">
                <div className="d-flex gap-2">
                  <a
                    href="https://github-finder-active.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-premium flex-fill text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/bradtraversy/github-finder"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-premium-outline"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card card-custom h-100">
              <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                <img src={keeperNotesPic} className="card-img-top w-100 h-100" style={{ objectFit: 'cover' }} alt="Keeper Notes App" />
              </div>
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold mb-3 text-gradient-cyan">Keeper Notes App</h4>
                <p className="card-text text-muted flex-grow-1">
                  A Google Keep clone to add, manage, and delete notes. Built with React, Material-UI, and storage auto-save.
                </p>
                <div className="mt-3">
                  <span className="badge badge-custom bg-success me-2">React</span>
                  <span className="badge badge-custom bg-dark text-warning">LocalStorage</span>
                </div>
              </div>
              <div className="card-footer card-custom-footer pb-4 pt-0 px-4">
                <div className="d-flex gap-2">
                  <a
                    href="https://keeper-notes-clone.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-premium flex-fill text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/angela-yu/keeper-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-premium-outline"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          
        </div>
      </div>
    </section>
  );
};

export default Project;
