import React, { useState } from 'react'
import { initEmailJS } from '../lib/emailjs'

interface DiagnosticFormData {
  nom: string
  email: string
  telephone: string
  subject: string
  message: string
}

export default function DiagnosticForm() {
  const [formData, setFormData] = useState<DiagnosticFormData>({
    nom: '',
    email: '',
    telephone: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [sent, setSent] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Validation en temps réel
    const newErrors = { ...errors }
    if (name === 'email') {
      newErrors.email = validateEmail(value) ? '' : 'Format email invalide'
    }
    setErrors(newErrors)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nom || !formData.email || !formData.subject || !formData.message) {
      setErrors({
        nom: !formData.nom ? 'Nom requis' : '',
        email: !formData.email ? 'Email requis' : '',
        subject: !formData.subject ? 'Type de demande requis' : '',
        message: !formData.message ? 'Message requis' : ''
      })
      return
    }
    setSent(true)
  }

  return (
    <div className="diagnostic-form">
      <h2>🚀 Diagnostic rapide (30 secondes)</h2>
      <p className="diagnostic-intro">
        Obtenez un plan d'action immédiat. Remplissez les champs essentiels pour recevoir votre diagnostic gratuit.
      </p>
      
      {!sent ? (
        <form onSubmit={handleSubmit} className="contact-form diagnostic">
          <div className="form-row">
            <input
              required
              placeholder="Nom complet *"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className={errors.nom ? 'error' : ''}
            />
          </div>
          
          <div className="form-row">
            <input
              required
              type="email"
              placeholder="Email *"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-row">
            <input
              placeholder="Téléphone (optionnel)"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
            />
          </div>
          
          <select
              required
              value={formData.subject}
              onChange={handleInputChange}
              name="subject"
              className={`form-select ${errors.subject ? 'error' : ''}`}
              title="Sélectionnez le type de demande"
            >
            <option value="">Type de demande *</option>
            <option value="marketing">Marketing</option>
            <option value="informatique">Informatique</option>
            <option value="compta">Comptabilité</option>
            <option value="multiconseil">Multi-conseil</option>
          </select>
          {errors.subject && <span className="error-message">{errors.subject}</span>}
          
          <div className="form-row">
            <textarea
              required
              placeholder="Votre besoin (500 caractères max) *"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className={errors.message ? 'error' : ''}
              maxLength={500}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button className="btn btn-primary btn-hero" type="submit">
            🎯 Recevoir mon diagnostic gratuit
          </button>
          
          <div className="form-switch">
            <p>OU</p>
            <a href="/exe360/contact" className="btn btn-outline">
              📝 Formulaire détaillé
            </a>
          </div>
        </form>
      ) : (
        <div className="success-message diagnostic-success">
          <h2>✅ Diagnostic demandé !</h2>
          <div className="success-details">
            <p><strong>Nom :</strong> {formData.nom}</p>
            <p><strong>Email :</strong> {formData.email}</p>
            {formData.telephone && <p><strong>Téléphone :</strong> {formData.telephone}</p>}
            <p><strong>Type de demande :</strong> {formData.subject}</p>
            <p><strong>Message :</strong> {formData.message}</p>
          </div>
          <p className="response-time">
            🚀 Je vous contacte sous 2h pour votre diagnostic gratuit !
          </p>
          <div className="success-actions">
            <a href="/exe360/contact" className="btn btn-secondary">
              🔄 Nouveau diagnostic
            </a>
            <a href="/exe360/contact" className="btn btn-outline">
              📝 Faire une demande détaillée
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
