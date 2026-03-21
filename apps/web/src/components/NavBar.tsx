
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header>
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Accueil exe360">
          <img src="/assets/images/logo_exe360/2.png" alt="exe360" className="logo-image" />
          <span>exe360</span>
        </Link>
        <nav className="nav-menu" aria-label="Navigation principale">
          <NavLink to="/" className="nav-link">Accueil</NavLink>
          <NavLink to="/contact" className="btn btn-nav">Diagnostic express</NavLink>
        </nav>
      </div>
    </header>
  )
}
