
import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [subject, setSubject] = useState('')

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || [])
    const totalFiles = [...files, ...selectedFiles].slice(0, 3)
    setFiles(totalFiles)
  }

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <>
      <NavBar />
      <main className="container">
        <h1>Contact</h1>
        {!sent ? (
          <form onSubmit={(e)=>{e.preventDefault(); setSent(true)}} className="contact-form">
            <div className="form-row">
              <input required placeholder="Nom *" name="nom" />
              <input required placeholder="Prénom *" name="prenom" />
            </div>
            <input required type="email" placeholder="Email *" name="email" />
            <select required value={subject} onChange={(e) => setSubject(e.target.value)} name="subject" className="form-select">
              <option value="">Sélectionnez un type de demande *</option>
              <option value="marketing">Marketing</option>
              <option value="informatique">Informatique</option>
              <option value="compta">Comptabilité</option>
              <option value="multiconseil">Multi-conseil</option>
            </select>
            <textarea required placeholder="Votre besoin" name="message" rows={6}></textarea>
            
            <div className="file-upload-section">
              <label className="file-upload-label">
                <span>📎 Ajouter des fichiers (max 3)</span>
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
            
            <button className="btn btn-primary" type="submit">Envoyer</button>
          </form>
        ) : (
          <div className="success-message">
            <h2>✅ Message envoyé !</h2>
            <p>Merci ! Je reviens vers vous rapidement.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
