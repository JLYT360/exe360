
import React from 'react'

export default function NavBar(){
  return (
    <header>
      <div className="nav-container">
        <a href="/jlytexe-site/" className="nav-logo">
          <img src="/jlytexe-site/assets/images/logo.png" alt="JLYT.exe" className="logo-image" />
          <span>JLYT.exe</span>
        </a>
        <nav className="nav-menu">
          <a href="/jlytexe-site/services" className="nav-link">Services</a>
          <a href="/jlytexe-site/tarifs" className="nav-link">Tarifs</a>
          <a href="/jlytexe-site/blog" className="nav-link">Blog</a>
          <a href="/jlytexe-site/contact" className="btn btn-nav">Diagnostic express</a>
        </nav>
      </div>
    </header>
  )
}
