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
    nom: 'France Travail (ex Pôle Emploi)',
    description: 'ACRE (exonération de charges), ARCE (capital chômage) pour les créateurs d\'entreprise.',
    lien: 'https://www.francetravail.fr',
    tag: 'Création'
  },
  {
    nom: 'FEDER / FSE — Fonds Européens Martinique',
    description: 'Cofinancement européen pour des projets de développement économique et numérique.',
    lien: 'https://www.europe-martinique.com',
    tag: 'Europe'
  },
  {
    nom: 'Chambre des Métiers de Martinique',
    description: 'Accompagnement des artisans, stages de préparation à l\'installation, aides sectorielles.',
    lien: 'https://www.cm-martinique.fr',
    tag: 'Artisanat'
  },
  {
    nom: 'MARTINIQUE DÉVELOPPEMENT (anciennement ADIM)',
    description: 'Agence de développement économique — accompagnement des porteurs de projet en Martinique.',
    lien: 'https://www.martinique.fr',
    tag: 'Développement local'
  }
]

const etapes = [
  {
    num: '1',
    titre: 'Diagnostic de votre projet',
    desc: 'On analyse ensemble votre situation, vos objectifs et les dispositifs potentiellement mobilisables.'
  },
  {
    num: '2',
    titre: 'Identification des aides',
    desc: 'Je vous oriente vers les organismes et subventions adaptés à votre profil et votre secteur.'
  },
  {
    num: '3',
    titre: 'Structuration du dossier',
    desc: 'Je vous aide à préparer les éléments nécessaires : plan d\'action, devis, livrables clairs.'
  },
  {
    num: '4',
    titre: 'Mise en œuvre des actions',
    desc: 'Marketing, communication, digital — on exécute le projet avec les financements obtenus.'
  }
]

export default function AidesFinancement() {
  useEffect(() => {
    document.title = 'Aides & Financement — Financez votre projet en Martinique — JLYTEXE'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Accompagnement pour identifier et mobiliser les aides publiques disponibles en Martinique : CTM, CCI, BPI France, ADIE, fonds européens.')
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="container">

        {/* Hero */}
        <section className="service-header">
          <h1>Aides &amp; Financement</h1>
          <p className="service-intro">
            Des dispositifs existent pour financer votre projet en Martinique.
            Je vous aide à les identifier, structurer votre dossier et passer à l'action.
          </p>
          <div className="warning-box" style={{ maxWidth: 640, margin: '24px auto 0', textAlign: 'left' }}>
            <p>
              ⚠️ <strong>Important :</strong> l'obtention d'une aide dépend des critères des organismes financeurs.
              Mon rôle est un <strong>accompagnement à la structuration</strong>, pas une garantie de financement.
            </p>
          </div>
        </section>

        {/* Comment je peux vous aider */}
        <section className="service-content">
          <h2>Comment je vous accompagne</h2>
          <div className="workflow-steps" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {etapes.map(e => (
              <div key={e.num} className="step">
                <div className="step-number">{e.num}</div>
                <div className="step-content">
                  <h3>{e.titre}</h3>
                  <p>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="workflow-note">
            ✅ L'accompagnement reste utile même si aucune aide n'est accordée — vous avez un plan d'action concret.
          </p>
        </section>

        {/* Organismes */}
        <section className="service-content">
          <h2>Organismes et dispositifs disponibles en Martinique</h2>
          <div className="service-list">
            {organismes.map(org => (
              <div key={org.nom} className="service-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
                <div style={{ flex: 1, minWidth: 220 }}>
                  <h3 style={{ marginBottom: 6, fontSize: '1.05rem' }}>
                    <a href={org.lien} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--brand-blue)', textDecoration: 'none' }}>
                      {org.nom} ↗
                    </a>
                  </h3>
                  <p style={{ margin: 0 }}>{org.description}</p>
                </div>
                <span style={{
                  background: 'rgba(31,111,235,0.1)',
                  color: 'var(--brand-blue)',
                  padding: '4px 12px',
                  borderRadius: 20,
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  alignSelf: 'flex-start'
                }}>
                  {org.tag}
                </span>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 16, fontSize: '0.9rem', color: 'var(--muted)', fontStyle: 'italic' }}>
            * Cette liste est non exhaustive et peut évoluer. Je vous aide à identifier les dispositifs les plus adaptés à votre situation.
          </p>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <h2>Votre projet peut être financé</h2>
          <p>Prenons 30 minutes pour faire le point sur votre situation et identifier les pistes concrètes.</p>
          <div className="cta-buttons">
            <a href={`${BASE_PATH}contact`} className="btn-primary">Prendre contact (gratuit)</a>
            <a
              href={`${BASE_PATH}evaluation-aides`}
              className="btn-secondary"
              style={{ padding: '12px 24px', fontSize: '1rem' }}
            >
              📋 Évaluer mon éligibilité (formulaire détaillé)
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
