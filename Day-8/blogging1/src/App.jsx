import { useEffect, useState } from 'react'
import AuthCard from './components/AuthCard'
import CommunityCard from './components/CommunityCard'
import Footer from './components/Footer'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import PostList from './components/PostList'
import TopicsSection from './components/TopicsSection'
import WriterPanel from './components/WriterPanel'

const API_BASE = 'http://localhost:5000/api'

function App() {
  const [posts, setPosts] = useState([])
  const [authMode, setAuthMode] = useState('login')
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('blogUser')
    return saved ? JSON.parse(saved) : null
  })
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '' })
  const [postForm, setPostForm] = useState({ title: '', content: '', category: 'Lifestyle' })
  const [searchTerm, setSearchTerm] = useState('')
  const [message, setMessage] = useState({ type: '', text: '' })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(`${API_BASE}/posts`)
        if (response.ok) {
          const data = await response.json()
          setPosts(data)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  useEffect(() => {
    if (user) {
      localStorage.setItem('blogUser', JSON.stringify(user))
    } else {
      localStorage.removeItem('blogUser')
    }
  }, [user])

  const visiblePosts = posts.filter((post) => {
    const haystack = `${post.title} ${post.content} ${post.category}`.toLowerCase()
    return haystack.includes(searchTerm.toLowerCase())
  })

  const handleAuthSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    try {
      const endpoint = authMode === 'login' ? 'login' : 'signup'
      const response = await fetch(`${API_BASE}/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authForm),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Authentication failed')
      }

      setUser(data.user)
      setMessage({ type: 'success', text: authMode === 'login' ? 'Welcome back!' : 'Account created successfully!' })
      setAuthForm({ name: '', email: '', password: '' })
    } catch (error) {
      setMessage({ type: 'danger', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  const handlePostSubmit = async (event) => {
    event.preventDefault()
    if (!user) {
      setMessage({ type: 'danger', text: 'Please log in to publish a story.' })
      return
    }

    setLoading(true)

    try {
      const response = await fetch(`${API_BASE}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...postForm, author: user.name }),
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Unable to publish story')
      }

      setPosts((current) => [data.post, ...current])
      setPostForm({ title: '', content: '', category: 'Lifestyle' })
      setMessage({ type: 'success', text: 'Your story is live!' })
    } catch (error) {
      setMessage({ type: 'danger', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-vh-100 bg-light text-dark">
      <Header user={user} onLogout={() => setUser(null)} />

      <main className="container py-4">
        {message.text ? (
          <div className={`alert alert-${message.type} rounded-4`} role="alert">
            {message.text}
          </div>
        ) : null}

        <HeroSection user={user} />

        <section className="row g-4 mb-5">
          <div className="col-lg-8">
            <AuthCard
              user={user}
              authMode={authMode}
              setAuthMode={setAuthMode}
              authForm={authForm}
              setAuthForm={setAuthForm}
              onSubmit={handleAuthSubmit}
              loading={loading}
            />
          </div>
          <div className="col-lg-4">
            <img
              src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80"
              alt="Writers collaborating"
              className="img-fluid rounded-4 shadow-sm w-100 h-100"
              style={{ objectFit: 'cover', minHeight: '280px' }}
            />
          </div>
        </section>

        <TopicsSection />

        <section className="row g-4" id="stories">
          <PostList
            posts={visiblePosts}
            loading={loading}
            searchTerm={searchTerm}
            onSearchChange={(event) => setSearchTerm(event.target.value)}
          />

          <div className="col-lg-4">
            <WriterPanel
              user={user}
              postForm={postForm}
              setPostForm={setPostForm}
              onSubmit={handlePostSubmit}
              loading={loading}
            />
            <CommunityCard />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
