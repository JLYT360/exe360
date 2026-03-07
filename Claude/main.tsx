import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceMarketing from './pages/ServiceMarketing'
import ServiceAdmin from './pages/ServiceAdmin'
import ServicePrecompta from './pages/ServicePrecompta'
import ServiceSupport from './pages/ServiceSupport'
import Blog from './pages/Blog'
import Article from './pages/Article'
import Contact from './pages/Contact'
import About from './pages/About'
import AidesFinancement from './pages/AidesFinancement'
import EvaluationAides from './pages/EvaluationAides'
import LegalMentions from './pages/LegalMentions'
import './styles.css'

const router = createBrowserRouter([
  { path: '/jlytexe-site/', element: <><ScrollRestoration /><Home /></> },
  { path: '/jlytexe-site/services', element: <><ScrollRestoration /><Services /></> },
  { path: '/jlytexe-site/services/marketing-strategique', element: <><ScrollRestoration /><ServiceMarketing /></> },
  { path: '/jlytexe-site/services/assistance-administrative', element: <><ScrollRestoration /><ServiceAdmin /></> },
  { path: '/jlytexe-site/services/precomptabilite', element: <><ScrollRestoration /><ServicePrecompta /></> },
  { path: '/jlytexe-site/services/support-informatique', element: <><ScrollRestoration /><ServiceSupport /></> },
  { path: '/jlytexe-site/blog', element: <><ScrollRestoration /><Blog /></> },
  { path: '/jlytexe-site/blog/:slug', element: <><ScrollRestoration /><Article /></> },
  { path: '/jlytexe-site/contact', element: <><ScrollRestoration /><Contact /></> },
  { path: '/jlytexe-site/a-propos', element: <><ScrollRestoration /><About /></> },
  { path: '/jlytexe-site/aides-financement', element: <><ScrollRestoration /><AidesFinancement /></> },
  { path: '/jlytexe-site/evaluation-aides', element: <><ScrollRestoration /><EvaluationAides /></> },
  { path: '/jlytexe-site/mentions-legales', element: <><ScrollRestoration /><LegalMentions /></> },
  { path: '/jlytexe-site/strategy', element: <><ScrollRestoration /><AidesFinancement /></> },
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
