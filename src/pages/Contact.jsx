import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { IMG } from '../i18n/dictionaries'

export default function Contact() {
  const { t } = useLang()
  const c = t('contact')

  return (
    <>
      <SEO page="contact" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={c.hero.tag} title={c.hero.title} sub={c.hero.sub} img={IMG.hero} />

      <section className="bg-smoke-50 py-24 lg:py-32">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>{c.hero.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              Salzgitter AG
            </h2>
            <address className="mt-8 whitespace-pre-line font-display text-xl leading-relaxed not-italic text-ink-700">
              {c.info.address}
            </address>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${c.info.phone.replace(/[^+\d]/g, '')}`}
                className="font-display inline-flex items-center gap-3 text-xl font-semibold text-sz-600 hover:text-sz-500"
              >
                <span className="label-mono text-smoke-500">Tel</span> {c.info.phone}
              </a>
              <a
                href={`mailto:${c.info.email}`}
                className="font-display inline-flex items-center gap-3 break-all text-xl font-semibold text-sz-600 hover:text-sz-500"
              >
                <span className="label-mono text-smoke-500">E-Mail</span> {c.info.email}
              </a>
            </div>
          </Reveal>
          <Stagger className="flex flex-col gap-4" gap={0.1}>
            <StaggerItem className="border border-ink-900/10 bg-white p-7">
              <p className="label-mono text-sz-600">{t('nav.contact')}</p>
              <p className="mt-3 leading-relaxed text-ink-700">{c.info.departments}</p>
            </StaggerItem>
            <StaggerItem className="border border-ink-900/10 bg-white p-7">
              <p className="label-mono text-sz-600">Anfahrt</p>
              <p className="mt-3 leading-relaxed text-ink-700">{c.info.visit}</p>
            </StaggerItem>
            <StaggerItem className="border border-ink-900/10 bg-ink-950 p-7 text-white">
              <p className="label-mono text-sz-400">{t('footer.links.karriere')}</p>
              <a
                href="https://www.salzgitter-ag.com/de/jobs-karriere.html"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display mt-3 inline-block text-xl font-semibold text-sz-400 hover:text-sz-300"
              >
                salzgitter-ag.com/jobs-karriere
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </section>
    </>
  )
}
