import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { BASE_PATH } from '../config/paths'

export default function ServicePrecompta() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Pré-comptabilité</h1>
          <p className="service-intro">Saisie, préparation et suivi comptable pour présenter des dossiers parfaits à votre expert-comptable.</p>
          <div className="important-note">
            <p><strong>Important :</strong> Nous préparons vos comptes mais l'établissement des comptes annuels reste la compétence de votre expert-comptable.</p>
          </div>
        </div>

        <section className="service-content">
          <h2>Nos prestations</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>📝 Saisie des pièces</h3>
              <p>Saisie des factures d'achat et de vente, notes de frais, relevés bancaires.</p>
            </div>
            <div className="service-item">
              <h3>📊 Tableaux de bord</h3>
              <p>Suivi chiffre d'affaires, trésorerie, charges, délais de paiement.</p>
            </div>
            <div className="service-item">
              <h3>📋 Préparation déclarations</h3>
              <p>Préparation des documents pour TVA, déclarations sociales, impôts.</p>
            </div>
            <div className="service-item">
              <h3>🗂️ Organisation comptable</h3>
              <p>Classement, numérisation, mise en place des procédures comptables.</p>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Forfaits de pré-comptabilité</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>5 heures</h3>
              <div className="price">140 €</div>
              <p>Mise en place initiale</p>
            </div>
            <div className="pricing-card">
              <h3>10 heures</h3>
              <div className="price">260 €</div>
              <p>Organisation mensuelle</p>
            </div>
            <div className="pricing-card featured">
              <h3>Mensuel (20h)</h3>
              <div className="price">500 €/mois</div>
              <p>Gestion comptable complète</p>
            </div>
            <div className="pricing-card">
              <h3>Annuel (240h)</h3>
              <div className="price">5 400 €/an</div>
              <p>Partenaire comptable</p>
            </div>
          </div>
          <div className="hourly-rate">
            <strong>Taux horaire : 35 €/h</strong>
          </div>
        </section>

        <section className="cta-section">
          <h2>Une comptabilité sereine</h2>
          <p>Confiez-nous votre pré-comptabilité et présentez des dossiers parfaits à votre expert-comptable.</p>
          <a href={`${BASE_PATH}contact`} className="btn btn-primary">Demander un diagnostic comptable</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
