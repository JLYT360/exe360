
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header>
      <div className="nav-container">
        <Link to="/" className="nav-logo" aria-label="Accueil exe360">
          <img src="/assets/images/logo.png" alt="exe360" className="logo-image" />
          <span>exe360</span>
        </Link>
        <nav className="nav-menu" aria-label="Navigation principale">
          <NavLink to={`${BASE_PATH}`} className="nav-link">Accueil</NavLink>
          <div className="nav-dropdown" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
            <NavLink to={`${BASE_PATH}services`} className="nav-link" onClick={(e) => e.preventDefault()}>
              Services ▼
            </NavLink>
            {isServicesOpen && (
              <div className="dropdown-menu">
                <Link to={`${BASE_PATH}services/marketing-strategique`} className="dropdown-link">Marketing stratégique</Link>
                <Link to={`${BASE_PATH}services/assistance-administrative`} className="dropdown-link">Assistance administrative</Link>
                <Link to={`${BASE_PATH}services/precomptabilite`} className="dropdown-link">Pré-comptabilité</Link>
                <Link to={`${BASE_PATH}services/support-informatique`} className="dropdown-link">Support & Formation</Link>
              </div>
            )}
          </div>
          <NavLink to={`${BASE_PATH}blog`} className="nav-link">Blog</NavLink>
          <NavLink to={`${BASE_PATH}a-propos`} className="nav-link">À propos</NavLink>
          <NavLink to={`${BASE_PATH}aides-financement`} className="nav-link">Aides & Financement</NavLink>
          <NavLink to={`${BASE_PATH}contact`} className="btn btn-nav">Diagnostic express</NavLink>
        </nav>
      </div>
    </header>
  )
}
