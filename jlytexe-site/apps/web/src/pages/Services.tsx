
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Services(){
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Services</h1>
          <p className="service-intro">
            Des solutions sur mesure pour structurer, piloter et développer votre activité en Martinique.
            Chaque service inclut une première heure offerte pour diagnostic personnalisé.
          </p>
        </div>

        <section className="services-grid">
          <div className="service-card">
            <div className="service-icon">📈</div>
            <h3>Marketing stratégique</h3>
            <p>Plans marketing & communication, lancement, croissance, pilotage.</p>
            <ul>
              <li>Plans marketing & communication (analyse, positionnement, feuille de route)</li>
              <li>Lancement d'activité / offre</li>
              <li>Stratégies de croissance (90 jours)</li>
            </ul>
            <div className="service-price">À partir de 45€/h</div>
            <a href="/jlytexe-site/services/marketing-strategique" className="btn btn-primary">Voir les forfaits</a>
          </div>

          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Assistance administrative</h3>
            <p>Organisation, relances, modèles, suivi efficace.</p>
            <ul>
              <li>Organisation documentaire, numérisation, relances</li>
              <li>Modèles (devis, factures, procédures)</li>
            </ul>
            <div className="service-price">À partir de 30€/h</div>
            <a href="/jlytexe-site/services/assistance-administrative" className="btn btn-primary">Voir les forfaits</a>
          </div>

          <div className="service-card">
            <div className="service-icon">🧾</div>
            <h3>Pré‑comptabilité</h3>
            <p>Saisie & préparation pour l'expert‑comptable, tableaux de bord.</p>
            <ul>
              <li>Saisie de pièces, préparation pour votre expert‑comptable</li>
              <li>Suivi factures/dépenses, tableaux de bord</li>
            </ul>
            <div className="service-price">À partir de 35€/h</div>
            <a href="/jlytexe-site/services/precomptabilite" className="btn btn-primary">Voir les forfaits</a>
          </div>

          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Support & Formation</h3>
            <p>Dépannage, cloud, sécurité basique, Word/Excel/Drive.</p>
            <ul>
              <li>Dépannage/installation, organisation cloud</li>
              <li>Formations Word, Excel, Drive</li>
            </ul>
            <div className="service-price">À partir de 35€/h</div>
            <a href="/jlytexe-site/services/support-informatique" className="btn btn-primary">Voir les forfaits</a>
          </div>
        </section>

        <section className="cta-section">
          <h2>Prêt à optimiser votre organisation ?</h2>
          <p>Profitez de 1h offerte pour un diagnostic complet et personnalisé</p>
          <div style={{display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '24px'}}>
            <a href="/jlytexe-site/contact" className="btn-primary">Diagnostic express</a>
            <a href="/jlytexe-site/tarifs" className="btn-secondary">Voir tous les tarifs</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
