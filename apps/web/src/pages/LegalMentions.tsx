import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function LegalMentions() {
  useEffect(() => {
    document.title = 'Mentions Légales — exe360 Martinique'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Mentions légales exe360 : statut micro-entreprise, SIRET, hébergeur, RGPD, pré-comptabilité.')
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="container">
        <div className="legal-content">
          <h1>Mentions Légales</h1>
          
          <section className="legal-section">
            <h2>Éditeur du site</h2>
            <div className="legal-info">
              <p><strong>Dénomination sociale :</strong> exe360</p>
              <p><strong>Forme juridique :</strong> Micro-entreprise</p>
              <p><strong>SIRET :</strong> [À compléter]</p>
              <p><strong>Adresse :</strong> Martinique, 97200</p>
              <p><strong>Email :</strong> contact@exe360.fr</p>
              <p><strong>Téléphone :</strong> [À compléter]</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Directeur de la publication</h2>
            <div className="legal-info">
              <p><strong>Nom :</strong> Jérôme [À compléter]</p>
              <p><strong>Qualité :</strong> Gérant de la micro-entreprise exe360</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Hébergeur</h2>
            <div className="legal-info">
              <p><strong>Prestataire :</strong> [À compléter - ex: GitHub Pages, Vercel, Netlify]</p>
              <p><strong>Adresse :</strong> [À compléter]</p>
              <p><strong>Téléphone :</strong> [À compléter]</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Propriété intellectuelle</h2>
            <div className="legal-info">
              <p>L'ensemble de ce site, y compris les textes, images, graphismes, logos, et toute autre création, est la propriété exclusive de exe360.</p>
              <p>Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ce site, même partielle, est strictement interdite sans l'autorisation écrite préalable de exe360.</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Données personnelles (RGPD)</h2>
            <div className="legal-info">
              <p><strong>Responsable du traitement :</strong> exe360</p>
              <p><strong>Email pour les droits RGPD :</strong> contact@exe360.fr</p>
              
              <h3>Données collectées</h3>
              <p>Nous collectons les données suivantes via nos formulaires de contact :</p>
              <ul>
                <li>Nom, prénom</li>
                <li>Email</li>
                <li>Téléphone</li>
                <li>Nom de l'entreprise</li>
                <li>Message et informations relatives à votre projet</li>
              </ul>
              
              <h3>Finalités</h3>
              <p>Vos données sont collectées pour :</p>
              <ul>
                <li>Répondre à vos demandes de contact</li>
                <li>Établir des devis personnalisés</li>
                <li>Fournir nos services d'assistance administrative, pré-comptabilité, marketing et support</li>
              </ul>
              
              <h3>Base légale</h3>
              <p>Le traitement de vos données est fondé sur :</p>
              <ul>
                <li>Votre consentement explicite lors de la soumission des formulaires</li>
                <li>L'exécution de mesures précontractuelles à votre demande</li>
              </ul>
              
              <h3>Durée de conservation</h3>
              <p>Vos données sont conservées pendant une durée maximale de 3 ans après notre dernier contact, sauf obligation légale ou réglementaire contraire.</p>
              
              <h3>Vos droits RGPD</h3>
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <ul>
                <li><strong>Droit d'accès :</strong> Savoir si nous traitons vos données et, le cas échéant, accéder aux données</li>
                <li><strong>Droit de rectification :</strong> Demander la correction de données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
              </ul>
              <p>Pour exercer ces droits, contactez-nous à contact@exe360.fr.</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Services proposés</h2>
            <div className="legal-info">
              <p>exe360 propose les services suivants en tant que micro-entreprise :</p>
              <ul>
                <li><strong>Assistance administrative :</strong> Organisation, relances, démarches administratives</li>
                <li><strong>Pré-comptabilité :</strong> Saisie, préparation des dossiers pour expert-comptable</li>
                <li><strong>Marketing stratégique :</strong> Plans marketing, stratégies de communication</li>
                <li><strong>Support & Formation :</strong> Dépannage informatique, formations numériques</li>
              </ul>
              
              <div className="warning-box">
                <h3>⚠️ Important</h3>
                <p><strong>La pré-comptabilité n'est pas de l'expertise comptable.</strong></p>
                <p>Nous ne réalisons pas de tenue de comptabilité légale, n'établissons pas de bilans, et ne certifions pas des comptes.</p>
                <p>Nos services de pré-comptabilité consistent uniquement en la préparation des documents pour votre expert-comptable.</p>
                <p>Pour toute obligation légale de tenue de comptabilité, veuillez consulter un expert-comptable agréé.</p>
              </div>
            </div>
          </section>

          <section className="legal-section">
            <h2>Limitation de responsabilité</h2>
            <div className="legal-info">
              <p>exe360 s'efforce de fournir des informations précises et à jour sur ce site.</p>
              <p>Cependant, nous déclinons toute responsabilité pour :</p>
              <ul>
                <li>Les erreurs ou omissions dans les informations présentées</li>
                <li>Les dommages directs ou indirects résultant de l'utilisation de ce site</li>
                <li>Les indisponibilités temporaires du site</li>
                <li>Le contenu des sites tiers accessibles via des liens sur ce site</li>
              </ul>
            </div>
          </section>

          <section className="legal-section">
            <h2>Modification des mentions légales</h2>
            <div className="legal-info">
              <p>Nous nous réservons le droit de modifier ces mentions légales à tout moment.</p>
              <p>Les modifications prendront effet dès leur mise en ligne sur ce site.</p>
              <p>Date de dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
