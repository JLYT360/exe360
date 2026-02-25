
import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Pricing(){
  useEffect(() => {
    document.title = 'Tarifs & Packs — JLYTEXE Martinique'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Forfaits 5/10h, abonnements mensuels/annuels, projets ponctuels. Tarifs clairs, sans engagement. Diagnostic 1h offert.')
    }
  }, [])

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
          <h2>Forfaits d'heures <span className="subtitle">— Pour tester sans engagement</span></h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Assistance administrative</h3>
              <div className="price">5h</div>
              <p className="price-amount">120€</p>
              <p>Organisation, relances, modèles</p>
              <small className="benefit">Testez l'organisation sans risque</small>
              <a href="/jlytexe-site/services/assistance-administrative" className="btn btn-primary">Découvrir ce qui est inclus</a>
            </div>

            <div className="pricing-card">
              <h3>Pré‑comptabilité</h3>
              <div className="price">5h</div>
              <p className="price-amount">140€</p>
              <p>Saisie, préparation, tableaux de bord</p>
              <small className="benefit">Dossier propre pour votre expert-comptable</small>
              <a href="/jlytexe-site/services/precomptabilite" className="btn btn-primary">Découvrir ce qui est inclus</a>
            </div>

            <div className="pricing-card featured">
              <h3>Marketing stratégique</h3>
              <div className="price">5h</div>
              <p className="price-amount">200€</p>
              <p>Plans marketing, lancement, croissance</p>
              <small className="benefit">Direction claire et actions mesurables</small>
              <a href="/jlytexe-site/services/marketing-strategique" className="btn btn-primary">Découvrir ce qui est inclus</a>
            </div>

            <div className="pricing-card">
              <h3>Support & Formation</h3>
              <div className="price">5h</div>
              <p className="price-amount">150€</p>
              <p>Dépannage, cloud, formations</p>
              <small className="benefit">Gagnez en autonomie numérique</small>
              <a href="/jlytexe-site/services/support-informatique" className="btn btn-primary">Découvrir ce qui est inclus</a>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Abonnements mensuels <span className="subtitle">— Pour externaliser simplement</span></h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Admin Mensuel</h3>
              <div className="price">20h</div>
              <p className="price-amount">420€/mois</p>
              <p>Suivi continu et prioritaire</p>
              <small className="benefit">Jusqu'à ½ journée gagnée / semaine</small>
              <a href="/jlytexe-site/contact?pack=admin-mensuel" className="btn btn-secondary">Commencer avec ce pack</a>
            </div>

            <div className="pricing-card">
              <h3>Pré‑compta Mensuel</h3>
              <div className="price">20h</div>
              <p className="price-amount">500€/mois</p>
              <p>Gestion comptable mensuelle</p>
              <small className="benefit">Dossier "prêt EC" chaque mois</small>
              <a href="/jlytexe-site/contact?pack=precompta-mensuel" className="btn btn-secondary">Commencer avec ce pack</a>
            </div>

            <div className="pricing-card featured">
              <h3>Marketing Mensuel</h3>
              <div className="price">10h</div>
              <p className="price-amount">350€/mois</p>
              <p>Stratégie et pilotage continu</p>
              <small className="benefit">Pilotage continu et décisions plus claires</small>
              <a href="/jlytexe-site/contact?pack=marketing-mensuel" className="btn btn-secondary">Commencer avec ce pack</a>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Projets ponctuels <span className="subtitle">— Pour un besoin ciblé</span></h2>
          <div className="project-list">
            <div className="project-item">
              <h4>Plan marketing complet</h4>
              <p className="project-price">450–650€</p>
              <p>Analyse, stratégie, feuille de route complète</p>
              <a href="/jlytexe-site/contact?pack=plan-marketing" className="btn btn-outline">Commencer ce projet</a>
            </div>
            <div className="project-item">
              <h4>Plan de communication</h4>
              <p className="project-price">350–550€</p>
              <p>Messages, canaux, calendrier éditorial</p>
              <a href="/jlytexe-site/contact?pack=plan-communication" className="btn btn-outline">Commencer ce projet</a>
            </div>
            <div className="project-item">
              <h4>Stratégie de lancement</h4>
              <p className="project-price">400–700€</p>
              <p>Go-to-market, premières campagnes</p>
              <a href="/jlytexe-site/contact?pack=strategie-lancement" className="btn btn-outline">Commencer ce projet</a>
            </div>
          </div>
        </section>

        <section className="pricing-section">
          <h2>Packs transversaux <span className="subtitle">— Solutions complètes pour chaque étape</span></h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>🚀 Pack Lancement</h3>
              <div className="price">Créateurs</div>
              <p className="price-amount">450€</p>
              <p>Admin 5h + Marketing 5h + 1 diagnostic gratuit</p>
              <small className="benefit">Lancement optimisé pour nouvelles entreprises</small>
              <a href="/jlytexe-site/contact?pack=lancement" className="btn btn-primary">Commencer avec ce pack</a>
            </div>

            <div className="pricing-card featured">
              <h3>📈 Pack Croissance</h3>
              <div className="price">TPE active</div>
              <p className="price-amount">770€/mois</p>
              <p>Admin mensuel + Marketing mensuel (20h au total)</p>
              <small className="benefit">Croissance continue avec suivi prioritaire</small>
              <a href="/jlytexe-site/contact?pack=croissance" className="btn btn-primary">Commencer avec ce pack</a>
            </div>

            <div className="pricing-card">
              <h3>🏢 Pack Accompagnement TPE</h3>
              <div className="price">Structure établie</div>
              <p className="price-amount">920€/mois</p>
              <p>Admin + Pré-compta + Marketing mensuel</p>
              <small className="benefit">Gestion complète externalisée</small>
              <a href="/jlytexe-site/contact?pack=accompagnement-tpe" className="btn btn-primary">Commencer avec ce pack</a>
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
