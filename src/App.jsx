import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { motion } from 'motion/react'
import { DEFAULT_LANG, LANGS } from './i18n/dictionaries'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { SmoothScroll, ScrollProgress, Grain, scrollToHash } from './components/Premium'

const Home = lazy(() => import('./pages/Home'))
const Group = lazy(() => import('./pages/Group'))
const Business = lazy(() => import('./pages/Business'))
const Sustainability = lazy(() => import('./pages/Sustainability'))
const Strategie = lazy(() => import('./pages/Strategie'))
const Investors = lazy(() => import('./pages/Investors'))
const Press = lazy(() => import('./pages/Press'))
const Contact = lazy(() => import('./pages/Contact'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-smoke-50">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse bg-sz-500" />
        <span className="h-3 w-3 animate-pulse bg-sz-500 [animation-delay:150ms]" />
        <span className="h-3 w-3 animate-pulse bg-sz-500 [animation-delay:300ms]" />
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => scrollToHash(hash), 150)
      return () => clearTimeout(t)
    }
    const lenis = window.__lenis
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function PageWrapper({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
    >
      {children}
    </motion.main>
  )
}

function LangRoutes() {
  const { lang } = useParams()

  if (!LANGS.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANG}`} replace />
  }

  return (
    <LanguageProvider lang={lang}>
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="group" element={<PageWrapper><Group /></PageWrapper>} />
          <Route path="business" element={<PageWrapper><Business /></PageWrapper>} />
          <Route path="sustainability" element={<PageWrapper><Sustainability /></PageWrapper>} />
          <Route path="strategy" element={<PageWrapper><Strategie /></PageWrapper>} />
          <Route path="investors" element={<PageWrapper><Investors /></PageWrapper>} />
          <Route path="press" element={<PageWrapper><Press /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="legal/:slug" element={<PageWrapper><Legal /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </Suspense>
      <Footer />
    </LanguageProvider>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <SmoothScroll />
      <ScrollProgress />
      <Grain />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to={`/${DEFAULT_LANG}`} replace />} />
          <Route path="/:lang/*" element={<LangRoutes />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
