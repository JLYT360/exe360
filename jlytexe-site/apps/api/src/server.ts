
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import multer from 'multer'
import { sendContactEmail } from './email.js'

const app = express()
const PORT = process.env.PORT || 8787
const origins = (process.env.CORS_ORIGINS || '').split(',').filter(Boolean)

// Configuration de multer pour l'upload de fichiers
const storage = multer.memoryStorage()
const upload = multer({ 
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB max par fichier
    files: 3 // max 3 fichiers
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(new Error('Type de fichier non autorisé. PDF, JPG, PNG uniquement.'))
    }
  }
})

app.use(helmet())
app.use(express.json({ limit: '10mb' }))
app.use(cors({ origin: origins.length ? origins : true }))

app.get('/health', (_req, res) => res.json({ ok: true }))

app.post('/contact', upload.array('files', 3), async (req, res) => {
  try {
    const { nom, prenom, email, message } = req.body
    
    if (!nom || !prenom || !email || !message) {
      return res.status(400).json({ 
        error: 'Les champs nom, prénom, email et message sont obligatoires' 
      })
    }

    // Préparation des fichiers pour l'email
    const files = (req.files as Express.Multer.File[])?.map(file => ({
      filename: file.originalname,
      content: file.buffer,
      contentType: file.mimetype
    })) || []

    // Envoi de l'email
    const emailSent = await sendContactEmail({
      nom,
      prenom,
      email,
      message,
      files
    })

    if (emailSent) {
      res.json({ 
        success: true, 
        message: 'Message envoyé avec succès',
        filesCount: files.length 
      })
    } else {
      res.status(500).json({ 
        error: 'Erreur lors de l\'envoi de l\'email' 
      })
    }
  } catch (error) {
    console.error('Erreur endpoint contact:', error)
    res.status(500).json({ 
      error: 'Erreur serveur lors du traitement de votre demande' 
    })
  }
})

app.listen(PORT, () => console.log(`API on :${PORT}`))
