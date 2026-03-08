import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { BASE_PATH, ASSETS_PATH } from '../config/paths'
import jeromePhoto from '../assets/images/Jerome.jpg'

export default function About() {
  useEffect(() => {
    document.title = 'À propos — Jérôme Loca Yang-Ting — exe360 Martinique'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Bonjour, je suis Jérôme. J\'accompagne les indépendants et petites entreprises en Martinique dans leur organisation quotidienne : administratif, préparation comptable, stratégie et numérique.')
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="container">
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-text">
              <h1>À propos</h1>
              <p className="about-intro">
                Bonjour, je suis Jérôme.<br/>
                J'accompagne les indépendants et petites entreprises en Martinique dans leur organisation quotidienne : administratif, préparation comptable, stratégie et numérique.
              </p>
              <p className="about-mission">
                Mon objectif : vous faire gagner du temps, de la clarté et de la tranquillité.
              </p>
            </div>
            <div className="about-image">
              <img 
                src={jeromePhoto} 
                alt="Jérôme Loca Yang-Ting" 
                className="jerome-photo"
              />
            </div>
          </div>
          <div className="cta-group">
            <a href={`${BASE_PATH}contact`} className="btn-primary">Discutons de votre projet</a>
          </div>
        </section>

        <section id="workflow" className="workflow-section">
          <h2>Comment je travaille</h2>
          <div className="workflow-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Diagnostic offert (1h)</h3>
                <p>Priorités et objectifs de votre activité.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Organisation & mise en place</h3>
                <p>Outils, modèles, méthodes adaptées.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Suivi administratif ou pré‑comptabilité</h3>
                <p>Collecte, classement, tableaux de bord.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Accompagnement</h3>
                <p>Marketing stratégique ou support numérique.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Bilan simple</h3>
                <p>Points mensuels, prochaines actions.</p>
              </div>
            </div>
          </div>
          <p className="workflow-note">
            Vous gardez la maîtrise — je m'occupe du concret.
          </p>
        </section>

        <section id="trust" className="trust-section">
          <h2>Confiance & garanties</h2>
          <div className="trust-grid">
            <div className="trust-item">✓ Confidentialité totale</div>
            <div className="trust-item">✓ Respect strict du cadre légal</div>
            <div className="trust-item">✓ Pré‑comptabilité = préparation / saisie technique (pas de tenue comptable)</div>
            <div className="trust-item">✓ Prestations sans engagement</div>
            <div className="trust-item">✓ Dossiers propres pour votre expert‑comptable</div>
          </div>
          <div className="trust-docs">
            <a href={`${ASSETS_PATH}/docs/memo-precompta.pdf`} className="doc-link">📄 Mémo pré‑compta</a>
            <a href={`${ASSETS_PATH}/docs/politique-ethique.pdf`} className="doc-link">📄 Politique éthique</a>
          </div>
        </section>

        <section className="values-section">
          <h2>Mes valeurs</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Clarté</h3>
              <p>Pas de jargon inutile, des explications simples et des objectifs précis.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⏰</div>
              <h3>Efficacité</h3>
              <p>Optimiser vos processus pour vous faire gagner un temps précieux.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Proximité</h3>
              <p>Disponible et réactif, je m'adapte à vos besoins spécifiques.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🔒</div>
              <h3>Confiance</h3>
              <p>Transparence totale et respect de vos données confidentielles.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
