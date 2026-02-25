import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { initEmailJS, sendStrategyEmail } from '../lib/emailjs'

export default function Strategy() {
  const [formData, setFormData] = useState({
    // Section 1: Profil de l'entreprise
    statutAnciennete: '',
    formeJuridique: '',
    localisation: '',
    localisationAutre: '',
    secteurActivite: '',
    
    // Section 2: Situation actuelle
    stadeDeveloppement: '',
    ressourcesInternes: '',
    budgetMobilisable: '',
    
    // Section 3: Connaissance des aides
    dejaBeneficieAide: '',
    quelleAide: '',
    situationAides: '',
    
    // Section 4: Objectif principal
    objectifPrioritaire: '',
    projetRealiser: '',
    
    // Section 5: Nature du projet
    natureProjet: [] as string[],
    natureProjetAutre: '',
    
    // Section 6: Objectif aide publique
    objectifAide: '',
    echeanceTemps: '',
    echeanceTempsDetail: '',
    
    // Section 7: Auto-évaluation
    comprehensionAides: 3,
    structurationProjet: 3,
    miseEnOeuvre: 3,
    
    // Section 8: Contact
    souhaiteEtreRecontacte: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: ''
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Développez votre activité en Martinique avec l\'appui des aides publiques'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Accompagnement pour entreprises TPE et créateurs en Martinique. Évaluez votre éligibilité aux aides publiques pour financer vos projets marketing.')
    }
    
    // Initialiser EmailJS au chargement du composant
    initEmailJS()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement
      if (name === 'natureProjet') {
        setFormData(prev => ({
          ...prev,
          natureProjet: checkbox.checked 
            ? [...prev.natureProjet, value]
            : prev.natureProjet.filter(item => item !== value)
        }))
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation des champs requis
    const requiredFields = ['statutAnciennete', 'formeJuridique', 'localisation', 'secteurActivite', 'stadeDeveloppement', 'ressourcesInternes', 'budgetMobilisable', 'dejaBeneficieAide', 'situationAides', 'objectifPrioritaire', 'projetRealiser', 'objectifAide', 'comprehensionAides', 'structurationProjet', 'miseEnOeuvre']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    
    if (missingFields.length > 0) {
      setError('Veuillez remplir tous les champs requis')
      return
    }
    
    // Si tout est valide, envoyer l'email
    setLoading(true)
    setError(null)
    
    try {
      const result = await sendStrategyEmail(formData)
      
      if (result.success) {
        setSent(true)
        // Réinitialiser le formulaire
        setFormData({
          // Section 1: Profil de l'entreprise
          statutAnciennete: '',
          formeJuridique: '',
          localisation: '',
          localisationAutre: '',
          secteurActivite: '',
          
          // Section 2: Situation actuelle
          stadeDeveloppement: '',
          ressourcesInternes: '',
          budgetMobilisable: '',
          
          // Section 3: Connaissance des aides
          dejaBeneficieAide: '',
          quelleAide: '',
          situationAides: '',
          
          // Section 4: Objectif principal
          objectifPrioritaire: '',
          projetRealiser: '',
          
          // Section 5: Nature du projet
          natureProjet: [] as string[],
          natureProjetAutre: '',
          
          // Section 6: Objectif aide publique
          objectifAide: '',
          echeanceTemps: '',
          echeanceTempsDetail: '',
          
          // Section 7: Auto-évaluation
          comprehensionAides: 3,
          structurationProjet: 3,
          miseEnOeuvre: 3,
          
          // Section 8: Contact
          souhaiteEtreRecontacte: '',
          nom: '',
          prenom: '',
          email: '',
          telephone: ''
        })
      } else {
        setError('Erreur lors de l\'envoi. Veuillez réessayer plus tard.')
      }
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setError('Erreur technique. Veuillez réessayer plus tard.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <NavBar />
      <main className="container">
        <section className="strategy-content">
          <h1>Développez votre activité en Martinique avec l'appui des aides publiques</h1>
          <h2 className="subtitle">avec l'appui des aides publiques</h2>
          
          <div className="highlight-box">
            <p>👉 Mon rôle : <strong>vous aider à transformer une opportunité de financement en actions concrètes</strong>, sans mobiliser inutilement votre trésorerie.</p>
          </div>

          <h2>À qui s'adresse cet accompagnement ?</h2>
          
          <p>Cette offre s'adresse principalement :</p>
          
          <ul className="target-list">
            <li>aux <strong>créateurs d'entreprise</strong></li>
            <li>aux <strong>TPE et indépendants</strong></li>
            <li>aux structures accompagnées par la <strong>CCI, la CTM ou des dispositifs d'aide</strong></li>
            <li>aux entrepreneurs ayant <strong>un projet clair mais des moyens limités</strong></li>
            <li>aux porteurs de projet qui savent qu'il existe des aides, mais <strong>ne savent pas lesquelles ni comment les utiliser</strong></li>
          </ul>
          
          <p>Si vous vous reconnaissez dans ces situations, cet accompagnement peut vous être utile.</p>

          <h2>Comment fonctionne l'accompagnement ?</h2>
          
          <p>L'approche se déroule en <strong>deux étapes distinctes</strong>, afin de sécuriser le projet et d'éviter toute ambiguïté.</p>

          <div className="step-section">
            <h3>Étape 1 — Diagnostic & structuration du projet</h3>
            
            <p>Cette première étape permet de <strong>poser des bases solides</strong>, indépendamment de l'obtention d'une aide.</p>
            
            <h4>Concrètement, je vous accompagne sur :</h4>
            <ul className="action-list">
              <li>l'analyse de votre situation et de vos objectifs</li>
              <li>la clarification de vos besoins marketing réels</li>
              <li>l'identification des dispositifs d'aide potentiellement mobilisables</li>
              <li>la structuration d'un plan d'actions cohérent</li>
              <li>l'accompagnement à la préparation des éléments nécessaires au dossier</li>
            </ul>
            
            <div className="check-box">
              <p>✅ Cette étape est <strong>facturée</strong> et reste <strong>utile même si aucune aide n'est accordée</strong>.</p>
            </div>
          </div>

          <div className="step-section">
            <h3>Étape 2 — Mise en œuvre des actions marketing</h3>
            
            <p>Lorsque le projet est structuré, les actions peuvent être mises en œuvre.</p>
            
            <p>Selon votre situation et les dispositifs mobilisés, <strong>certaines prestations peuvent être partiellement financées</strong>.</p>
            
            <h4>Exemples d'actions possibles :</h4>
            <ul className="action-list">
              <li>plan marketing ou plan de communication</li>
              <li>structuration de la présence digitale</li>
              <li>création ou amélioration d'outils de communication</li>
              <li>accompagnement stratégique</li>
              <li>formation aux outils numériques</li>
            </ul>
            
            <div className="highlight-box">
              <p>👉 Le périmètre est défini <strong>clairement en amont</strong>, avec des devis et des livrables précis.</p>
            </div>
          </div>

          <h2>Exemples de prestations concernées</h2>
          
          <p>Les dispositifs d'aide peuvent, selon les cas, couvrir tout ou partie de prestations telles que :</p>
          
          <ul className="service-list">
            <li>élaboration d'une stratégie marketing</li>
            <li>actions de communication</li>
            <li>accompagnement à la structuration commerciale</li>
            <li>digitalisation de l'activité</li>
            <li>formation et montée en compétences</li>
          </ul>
          
          <p>Chaque projet est <strong>étudié individuellement</strong>.</p>

          <h2>Transparence et cadre</h2>
          
          <div className="warning-box">
            <p>⚠️ Les aides publiques sont soumises à des critères spécifiques et à l'appréciation des organismes financeurs.</p>
            
            <ul className="warning-list">
              <li>L'accompagnement <strong>ne garantit pas l'obtention d'un financement</strong></li>
              <li>Les décisions finales appartiennent aux organismes concernés</li>
              <li>Mon rôle est un <strong>accompagnement à la structuration et à la mise en œuvre</strong>, pas une promesse de subvention</li>
            </ul>
            
            <p>Cette transparence est essentielle pour travailler dans un cadre sain et professionnel.</p>
          </div>

          <h2>Premier échange</h2>
          
          <p>Si vous souhaitez savoir si votre projet <strong>peut entrer dans ce type de démarche</strong>, je vous propose un premier échange sans engagement.</p>
          
          <div className="cta-box">
            <p>👉 <strong>Je vous réponds sous 24 h ouvrées pour planifier une rencontre.</strong></p>
          </div>

          <div className="contact-section">
            <h3>Me contacter</h3>
            <a href="${BASE_PATH}contact" className="btn-primary">Prendre rendez-vous</a>
          </div>

          {/* Formulaire détaillé d'évaluation */}
          <div className="form-example-section">
            <h2>Évaluer votre projet et votre éligibilité potentielle aux aides publiques</h2>
            <p className="form-intro">
              Ce formulaire a pour objectif de vous aider à <strong>faire le point sur votre situation</strong>,<br/>
              à <strong>clarifier votre projet</strong>, et à <strong>identifier les dispositifs d'aide potentiellement adaptés</strong>.
            </p>
            
            <div className="disclaimer-box">
              <p>👉 Il ne s'agit ni d'une demande de subvention, ni d'une promesse de financement,<br/>
              mais d'un <strong>outil de qualification et d'orientation</strong>.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="strategy-form">
              {/* Section 1: Profil de l'entreprise */}
              <fieldset className="form-section">
                <legend>1. Profil de l'entreprise</legend>
                
                <div className="form-subsection">
                  <h4>1.1 Statut et ancienneté</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="statutAnciennete" value="porteur_projet" onChange={handleChange} />
                      Porteur de projet (entreprise non encore créée)
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="statutAnciennete" value="moins_1_an" onChange={handleChange} />
                      Entreprise créée depuis moins de 1 an
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="statutAnciennete" value="1_3_ans" onChange={handleChange} />
                      Entreprise créée depuis 1 à 3 ans
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="statutAnciennete" value="plus_3_ans" onChange={handleChange} />
                      Entreprise créée depuis plus de 3 ans
                    </label>
                  </div>
                </div>

                <div className="form-subsection">
                  <h4>1.2 Forme juridique</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="formeJuridique" value="micro_entreprise" onChange={handleChange} />
                      Micro‑entreprise
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="formeJuridique" value="ei_eurl" onChange={handleChange} />
                      Entreprise individuelle / EURL
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="formeJuridique" value="sarl_sas" onChange={handleChange} />
                      SARL / SAS / autre société
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="formeJuridique" value="association" onChange={handleChange} />
                      Association
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="formeJuridique" value="autre" onChange={handleChange} />
                      Autre / je ne sais pas encore
                    </label>
                  </div>
                </div>

                <div className="form-subsection">
                  <h4>1.3 Localisation</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="localisation" value="martinique" onChange={handleChange} />
                      Martinique
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="localisation" value="autre" onChange={handleChange} />
                      Autre
                    </label>
                  </div>
                  {formData.localisation === 'autre' && (
                    <div className="form-row">
                      <input
                        type="text"
                        name="localisationAutre"
                        placeholder="Précisez votre localisation"
                        value={formData.localisationAutre}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>

                <div className="form-subsection">
                  <h4>1.4 Secteur d'activité principal</h4>
                  <div className="form-row">
                    <input
                      type="text"
                      name="secteurActivite"
                      placeholder="exemples : commerce, service, artisanat, numérique, tourisme, autre"
                      value={formData.secteurActivite}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>

              {/* Section 2: Situation actuelle */}
              <fieldset className="form-section">
                <legend>2. Situation actuelle du projet</legend>
                
                <div className="form-subsection">
                  <h4>2.1 Stade de développement</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="stadeDeveloppement" value="idee_reflexion" onChange={handleChange} />
                      Idée en cours de réflexion
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="stadeDeveloppement" value="projet_structure" onChange={handleChange} />
                      Projet structuré mais non lancé
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="stadeDeveloppement" value="lance_peu_developpe" onChange={handleChange} />
                      Activité lancée mais peu développée
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="stadeDeveloppement" value="existante_croissance" onChange={handleChange} />
                      Activité existante avec volonté de croissance
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="stadeDeveloppement" value="difficulte_repositionnement" onChange={handleChange} />
                      Activité en difficulté ou en repositionnement
                    </label>
                  </div>
                </div>

                <div className="form-subsection">
                  <h4>2.2 Ressources internes</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="ressourcesInternes" value="seul" onChange={handleChange} />
                      Je travaille seul(e)
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="ressourcesInternes" value="1_2_collaborateurs" onChange={handleChange} />
                      1 à 2 collaborateurs
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="ressourcesInternes" value="3_plus" onChange={handleChange} />
                      3 collaborateurs ou plus
                    </label>
                  </div>
                </div>

                <div className="form-subsection">
                  <h4>2.3 Budget actuellement mobilisable (hors aides)</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="budgetMobilisable" value="aucun" onChange={handleChange} />
                      Aucun budget disponible
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="budgetMobilisable" value="moins_1000" onChange={handleChange} />
                      Moins de 1 000 €
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="budgetMobilisable" value="1000_3000" onChange={handleChange} />
                      Entre 1 000 € et 3 000 €
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="budgetMobilisable" value="plus_3000" onChange={handleChange} />
                      Plus de 3 000 €
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="budgetMobilisable" value="ne_sais_pas" onChange={handleChange} />
                      Je ne sais pas encore
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Section 3: Connaissance des aides */}
              <fieldset className="form-section">
                <legend>3. Connaissance et utilisation des aides publiques</legend>
                
                <div className="form-subsection">
                  <h4>3.1 Avez‑vous déjà bénéficié d'une aide publique ?</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="dejaBeneficieAide" value="oui" onChange={handleChange} />
                      Oui
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="dejaBeneficieAide" value="non" onChange={handleChange} />
                      Non
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="dejaBeneficieAide" value="ne_sais_pas" onChange={handleChange} />
                      Je ne sais pas
                    </label>
                  </div>
                </div>

                {formData.dejaBeneficieAide === 'oui' && (
                  <div className="form-subsection">
                    <h4>3.2 Si oui, laquelle ?</h4>
                    <div className="form-row">
                      <input
                        type="text"
                        name="quelleAide"
                        placeholder="exemples : CTM, CCI, FEDER, autre"
                        value={formData.quelleAide}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}

                <div className="form-subsection">
                  <h4>3.3 Votre situation actuelle vis‑à‑vis des aides</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="situationAides" value="sais_existe" onChange={handleChange} />
                      Je sais qu'il existe des aides mais je ne sais pas lesquelles
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="situationAides" value="identifiee_sais_pas" onChange={handleChange} />
                      J'ai identifié une aide mais je ne sais pas comment l'utiliser
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="situationAides" value="commence_non_finalise" onChange={handleChange} />
                      J'ai commencé un dossier mais je ne l'ai pas finalisé
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="situationAides" value="jamais_demarche" onChange={handleChange} />
                      Je n'ai jamais fait de démarche
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="situationAides" value="autre" onChange={handleChange} />
                      Autre situation
                    </label>
                  </div>
                </div>
              </fieldset>

              {/* Section 4: Objectif principal */}
              <fieldset className="form-section">
                <legend>4. Objectif principal du projet</legend>
                
                <div className="form-subsection">
                  <h4>4.1 Quel est votre objectif prioritaire ?</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="objectifPrioritaire" value="lancer_activite" onChange={handleChange} />
                      Lancer mon activité
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifPrioritaire" value="structurer_entreprise" onChange={handleChange} />
                      Structurer mon entreprise
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifPrioritaire" value="developper_ca" onChange={handleChange} />
                      Développer mon chiffre d'affaires
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifPrioritaire" value="ameliorer_visibilite" onChange={handleChange} />
                      Améliorer ma visibilité / communication
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifPrioritaire" value="professionnaliser" onChange={handleChange} />
                      Me professionnaliser (outils, organisation, stratégie)
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifPrioritaire" value="autre_objectif" onChange={handleChange} />
                      Autre objectif
                    </label>
                  </div>
                </div>

                <div className="form-subsection">
                  <h4>4.2 Quel est le projet que vous aimeriez réaliser ?</h4>
                  <div className="form-row">
                    <textarea
                      name="projetRealiser"
                      rows={4}
                      placeholder="Décrivez votre projet en quelques phrases..."
                      value={formData.projetRealiser}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </fieldset>

              {/* Section 5: Nature du projet */}
              <fieldset className="form-section">
                <legend>5. Nature du projet envisagé (plusieurs réponses possibles)</legend>
                
                <div className="checkbox-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value="structuration_marketing"
                      onChange={handleChange}
                      checked={formData.natureProjet.includes('structuration_marketing')}
                    />
                    Structuration ou stratégie marketing
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value="communication_visibilite"
                      onChange={handleChange}
                      checked={formData.natureProjet.includes('communication_visibilite')}
                    />
                    Communication / visibilité
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value="digitalisation"
                      onChange={handleChange}
                      checked={formData.natureProjet.includes('digitalisation')}
                    />
                    Digitalisation (site, outils, organisation)
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value="formation"
                      onChange={handleChange}
                      checked={formData.natureProjet.includes('formation')}
                    />
                    Formation / montée en compétences
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value="accompagnement_strategique"
                      onChange={handleChange}
                      checked={formData.natureProjet.includes('accompagnement_strategique')}
                    />
                    Accompagnement stratégique
                  </label>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="natureProjet"
                      value="autre_nature"
                      onChange={handleChange}
                      checked={formData.natureProjet.includes('autre_nature')}
                    />
                    Autre (préciser)
                  </label>
                </div>

                {formData.natureProjet.includes('autre_nature') && (
                  <div className="form-row">
                    <input
                      type="text"
                      name="natureProjetAutre"
                      placeholder="Précisez la nature du projet"
                      value={formData.natureProjetAutre}
                      onChange={handleChange}
                    />
                  </div>
                )}
              </fieldset>

              {/* Section 6: Objectif aide publique */}
              <fieldset className="form-section">
                <legend>6. Objectif vis‑à‑vis d'une aide publique</legend>
                
                <div className="form-subsection">
                  <h4>6.1 Dans l'idéal, une aide publique servirait à :</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="objectifAide" value="rendre_possible" onChange={handleChange} />
                      Rendre le projet financièrement possible
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifAide" value="reduire_effort" onChange={handleChange} />
                      Réduire l'effort financier personnel
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifAide" value="accelerer" onChange={handleChange} />
                      Accélérer le lancement ou le développement
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifAide" value="securiser" onChange={handleChange} />
                      Sécuriser le projet
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="objectifAide" value="ne_sais_pas" onChange={handleChange} />
                      Je ne sais pas encore
                    </label>
                  </div>
                </div>

                <div className="form-subsection">
                  <h4>6.2 Avez‑vous une échéance ou une contrainte de temps ?</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="echeanceTemps" value="oui" onChange={handleChange} />
                      Oui (préciser)
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="echeanceTemps" value="non" onChange={handleChange} />
                      Non
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="echeanceTemps" value="ne_sais_pas" onChange={handleChange} />
                      Je ne sais pas
                    </label>
                  </div>
                  
                  {formData.echeanceTemps === 'oui' && (
                    <div className="form-row">
                      <input
                        type="text"
                        name="echeanceTempsDetail"
                        placeholder="Précisez votre échéance"
                        value={formData.echeanceTempsDetail}
                        onChange={handleChange}
                      />
                    </div>
                  )}
                </div>
              </fieldset>

              {/* Section 7: Auto-évaluation */}
              <fieldset className="form-section">
                <legend>7. Auto‑évaluation du besoin d'accompagnement</legend>
                
                <p>Sur une échelle de 1 à 5, comment évaluez‑vous votre besoin :</p>
                
                <div className="evaluation-grid">
                  <div className="evaluation-item">
                    <label>Compréhension des aides publiques</label>
                    <div className="radio-scale">
                      {[1, 2, 3, 4, 5].map(value => (
                        <label key={value} className="scale-label">
                          <input
                            type="radio"
                            name="comprehensionAides"
                            value={value}
                            onChange={handleChange}
                            checked={formData.comprehensionAides === value}
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="evaluation-item">
                    <label>Structuration du projet</label>
                    <div className="radio-scale">
                      {[1, 2, 3, 4, 5].map(value => (
                        <label key={value} className="scale-label">
                          <input
                            type="radio"
                            name="structurationProjet"
                            value={value}
                            onChange={handleChange}
                            checked={formData.structurationProjet === value}
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="evaluation-item">
                    <label>Mise en œuvre concrète</label>
                    <div className="radio-scale">
                      {[1, 2, 3, 4, 5].map(value => (
                        <label key={value} className="scale-label">
                          <input
                            type="radio"
                            name="miseEnOeuvre"
                            value={value}
                            onChange={handleChange}
                            checked={formData.miseEnOeuvre === value}
                          />
                          {value}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>

              {/* Section 8: Contact */}
              <fieldset className="form-section">
                <legend>8. Suite de la démarche</legend>
                
                <div className="info-box">
                  <p>Ce formulaire permet de :</p>
                  <ul>
                    <li>dresser un <strong>portrait objectif de votre entreprise</strong></li>
                    <li>identifier <strong>les types de dispositifs potentiellement pertinents</strong></li>
                    <li>clarifier <strong>le projet à financer</strong></li>
                  </ul>
                  <p>👉 Une analyse humaine peut ensuite être proposée pour approfondir, sans engagement.</p>
                </div>

                <div className="warning-box">
                  <p>⚠️ <strong>Information importante</strong><br/>
                  Les aides publiques sont soumises à des critères précis et à la décision des organismes financeurs.<br/>
                  Ce formulaire n'engage aucune garantie d'obtention de financement.</p>
                </div>

                <div className="form-subsection">
                  <h4>Souhaitez‑vous être recontacté(e) pour un échange ?</h4>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input type="radio" name="souhaiteEtreRecontacte" value="oui" onChange={handleChange} />
                      Oui
                    </label>
                    <label className="radio-label">
                      <input type="radio" name="souhaiteEtreRecontacte" value="non" onChange={handleChange} />
                      Non
                    </label>
                  </div>
                </div>

                {formData.souhaiteEtreRecontacte === 'oui' && (
                  <div className="contact-fields">
                    <div className="form-row">
                      <input
                        type="text"
                        name="nom"
                        placeholder="Nom"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="text"
                        name="prenom"
                        placeholder="Prénom"
                        required
                        value={formData.prenom}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-row">
                      <input
                        type="tel"
                        name="telephone"
                        placeholder="Téléphone (optionnel)"
                        value={formData.telephone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
              </fieldset>

              <div className="form-actions">
                <button type="submit" className="btn-primary">
                  {loading ? 'Envoi en cours...' : 'Envoyer mon évaluation'}
                </button>
              </div>
              <p className="form-note">
                Je vous réponds sous 24h ouvrées avec une première analyse de votre projet.
              </p>
            </form>
          </div>
          
          {sent && (
            <div className="success-message">
              <h2>✅ Évaluation envoyée avec succès !</h2>
              <div className="success-details">
                <p><strong>Merci {formData.prenom} {formData.nom} !</strong></p>
                <p><strong>Email :</strong> {formData.email}</p>
                {formData.telephone && <p><strong>Téléphone :</strong> {formData.telephone}</p>}
                <p><strong>Entreprise :</strong> {formData.entreprise}</p>
                <p><strong>Objectif principal :</strong> {formData.objectifPrioritaire}</p>
                <p><strong>Projet :</strong> {formData.projetRealiser}</p>
                <p><strong>Localisation :</strong> {formData.localisation}</p>
                <p><strong>Secteur :</strong> {formData.secteurActivite}</p>
              </div>
              <p className="response-time">
                🚀 Je vous contacte sous 24h ouvrées pour analyser votre projet et identifier les dispositifs d'aide pertinents.
              </p>
              <div className="success-actions">
                <button onClick={() => setSent(false)} className="btn-secondary">
                  🔄 Faire une nouvelle évaluation
                </button>
                <a href="${BASE_PATH}contact" className="btn-outline">
                  📝 Contact direct
                </a>
              </div>
            </div>
          )}
          <footer className="note">
            <p><em>Cette page présente un accompagnement spécifique, distinct des prestations standards proposées sur le site.</em></p>
          </footer>
        </section>
      </main>
      <Footer />
    </>
  )
}
