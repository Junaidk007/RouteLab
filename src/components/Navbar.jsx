import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronDown, faMoon, faSun, faXmark } from '@fortawesome/free-solid-svg-icons'
import './Navbar.css'

const navItems = ['Product', 'Why us', 'Resources', 'Pricing', 'Contact']

function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMenu = () => setMobileOpen(false)

  return (
    <header className="top-nav ">
      <div className="container">
        <div className="top-nav__inner">
          <a href="#home" className="top-nav__brand" onClick={closeMenu}>
            <span className="top-nav__mark" aria-hidden="true">
              <span className="top-nav__mark-block" />
              <span className="top-nav__mark-arc" />
            </span>
            <span className="top-nav__brand-name">RouteLab</span>
          </a>

          <div className="top-nav__actions">
            <button
              type="button"
              className="top-nav__theme-toggle"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
            </button>

            <button
              type="button"
              className="top-nav__mobile-toggle"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <FontAwesomeIcon icon={mobileOpen ? faXmark : faBars} />
            </button>
          </div>
          <nav className={`top-nav__links ${mobileOpen ? 'top-nav__links--open' : ''}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="top-nav__link" onClick={closeMenu}>
                <span>{item}</span>
                {item !== 'Pricing' && <FontAwesomeIcon icon={faChevronDown} className="top-nav__link-icon" />}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="mobile-tog"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          </button>

        </div>
      </div>
    </header>
  )
}

export default Navbar
