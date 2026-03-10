
import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../config/paths'

export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p className="footer-main">
            © 2026 exe360 — Martinique.
            <br />
            contact : contact@exe360.fr
          </p>
          <p className="footer-services">
            Assistance administrative & pré‑comptabilité = préparation/saisie technique
            <br />
            (comptes annuels et déclarations réalisés par un expert‑comptable).
          </p>
          <div className="footer-legal">
            <p>
              Micro‑entreprise — SIRET : [TON_SIRET] — Martinique<br />
              contact : [TON_EMAIL]
            </p>
            <p className="disclaimer">
              Pré‑comptabilité = assistance (préparation/saisie technique).<br />
              Comptes annuels et déclarations fiscales réalisés par un expert‑comptable.
            </p>
            <div className="legal-links">
              <Link to={`${BASE_PATH}contact`}>Contact</Link>
              <span> • </span>
              <Link to={`${BASE_PATH}contact`}>Mentions légales</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
