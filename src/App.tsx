import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'

function HomePage() {
  return (
    <section className="page">
      <p className="eyebrow">Welcome</p>
      <h1>Awesome Copilot Agent</h1>
      <p>Explore the site to learn more and get in touch.</p>
    </section>
  )
}

function AboutPage() {
  return (
    <section className="page">
      <p className="eyebrow">About</p>
      <h1>About us</h1>
      <p>Learn more about the people and ideas behind CopilotAgent.</p>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="page">
      <p className="eyebrow">Contact</p>
      <h1>Get in touch</h1>
      <p>We’d love to hear from you. Reach out and start a conversation.</p>
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="page">
      <p className="eyebrow">404</p>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist or may have moved.</p>
      <Link className="page-link" to="/">Return home</Link>
    </section>
  )
}

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <main className={`app ${isDark ? 'dark' : 'light'}`}>
      <header className="topbar">
        <Navbar />
        <button
          className="theme-toggle"
          type="button"
          aria-pressed={isDark}
          onClick={() => setIsDark(!isDark)}
        >
          Switch to {isDark ? 'light' : 'dark'} theme
        </button>
      </header>
      <div className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
