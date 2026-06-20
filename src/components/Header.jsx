import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.gif'
import avatarImg from '../assets/portfolio.png'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return

  // account for sticky navbar height
  const navbar = document.getElementById('navbar')
  const offset = navbar ? navbar.offsetHeight + 12 : 80

  const y = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef(null)

  const user = {
    name: 'John Doe',
    title: 'Product Designer',
    avatar: avatarImg,
  }
  const isLoggedIn = false

  useEffect(() => {
    const navbar = document.getElementById('navbar')
    if (!navbar) return

    const onScroll = () => {
      const shouldScroll = window.scrollY > 0
      navbar.classList.toggle('scrolled', shouldScroll)
    }

    // set initial state (e.g. page refresh while scrolled)
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const toggleUserMenu = () => {
    setUserMenuOpen((open) => !open)
  }

  const handleLogout = () => {
    setUserMenuOpen(false)
    navigate('/')
  }

  const closeOffcanvas = () => {
    const offcanvasEl = document.getElementById('navMenuOffcanvas')
    if (!offcanvasEl) return

    const bootstrapOffcanvas = window.bootstrap?.Offcanvas
    const bsInstance = bootstrapOffcanvas?.getInstance(offcanvasEl) || (bootstrapOffcanvas ? new bootstrapOffcanvas(offcanvasEl) : null)
    if (bsInstance?.hide) {
      bsInstance.hide()
    }

    offcanvasEl.classList.remove('show')
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    document.body.classList.remove('modal-open', 'offcanvas-open')

    const backdrop = document.querySelector('.offcanvas-backdrop')
    if (backdrop) backdrop.remove()
  }

  const scrollLink = (id) => (e) => {
    e.preventDefault()
    closeOffcanvas()

    const goToHomeAndScroll = () => {
      navigate('/')

      // Wait until the target exists on the Home page, then scroll.
      // (Rendering + layout (accordion/images) can delay element availability.)
      let attempts = 0
      const maxAttempts = 30 // ~600ms total with 20ms interval

      const timer = setInterval(() => {
        attempts += 1
        const el = document.getElementById(id)
        if (el) {
          clearInterval(timer)
          scrollToId(id)
          return
        }
        if (attempts >= maxAttempts) {
          clearInterval(timer)
        }
      }, 20)
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: id } })
      return
    }

    scrollToId(id)
  }

  return (
    <nav id="navbar" className="navbar navbar-expand-lg navbar-sticky">
      <div className="container">
        <Link className="navbar-brand nav-logo d-flex align-items-center" to="/">
          <img src={logo} alt="" />
          <span className="text-white">deepmarks</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navMenuOffcanvas"
          aria-controls="navMenuOffcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={scrollLink('hero')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" onClick={scrollLink('portfolio')}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={scrollLink('pricing')}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq" onClick={scrollLink('faq')}>
                FAQ
              </a>
            </li>

          </ul>
          {isLoggedIn ? (
            <div ref={userMenuRef} className="user-menu-wrapper ms-lg-3">
              <button type="button" className="user-menu-button" onClick={toggleUserMenu}>
                <img src={user.avatar} alt={user.name} className="user-avatar" />
                <div className="user-meta">
                  <span className="user-name">{user.name}</span>
                  <span className="user-role">{user.title}</span>
                </div>
                <span className="user-chevron">▾</span>
              </button>
              {userMenuOpen ? (
                <div className="user-dropdown">
                  <Link to="/profile" className="user-dropdown-item" onClick={() => setUserMenuOpen(false)}>
                    Profile
                  </Link>
                  <Link to="/projects" className="user-dropdown-item" onClick={() => setUserMenuOpen(false)}>
                    Projects
                  </Link>
                  <button type="button" className="user-dropdown-item user-dropdown-logout" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <a href="https://deepmarks.vercel.app/name-branding" className="btn btn-secondary ms-lg-3 text-capitalize">
                Login
              </a>
              <a href="https://deepmarks.vercel.app/name-branding" className="btn btn-prim ms-lg-3 text-capitalize">
                Start now
              </a>
            </>
          )}
        </div>

        {/* Offcanvas (mobile) */}
        <div
          className="offcanvas offcanvas-start d-lg-none d-md-block"
          tabIndex="-1"
          id="navMenuOffcanvas"
          aria-labelledby="navMenuOffcanvasLabel"
        >
          <div className="offcanvas-header">
            <div className="d-flex align-items-center gap-2">
              <img
                src={logo}
                alt=""
                style={{ width: 56, height: 42, objectFit: 'cover' }}
              />
              <span id="navMenuOffcanvasLabel" className="text-white fw-semibold">
                deepmarks
              </span>
            </div>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={scrollLink('hero')}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio" onClick={scrollLink('portfolio')}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs" onClick={closeOffcanvas}>
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact" onClick={closeOffcanvas}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#pricing" onClick={scrollLink('pricing')}>
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq" onClick={scrollLink('faq')}>
                  FAQ
                </a>
              </li>

            </ul>
            <div className="mt-3">
              {isLoggedIn ? (
                <>
                  <Link to="/profile" className="btn btn-secondary w-100 text-capitalize mb-3" onClick={() => setUserMenuOpen(false)}>
                    Profile
                  </Link>
                  <Link to="/projects" className="btn btn-prim w-100 text-capitalize">
                    Projects
                  </Link>
                </>
              ) : (
                <>
                  <a
                    href="https://deepmarks.vercel.app/name-branding"
                    className="btn btn-secondary w-100 text-capitalize mb-3"
                  >
                    Login
                  </a>
                  <a href="https://deepmarks.vercel.app/name-branding" className="btn btn-prim w-100 text-capitalize">
                    Start now
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


