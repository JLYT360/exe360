
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header>
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Accueil exe360">
          <div className="logo-container">
            <img src="/assets/images/logo_2.png" alt="exe360" className="logo-image" />
            <div className="logo-text">
              <span className="logo-exe">exe</span>
              <span className="logo-three">3</span>
              <span className="logo-six">6</span>
              <span className="logo-zero">0</span>
            </div>
          </div>
        </Link>
        <nav className="nav-menu" aria-label="Navigation principale">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/contact" className="btn btn-nav">Diagnostic express</NavLink>
        </nav>
      </div>
    </header>
  )
}
