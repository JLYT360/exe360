import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function sendContactEmail(data: {
  nom: string
  prenom: string
  email: string
  message: string
  files?: Array<{ filename: string; content: Buffer; contentType: string }>
}) {
  const attachments = files?.map(file => ({
    filename: file.filename,
    content: file.content,
    contentType: file.contentType
  })) || []

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'jlyt.exe@gmail.com',
    subject: `Nouveau contact - ${data.prenom} ${data.nom}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${data.nom} ${data.prenom}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${data.message.replace(/\n/g, '<br>')}
      </div>
      ${attachments.length > 0 ? `<p><strong>Pièces jointes:</strong> ${attachments.length} fichier(s)</p>` : ''}
    `,
    attachments
  }

  try {
    await transporter.sendMail(mailOptions)
    console.log('Email envoyé avec succès')
    return true
  } catch (error) {
    console.error('Erreur envoi email:', error)
    return false
  }
}
