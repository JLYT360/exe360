
import { Link, NavLink } from 'react-router-dom'
import { BASE_PATH, ASSETS_PATH } from '../config/paths'

export default function NavBar(){
  return (
    <header>
      <div className="nav-container">
        <Link to={BASE_PATH} className="nav-logo" aria-label="Accueil exe360">
          <img src={`${ASSETS_PATH}/images/logo.png`} alt="exe360" className="logo-image" />
          <span>exe360</span>
        </Link>
        <nav className="nav-menu" aria-label="Navigation principale">
          <NavLink to={`${BASE_PATH}`} className="nav-link">Accueil</NavLink>
          <NavLink to={`${BASE_PATH}contact`} className="btn btn-nav">Diagnostic express</NavLink>
        </nav>
      </div>
    </header>
  )
}
