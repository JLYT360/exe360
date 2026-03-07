
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

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
            Assistance administrative · Pré‑comptabilité (préparation) · Marketing stratégique · Support & Formation — en Martinique.
          </p>
          <div className="cta-group">
            <a href="/jlytexe-site/contact" className="btn-primary">Demander un diagnostic express</a>
            <a href="/jlytexe-site/tarifs" className="btn-secondary">Voir les offres</a>
          </div>
          <p className="micro-value">
            1h offerte — un diagnostic simple, concret et actionnable pour repartir avec un plan clair.
          </p>
        </section>
        <section className="grid">
          <a href="/jlytexe-site/services/marketing-strategique" className="card card-clickable">
            <h3>Marketing stratégique</h3>
            <p>Plans marketing & communication, lancement, croissance, pilotage.</p>
            <div className="card-arrow">→</div>
          </a>
          <a href="/jlytexe-site/services/assistance-administrative" className="card card-clickable">
            <h3>Assistance administrative</h3>
            <p>Organisation, relances, modèles, suivi efficace.</p>
            <div className="card-arrow">→</div>
          </a>
          <a href="/jlytexe-site/services/precomptabilite" className="card card-clickable">
            <h3>Pré-comptabilité</h3>
            <p>Saisie & préparation pour l'expert‑comptable, tableaux de bord.</p>
            <div className="card-arrow">→</div>
          </a>
          <a href="/jlytexe-site/services/support-informatique" className="card card-clickable">
            <h3>Support & Formation</h3>
            <p>Dépannage, cloud, sécurité basique, Word/Excel/Drive.</p>
            <div className="card-arrow">→</div>
          </a>
        </section>
      </main>
      <Footer />
    </>
  )
}
