import emailjs from '@emailjs/browser'

// Configuration EmailJS - À remplacer avec vos vraies clés
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID', // Remplacer par votre Service ID EmailJS
  TEMPLATE_ID_CONTACT: 'YOUR_CONTACT_TEMPLATE_ID', // Template pour formulaire Contact
  TEMPLATE_ID_STRATEGY: 'YOUR_STRATEGY_TEMPLATE_ID', // Template pour formulaire Strategy
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY' // Remplacer par votre Public Key EmailJS
}

// Interface pour les données du formulaire Strategy
interface StrategyFormData {
  // Section 1: Profil de l'entreprise
  statutAnciennete: string
  formeJuridique: string
  localisation: string
  localisationAutre: string
  secteurActivite: string
  
  // Section 2: Situation actuelle
  stadeDeveloppement: string
  ressourcesInternes: string
  budgetMobilisable: string
  
  // Section 3: Connaissance des aides
  dejaBeneficieAide: string
  quelleAide: string
  situationAides: string
  
  // Section 4: Objectif principal
  objectifPrioritaire: string
  projetRealiser: string
  
  // Section 5: Nature du projet
  natureProjet: string[]
  natureProjetAutre: string
  
  // Section 6: Objectif aide publique
  objectifAide: string
  echeanceTemps: string
  echeanceTempsDetail: string
  
  // Section 7: Auto-évaluation
  comprehensionAides: number
  structurationProjet: number
  miseEnOeuvre: number
  
  // Section 8: Contact
  nom: string
  prenom: string
  email: string
  telephone: string
}

// Initialiser EmailJS
export const initEmailJS = () => {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

// Envoyer email depuis le formulaire Contact
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
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        entreprise: formData.entreprise,
        subject: formData.subject,
        message: formData.message,
        from_name: `${formData.prenom} ${formData.nom}`,
        to_email: 'contact@exe360.fr', // Votre email de réception
        reply_to: formData.email
      }
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}

// Envoyer email depuis le formulaire Strategy
export const sendStrategyEmail = async (formData: StrategyFormData) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID_STRATEGY,
      {
        // Profil entreprise
        statutAnciennete: formData.statutAnciennete,
        formeJuridique: formData.formeJuridique,
        localisation: formData.localisation,
        secteurActivite: formData.secteurActivite,
        
        // Situation actuelle
        stadeDeveloppement: formData.stadeDeveloppement,
        ressourcesInternes: formData.ressourcesInternes,
        budgetMobilisable: formData.budgetMobilisable,
        
        // Connaissance aides
        dejaBeneficieAide: formData.dejaBeneficieAide,
        quelleAide: formData.quelleAide,
        situationAides: formData.situationAides,
        
        // Objectif principal
        objectifPrioritaire: formData.objectifPrioritaire,
        projetRealiser: formData.projetRealiser,
        
        // Nature projet
        natureProjet: formData.natureProjet?.join(', '),
        natureProjetAutre: formData.natureProjetAutre,
        
        // Objectif aide
        objectifAide: formData.objectifAide,
        echeanceTemps: formData.echeanceTemps,
        echeanceTempsDetail: formData.echeanceTempsDetail,
        
        // Auto-évaluation
        comprehensionAides: formData.comprehensionAides,
        structurationProjet: formData.structurationProjet,
        miseEnOeuvre: formData.miseEnOeuvre,
        
        // Contact
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        telephone: formData.telephone,
        
        from_name: `${formData.prenom} ${formData.nom}`,
        to_email: 'contact@exe360.fr',
        reply_to: formData.email,
        sujet: 'Nouvelle demande évaluation MQE - exe360'
      }
    )
    return { success: true, response }
  } catch (error) {
    console.error('EmailJS error:', error)
    return { success: false, error }
  }
}
