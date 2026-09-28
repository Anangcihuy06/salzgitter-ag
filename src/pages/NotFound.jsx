import { useLang, LocalizedLink } from '../i18n/LanguageContext'
import SEO from '../components/SEO'
import { GhostText } from '../components/Premium'

export default function NotFound() {
  const { t } = useLang()
  return (
    <>
      <SEO page="notfound" />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950 text-white">
        <GhostText className="inset-x-0 top-1/2 -translate-y-1/2 text-center text-[26vw] font-bold">404</GhostText>
        <div className="container-x relative text-center">
          <p className="label-mono text-sz-400">Salzgitter AG</p>
          <h1 className="font-display mt-4 text-4xl font-bold uppercase tracking-tight sm:text-5xl">{t('notfound.title')}</h1>
          <p className="mt-4 text-lg text-smoke-300">{t('common.notfound')}</p>
          <LocalizedLink
            to="/"
            className="mt-10 inline-block bg-sz-500 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-sz-600"
          >
            {t('common.back')}
          </LocalizedLink>
        </div>
      </section>
    </>
  )
}
