import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LANGS, DEFAULT_LANG } from '../i18n/dictionaries'
import { LocalizedLink, useLang, useAlternatePath } from '../i18n/LanguageContext'

function Logo() {
  return (
    <Link to={`/${DEFAULT_LANG}`} className="flex items-center gap-3" aria-label="Salzgitter AG – Startseite">
      <span className="flex h-9 w-9 items-center justify-center bg-sz-500">
        <span className="font-display text-xl font-bold leading-none text-white">S</span>
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-lg font-bold uppercase tracking-wide text-white">Salzgitter</span>
        <span className="label-mono mt-1 text-sz-400">AG · Konzern</span>
      </span>
    </Link>
  )
}

function LangSwitch({ dark }) {
  const lang = useLang().lang
  const toDe = useAlternatePath('de')
  const toEn = useAlternatePath('en')
  const targets = { de: toDe, en: toEn }
  return (
    <div
      className={`flex items-center border p-0.5 font-mono text-xs font-medium ${
        dark ? 'border-white/25 text-white' : 'border-ink-900/20 text-ink-900'
      }`}
      role="group"
      aria-label="Language / Sprache"
    >
      {LANGS.map((l) => (
        <Link
          key={l}
          to={targets[l]}
          className={`px-2.5 py-1 uppercase transition-colors ${
            l === lang ? 'bg-sz-500 text-white' : 'hover:text-sz-500'
          }`}
          aria-current={l === lang ? 'true' : undefined}
        >
          {l}
        </Link>
      ))}
    </div>
  )
}

function Chevron() {
  return (
    <svg className="transition-transform duration-300 group-hover:rotate-180" width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NavDropdown({ label, subitems, dark, active }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`group flex items-center gap-1.5 px-3.5 py-2 font-display text-sm font-semibold uppercase tracking-widest transition-colors ${
          dark ? 'text-smoke-300 hover:text-white' : 'text-white/90 hover:text-white'
        } ${active ? '!text-sz-400' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen(!open)}
      >
        {label}
        <Chevron />
      </button>
      <span className={`absolute inset-x-3 bottom-1 h-0.5 bg-sz-500 transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} aria-hidden="true" />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 z-50 pt-4"
          >
            <div className="w-[26rem] border border-ink-900/10 bg-white shadow-2xl shadow-ink-950/30">
              <div className="h-1 bg-sz-500" />
              <div className="divide-y divide-ink-900/5">
                {subitems.map((s) => (
                  <LocalizedLink
                    key={s.to + s.label}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="group/item block px-6 py-4 transition-colors hover:bg-smoke-50"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-display text-base font-bold uppercase tracking-wide text-ink-900">{s.label}</span>
                      <svg className="shrink-0 text-sz-500 opacity-0 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:opacity-100" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="mt-1 block text-xs leading-relaxed text-ink-600">{s.desc}</span>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Navbar() {
  const { t, lp } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const location = useLocation()

  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24))

  const menus = [
    { to: '/group', label: t('nav.group'), sub: t('nav.submenus.group') },
    { to: '/business', label: t('nav.business'), sub: t('nav.submenus.business') },
    { to: '/sustainability', label: t('nav.sustainability'), sub: t('nav.submenus.sustainability') },
    { to: '/strategy', label: t('nav.strategy'), sub: t('nav.submenus.strategy') },
    { to: '/investors', label: t('nav.investors'), sub: t('nav.submenus.investors') },
    { to: '/press', label: t('nav.press'), sub: t('nav.submenus.press') },
  ]

  const dark = scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        dark ? 'bg-ink-950/97 shadow-xl shadow-ink-950/40 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Hauptnavigation">
          {menus.map((m) => (
            <NavDropdown
              key={m.to}
              label={m.label}
              subitems={m.sub}
              dark={dark}
              active={location.pathname === lp(m.to)}
            />
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <LangSwitch dark />
          <a
            href="https://www.salzgitter-ag.com/de/jobs-karriere.html"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sz-500 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-sz-600"
          >
            {t('nav.career')}
          </a>
        </div>
        <button
          className="flex h-11 w-11 items-center justify-center border border-white/25 text-white xl:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? t('nav.close') : t('nav.menu')}
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-white/10 bg-ink-950/98 backdrop-blur-md xl:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="container-x flex flex-col gap-1 py-6">
              {menus.map((m) => (
                <div key={m.to}>
                  <LocalizedLink
                    to={m.to}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 font-display text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/5"
                  >
                    {m.label}
                  </LocalizedLink>
                  <div className="mb-2 ml-4 flex flex-col gap-0.5 border-l-2 border-sz-500/40 pl-3">
                    {m.sub.map((s) => (
                      <LocalizedLink
                        key={s.to + s.label}
                        to={s.to}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 text-sm text-smoke-300 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {s.label}
                      </LocalizedLink>
                    ))}
                  </div>
                </div>
              ))}
              <LocalizedLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-base font-medium text-smoke-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {t('nav.contact')}
              </LocalizedLink>
              <div className="mt-4 flex items-center justify-between px-4">
                <LangSwitch dark />
                <a
                  href="https://www.salzgitter-ag.com/de/jobs-karriere.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sz-500 px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-widest text-white"
                >
                  {t('nav.career')}
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
