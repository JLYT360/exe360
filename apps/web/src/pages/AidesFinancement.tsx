import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { BASE_PATH } from '../config/paths'

const organismes = [
  {
    nom: 'CTM — Collectivité Territoriale de Martinique',
    description: 'Aides à la création, développement et structuration des entreprises locales.',
    lien: 'https://www.collectivitedemartinique.mq',
    tag: 'Région'
  },
  {
    nom: 'CCI Martinique',
    description: 'Accompagnement des TPE/PME, formations, accès aux dispositifs de financement.',
    lien: 'https://www.martinique.cci.fr',
    tag: 'Chambre de commerce'
  },
  {
    nom: 'BPI France — Guadeloupe Martinique',
    description: 'Financement, garanties et accompagnement des projets innovants et de croissance.',
    lien: 'https://www.bpifrance.fr',
    tag: 'Financement national'
  },
  {
    nom: 'ADIE Martinique',
    description: 'Microcrédit professionnel pour les porteurs de projet sans accès au crédit bancaire classique.',
    lien: 'https://www.adie.org',
    tag: 'Microcrédit'
  },
  {
    nom: 'France Travail Martinique',
    description: 'Aides à l\'embauche, formations, dispositifs pour les demandeurs d\'emploi créateurs.',
    lien: 'https://www.francetravail.fr',
    tag: 'Emploi'
  },
  {
    nom: 'BGE Martinique',
    description: 'Accompagnement business angels, réseaux d\'investisseurs locaux et nationaux.',
    lien: 'https://www.bge.fr',
    tag: 'Réseaux investisseurs'
  },
  {
    nom: 'Initiative Martinique',
    description: 'Microcrédits et prêts d\'honneur pour les créateurs d\'entreprise.',
    lien: 'https://www.initiative-france.org',
    tag: 'Microcrédit'
  },
  {
    nom: 'Banque des Territoires',
    description: 'Investissements dans les territoires, financement des projets locaux.',
    lien: 'https://www.banquedesterritoires.fr',
    tag: 'Investissement public'
  }
]

export default function AidesFinancement() {
  useEffect(() => {
    document.title = 'Aides & Financement — Accompagnement subventions Martinique'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Accompagnement complet pour identifier et obtenir les aides et subventions en Martinique. CTM, CCI, BPI France, ADIE, etc.')
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="container">
        <section className="hero aides-hero">
          <h1>Aides & Financement</h1>
          <p className="subtitle">
            Des dizaines de dispositifs existent en Martinique — subventions, prêts d'honneur, microcrédits, fonds européens.
            La difficulté, c'est de savoir lesquels vous correspondent, comment monter le dossier, et à qui s'adresser.
          </p>
          <p className="micro-value">
            Je cartographie les aides adaptées à votre situation, je structure votre dossier, et je vous accompagne dans les démarches — pour que vous ne perdiez pas de temps à naviguer seul dans ces dispositifs.
          </p>
          <div className="disclaimer-box">
            <p>
              ⚠️ <strong>Important :</strong> L'accompagnement JLYTEXE consiste à identifier et structurer vos demandes.
              L'obtention des aides dépend des organismes concernés et ne peut être garantie.
            </p>
          </div>
          <div className="cta-group">
            <a href={`${BASE_PATH}contact`} className="btn-primary btn-hero">Diagnostic gratuit (1h)</a>
            <a href={`${BASE_PATH}evaluation-aides`} className="btn-secondary">Évaluer mon éligibilité</a>
          </div>
        </section>

        <section className="organismes-section">
          <h2>🏢 Principaux organismes d'aides en Martinique</h2>
          <div className="organismes-grid">
            {organismes.map((org, index) => (
              <div key={index} className="organisme-card">
                <div className="organisme-header">
                  <h3>{org.nom}</h3>
                  <span className="tag">{org.tag}</span>
                </div>
                <p>{org.description}</p>
                <a href={org.lien} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Visiter le site
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="info-section">
          <h2>⚡ Processus d'accompagnement</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Diagnostic initial</h3>
              <p>Analyse de votre projet et identification des aides potentielles.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Évaluation détaillée</h3>
              <p>Formulaire complet pour déterminer votre éligibilité précise.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Montage des dossiers</h3>
              <p>Préparation optimisée de vos candidatures.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Suivi et accompagnement</h3>
              <p>Accompagnement jusqu'à l'obtention des aides.</p>
            </div>
          </div>
        </section>

        <section className="strategy-content">
          <h2>🎯 Notre accompagnement personnalisé</h2>
          <div className="service-list">
            <div className="service-item">
              <h3>📋 Diagnostic d'éligibilité</h3>
              <p>Analyse complète de votre projet et identification des aides correspondantes.</p>
            </div>
            <div className="service-item">
              <h3>📝 Montage des dossiers</h3>
              <p>Préparation et soumission optimisée des dossiers de candidature.</p>
            </div>
            <div className="service-item">
              <h3>🤝 Suivi personnalisé</h3>
              <p>Accompagnement dans les relations avec les organismes et suivi de vos demandes.</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Prêt à obtenir des aides pour votre projet ?</h2>
          <p>Évaluez votre éligibilité aux différentes aides et subventions disponibles en Martinique.</p>
          <div className="cta-buttons">
            <a href={`${BASE_PATH}evaluation-aides`} className="btn btn-green">
              Évaluer mon éligibilité
            </a>
            <a href={`${BASE_PATH}contact`} className="btn btn-secondary">
              Contacter pour accompagnement
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
