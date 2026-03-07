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

// Données météo pour différentes localités
const meteoDataByLocation: Record<string, {
  current: {
    temperature: string;
    condition: string;
    humidity: string;
    wind: string;
    icon: string;
  };
  forecast: Array<{
    day: string;
    temp: string;
    condition: string;
    icon: string;
  }>;
}> = {
  'fort-de-france': {
    current: {
      temperature: "28°C",
      condition: "Ensoleillé",
      humidity: "75%",
      wind: "15 km/h",
      icon: "☀️"
    },
    forecast: [
      { day: "Lundi", temp: "28°C", condition: "Ensoleillé", icon: "☀️" },
      { day: "Mardi", temp: "27°C", condition: "Partiellement nuageux", icon: "⛅" },
      { day: "Mercredi", temp: "29°C", condition: "Ensoleillé", icon: "☀️" },
      { day: "Jeudi", temp: "26°C", condition: "Pluies orageuses", icon: "⛈️" },
      { day: "Vendredi", temp: "28°C", condition: "Ensoleillé", icon: "☀️" }
    ]
  },
  'paris': {
    current: {
      temperature: "12°C",
      condition: "Nuageux",
      humidity: "65%",
      wind: "20 km/h",
      icon: "☁️"
    },
    forecast: [
      { day: "Lundi", temp: "11°C", condition: "Pluie légère", icon: "🌦️" },
      { day: "Mardi", temp: "13°C", condition: "Nuageux", icon: "☁️" },
      { day: "Mercredi", temp: "14°C", condition: "Partiellement nuageux", icon: "⛅" },
      { day: "Jeudi", temp: "10°C", condition: "Pluie", icon: "🌧️" },
      { day: "Vendredi", temp: "12°C", condition: "Nuageux", icon: "☁️" }
    ]
  },
  'montreal': {
    current: {
      temperature: "-5°C",
      condition: "Neige",
      humidity: "85%",
      wind: "25 km/h",
      icon: "❄️"
    },
    forecast: [
      { day: "Lundi", temp: "-7°C", condition: "Neige", icon: "❄️" },
      { day: "Mardi", temp: "-3°C", condition: "Ensoleillé", icon: "☀️" },
      { day: "Mercredi", temp: "-2°C", condition: "Partiellement nuageux", icon: "⛅" },
      { day: "Jeudi", temp: "-8°C", condition: "Averse de neige", icon: "🌨️" },
      { day: "Vendredi", temp: "-4°C", condition: "Nuageux", icon: "☁️" }
    ]
  }
}

// Données d'informations business/actualités par localisation
const businessNewsByLocation = {
  'fort-de-france': [
    {
      id: 1,
      title: "Nouvelles aides à l'entrepreneuriat en Martinique",
      excerpt: "La Région Martinique lance un nouveau dispositif de soutien aux TPE et PME locales avec des subventions pouvant aller jusqu'à 15 000€.",
      date: "12 février 2025",
      category: "Économie locale",
      source: "Antilles Économie"
    },
    {
      id: 2,
      title: "Digitalisation : les entreprises martiniquaises en accélération",
      excerpt: "Une étude récente montre que 68% des entreprises locales ont accéléré leur transformation digitale depuis 2023.",
      date: "10 février 2025",
      category: "Technologie",
      source: "Martinique Business"
    },
    {
      id: 3,
      title: "Tourisme : perspectives encourageantes pour 2025",
      excerpt: "Les réservations hôtelières affichent une hausse de 23% par rapport à 2024, signe d'une reprise dynamique du secteur.",
      date: "8 février 2025",
      category: "Tourisme",
      source: "France Antilles"
    }
  ],
  'paris': [
    {
      id: 1,
      title: "Plan France 2030 : 5 milliards pour les startups",
      excerpt: "Le gouvernement annonce un nouveau fonds d'investissement de 5 milliards d'euros pour soutenir l'innovation et les entreprises technologiques françaises.",
      date: "11 février 2025",
      category: "Innovation",
      source: "Les Echos"
    },
    {
      id: 2,
      title: "Réforme du travail : ce qui change pour les TPE",
      excerpt: "Les nouvelles mesures sur le temps de travail et la télétravail vont impacter plus de 2 millions de petites entreprises en France.",
      date: "9 février 2025",
      category: "Droit social",
      source: "Le Figaro"
    },
    {
      id: 3,
      title: "Paris, capitale européenne de la fintech en 2025",
      excerpt: "Avec plus de 800 entreprises et 20 000 emplois créés en 2 ans, Paris confirme sa position de leader européen de la finance digitale.",
      date: "7 février 2025",
      category: "Finance",
      source: "Business France"
    }
  ],
  'montreal': [
    {
      id: 1,
      title: "IA : Québec investit 100M$ dans la recherche",
      excerpt: "Le gouvernement québécois annonce un investissement majeur pour positionner la province comme leader mondial de l'intelligence artificielle.",
      date: "12 février 2025",
      category: "Technologie",
      source: "La Presse"
    },
    {
      id: 2,
      title: "Taxe carbone : impact sur les PME québécoises",
      excerpt: "Les nouvelles mesures environnementales vont coûter en moyenne 15 000$ par an aux petites et moyennes entreprises du Québec.",
      date: "10 février 2025",
      category: "Environnement",
      source: "Le Devoir"
    },
    {
      id: 3,
      title: "Immigration : nouveaux programmes pour les travailleurs qualifiés",
      excerpt: "Le Québec lance deux nouveaux programmes d'immigration pour répondre aux besoins de main d'œuvre dans les secteurs de la tech et de la santé.",
      date: "8 février 2025",
      category: "Immigration",
      source: "Radio-Canada"
    }
  ]
}

