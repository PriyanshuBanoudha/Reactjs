function PostList({ posts, loading, searchTerm, onSearchChange }) {
  return (
    <div className="col-lg-8">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="fw-semibold">Latest stories</h3>
        <span className="text-muted">{posts.length} published posts</span>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text bg-white">🔎</span>
        <input className="form-control" placeholder="Search stories or topics" value={searchTerm} onChange={onSearchChange} />
      </div>
      {loading ? (
        <p className="text-muted">Loading the latest stories...</p>
      ) : posts.length === 0 ? (
        <p className="text-muted">No stories match your search yet.</p>
      ) : (
        posts.map((post) => (
          <article className="card border-0 shadow-sm rounded-4 mb-3" key={post.id}>
            <div className="card-body p-4">
              <div className="d-flex justify-content-between flex-wrap gap-2">
                <span className="badge rounded-pill bg-primary-subtle text-primary">{post.category}</span>
                <small className="text-muted">{post.readTime}</small>
              </div>
              <h4 className="mt-3 fw-semibold">{post.title}</h4>
              <p className="text-muted mb-3">{post.content}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <strong>{post.author}</strong>
                  <div className="small text-muted">{new Date(post.createdAt).toLocaleDateString()}</div>
                </div>
                <span className="text-primary fw-semibold">Read story →</span>
              </div>
            </div>
          </article>
        ))
      )}
    </div>
  )
}

export default PostList
