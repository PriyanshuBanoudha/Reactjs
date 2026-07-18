function AuthCard({ user, authMode, setAuthMode, authForm, setAuthForm, onSubmit, loading }) {
  return (
    <div className="card shadow-sm border-0 h-100 rounded-4" id="auth">
      <div className="card-body p-4">
        {user ? (
          <div>
            <h4 className="fw-semibold">Welcome back, {user.name}</h4>
            <p className="text-muted">Your next story is waiting. Publish, connect, and let your audience grow.</p>
            <div className="d-grid gap-2">
              <a className="btn btn-primary" href="#writer">Start writing</a>
            </div>
          </div>
        ) : (
          <form onSubmit={onSubmit}>
            <div className="d-flex gap-2 mb-3">
              <button type="button" className={`btn btn-sm ${authMode === 'login' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setAuthMode('login')}>Login</button>
              <button type="button" className={`btn btn-sm ${authMode === 'signup' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={() => setAuthMode('signup')}>Sign up</button>
            </div>
            {authMode === 'signup' ? (
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input className="form-control" placeholder="Alicia Reed" value={authForm.name} onChange={(event) => setAuthForm({ ...authForm, name: event.target.value })} />
              </div>
            ) : null}
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" placeholder="you@example.com" value={authForm.email} onChange={(event) => setAuthForm({ ...authForm, email: event.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" placeholder="At least 6 characters" value={authForm.password} onChange={(event) => setAuthForm({ ...authForm, password: event.target.value })} />
            </div>
            <button className="btn btn-primary w-100" type="submit" disabled={loading}>{loading ? 'Please wait...' : authMode === 'login' ? 'Login' : 'Create account'}</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthCard
