import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
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

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    document.title = 'Évaluer mon éligibilité aux aides publiques — JLYTEXE Martinique'
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
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const requiredFields = ['statutAnciennete', 'formeJuridique', 'localisation', 'secteurActivite', 'stadeDeveloppement', 'ressourcesInternes', 'budgetMobilisable', 'dejaBeneficieAide', 'situationAides', 'objectifPrioritaire', 'projetRealiser', 'objectifAide']
    const missing = requiredFields.filter(f => !formData[f as keyof typeof formData])
    if (missing.length > 0) { setError('Veuillez remplir tous les champs requis.'); return }

    setLoading(true)
    setError(null)
    try {
      const result = await sendStrategyEmail(formData)
      if (result.success) {
        setSent(true)
      } else {
        setError('Erreur lors de l\'envoi. Veuillez réessayer.')
      }
    } catch {
      setError('Erreur technique. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <>
        <NavBar />
        <main className="container">
          <div className="success-message" style={{ maxWidth: 560, margin: '60px auto' }}>
            <h2>✅ Évaluation envoyée !</h2>
            <p>Merci {formData.prenom} {formData.nom} — je vous réponds sous 24h ouvrées avec une première analyse de votre projet.</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24, flexWrap: 'wrap' }}>
              <button onClick={() => setSent(false)} className="btn btn-secondary">Nouvelle évaluation</button>
              <a href={`${BASE_PATH}contact`} className="btn btn-primary">Contact direct</a>
            </div>
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

        <section className="service-header">
          <h1>Évaluer mon éligibilité</h1>
          <p className="service-intro">
            Ce formulaire vous aide à faire le point sur votre situation et à identifier les dispositifs d'aide potentiellement adaptés à votre projet.
          </p>
          <div className="disclaimer-box" style={{ maxWidth: 640, margin: '0 auto' }}>
            <p>👉 Il ne s'agit pas d'une demande de subvention — c'est un <strong>outil d'orientation et de qualification</strong>.</p>
          </div>
        </section>

        {error && (
          <div style={{ maxWidth: 640, margin: '0 auto 24px', padding: 16, background: '#fee', border: '1px solid #dc2626', borderRadius: 8, color: '#dc2626' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="strategy-form" style={{ maxWidth: 700, margin: '0 auto' }}>

          {/* Section 1 */}
          <fieldset className="form-section">
            <legend>1. Profil de l'entreprise</legend>

            <div className="form-subsection">
              <h4>Statut et ancienneté</h4>
              <div className="radio-group">
                {[
                  ['porteur_projet', 'Porteur de projet (entreprise non encore créée)'],
                  ['moins_1_an', 'Créée depuis moins de 1 an'],
                  ['1_3_ans', 'Créée depuis 1 à 3 ans'],
                  ['plus_3_ans', 'Créée depuis plus de 3 ans'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="statutAnciennete" value={val} onChange={handleChange} checked={formData.statutAnciennete === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-subsection">
              <h4>Forme juridique</h4>
              <div className="radio-group">
                {[
                  ['micro_entreprise', 'Micro-entreprise'],
                  ['ei_eurl', 'Entreprise individuelle / EURL'],
                  ['sarl_sas', 'SARL / SAS / autre société'],
                  ['association', 'Association'],
                  ['autre', 'Autre / je ne sais pas encore'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="formeJuridique" value={val} onChange={handleChange} checked={formData.formeJuridique === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-subsection">
              <h4>Localisation</h4>
              <div className="radio-group">
                <label className="radio-label">
                  <input type="radio" name="localisation" value="martinique" onChange={handleChange} checked={formData.localisation === 'martinique'} />
                  Martinique
                </label>
                <label className="radio-label">
                  <input type="radio" name="localisation" value="autre" onChange={handleChange} checked={formData.localisation === 'autre'} />
                  Autre
                </label>
              </div>
              {formData.localisation === 'autre' && (
                <input type="text" name="localisationAutre" placeholder="Précisez" value={formData.localisationAutre} onChange={handleChange} style={{ marginTop: 12 }} />
              )}
            </div>

            <div className="form-subsection">
              <h4>Secteur d'activité</h4>
              <input type="text" name="secteurActivite" placeholder="ex: commerce, numérique, tourisme, artisanat…" value={formData.secteurActivite} onChange={handleChange} />
            </div>
          </fieldset>

          {/* Section 2 */}
          <fieldset className="form-section">
            <legend>2. Situation actuelle</legend>

            <div className="form-subsection">
              <h4>Stade de développement</h4>
              <div className="radio-group">
                {[
                  ['idee_reflexion', 'Idée en cours de réflexion'],
                  ['projet_structure', 'Projet structuré mais non lancé'],
                  ['lance_peu_developpe', 'Activité lancée mais peu développée'],
                  ['existante_croissance', 'Activité existante avec volonté de croissance'],
                  ['difficulte_repositionnement', 'Activité en difficulté ou en repositionnement'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="stadeDeveloppement" value={val} onChange={handleChange} checked={formData.stadeDeveloppement === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-subsection">
              <h4>Ressources internes</h4>
              <div className="radio-group">
                {[
                  ['seul', 'Je travaille seul(e)'],
                  ['1_2_collaborateurs', '1 à 2 collaborateurs'],
                  ['3_plus', '3 collaborateurs ou plus'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="ressourcesInternes" value={val} onChange={handleChange} checked={formData.ressourcesInternes === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-subsection">
              <h4>Budget mobilisable (hors aides)</h4>
              <div className="radio-group">
                {[
                  ['aucun', 'Aucun budget disponible'],
                  ['moins_1000', 'Moins de 1 000 €'],
                  ['1000_3000', 'Entre 1 000 € et 3 000 €'],
                  ['plus_3000', 'Plus de 3 000 €'],
                  ['ne_sais_pas', 'Je ne sais pas encore'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="budgetMobilisable" value={val} onChange={handleChange} checked={formData.budgetMobilisable === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          {/* Section 3 */}
          <fieldset className="form-section">
            <legend>3. Aides publiques</legend>

            <div className="form-subsection">
              <h4>Avez-vous déjà bénéficié d'une aide ?</h4>
              <div className="radio-group">
                {[['oui', 'Oui'], ['non', 'Non'], ['ne_sais_pas', 'Je ne sais pas']].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="dejaBeneficieAide" value={val} onChange={handleChange} checked={formData.dejaBeneficieAide === val} />
                    {label}
                  </label>
                ))}
              </div>
              {formData.dejaBeneficieAide === 'oui' && (
                <input type="text" name="quelleAide" placeholder="Laquelle ? (ex: CTM, CCI, FEDER…)" value={formData.quelleAide} onChange={handleChange} style={{ marginTop: 12 }} />
              )}
            </div>

            <div className="form-subsection">
              <h4>Votre situation vis-à-vis des aides</h4>
              <div className="radio-group">
                {[
                  ['sais_existe', 'Je sais qu\'il en existe mais ne sais pas lesquelles'],
                  ['identifiee_sais_pas', 'J\'en ai identifié une mais ne sais pas comment l\'utiliser'],
                  ['commence_non_finalise', 'J\'ai commencé un dossier mais pas finalisé'],
                  ['jamais_demarche', 'Je n\'ai jamais fait de démarche'],
                  ['autre', 'Autre situation'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="situationAides" value={val} onChange={handleChange} checked={formData.situationAides === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>
          </fieldset>

          {/* Section 4 */}
          <fieldset className="form-section">
            <legend>4. Votre projet</legend>

            <div className="form-subsection">
              <h4>Objectif prioritaire</h4>
              <div className="radio-group">
                {[
                  ['lancer_activite', 'Lancer mon activité'],
                  ['structurer_entreprise', 'Structurer mon entreprise'],
                  ['developper_ca', 'Développer mon chiffre d\'affaires'],
                  ['ameliorer_visibilite', 'Améliorer ma visibilité / communication'],
                  ['professionnaliser', 'Me professionnaliser (outils, organisation, stratégie)'],
                  ['autre_objectif', 'Autre objectif'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="objectifPrioritaire" value={val} onChange={handleChange} checked={formData.objectifPrioritaire === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-subsection">
              <h4>Décrivez votre projet</h4>
              <textarea name="projetRealiser" rows={4} placeholder="Quelques phrases suffisent…" value={formData.projetRealiser} onChange={handleChange} />
            </div>

            <div className="form-subsection">
              <h4>Nature du projet (plusieurs choix possibles)</h4>
              <div className="checkbox-group">
                {[
                  ['structuration_marketing', 'Structuration ou stratégie marketing'],
                  ['communication_visibilite', 'Communication / visibilité'],
                  ['digitalisation', 'Digitalisation (site, outils, organisation)'],
                  ['formation', 'Formation / montée en compétences'],
                  ['accompagnement_strategique', 'Accompagnement stratégique'],
                  ['autre_nature', 'Autre (préciser)'],
                ].map(([val, label]) => (
                  <label key={val} className="checkbox-label">
                    <input type="checkbox" name="natureProjet" value={val} onChange={handleChange} checked={formData.natureProjet.includes(val)} />
                    {label}
                  </label>
                ))}
              </div>
              {formData.natureProjet.includes('autre_nature') && (
                <input type="text" name="natureProjetAutre" placeholder="Précisez" value={formData.natureProjetAutre} onChange={handleChange} style={{ marginTop: 12 }} />
              )}
            </div>
          </fieldset>

          {/* Section 5 */}
          <fieldset className="form-section">
            <legend>5. Objectif vis-à-vis de l'aide</legend>

            <div className="form-subsection">
              <h4>Une aide servirait à :</h4>
              <div className="radio-group">
                {[
                  ['rendre_possible', 'Rendre le projet financièrement possible'],
                  ['reduire_effort', 'Réduire l\'effort financier personnel'],
                  ['accelerer', 'Accélérer le lancement ou le développement'],
                  ['securiser', 'Sécuriser le projet'],
                  ['ne_sais_pas', 'Je ne sais pas encore'],
                ].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="objectifAide" value={val} onChange={handleChange} checked={formData.objectifAide === val} />
                    {label}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-subsection">
              <h4>Avez-vous une échéance ?</h4>
              <div className="radio-group">
                {[['oui', 'Oui'], ['non', 'Non'], ['ne_sais_pas', 'Je ne sais pas']].map(([val, label]) => (
                  <label key={val} className="radio-label">
                    <input type="radio" name="echeanceTemps" value={val} onChange={handleChange} checked={formData.echeanceTemps === val} />
                    {label}
                  </label>
                ))}
              </div>
              {formData.echeanceTemps === 'oui' && (
                <input type="text" name="echeanceTempsDetail" placeholder="Précisez votre échéance" value={formData.echeanceTempsDetail} onChange={handleChange} style={{ marginTop: 12 }} />
              )}
            </div>
          </fieldset>

          {/* Section 6 — Auto-évaluation */}
          <fieldset className="form-section">
            <legend>6. Auto-évaluation (1 = peu, 5 = bien)</legend>
            <div className="evaluation-grid">
              {[
                ['comprehensionAides', 'Compréhension des aides publiques'],
                ['structurationProjet', 'Structuration de votre projet'],
                ['miseEnOeuvre', 'Capacité de mise en œuvre concrète'],
              ].map(([name, label]) => (
                <div key={name} className="evaluation-item">
                  <label>{label}</label>
                  <div className="radio-scale">
                    {[1, 2, 3, 4, 5].map(v => (
                      <label key={v} className="scale-label">
                        <input type="radio" name={name} value={v} onChange={handleChange} checked={Number(formData[name as keyof typeof formData]) === v} />
                        {v}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Section 7 — Contact */}
          <fieldset className="form-section">
            <legend>7. Souhaitez-vous être recontacté(e) ?</legend>
            <div className="radio-group">
              {[['oui', 'Oui'], ['non', 'Non, je soumets juste pour information']].map(([val, label]) => (
                <label key={val} className="radio-label">
                  <input type="radio" name="souhaiteEtreRecontacte" value={val} onChange={handleChange} checked={formData.souhaiteEtreRecontacte === val} />
                  {label}
                </label>
              ))}
            </div>

            {formData.souhaiteEtreRecontacte === 'oui' && (
              <div className="contact-fields" style={{ marginTop: 24 }}>
                <input type="text" name="prenom" placeholder="Prénom *" value={formData.prenom} onChange={handleChange} required />
                <input type="text" name="nom" placeholder="Nom *" value={formData.nom} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email *" value={formData.email} onChange={handleChange} required />
                <input type="tel" name="telephone" placeholder="Téléphone (optionnel)" value={formData.telephone} onChange={handleChange} />
              </div>
            )}
          </fieldset>

          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Envoi en cours…' : '📤 Envoyer mon évaluation'}
            </button>
            <p className="form-note">Je vous réponds sous 24h ouvrées avec une première analyse.</p>
          </div>

        </form>
      </main>
      <Footer />
    </>
  )
}
