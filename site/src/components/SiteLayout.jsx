import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/issues', label: 'Issues' },
  { to: '/impact', label: 'Impact' },
  { to: '/about', label: 'About' },
  { to: '/endorsers', label: 'Endorsers' },
]

function SiteLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header-inner">
          <NavLink aria-label="Rick DeGolia for Atherton Council home" className="site-brand" to="/">
            <img
              alt="Rick DeGolia for Atherton Council"
              className="site-title-image"
              src="https://rickdegolia.com/wp-content/uploads/2013/07/RickHeaderBanner1.jpg"
            />
          </NavLink>

          <button
            aria-controls="primary-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="site-menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span className="site-menu-toggle-label">Menu</span>
          </button>

          <nav
            aria-label="Primary"
            className={`site-nav ${isMenuOpen ? 'site-nav-open' : ''}`}
            id="primary-navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) =>
                  isActive ? 'site-nav-link site-nav-link-active' : 'site-nav-link'
                }
                end={item.to === '/'}
                onClick={() => setIsMenuOpen(false)}
                to={item.to}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>
    </div>
  )
}

export default SiteLayout
