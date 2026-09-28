import { createContext, useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { getDict, t as translate } from './dictionaries'
const LanguageContext = createContext(null)

export function LanguageProvider({ lang, children }) {
  const value = useMemo(() => {
    const d = getDict(lang)
    const lp = (path) => `/${lang}${path === '/' ? '' : path}`
    return { lang, dict: d, t: (path) => translate(lang, path), lp }
  }, [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

export function LocalizedLink({ to, children, ...props }) {
  const { lp } = useLang()
  const href = typeof to === 'string' && /^https?:|mailto:|tel:/.test(to) ? to : lp(to)
  const external = typeof to === 'string' && /^https?:/.test(to)
  if (external) {
    return (
      <a href={href} {...props} rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  )
}

export function useAlternatePath(targetLang) {
  const { pathname } = useLocation()
  return pathname.replace(/^\/(de|en)/, `/${targetLang}`)
}
