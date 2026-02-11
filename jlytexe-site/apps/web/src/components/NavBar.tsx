
import React from 'react'

export default function NavBar(){
  return (
    <header>
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src="/assets/images/logo.png" alt="JLYT.exe" className="logo-image" />
          <span>JLYT.exe</span>
        </a>
        <nav className="nav-menu">
          <a href="/services" className="nav-link">Services</a>
          <a href="/tarifs" className="nav-link">Tarifs</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/contact" className="btn btn-nav">Diagnostic express</a>
        </nav>
      </div>
    </header>
  )
}
