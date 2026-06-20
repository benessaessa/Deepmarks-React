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
  const { pathname } = useLocation()

  // Runs after navigation + after the new route commits.
  // requestAnimationFrame helps ensure the browser has updated layout.
  useEffect(() => {
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    })
  }, [pathname])
}


export default function App() {
  const location = useLocation()
  useReveal(location.pathname)

  useScrollToTopOnRouteChange()

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





