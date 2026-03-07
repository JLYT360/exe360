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
import Strategy from './pages/Strategy'
import LegalMentions from './pages/LegalMentions'
import './styles.css'
import './styles.dev.css'

const router = createBrowserRouter([
  { path: '/', element: <><ScrollRestoration /><Home /></> },
  { path: '/services', element: <><ScrollRestoration /><Services /></> },
  { path: '/services/marketing-strategique', element: <><ScrollRestoration /><ServiceMarketing /></> },
  { path: '/services/assistance-administrative', element: <><ScrollRestoration /><ServiceAdmin /></> },
  { path: '/services/precomptabilite', element: <><ScrollRestoration /><ServicePrecompta /></> },
  { path: '/services/support-informatique', element: <><ScrollRestoration /><ServiceSupport /></> },
  { path: '/blog', element: <><ScrollRestoration /><Blog /></> },
  { path: '/blog/:slug', element: <><ScrollRestoration /><Article /></> },
  { path: '/contact', element: <><ScrollRestoration /><Contact /></> },
  { path: '/a-propos', element: <><ScrollRestoration /><About /></> },
  { path: '/strategy', element: <><ScrollRestoration /><Strategy /></> },
  { path: '/mentions-legales', element: <><ScrollRestoration /><LegalMentions /></> },
])

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
