
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Pricing(){
  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Tarifs & Packs</h1>
          <p className="service-intro">
            Forfaits d'heures, abonnements mensuels/annuels et projets ponctuels. 
            Ajustables selon vos besoins avec 1h offerte pour tout nouveau client.
          </p>
        </div>

        <section className="pricing-section">
          <h2>Forfaits d'heures</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Assistance administrative</h3>
              <div className="price">5h</div>
              <p className="price-amount">120€</p>
              <p>Organisation, relances, modèles</p>
              <a href="/jlytexe-site/services/assistance-administrative" className="btn btn-primary">Voir les détails</a>
            </div>

            <div className="pricing-card">
              <h3>Pré‑comptabilité</h3>
              <div className="price">5h</div>
              <p className="price-amount">140€</p>
              <p>Saisie, préparation, tableaux de bord</p>
              <a href="/jlytexe-site/services/precomptabilite" className="btn btn-primary">Voir les détails</a>
            </div>

            <div className="pricing-card featured">
              <h3>Marketing stratégique</h3>
              <div className="price">5h</div>
              <p className="price-amount">200€</p>
              <p>Plans marketing, lancement, croissance</p>
              <a href="/jlytexe-site/services/marketing-strategique" className="btn btn-primary">Voir les détails</a>
            </div>

            <div className="pricing-card">
              <h3>Support & Formation</h3>
              <div className="price">5h</div>
              <p className="price-amount">150€</p>
              <p>Dépannage, cloud, formations</p>
              <a href="/jlytexe-site/services/support-informatique" className="btn btn-primary">Voir les détails</a>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Abonnements mensuels</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Admin Mensuel</h3>
              <div className="price">20h</div>
              <p className="price-amount">420€/mois</p>
              <p>Suivi continu et prioritaire</p>
              <a href="/services/assistance-administrative" className="btn btn-secondary">En savoir plus</a>
            </div>

            <div className="pricing-card">
              <h3>Pré‑compta Mensuel</h3>
              <div className="price">20h</div>
              <p className="price-amount">500€/mois</p>
              <p>Gestion comptable mensuelle</p>
              <a href="/services/precomptabilite" className="btn btn-secondary">En savoir plus</a>
            </div>

            <div className="pricing-card featured">
              <h3>Marketing Mensuel</h3>
              <div className="price">10h</div>
              <p className="price-amount">350€/mois</p>
              <p>Stratégie et pilotage continu</p>
              <a href="/services/marketing-strategique" className="btn btn-secondary">En savoir plus</a>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Projets ponctuels</h2>
          <div className="project-list">
            <div className="project-item">
              <h4>Plan marketing complet</h4>
              <p className="project-price">450–650€</p>
              <p>Analyse, stratégie, feuille de route complète</p>
            </div>
            <div className="project-item">
              <h4>Plan de communication</h4>
              <p className="project-price">350–550€</p>
              <p>Messages, canaux, calendrier éditorial</p>
            </div>
            <div className="project-item">
              <h4>Stratégie de lancement</h4>
              <p className="project-price">400–700€</p>
              <p>Go-to-market, premières campagnes</p>
            </div>
          </div>
        </section>

        <div className="hourly-rate">
          <strong>Taux horaires :</strong> Admin 30€/h · Pré‑compta 35€/h · Support/Formation 35€/h · Stratégie 45€/h
        </div>

        <section className="cta-section">
          <h2>Vous avez des questions ?</h2>
          <p>Contactez-moi pour un devis personnalisé</p>
          <a href="/jlytexe-site/contact" className="btn btn-primary">Commencer</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
