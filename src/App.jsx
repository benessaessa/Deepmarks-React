import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProjectDetailsPage from './pages/ProjectDetailsPage'
import BlogsPage from './pages/BlogsPage'
import BlogDetailsPage from './pages/BlogDetailsPage'
import { useReveal } from './hooks/useReveal'
import './styles/style.scss'

function useScrollToTopOnRouteChange() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollToId) {
      return
    }

    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [location.pathname, location.state])
}

function useScrollToStateTarget() {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== '/' || !location.state?.scrollToId) {
      return
    }

    const scrollToId = location.state.scrollToId
    let attempts = 0
    const maxAttempts = 50
    const interval = setInterval(() => {
      attempts += 1
      const el = document.getElementById(scrollToId)
      if (el) {
        clearInterval(interval)
        const navbar = document.getElementById('navbar')
        const offset = navbar ? navbar.offsetHeight + 12 : 80
        const y = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top: y, behavior: 'smooth' })
      } else if (attempts >= maxAttempts) {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [location])
}

export default function App() {
  const location = useLocation()
  useReveal(location.pathname)

  useScrollToTopOnRouteChange()
  useScrollToStateTarget()

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs/:id" element={<BlogDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  )
}





