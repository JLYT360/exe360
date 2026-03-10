import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../config/paths'

export default function ServiceSupport() {
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Support Informatique & Formation</h1>
          <p className="service-intro">Dépannage, installation, sécurité, et formations bureautiques pour optimiser vos outils numériques.</p>
        </div>

        <section className="service-content">
          <h2>Support informatique</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>💻 Dépannage & Installation</h3>
              <p>Installation logiciels, configuration matériel, résolution de problèmes techniques.</p>
            </div>
            <div className="service-item">
              <h3>☁️ Organisation Cloud</h3>
              <p>Mise en place Google Drive, Dropbox, OneDrive, synchronisation et sauvegarde.</p>
            </div>
            <div className="service-item">
              <h3>🔒 Sécurité de base</h3>
              <p>Antivirus, mots de passe, sauvegardes, bonnes pratiques de sécurité.</p>
            </div>
            <div className="service-item">
              <h3>📱 Optimisation</h3>
              <p>Nettoyage ordinateur, optimisation performances, conseils matériel.</p>
            </div>
          </div>

          <h2>Formations numériques & bureautiques</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>📊 Microsoft Excel</h3>
              <p>Tableaux, formules, graphiques, tableaux croisés dynamiques, automatisation.</p>
            </div>
            <div className="service-item">
              <h3>📝 Microsoft Word</h3>
              <p>Mise en page, modèles, publipostage, documents complexes.</p>
            </div>
            <div className="service-item">
              <h3>🌐 Google Workspace</h3>
              <p>Drive, Docs, Sheets, Gmail, Agenda, collaboration en ligne.</p>
            </div>
            <div className="service-item">
              <h3>📈 Organisation numérique</h3>
              <p>Gestion fichiers, emails, agenda, productivité, outils collaboratifs.</p>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Forfaits support &amp; formation</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>5 heures</h3>
              <div className="price">150 €</div>
              <p>Intervention ponctuelle</p>
              <Link to={`${BASE_PATH}contact?pack=support-5h`} className="btn btn-primary">Choisir ce forfait</Link>
            </div>
            <div className="pricing-card">
              <h3>10 heures</h3>
              <div className="price">280 €</div>
              <p>Formation complète</p>
              <Link to={`${BASE_PATH}contact?pack=support-10h`} className="btn btn-primary">Choisir ce forfait</Link>
            </div>
            <div className="pricing-card featured">
              <h3>Mensuel (10h)</h3>
              <div className="price">260 €/mois</div>
              <p>Maintenance & formation</p>
              <Link to={`${BASE_PATH}contact?pack=support-mensuel`} className="btn btn-primary">Choisir ce forfait</Link>
            </div>
            <div className="pricing-card">
              <h3>Annuel (120h)</h3>
              <div className="price">2 880 €/an</div>
              <p>Partenaire informatique</p>
              <Link to={`${BASE_PATH}contact?pack=support-annuel`} className="btn btn-primary">Choisir ce forfait</Link>
            </div>
          </div>
          <div className="hourly-rate">
            <strong>Taux horaire : 35 €/h</strong>
          </div>
        </section>

        <section className="cta-section">
          <h2>Maîtrisez vos outils numériques</h2>
          <p>Gagnez en efficacité avec un support technique et des formations adaptées à vos besoins.</p>
          <Link to={`${BASE_PATH}contact?pack=support-diagnostic`} className="btn btn-primary">Demander un diagnostic numérique</Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
