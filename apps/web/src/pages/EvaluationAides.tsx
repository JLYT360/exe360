import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { BASE_PATH } from '../config/paths'
import { initEmailJS, sendStrategyEmail } from '../lib/emailjs'

export default function EvaluationAides() {
  const [formData, setFormData] = useState({
    statutAnciennete: '',
    formeJuridique: '',
    localisation: '',
    localisationAutre: '',
    secteurActivite: '',
    stadeDeveloppement: '',
    ressourcesInternes: '',
    budgetMobilisable: '',
    dejaBeneficieAide: '',
    quelleAide: '',
    situationAides: '',
    objectifPrioritaire: '',
    projetRealiser: '',
    natureProjet: [] as string[],
    natureProjetAutre: '',
    objectifAide: '',
    echeanceTemps: '',
    echeanceTempsDetail: '',
    comprehensionAides: 3,
    structurationProjet: 3,
    miseEnOeuvre: 3,
    souhaiteEtreRecontacte: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  })

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    document.title = 'Évaluation Aides — Diagnostic d\'éligibilité aux subventions Martinique'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Évaluez votre éligibilité aux aides et subventions en Martinique. Formulaire complet pour identifier les financements adaptés à votre projet.')
    }
    
    // Initialiser EmailJS
    initEmailJS()
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const clean = phone.replace(/\s|\./g, '')
    return clean.length >= 10 && /^[\d+]+$/.test(clean)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      if (name === 'natureProjet') {
        setFormData(prev => ({
          ...prev,
          natureProjet: checkbox.checked 
            ? [...prev.natureProjet, checkbox.value]
            : prev.natureProjet.filter(item => item !== checkbox.value)
        }))
      }
    } else if (name === 'comprehensionAides' || name === 'structurationProjet' || name === 'miseEnOeuvre') {
      setFormData(prev => ({
        ...prev,
        [name]: parseInt(value)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Validation
    if (!formData.nom || !formData.prenom || !formData.email) {
      setError('Veuillez remplir les champs obligatoires')
      setLoading(false)
      return
    }

    if (!validateEmail(formData.email)) {
      setError('Veuillez entrer une adresse email valide')
      setLoading(false)
      return
    }

    if (formData.telephone && !validatePhone(formData.telephone)) {
      setError('Veuillez entrer un numéro de téléphone valide')
      setLoading(false)
      return
    }

    try {
      await sendStrategyEmail(formData)
      
      setSent(true)
    } catch (err) {
      setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <>
        <NavBar />
        <main className="container">
          <div className="success-message">
            <h2>✅ Votre évaluation a bien été envoyée !</h2>
            <p>Nous analysons votre projet et vous recontacterons sous 48h pour discuter des aides adaptées.</p>
            <Link to={`${BASE_PATH}`} className="btn btn-primary">Retour à l'accueil</Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NavBar />
      <main className="container">
        <div className="page-header">
          <h1>Évaluation Aides & Financement</h1>
          <p className="page-intro">
            Évaluez votre éligibilité aux différentes aides et subventions disponibles en Martinique.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="strategy-form">
          {/* Section 1: Informations générales */}
          <section className="form-section">
            <h2>1. Informations générales</h2>
            
            <div className="form-group">
              <label>Statut et ancienneté *</label>
              <select name="statutAnciennete" value={formData.statutAnciennete} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="creation">Porteur de projet (création)</option>
                <option value="reprise">Reprise d\'entreprise</option>
                <option value="moins-2ans">Entreprise de moins de 2 ans</option>
                <option value="2-5ans">Entreprise de 2 à 5 ans</option>
                <option value="plus-5ans">Entreprise de plus de 5 ans</option>
              </select>
            </div>

            <div className="form-group">
              <label>Forme juridique *</label>
              <select name="formeJuridique" value={formData.formeJuridique} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="auto-entrepreneur">Auto-entrepreneur</option>
                <option value="ei">Entreprise individuelle</option>
                <option value="eurl">EURL</option>
                <option value="sasu">SASU</option>
                <option value="sarl">SARL</option>
                <option value="sa">SA</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div className="form-group">
              <label>Localisation du projet *</label>
              <select name="localisation" value={formData.localisation} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="fort-de-france">Fort-de-France</option>
                <option value="le-lamentin">Le Lamentin</option>
                <option value="schoelcher">Schoelcher</option>
                <option value="le-francois">Le François</option>
                <option value="le-robert">Le Robert</option>
                <option value="le-marigot">Le Marigot</option>
                <option value="saint-joseph">Saint-Joseph</option>
                <option value="sainte-marie">Sainte-Marie</option>
                <option value="les-trois-ilets">Les Trois-Îlets</option>
                <option value="ducos">Ducos</option>
                <option value="le-diamant">Le Diamant</option>
                <option value="le-morne-rouge">Le Morne-Rouge</option>
                <option value="basse-pointe">Basse-Pointe</option>
                <option value="le-prêcheur">Le Prêcheur</option>
                <option value="grand-riviere">Grand\'Rivière</option>
                <option value="macouba">Macouba</option>
                <option value="le-morne-vert">Le Morne-Vert</option>
                <option value="ajoupa-bouillon">Ajoupa-Bouillon</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            {formData.localisation === 'autre' && (
              <div className="form-group">
                <label>Précisez la localisation</label>
                <input
                  type="text"
                  name="localisationAutre"
                  value={formData.localisationAutre}
                  onChange={handleInputChange}
                  placeholder="Commune ou zone géographique"
                />
              </div>
            )}

            <div className="form-group">
              <label>Secteur d\'activité *</label>
              <select name="secteurActivite" value={formData.secteurActivite} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="commerce">Commerce</option>
                <option value="services">Services</option>
                <option value="artisanat">Artisanat</option>
                <option value="industrie">Industrie</option>
                <option value="agriculture">Agriculture</option>
                <option value="tourisme">Tourisme</option>
                <option value="numerique">Numérique/IT</option>
                <option value="sante">Santé</option>
                <option value="education">Éducation</option>
                <option value="environnement">Environnement</option>
                <option value="culture">Culture</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </section>

          {/* Section 2: Développement et ressources */}
          <section className="form-section">
            <h2>2. Stade de développement et ressources</h2>
            
            <div className="form-group">
              <label>Stade de développement *</label>
              <select name="stadeDeveloppement" value={formData.stadeDeveloppement} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="idee">Idée/concept</option>
                <option value="etude">En étude</option>
                <option value="lancement">En cours de lancement</option>
                <option value="jeune-entreprise">Jeune entreprise (moins de 2 ans)</option>
                <option value="croissance">En croissance</option>
                <option value="maturite">Maturité</option>
              </select>
            </div>

            <div className="form-group">
              <label>Ressources internes disponibles *</label>
              <select name="ressourcesInternes" value={formData.ressourcesInternes} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="aucune">Aucune ressource dédiée</option>
                <option value="temps-partiel">Temps partiel</option>
                <option value="temps-plein">Temps plein</option>
                <option value="equipe">Équipe dédiée</option>
              </select>
            </div>

            <div className="form-group">
              <label>Budget mobilisable *</label>
              <select name="budgetMobilisable" value={formData.budgetMobilisable} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="aucun">Aucun budget</option>
                <option value="moins-1000">Moins de 1000€</option>
                <option value="1000-5000">1000€ - 5000€</option>
                <option value="5000-10000">5000€ - 10000€</option>
                <option value="10000-50000">10000€ - 50000€</option>
                <option value="plus-50000">Plus de 50000€</option>
              </select>
            </div>
          </section>

          {/* Section 3: Aides déjà obtenues */}
          <section className="form-section">
            <h2>3. Aides déjà obtenues</h2>
            
            <div className="form-group">
              <label>Avez-vous déjà bénéficié d\'aides ? *</label>
              <select name="dejaBeneficieAide" value={formData.dejaBeneficieAide} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="non">Non</option>
                <option value="oui">Oui</option>
              </select>
            </div>

            {formData.dejaBeneficieAide === 'oui' && (
              <div className="form-group">
                <label>Quelles aides avez-vous obtenues ?</label>
                <textarea
                  name="quelleAide"
                  value={formData.quelleAide}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Listez les aides et subventions déjà obtenues..."
                />
              </div>
            )}

            <div className="form-group">
              <label>Situation actuelle concernant les aides *</label>
              <select name="situationAides" value={formData.situationAides} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="aucune-demande">Aucune demande en cours</option>
                <option value="demandes-encours">Demandes en cours</option>
                <option value="refus">Refus récent</option>
                <option value="complexite">Difficulté à naviguer les dispositifs</option>
              </select>
            </div>
          </section>

          {/* Section 4: Objectifs et projet */}
          <section className="form-section">
            <h2>4. Objectifs et projet</h2>
            
            <div className="form-group">
              <label>Objectif prioritaire *</label>
              <select name="objectifPrioritaire" value={formData.objectifPrioritaire} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="creation">Création d'entreprise</option>
                <option value="developpement">Développement d'activité</option>
                <option value="investissement">Investissement matériel</option>
                <option value="innovation">Innovation/R&D</option>
                <option value="international">Internationalisation</option>
                <option value="numerique">Transformation numérique</option>
                <option value="formation">Formation/Compétences</option>
                <option value="emploi">Création d'emplois</option>
              </select>
            </div>

            <div className="form-group">
              <label>Projet à réaliser *</label>
              <textarea
                name="projetRealiser"
                value={formData.projetRealiser}
                onChange={handleInputChange}
                rows={4}
                required
                placeholder="Décrivez votre projet en détail..."
              />
            </div>

            <div className="form-group">
              <label>Nature du projet *</label>
              <div className="checkbox-group">
                {['Investissement matériel', 'Développement commercial', 'Innovation', 'Formation', 'Digitalisation', 'International', 'Création d\'emplois', 'Autre'].map(option => (
                  <label key={option} className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value={option}
                      checked={formData.natureProjet.includes(option)}
                      onChange={handleInputChange}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {formData.natureProjet.includes('Autre') && (
              <div className="form-group">
                <label>Précisez la nature du projet</label>
                <input
                  type="text"
                  name="natureProjetAutre"
                  value={formData.natureProjetAutre}
                  onChange={handleInputChange}
                  placeholder="Autre nature de projet"
                />
              </div>
            )}
          </section>

          {/* Section 5: Aides souhaitées */}
          <section className="form-section">
            <h2>5. Aides souhaitées</h2>
            
            <div className="form-group">
              <label>Objectif principal de l\'aide *</label>
              <select name="objectifAide" value={formData.objectifAide} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="financement">Financement (prêt, subvention)</option>
                <option value="accompagnement">Accompagnement technique</option>
                <option value="formation">Formation</option>
                <option value="reseau">Mise en réseau</option>
                <option value="local">Aide locale/fiscale</option>
              </select>
            </div>

            <div className="form-group">
              <label>Échéance temporelle *</label>
              <select name="echeanceTemps" value={formData.echeanceTemps} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="urgent">Urgent (moins de 1 mois)</option>
                <option value="court-terme">Court terme (1-3 mois)</option>
                <option value="moyen-terme">Moyen terme (3-6 mois)</option>
                <option value="long-terme">Long terme (plus de 6 mois)</option>
              </select>
            </div>

            <div className="form-group">
              <label>Détail de l\'échéance</label>
              <textarea
                name="echeanceTempsDetail"
                value={formData.echeanceTempsDetail}
                onChange={handleInputChange}
                rows={2}
                placeholder="Précisez les contraintes temporelles..."
              />
            </div>
          </section>

          {/* Section 6: Auto-évaluation */}
          <section className="form-section">
            <h2>6. Auto-évaluation</h2>
            
            <div className="form-group">
              <label>Compréhension des dispositifs d\'aides (1-5) *</label>
              <select name="comprehensionAides" value={formData.comprehensionAides} onChange={handleInputChange} required>
                <option value="1">1 - Très faible</option>
                <option value="2">2 - Faible</option>
                <option value="3">3 - Moyenne</option>
                <option value="4">4 - Bonne</option>
                <option value="5">5 - Très bonne</option>
              </select>
            </div>

            <div className="form-group">
              <label>Niveau de structuration du projet (1-5) *</label>
              <select name="structurationProjet" value={formData.structurationProjet} onChange={handleInputChange} required>
                <option value="1">1 - Idée seulement</option>
                <option value="2">2 - Ébauche</option>
                <option value="3">3 - En cours</option>
                <option value="4">4 - Bien structuré</option>
                <option value="5">5 - Prêt à exécuter</option>
              </select>
            </div>

            <div className="form-group">
              <label>Capacité de mise en œuvre (1-5) *</label>
              <select name="miseEnOeuvre" value={formData.miseEnOeuvre} onChange={handleInputChange} required>
                <option value="1">1 - Très limitée</option>
                <option value="2">2 - Limitée</option>
                <option value="3">3 - Moyenne</option>
                <option value="4">4 - Bonne</option>
                <option value="5">5 - Excellente</option>
              </select>
            </div>
          </section>

          {/* Section 7: Contact */}
          <section className="form-section">
            <h2>7. Informations de contact</h2>
            
            <div className="form-group">
              <label>Souhaitez-vous être recontacté ? *</label>
              <select name="souhaiteEtreRecontacte" value={formData.souhaiteEtreRecontacte} onChange={handleInputChange} required>
                <option value="">Sélectionnez...</option>
                <option value="oui">Oui</option>
                <option value="non">Non</option>
              </select>
            </div>

            <div className="form-group">
              <label>Nom *</label>
              <input
                type="text"
                name="nom"
                value={formData.nom}
                onChange={handleInputChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label>Prénom *</label>
              <input
                type="text"
                name="prenom"
                value={formData.prenom}
                onChange={handleInputChange}
                required
                placeholder="Votre prénom"
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label>Téléphone</label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="0696 XX XX XX"
              />
            </div>
          </section>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Envoi en cours...' : 'Envoyer mon évaluation'}
            </button>
            <Link to={`${BASE_PATH}aides-financement`} className="btn btn-secondary">
              Retour aux aides
            </Link>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}
