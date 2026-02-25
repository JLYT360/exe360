import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Articles complets importés depuis WordPress
const wordpressArticles = {
  'jamais-content-le-travailleur-autonome-un-employe-reve': {
    title: "Jamais content ? Le travailleur autonome, un employé rêvé ?",
    content: `
      <p>Le culte de la personnalité accompagne souvent le statut d' »entrepreneur à succès » : profil LinkedIn léché, storytelling calibré, lifestyle Instagram. Mais dans l'ombre de cette image, il y a l'autre figure de l'indépendant : le travailleur autonome.</p>
      
      <h3>La réalité du travailleur autonome</h3>
      <p>Contrairement à l'entrepreneur médiatisé, le travailleur autonome est souvent un professionnel qui choisit l'indépendance pour plus de flexibilité, mais qui fait face à des défis bien réels : gestion administrative, recherche constante de clients, pression financière, et isolement.</p>
      
      <h3>Les défis quotidiens</h3>
      <p>Le travailleur autonome doit jongler avec plusieurs casquettes : expert dans son domaine, commercial, comptable, et gestionnaire. Cette polyvalence est à la fois une force et une source de stress permanent.</p>
      
      <h3>Vers un équilibre</h3>
      <p>Pourtant, cette forme d'entrepreneuriat offre une liberté incomparable. La clé réside dans l'organisation, le soutien réseau, et l'acceptation que "l'autonomie" ne signifie pas "seul".</p>
    `,
    date: "15 juillet 2025",
    category: "Blogging !",
    author: "Jérôme Loca Yang-Ting"
  },
  'et-pendant-ce-temps-northvolt': {
    title: "✨ Et pendant ce temps, NorthVolt… ✨",
    content: `
      <p>Le secteur économique québécois traverse une période d'ébullition, les tensions commerciales avec les États-Unis viennent encore complexifier la donne. La situation actuelle pose des défis majeurs pour les entreprises locales, incitant le Québec et le Canada 🇨🇦 à diversifier leurs partenariats internationaux.</p>
      
      <h3>Menace des tarifs douaniers américains</h3>
      <p>Les menaces de tarifs douaniers de Donald Trump 🇺🇸 créent une incertitude qui pousse les entreprises à revoir leurs stratégies. NorthVolt, avec son projet de batterie, devient un symbole de cette transition économique.</p>
      
      <h3>Opportunités de diversification</h3>
      <p>Cette crise force une réflexion sur notre dépendance économique et ouvre des opportunités pour développer des alliances avec d'autres partenaires mondiaux.</p>
      
      <h3>L'innovation comme réponse</h3>
      <p>Dans ce contexte, l'innovation technologique et la transition énergétique deviennent des leviers essentiels pour assurer la prospérité économique du Québec.</p>
    `,
    date: "1 février 2025",
    category: "Blogging !",
    author: "Jérôme Loca Yang-Ting"
  },
  'concurrence-technologique-implications': {
    title: "La concurrence technologique, ses implications environnementales et sociétales",
    content: `
      <p>La course à l'innovation technologique oppose aujourd'hui deux grandes visions : d'une part, les acteurs qui misent sur le développement d'appareils puissants et autonomes, comme Apple et Tesla (via Starlink), et d'autre part, ceux qui dépendent fortement des réseaux centralisés comme Facebook (Meta), Google, et OpenAI.</p>
      
      <h3>Deux modèles en opposition</h3>
      <p>Le modèle décentralisé (Apple/Tesla) privilégie l'autonomie de l'utilisateur et la performance locale, tandis que le modèle centralisé (Meta/Google/OpenAI) mise sur la puissance du cloud et l'intelligence collective.</p>
      
      <h3>Implications environnementales</h3>
      <p>Cette rivalité soulève des questions cruciales sur l'impact environnemental. Les data centers consomment une énergie considérable, tandis que la production d'appareils performants génère son propre coût écologique.</p>
      
      <h3>Enjeux sociétaux</h3>
      <p>Au-delà de l'aspect technique, cette concurrence influence notre rapport à la technologie, notre vie privée, et même notre autonomie en tant qu'utilisateurs.</p>
    `,
    date: "23 janvier 2025",
    category: "Blogging !",
    author: "Jérôme Loca Yang-Ting"
  },
  'serie-articles-strategie-marketing': {
    title: "Série d'articles pour concevoir votre stratégie marketing !",
    content: `
      <p>Vous voulez structurer vos actions marketing, pour faire un plan d'actions marketing, mais ne savez pas par où commencer... commencez par la stratégie ?</p>
      
      <h3>🚀 NOUVEAU : Série d'articles pour concevoir votre stratégie marketing !</h3>
      <p>Dans ma nouvelle série d'articles, je vous guide pas à pas pour analyser votre marketing ce qui vous permettra de dégager des actions claires afin d'atteindre vos objectifs.</p>
      
      <p>Que vous soyez entrepreneur·e ou gestionnaire, un plan marketing bien conçu est la clé pour développer votre entreprise. Dans cette série, je vais vous expliquer étape par étape comment structurer votre stratégie et définir des objectifs clairs.</p>
      
      <h3>Pourquoi une stratégie marketing est-elle essentielle ?</h3>
      <p>Résilience et adaptabilité, au programme de cette série :</p>
      <ul>
        <li><strong>Analyse SWOT</strong> : Comprendre vos forces, faiblesses, opportunités et menaces.</li>
        <li><strong>Objectifs SMART</strong> : Définir des objectifs spécifiques, mesurables, atteignables, réalistes et temporels.</li>
        <li><strong>Analyse de marché</strong> : Étudier vos concurrents et votre positionnement.</li>
        <li><strong>Plan d'action</strong> : Développer des tactiques concrètes et mesurables.</li>
      </ul>
      
      <h3>Le processus en 4 étapes</h3>
      <p>Chaque article de cette série se concentrera sur une étape spécifique du processus stratégique, avec des exemples pratiques et des outils que vous pourrez appliquer immédiatement à votre entreprise.</p>
    `,
    date: "2024",
    category: "Marketing",
    author: "Jérôme Loca Yang-Ting"
  }
}

export default function Article(){
  const { slug } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const foundArticle = wordpressArticles[slug]
    if (foundArticle) {
      setArticle(foundArticle)
    }
    setLoading(false)
  }, [slug])

  if (loading) {
    return (
      <>
        <NavBar />
        <main className="container">
          <div className="loading">Chargement de l'article...</div>
        </main>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <NavBar />
        <main className="container">
          <div className="error-message">
            <h1>Article non trouvé</h1>
            <p>Cet article n'existe pas ou a été déplacé.</p>
            <Link to="${BASE_PATH}blog" className="btn btn-primary">Retour au blog</Link>
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
        <article className="article-detail">
          <div className="article-header">
            <Link to="${BASE_PATH}blog" className="back-link">← Retour au blog</Link>
            <div className="article-meta">
              <span className="article-category">{article.category}</span>
              <span className="article-date">{article.date}</span>
            </div>
            <h1>{article.title}</h1>
            <div className="article-author">
              <span>Par {article.author}</span>
            </div>
          </div>
          
          <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          
          <div className="article-footer">
            <div className="article-actions">
              <Link to="${BASE_PATH}blog" className="btn btn-secondary">Retour au blog</Link>
              <Link to="${BASE_PATH}contact" className="btn btn-primary">Discuter de cet article</Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
