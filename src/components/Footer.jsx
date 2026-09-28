import { useLang, LocalizedLink } from '../i18n/LanguageContext'

export default function Footer() {
  const { lang, t } = useLang()
  const cols = t('footer.cols')
  const links = t('footer.links')
  const legal = { impressum: links.impressum, datenschutz: links.datenschutz }

  const colKonzern = [
    { label: cols.konzern === 'Konzern' ? 'Konzern im Überblick' : 'Group Overview', to: '/group' },
    { label: links.vorstand, to: '/group#vorstand' },
    { label: links.zahlen, to: '/group#zahlen' },
    { label: links.strategie, to: '/strategy' },
  ]
  const colService = [
    { label: links.presse, to: '/press' },
    { label: links.investor, to: '/investors' },
    { label: links.termin, to: '/investors#kalender' },
    { label: links.medien, to: '/press#kontakt' },
    { label: links.karriere, to: 'https://www.salzgitter-ag.com/de/jobs-karriere.html' },
  ]

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-smoke-300">
      <div className="absolute inset-0 grid-lines-dark" aria-hidden="true" />
      <div className="container-x relative pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <LocalizedLink to="/" className="flex items-center gap-3" aria-label="Salzgitter AG">
              <span className="flex h-9 w-9 items-center justify-center bg-sz-500">
                <span className="font-display text-xl font-bold leading-none text-white">S</span>
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-wide text-white">Salzgitter</span>
            </LocalizedLink>
            <p className="mt-6 max-w-md text-sm leading-relaxed">{t('footer.claim')}</p>
            <div className="mt-6 flex items-center gap-2 font-mono text-xs text-sz-400">
              <span className="inline-block h-2 w-2 bg-sz-500" aria-hidden="true" />
              {links.green}
            </div>
            <p className="mt-6 font-mono text-xs leading-relaxed text-smoke-500">
              Salzgitter AG · Eisenhüttenstraße 99 · 38239 Salzgitter
              <br />
              +49 5341 21-01 · impressum@salzgitter-ag.com
            </p>
          </div>
          <div>
            <p className="label-mono text-white">{cols.konzern}</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {colKonzern.map((l) => (
                <li key={l.label}>
                  <LocalizedLink to={l.to} className="transition-colors hover:text-sz-400">
                    {l.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-mono text-white">{cols.service}</p>
            <ul className="mt-5 flex flex-col gap-3 text-sm">
              {colService.map((l) => (
                <li key={l.label}>
                  <LocalizedLink to={l.to} className="transition-colors hover:text-sz-400">
                    {l.label}
                  </LocalizedLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Salzgitter AG. {lang === 'de' ? 'Alle Rechte vorbehalten.' : 'All rights reserved.'}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <LocalizedLink to="/legal/impressum" className="transition-colors hover:text-sz-400">
              {legal.impressum}
            </LocalizedLink>
            <LocalizedLink to="/legal/datenschutz" className="transition-colors hover:text-sz-400">
              {legal.datenschutz}
            </LocalizedLink>
          </div>
        </div>
      </div>
      <div className="overflow-hidden pb-2" aria-hidden="true">
        <p className="font-display -mb-[0.23em] text-center text-[13.5vw] font-bold uppercase leading-none tracking-tight text-white/[0.04] select-none">
          Salzgitter
        </p>
      </div>
    </footer>
  )
}
