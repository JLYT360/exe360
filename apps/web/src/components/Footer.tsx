
import React from 'react'
export default function Footer(){
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p className="footer-main">
            © 2026 JLYT.exe — Martinique.
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
              <a href="/jlytexe-site/mentions-legales">Mentions légales</a>
              <span> • </span>
              <a href="/jlytexe-site/politique-confidentialite">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
