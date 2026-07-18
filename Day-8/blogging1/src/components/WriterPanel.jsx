function WriterPanel({ user, postForm, setPostForm, onSubmit, loading }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 mb-4" id="writer">
      <div className="card-body p-4">
        <h4 className="fw-semibold">Publish your next idea</h4>
        <p className="text-muted">Share your perspective, connect with readers, and build a vibrant personal brand.</p>
        {user ? (
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input className="form-control" placeholder="A headline people remember" value={postForm.title} onChange={(event) => setPostForm({ ...postForm, title: event.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Story</label>
              <textarea className="form-control" rows="4" placeholder="Tell your audience what matters most" value={postForm.content} onChange={(event) => setPostForm({ ...postForm, content: event.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" value={postForm.category} onChange={(event) => setPostForm({ ...postForm, category: event.target.value })}>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Technology</option>
                <option>Wellness</option>
                <option>Creativity</option>
              </select>
            </div>
            <button className="btn btn-primary w-100" type="submit" disabled={loading}>{loading ? 'Publishing...' : 'Publish story'}</button>
          </form>
        ) : (
          <p className="text-muted mb-0">Sign in to start sharing your stories with readers.</p>
        )}
      </div>
    </div>
  )
}

export default WriterPanel
