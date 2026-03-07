
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { BASE_PATH } from '../config/paths'

export default function Services(){
  useEffect(() => {
    document.title = 'Services JLYTEXE — Organisation, Pré‑compta (préparation), Marketing — Martinique'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Assistance administrative, pré‑comptabilité (préparation), marketing stratégique, support & formation. Process simple en 5 étapes.')
    }
  }, [])

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
              <li>Plans marketing &amp; communication (analyse, positionnement, feuille de route)</li>
              <li>Lancement d&apos;activité / offre</li>
              <li>Stratégies de croissance (90 jours)</li>
            </ul>
            <div className="service-price">À partir de 45€/h</div>
            <a href={`${BASE_PATH}services/marketing-strategique`} className="btn btn-primary">Voir les forfaits</a>
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
            <a href={`${BASE_PATH}services/assistance-administrative`} className="btn btn-primary">Voir les forfaits</a>
          </div>

          <div className="service-card">
            <div className="service-icon">🧾</div>
            <h3>Pré‑comptabilité</h3>
            <p>Saisie &amp; préparation pour l&apos;expert-comptable, tableaux de bord.</p>
            <ul>
              <li>Saisie de pièces, préparation pour votre expert-comptable</li>
              <li>Suivi factures/dépenses, tableaux de bord</li>
            </ul>
            <div className="service-price">À partir de 35€/h</div>
            <a href={`${BASE_PATH}services/precomptabilite`} className="btn btn-primary">Voir les forfaits</a>
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
            <a href={`${BASE_PATH}services/support-informatique`} className="btn btn-primary">Voir les forfaits</a>
          </div>
        </section>

        <section className="cta-section">
          <h2>Prêt à optimiser votre organisation ?</h2>
          <p>Profitez de 1h offerte pour un diagnostic complet et personnalisé</p>
          <div className="cta-buttons">
            <a href={`${BASE_PATH}contact`} className="btn-primary">Diagnostic express</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
