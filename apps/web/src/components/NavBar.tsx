
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar(){
  return (
    <header>
      <div className="nav-container">
        <Link to="/jlytexe-site/" className="nav-logo" aria-label="Accueil JLYT.exe">
          <img src="/jlytexe-site/assets/images/logo.png" alt="JLYT.exe" className="logo-image" />
          <span>JLYT.exe</span>
        </Link>
        <nav className="nav-menu" aria-label="Navigation principale">
          <NavLink to="/jlytexe-site/services" className="nav-link">Services</NavLink>
          <NavLink to="/jlytexe-site/tarifs" className="nav-link">Tarifs</NavLink>
          <NavLink to="/jlytexe-site/blog" className="nav-link">Blog</NavLink>
          <NavLink to="/jlytexe-site/a-propos" className="nav-link">À propos</NavLink>
          <NavLink to="/jlytexe-site/strategy" className="nav-link">Subvention MQE</NavLink>
          <NavLink to="/jlytexe-site/contact" className="btn btn-nav">Diagnostic express</NavLink>
        </nav>
      </div>
    </header>
  )
}
