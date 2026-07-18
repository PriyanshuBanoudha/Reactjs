function HeroSection({ user }) {
  return (
    <section className="row g-4 align-items-stretch mb-5">
      <div className="col-lg-8">
        <div className="p-4 p-lg-5 rounded-4 border border-2" style={{ background: 'linear-gradient(135deg, #fff8f0 0%, #eef6ff 100%)' }}>
          <span className="badge rounded-pill bg-primary-subtle text-primary">Fresh ideas every day</span>
          <h1 className="display-6 fw-bold mt-3 mb-3">A warm, modern space for thoughtful blogging and inspiring stories.</h1>
          <p className="lead text-muted mb-4">
            Discover uplifting posts, publish your own voice, and join a community that values creativity,
            clarity, and connection.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-primary" href="#stories">Explore stories</a>
            <a className="btn btn-outline-primary" href="#auth">{user ? 'Write your story' : 'Create an account'}</a>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <img
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
          alt="Creative workspace"
          className="img-fluid rounded-4 shadow-sm h-100 w-100"
          style={{ objectFit: 'cover', minHeight: '280px' }}
        />
      </div>
    </section>
  )
}

export default HeroSection
