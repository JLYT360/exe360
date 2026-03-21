
import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../config/paths'

export default function Home(){
  useEffect(() => {
    document.body.classList.add('home-page')
    return () => {
      document.body.classList.remove('home-page')
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="container">
        <section className="hero">
          <h1>Structurer, piloter, développer.</h1>
          <p className="subtitle">
            Votre activité mérite une organisation claire et un soutien fiable.  
            Assistance administrative · Pré‑comptabilité (préparation) · Marketing stratégique · Support & Formation — exe360, Martinique.
          </p>
          <div className="cta-group">
            <Link to="/contact" className="btn-primary btn-hero">Recevoir un plan d&apos;action gratuit (1h)</Link>
          </div>
          <p className="micro-value">
            Je vous réponds habituellement sous 24–48h ouvrées pour planifier un premier échange.
          </p>
          <div className="micro-proofs">
            <div className="proof-item">✓ Confidentialité garantie</div>
            <div className="proof-item">✓ Pré‑comptabilité = préparation (cadre légal)</div>
            <div className="proof-item">✓ Tarifs transparents, sans engagement</div>
          </div>
        </section>
        <section className="grid">
          <Link to="/contact" className="card card-clickable">
            <h3>🎯 Marketing stratégique</h3>
            <p>Stratégie claire pour votre croissance.<br/>Avancez avec une direction précise et mesurable.</p>
            <div className="card-arrow">→</div>
          </Link>
          <Link to="/contact" className="card card-clickable">
            <h3>🗂️ Assistance administrative</h3>
            <p>Gagnez du temps, gardez l&apos;esprit libre.<br/>Vous restez sur votre métier, je m&apos;occupe du reste.</p>
            <div className="card-arrow">→</div>
          </Link>
          <Link to="/contact" className="card card-clickable">
            <h3>💻 Support & Formation</h3>
            <p>Votre numérique, maîtrisé et simplifié.<br/>Cloud, sécurité, Word/Excel/Drive.</p>
            <div className="card-arrow">→</div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
