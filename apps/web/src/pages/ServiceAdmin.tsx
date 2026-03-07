import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { BASE_PATH } from '../config/paths'

export default function ServiceAdmin() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Assistance Administrative</h1>
          <p className="service-intro">Organisation, gestion documentaire, relances, création de modèles personnalisées pour optimiser votre quotidien professionnel.</p>
        </div>

        <section className="service-content">
          <h2>Nos prestations</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>📁 Organisation documentaire</h3>
              <p>Classement, numérisation, archivage, mise en place de procédures administratives.</p>
            </div>
            <div className="service-item">
              <h3>📋 Création de modèles</h3>
              <p>Devis, factures, contrats, lettres types, procédures personnalisées.</p>
            </div>
            <div className="service-item">
              <h3>📧 Gestion des relances</h3>
              <p>Relances clients, suivi des échéances, gestion des rappels administratifs.</p>
            </div>
            <div className="service-item">
              <h3>📊 Suivi administratif</h3>
              <p>Gestion agenda, préparation réunions, comptes rendus, suivi dossiers.</p>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Forfaits d&apos;assistance</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>5 heures</h3>
              <div className="price">120 €</div>
              <p>Mise en place initiale</p>
              <a href={`${BASE_PATH}contact?pack=admin-5h`} className="btn btn-primary">Choisir ce forfait</a>
            </div>
            <div className="pricing-card">
              <h3>10 heures</h3>
              <div className="price">220 €</div>
              <p>Organisation complète</p>
              <a href={`${BASE_PATH}contact?pack=admin-10h`} className="btn btn-primary">Choisir ce forfait</a>
            </div>
            <div className="pricing-card featured">
              <h3>Mensuel (20h)</h3>
              <div className="price">420 €/mois</div>
              <p>Gestion administrative continue</p>
              <a href={`${BASE_PATH}contact?pack=admin-mensuel`} className="btn btn-primary">Choisir ce forfait</a>
            </div>
            <div className="pricing-card">
              <h3>Annuel (240h)</h3>
              <div className="price">4 500 €/an</div>
              <p>Partenaire administratif</p>
              <a href={`${BASE_PATH}contact?pack=admin-annuel`} className="btn btn-primary">Choisir ce forfait</a>
            </div>
          </div>
          <div className="hourly-rate">
            <strong>Taux horaire : 30 €/h</strong>
          </div>
        </section>

        <section className="cta-section">
          <h2>Simplifiez votre administration</h2>
          <p>Laissez-nous gérer vos tâches administratives pour vous concentrer sur votre cœur de métier.</p>
          <a href={`${BASE_PATH}contact?pack=admin-devis`} className="btn btn-primary">Demander un devis</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
