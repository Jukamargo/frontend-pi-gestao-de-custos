import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { AppLayout } from './components/layout/AppLayout'
import { MarketingLayout } from './components/layout/MarketingLayout'
import Home from './pages/Home'
import About from './pages/About'
import Benefits from './pages/Benefits'
import AgentDemo from './pages/AgentDemo'
import Technologies from './pages/Technologies'
import NotFound from './pages/NotFound'
const Dashboard = lazy(() => import('./pages/Dashboard'))
const CostCatalog = lazy(() => import('./pages/CostCatalog'))
const CostDetails = lazy(() => import('./pages/CostDetails'))
const titles: Record<string, string> = {
  '/': 'Automação e chatbot',
  '/sobre': 'Sobre o projeto',
  '/beneficios': 'Benefícios',
  '/demonstracao': 'Chatbot demonstrativo',
  '/tecnologias': 'Tecnologias',
  '/dashboard': 'Dashboard',
  '/custos': 'Catálogo de custos',
}
function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title = `${titles[pathname] || (pathname.startsWith('/custos/') ? 'Detalhes do custo' : 'Página não encontrada')} | Gestão de custos`
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.getElementById('main-content')?.focus({ preventScroll: true })
  }, [pathname])
  return null
}
export default function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="loading-state" role="status">
              Carregando página…
            </div>
          }
        >
          <Routes>
            <Route element={<MarketingLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/beneficios" element={<Benefits />} />
              <Route path="/demonstracao" element={<AgentDemo />} />
              <Route path="/tecnologias" element={<Technologies />} />
            </Route>
            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/custos" element={<CostCatalog />} />
              <Route path="/custos/:id" element={<CostDetails />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
