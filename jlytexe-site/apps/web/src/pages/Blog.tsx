import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// Articles importés depuis WordPress (extraits du XML)
const wordpressArticles = [
  {
    id: 1,
    title: "Jamais content ? Le travailleur autonome, un employé rêvé ?",
    excerpt: "Le culte de la personnalité accompagne souvent le statut d' »entrepreneur à succès » : profil LinkedIn léché, storytelling calibré, lifestyle Instagram. Mais dans l'ombre de cette image, il y a l'autre figure de l'indépendant : le travailleur autonome.",
    date: "15 juillet 2025",
    category: "Blogging !",
    author: "Jérôme Loca Yang-Ting",
    slug: "jamais-content-le-travailleur-autonome-un-employe-reve"
  },
  {
    id: 2,
    title: "✨ Et pendant ce temps, NorthVolt… ✨",
    excerpt: "Le secteur économique québécois traverse une période d'ébullition, les tensions commerciales avec les États-Unis viennent encore complexifier la donne. La situation actuelle pose des défis majeurs pour les entreprises locales.",
    date: "1 février 2025",
    category: "Blogging !",
    author: "Jérôme Loca Yang-Ting",
    slug: "et-pendant-ce-temps-northvolt"
  },
  {
    id: 3,
    title: "La concurrence technologique, ses implications environnementales et sociétales",
    excerpt: "La course à l'innovation technologique oppose aujourd'hui deux grandes visions : d'une part, les acteurs qui misent sur le développement d'appareils puissants et autonomes, comme Apple et Tesla, et d'autre part, ceux qui dépendent fortement des réseaux centralisés.",
    date: "23 janvier 2025",
    category: "Blogging !",
    author: "Jérôme Loca Yang-Ting",
    slug: "concurrence-technologique-implications"
  },
  {
    id: 4,
    title: "Série d'articles pour concevoir votre stratégie marketing !",
    excerpt: "Vous voulez structurer vos actions marketing, pour faire un plan d'actions marketing, mais ne savez pas par où commencer ... commencez par la stratégie ? Dans ma nouvelle série d'articles, je vous guide pas à pas pour analyser votre marketing.",
    date: "2024",
    category: "Marketing",
    author: "Jérôme Loca Yang-Ting",
    slug: "serie-articles-strategie-marketing"
  }
]

export default function Blog(){
  const [articles, setArticles] = useState(wordpressArticles)
  const [selectedCategory, setSelectedCategory] = useState('Tous')

  const categories = ['Tous', 'Blogging !', 'Marketing']
  
  const filteredArticles = selectedCategory === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Blog & Articles</h1>
          <p className="service-intro">
            Réflexions, analyses et conseils sur le marketing, la technologie et l'entrepreneuriat. 
            Des articles pour vous aider à structurer et développer votre activité.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="blog-filters">
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grille d'articles */}
        <section className="blog-grid">
          {filteredArticles.map(article => (
            <article key={article.id} className="blog-card">
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-category">{article.category}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h3>{article.title}</h3>
                <p className="blog-excerpt">{article.excerpt}</p>
                <div className="blog-author">
                  <span>Par {article.author}</span>
                </div>
                <a href={`/blog/${article.slug}`} className="btn btn-primary">
                  Lire l'article
                </a>
              </div>
            </article>
          ))}
        </section>

        {filteredArticles.length === 0 && (
          <div className="no-articles">
            <p>Aucun article trouvé dans cette catégorie.</p>
          </div>
        )}

        <section className="cta-section">
          <h2>Vous avez des questions sur ces sujets ?</h2>
          <p>Discutons-en lors d'un diagnostic gratuit</p>
          <a href="/contact" className="btn-primary">Prendre rendez-vous</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