export default function Blog(){
  const [articles, setArticles] = useState(wordpressArticles)
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [activeTab, setActiveTab] = useState('blog')
  const [selectedLocation, setSelectedLocation] = useState('fort-de-france')

  const categories = ['Tous', 'Blogging !', 'Marketing']
  
  const filteredArticles = selectedCategory === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <>
      <NavBar />
      <main className="container">
        <div className="service-header">
          <h1>Centre de Ressources</h1>
          <p className="service-intro">
            Blog, météo et actualités business pour vous accompagner au quotidien dans votre activité.
          </p>
        </div>

        {/* Navigation par onglets */}
        <div className="tab-navigation">
          <div className="tab-buttons">
            <button
              className={`tab-btn ${activeTab === 'meteo' ? 'active' : ''}`}
              onClick={() => setActiveTab('meteo')}
            >
              🌤️ Météo Martinique
            </button>
            <button
              className={`tab-btn ${activeTab === 'news' ? 'active' : ''}`}
              onClick={() => setActiveTab('news')}
            >
              📰 Business & Actu
            </button>
            <button
              className={`tab-btn ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => setActiveTab('blog')}
            >
              � Blog & Articles
            </button>
          </div>
        </div>

        {/* Contenu Blog */}
        {activeTab === 'blog' && (
          <>
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
                    <a href={`/jlytexe-site/blog/${article.slug}`} className="btn btn-primary">
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

            <div className="location-message">
              <p>💬 N'hésitez pas à discuter avec moi !</p>
            </div>
          </>
        )}

        {/* Contenu Météo */}
        {activeTab === 'meteo' && (
          <div className="meteo-container">
            {/* Sélecteur de localisation */}
            <div className="location-selector">
              <label htmlFor="location-select" className="location-label">
                📍 Choisir la localisation :
              </label>
              <select 
                id="location-select"
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)} 
                className="location-select"
              >
                <option value="fort-de-france">Fort de France</option>
                <option value="paris">France (Paris)</option>
                <option value="montreal">Montréal</option>
              </select>
            </div>

            <div className="meteo-current">
              <div className="meteo-main">
                <div className="meteo-icon">{meteoDataByLocation[selectedLocation].current.icon}</div>
                <div className="meteo-temp">{meteoDataByLocation[selectedLocation].current.temperature}</div>
                <div className="meteo-condition">{meteoDataByLocation[selectedLocation].current.condition}</div>
              </div>
              <div className="meteo-details">
                <div className="meteo-detail">
                  <span>💧 Humidité</span>
                  <span>{meteoDataByLocation[selectedLocation].current.humidity}</span>
                </div>
                <div className="meteo-detail">
                  <span>💨 Vent</span>
                  <span>{meteoDataByLocation[selectedLocation].current.wind}</span>
                </div>
              </div>
            </div>

            <div className="meteo-forecast">
              <h3>Prévisions 5 jours</h3>
              <div className="forecast-grid">
                {meteoDataByLocation[selectedLocation].forecast.map((day: any, index: any) => (
                  <div key={index} className="forecast-card">
                    <div className="forecast-day">{day.day}</div>
                    <div className="forecast-icon">{day.icon}</div>
                    <div className="forecast-temp">{day.temp}</div>
                    <div className="forecast-condition">{day.condition}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="location-message">
              <p>🌍 Peu importe le lieu, je suis là pour vous accompagner.</p>
            </div>
          </div>
        )}

        {/* Contenu Business News */}
        {activeTab === 'news' && (
          <div className="news-container">
            {/* Sélecteur de localisation */}
            <div className="location-selector">
              <label htmlFor="news-location-select" className="location-label">
                📍 Choisir la localisation :
              </label>
              <select 
                id="news-location-select"
                value={selectedLocation} 
                onChange={(e) => setSelectedLocation(e.target.value)} 
                className="location-select"
              >
                <option value="fort-de-france">Fort de France</option>
                <option value="paris">France (Paris)</option>
                <option value="montreal">Montréal</option>
              </select>
            </div>

            <section className="news-grid">
              {businessNewsByLocation[selectedLocation].map((news: any) => (
                <article key={news.id} className="news-card">
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-category">{news.category}</span>
                      <span className="news-date">{news.date}</span>
                    </div>
                    <h3>{news.title}</h3>
                    <p className="news-excerpt">{news.excerpt}</p>
                    <div className="news-source">
                      <span>Source : {news.source}</span>
                    </div>
                  </div>
                </article>
              ))}
            </section>

            <div className="location-message">
              <p>📻 Peu importe le sujet, je vous écoute.</p>
            </div>
          </div>
        )}

        <section className="cta-section">
          <h2>Vous avez des questions sur ces sujets ?</h2>
          <p>Discutons-en lors d'un diagnostic gratuit</p>
          <a href="/jlytexe-site/contact" className="btn-primary">Prendre rendez-vous</a>
        </section>
      </main>
      <Footer />
    </>
  )
}
