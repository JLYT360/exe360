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
  { path: '/exe360/', element: <><ScrollRestoration /><Home /></> },
  { path: '/exe360/services', element: <><ScrollRestoration /><Services /></> },
  { path: '/exe360/services/marketing-strategique', element: <><ScrollRestoration /><ServiceMarketing /></> },
  { path: '/exe360/services/assistance-administrative', element: <><ScrollRestoration /><ServiceAdmin /></> },
  { path: '/exe360/services/precomptabilite', element: <><ScrollRestoration /><ServicePrecompta /></> },
  { path: '/exe360/services/support-informatique', element: <><ScrollRestoration /><ServiceSupport /></> },
  { path: '/exe360/blog', element: <><ScrollRestoration /><Blog /></> },
  { path: '/exe360/blog/:slug', element: <><ScrollRestoration /><Article /></> },
  { path: '/exe360/contact', element: <><ScrollRestoration /><Contact /></> },
  { path: '/exe360/a-propos', element: <><ScrollRestoration /><About /></> },
  { path: '/exe360/aides-financement', element: <><ScrollRestoration /><AidesFinancement /></> },
  { path: '/exe360/evaluation-aides', element: <><ScrollRestoration /><EvaluationAides /></> },
  { path: '/exe360/mentions-legales', element: <><ScrollRestoration /><LegalMentions /></> },
  { path: '/exe360/strategy', element: <><ScrollRestoration /><AidesFinancement /></> },
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
