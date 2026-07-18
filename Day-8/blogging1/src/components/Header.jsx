function Header({ user, onLogout }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container py-2">
        <a className="navbar-brand fw-bold text-primary" href="#">Lumina Blog</a>
        <div className="d-flex gap-2">
          <a className="btn btn-outline-primary btn-sm" href="#stories">Explore stories</a>
          {user ? (
            <button className="btn btn-primary btn-sm" onClick={onLogout}>Logout</button>
          ) : (
            <a className="btn btn-primary btn-sm" href="#auth">Join now</a>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header
