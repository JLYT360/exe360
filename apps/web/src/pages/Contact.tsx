import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { initEmailJS, sendContactEmail } from '../lib/emailjs'

// Mapping des packs vers descriptions
const PACK_DESCRIPTIONS: { [key: string]: string } = {
  'marketing-5h': 'Forfait Marketing 5h - Diagnostic stratégique initial (200€)',
  'marketing-10h': 'Forfait Marketing 10h - Plan d\'action complet (380€)',
  'marketing-mensuel': 'Forfait Marketing Mensuel 10h - Accompagnement continu (350€/mois)',
  'marketing-annuel': 'Forfait Marketing Annuel 120h - Partenaire stratégique (3 800€/an)',
  'marketing-diagnostic': 'Diagnostic Marketing stratégique gratuit 30min',
  
  'admin-5h': 'Forfait Administration 5h - Mise en place initiale (120€)',
  'admin-10h': 'Forfait Administration 10h - Organisation complète (220€)',
  'admin-mensuel': 'Forfait Administration Mensuel 20h - Gestion administrative continue (420€/mois)',
  'admin-annuel': 'Forfait Administration Annuel 240h - Partenaire administratif (4 500€/an)',
  'admin-devis': 'Devis personnalisé pour services administratifs',
  
  'precompta-5h': 'Forfait Pré-comptabilité 5h - Mise en place initiale (140€)',
  'precompta-10h': 'Forfait Pré-comptabilité 10h - Organisation mensuelle (260€)',
  'precompta-mensuel': 'Forfait Pré-comptabilité Mensuel 20h - Gestion comptable complète (500€/mois)',
  'precompta-annuel': 'Forfait Pré-comptabilité Annuel 240h - Partenaire comptable (5 400€/an)',
  'precompta-diagnostic': 'Diagnostic Pré-comptabilité gratuit',
  
  'support-5h': 'Forfait Support 5h - Intervention ponctuelle (150€)',
  'support-10h': 'Forfait Support 10h - Formation complète (280€)',
  'support-mensuel': 'Forfait Support Mensuel 10h - Maintenance & formation (260€/mois)',
  'support-annuel': 'Forfait Support Annuel 120h - Partenaire informatique (2 880€/an)',
  'support-diagnostic': 'Diagnostic numérique gratuit'
}

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    entreprise: '',
    subject: '',
    budget: '',
    message: '',
    contactPreference: 'email',
    disponibilites: '',
    voirAnnexe: false
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [charCount, setCharCount] = useState(0)
  const [ts] = useState(() => Date.now())
  const [clientToken] = useState(() => uuidv4())

  useEffect(() => {
    document.title = 'Contact — Recevoir un plan d\'action (1h offerte)'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expliquez vos priorités — je vous réponds sous 24 h ouvrées pour planifier une rencontre.')
    }
    
    // Initialiser EmailJS au chargement du composant
    initEmailJS()
    
    // Lire les paramètres URL pour pré-remplir le formulaire
    const urlParams = new URLSearchParams(window.location.search)
    const pack = urlParams.get('pack')
    
    if (pack && PACK_DESCRIPTIONS[pack]) {
      setFormData(prev => ({
        ...prev,
        subject: pack.includes('marketing') ? 'marketing' : 
                  pack.includes('admin') ? 'admin' : 
                  pack.includes('precompta') ? 'precompta' : 
                  pack.includes('support') ? 'support' : 'autre',
        message: PACK_DESCRIPTIONS[pack]
      }))
    }
  }, [])

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Martinique (+596) + formats souples ; on normalise côté serveur ensuite
  const validatePhone = (phone: string) => {
    const clean = phone.replace(/\s|\./g, '')
    // ok si commence par 0, +33, 0033, +596, 00596 et longueur raisonnable (10-14)
    return /^((\+|00)?(33|596))?\d{9,12}$/.test(clean) || /^0\d{9}$/.test(clean)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validation en temps réel
    const newErrors: {[key: string]: string} = { ...errors }
    
    if (name === 'email') {
      newErrors.email = validateEmail(value) ? '' : 'Format email invalide'
    }
    if (name === 'telephone' && value) {
      newErrors.telephone = validatePhone(value) ? '' : 'Format téléphone invalide (ex: 06 12 34 56 78)'
    }
    if (name === 'message') {
      setCharCount(value.length)
      newErrors.message = value.length > 1000 ? 'Maximum 1000 caractères' : ''
    }
    
    setErrors(newErrors)
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    const totalFiles = [...files, ...selectedFiles].slice(0, 3)
    setFiles(totalFiles)
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Anti-spam: délai minimal 2.5s + honeypot + token
    const tooFast = Date.now() - ts < 2500
    const honeypot = (document.getElementById('company_website') as HTMLInputElement)?.value
    if (tooFast || (honeypot && honeypot.trim() !== '')) return
    
    // Validation des champs requis
    const requiredFields = ['nom', 'prenom', 'email', 'telephone', 'entreprise', 'subject', 'message']
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData])
    
    if (missingFields.length > 0) {
      const newErrors: {[key: string]: string} = {}
      missingFields.forEach(field => {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} requis`
      })
      setErrors(newErrors)
      return
    }
    
    // Validation email
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Format email invalide' })
      return
    }
    
    // Validation téléphone
    if (formData.telephone && !validatePhone(formData.telephone)) {
      setErrors({ ...errors, telephone: 'Format téléphone invalide (ex: 06 12 34 56 78)' })
      return
    }
    
    // Validation message
    if (formData.message.length > 1000) {
      setErrors({ ...errors, message: 'Maximum 1000 caractères' })
      return
    }
    
    // Si tout est valide, envoyer l'email
    setLoading(true)
    setError(null)
    
    try {
      const result = await sendContactEmail({
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        entreprise: formData.entreprise,
        subject: formData.subject,
        message: formData.message
      })
      
      if (result.success) {
        setSent(true)
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          entreprise: '',
          subject: '',
          budget: '',
          message: '',
          contactPreference: 'email',
          disponibilites: '',
          voirAnnexe: false
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
        <h1>Contact</h1>
        {error && (
          <div className="error-message" style={{ marginBottom: '20px', padding: '15px', background: '#fee', border: '1px solid #dc2626', borderRadius: '8px', color: '#dc2626' }}>
            <strong>Erreur : {error}</strong>
          </div>
        )}
        
        {!sent ? (
          <form onSubmit={onSubmit} className="contact-form" noValidate>
            {loading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
                <p>Envoi en cours...</p>
              </div>
            )}
            
            <input type="text" id="company_website" name="company_website" aria-hidden="true" tabIndex={-1} style={{position:'absolute', left:'-9999px'}} />
            <input type="hidden" name="client_token" value={clientToken} />
            
            {/* Section Contact */}
            <fieldset className="form-section" aria-labelledby="contact-info">
              <legend id="contact-info" className="section-title">📋 Informations de contact</legend>
              <label htmlFor="nom">Nom *</label>
              <input id="nom" required name="nom" value={formData.nom} onChange={handleInputChange} className={errors.nom ? 'error' : ''} />
              {errors.nom && <span className="error-message">{errors.nom}</span>}
              
              <label htmlFor="prenom">Prénom *</label>
              <input id="prenom" required name="prenom" value={formData.prenom} onChange={handleInputChange} className={errors.prenom ? 'error' : ''} />
              {errors.prenom && <span className="error-message">{errors.prenom}</span>}
              
              <label htmlFor="email">Email *</label>
              <input id="email" required type="email" name="email" value={formData.email} onChange={handleInputChange} className={errors.email ? 'error' : ''} aria-describedby="emailHelp" />
              <small id="emailHelp" className="hint">Ex. prenom@entreprise.fr</small>
              {errors.email && <span className="error-message">{errors.email}</span>}
              
              <label htmlFor="telephone">Téléphone *</label>
              <input id="telephone" required name="telephone" value={formData.telephone} onChange={handleInputChange} className={errors.telephone ? 'error' : ''} aria-describedby="phoneHelp" />
              <small id="phoneHelp" className="hint">Formats acceptés : 06..., +596..., 0596..., espaces OK</small>
              {errors.telephone && <span className="error-message">{errors.telephone}</span>}
              
              <label htmlFor="entreprise">Entreprise *</label>
              <input id="entreprise" required name="entreprise" value={formData.entreprise} onChange={handleInputChange} className={errors.entreprise ? 'error' : ''} />
              {errors.entreprise && <span className="error-message">{errors.entreprise}</span>}
            </fieldset>

            {/* Section Besoin */}
            <fieldset className="form-section" aria-labelledby="need-info">
              <legend id="need-info" className="section-title">🎯 Votre besoin</legend>
              <label htmlFor="subject">Type de demande *</label>
              <select
                id="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                name="subject"
                className={`form-select ${errors.subject ? 'error' : ''}`}
                title="Sélectionnez le type de demande"
              >
                <option value="">Type de demande *</option>
                <option value="marketing">Marketing stratégique</option>
                <option value="admin">Administration & pré-comptabilité</option>
                                <option value="support">Support &amp; formation</option>
                <option value="autre">Autre</option>
              </select>
              
              <label htmlFor="budget">Budget prévisionnel (optionnel)</label>
              <select 
                id="budget"
                name="budget" 
                value={formData.budget}
                onChange={handleInputChange}
                className="form-select"
                title="Sélectionnez votre budget prévisionnel"
              >
                <option value="">(optionnel)</option>
                <option value="<150">&lt; 150 €</option>
                <option value="150-350">150 – 350 €</option>
                <option value="350-700">350 – 700 €</option>
                <option value="700-1200">700 – 1 200 €</option>
                <option value=">1200">&gt; 1 200 €</option>
              </select>
              
              <div className="textarea-container">
                <div className="checkbox-section">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="voirAnnexe"
                      checked={formData.voirAnnexe}
                      onChange={handleCheckboxChange}
                    />
                    <span>📎 Voir annexe (fichiers joints ci-dessous)</span>
                  </label>
                </div>
                
                <div className="form-row">
                  <label htmlFor="message">Votre besoin</label>
                  <textarea 
                    id="message"
                    required={!formData.voirAnnexe}
                    placeholder={formData.voirAnnexe ? "Votre besoin (optionnel si annexe fournie)" : "Décrivez votre besoin en détail *"} 
                    name="message" 
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  <div className="char-counter">
                    {charCount}/1000 caractères
                  </div>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>
              </div>
            </fieldset>

            {/* Section Disponibilités */}
            <fieldset className="form-section" aria-labelledby="prefs">
              <legend id="prefs" className="section-title">📅 Disponibilités et préférences</legend>
              <div className="form-row">
                <label htmlFor="contactPreference">Préférence de contact</label>
                <select 
                  id="contactPreference"
                  name="contactPreference" 
                  value={formData.contactPreference}
                  onChange={handleInputChange}
                  className="form-select"
                  title="Sélectionnez votre préférence de contact"
                >
                  <option value="email">Préférence de contact : Email</option>
                  <option value="telephone">Préférence de contact : Téléphone</option>
                  <option value="rdv">Préférence de contact : RDV visio</option>
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="dispo">Vos disponibilités (optionnel)</label>
                <input id="dispo" name="disponibilites" value={formData.disponibilites} onChange={handleInputChange} />
              </div>
            </fieldset>

            {/* Section Annexe */}
            <div className="form-section">
              <h2 className="section-title">📎 Fichiers joints</h2>
              <div className="file-upload-section">
                <label className="file-upload-label">
                  <span>Ajouter des fichiers (max 3)</span>
                  <input 
                    type="file" 
                    multiple 
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileChange}
                    disabled={files.length >= 3}
                  />
                </label>
                
                {files.length > 0 && (
                  <div className="file-list">
                    {files.map((file, index) => (
                      <div key={index} className="file-item">
                        <span className="file-name">📄 {file.name}</span>
                        <button 
                          type="button" 
                          className="remove-file"
                          onClick={() => removeFile(index)}
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <button className="btn btn-primary btn-hero" type="submit">📤 Envoyer votre demande</button>
            <p className="form-note">
              Je vous réponds <strong>habituellement sous 24–48 h ouvrées</strong> pour planifier une rencontre.
            </p>
          </form>
        ) : (
          <div className="success-message">
            <h2>✅ Message envoyé !</h2>
            <div className="success-details">
              <h3>Récapitulatif de votre demande :</h3>
              <div className="recap-content">
                <p><strong>Nom :</strong> {formData.nom} {formData.prenom}</p>
                <p><strong>Email :</strong> {formData.email}</p>
                {formData.telephone && <p><strong>Téléphone :</strong> {formData.telephone}</p>}
                {formData.entreprise && <p><strong>Entreprise :</strong> {formData.entreprise}</p>}
                <p><strong>Type de demande :</strong> {formData.subject}</p>
                {formData.budget && <p><strong>Budget :</strong> {formData.budget}</p>}
                {formData.contactPreference && formData.contactPreference !== 'email' && <p><strong>Préférence de contact :</strong> {formData.contactPreference}</p>}
                {formData.disponibilites && <p><strong>Disponibilités :</strong> {formData.disponibilites}</p>}
                {formData.voirAnnexe && <p><strong>Voir annexe :</strong> Oui</p>}
                <p><strong>Message :</strong> {formData.message}</p>
                {files.length > 0 && (
                  <p><strong>Fichiers joints :</strong> {files.map(f => f.name).join(', ')}</p>
                )}
              </div>
              <p className="response-time">
                📧 Je vous recontacte sous 24 h ouvrées pour convenir d'un premier échange.
              </p>
            </div>
            <button onClick={() => setSent(false)} className="btn btn-secondary">
              Envoyer un autre message
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
