import emailjs from '@emailjs/browser'

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_lxg8fu7',
  TEMPLATE_ID_CONTACT: 'template_hmzdhwa',
  TEMPLATE_ID_STRATEGY: 'YOUR_STRATEGY_TEMPLATE_ID',
  PUBLIC_KEY: 'laQ8E8IZxfZvdJw-A'
}

export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

export const sendContactEmail = async (formData: {
  nom: string
  prenom: string
  email: string
  telephone: string
  entreprise: string
  subject: string
  message: string
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      {
        ...formData,
        from_name: `${formData.prenom} ${formData.nom}`,
        to_email: 'contact@exe360.fr',
        reply_to: formData.email
      }
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

export const sendDiagnosticEmail = async (formData: {
  nom: string
  email: string
  telephone: string
  subject: string
  message: string
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      {
        from_name: formData.nom,
        from_email: formData.email,
        from_phone: formData.telephone || 'Non renseigné',
        subject: formData.subject,
        message: formData.message,
        to_email: 'contact@exe360.fr',
        reply_to: formData.email
      }
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}
export const sendStrategyEmail = async (formData: Record<string, unknown>) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_CONTACT,
      {
        ...formData,
        to_email: 'contact@exe360.fr',
        sujet: 'Nouvelle demande évaluation - exe360'
      }
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}