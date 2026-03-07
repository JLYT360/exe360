import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function ServiceMarketing() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Marketing Stratégique</h1>
          <p className="service-intro">Plans marketing & communication, lancement d'activité, stratégies de croissance pour votre entreprise en Martinique.</p>
        </div>

        <section className="service-content">
          <h2>Nos prestations</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>📋 Plan marketing complet</h3>
              <p>Analyse de marché, positionnement, stratégie de communication, feuille de route 90 jours.</p>
              <div className="price">450–650 €</div>
            </div>
            <div className="service-item">
              <h3>📢 Plan de communication</h3>
              <p>Stratégie digitale, réseaux sociaux, email marketing, création de contenu.</p>
              <div className="price">350–550 €</div>
            </div>
            <div className="service-item">
              <h3>🚀 Stratégie de lancement</h3>
              <p>Lancement de produit/service, campagne de lancement, objectifs et KPIs.</p>
              <div className="price">400–700 €</div>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Forfaits d'accompagnement</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>5 heures</h3>
              <div className="price">200 €</div>
              <p>Diagnostic stratégique initial</p>
            </div>
            <div className="pricing-card">
              <h3>10 heures</h3>
              <div className="price">380 €</div>
              <p>Plan d'action complet</p>
            </div>
            <div className="pricing-card featured">
              <h3>Mensuel (10h)</h3>
              <div className="price">350 €/mois</div>
              <p>Accompagnement continu</p>
            </div>
            <div className="pricing-card">
              <h3>Annuel (120h)</h3>
              <div className="price">3 800 €/an</div>
              <p>Partenaire stratégique</p>
            </div>
          </div>
          <div className="hourly-rate">
            <strong>Taux horaire : 45 €/h</strong>
          </div>
        </section>

        <section className="cta-section">
          <h2>Prêt à développer votre activité ?</h2>
          <p>Contactez-nous pour un diagnostic stratégique gratuit de 30 minutes.</p>
          <a href="/jlytexe-site/contact" className="btn btn-primary">Demander un diagnostic</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
