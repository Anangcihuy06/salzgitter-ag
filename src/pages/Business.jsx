import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

export default function Business() {
  const { t } = useLang()
  const b = t('business')
  const areas = ['erzeugung', 'verarbeitung', 'handel', 'technologie']

  return (
    <>
      <SEO page="business" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={b.hero.tag} title={b.hero.title} sub={b.hero.sub} img={IMG.construction} />

      {areas.map((key, i) => {
        const a = b.areas[key]
        const flip = i % 2 === 1
        return (
          <section
            key={key}
            id={key}
            className={`scroll-mt-28 py-20 lg:py-28 ${i % 2 === 0 ? 'bg-white' : 'bg-smoke-50'}`}
          >
            <div className={`container-x grid items-center gap-14 lg:grid-cols-2 ${flip ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <Reveal className="relative">
                <span className="font-display text-stroke-steel pointer-events-none absolute -top-10 left-0 select-none text-[7rem] font-bold leading-none lg:text-[9rem]" aria-hidden="true">
                  0{i + 1}
                </span>
                <div className="relative mt-6 border border-ink-900/10 bg-white p-8 lg:p-10">
                  <p className="label-mono text-sz-600">{a.tag}</p>
                  <h2 className="font-display mt-3 text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
                    {a.title}
                  </h2>
                  <p className="mt-5 leading-relaxed text-ink-700">{a.body}</p>
                </div>
              </Reveal>
              <Stagger className="flex flex-col gap-3" gap={0.08}>
                {a.facts.map((f) => (
                  <StaggerItem key={f} className="flex items-start gap-4 border border-ink-900/10 bg-white px-5 py-4">
                    <span className="mt-1.5 block h-2 w-2 shrink-0 bg-sz-500" aria-hidden="true" />
                    <span className="font-display text-lg font-semibold uppercase tracking-wide">{f}</span>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        )
      })}

      <section className="bg-ink-950 py-20 text-white lg:py-24">
        <div className="container-x flex flex-col items-center gap-8 text-center">
          <GhostText className="inset-x-0 top-1/2 -translate-y-1/2 text-[13vw] font-bold">Verbund</GhostText>
          <Reveal className="relative">
            <h2 className="font-display max-w-2xl text-3xl font-bold uppercase leading-tight sm:text-4xl">
              {t('home.divisions.title')}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ArrowButton to="/group" variant="primary">
                {t('footer.links.vorstand')}
              </ArrowButton>
              <ArrowButton to="/strategy" variant="outline">
                {t('nav.strategy')}
              </ArrowButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
