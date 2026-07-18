const topics = ['Creativity', 'Wellness', 'Travel', 'Technology']

function TopicsSection() {
  return (
    <section className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-semibold">Trending topics</h3>
        <span className="text-muted">Fresh for your next read</span>
      </div>
      <div className="row g-3">
        {topics.map((topic) => (
          <div className="col-sm-6 col-lg-3" key={topic}>
            <div className="card border-0 shadow-sm rounded-4 h-100">
              <div className="card-body">
                <h5 className="fw-semibold">{topic}</h5>
                <p className="text-muted small mb-0">Helpful stories, practical tips, and inspiring ideas.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TopicsSection
