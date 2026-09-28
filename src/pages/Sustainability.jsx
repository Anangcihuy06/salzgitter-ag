import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

export default function Sustainability() {
  const { t } = useLang()
  const s = t('sustainability')

  return (
    <>
      <SEO page="sustainability" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={s.hero.tag} title={s.hero.title} sub={s.hero.sub} img={IMG.nachhaltigkeit} />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>SALCOS®</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {s.salcos.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{s.salcos.body}</p>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 border-l-2 border-t-2 border-sz-500" aria-hidden="true" />
            <img src={IMG.salcos} alt={s.salcos.title} className="relative w-full object-cover" loading="lazy" />
            <div className="absolute -right-4 -bottom-4 h-24 w-24 border-r-2 border-b-2 border-sz-500" aria-hidden="true" />
          </Reveal>
        </div>
      </section>

      <section id="klima" className="scroll-mt-28 bg-ink-950 py-24 text-white lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Stagger className="flex flex-col gap-px bg-white/10" gap={0.08}>
            {s.klima.facts.map((f) => (
              <StaggerItem key={f} className="bg-ink-950 px-6 py-5">
                <span className="font-display text-lg font-semibold uppercase tracking-wide">{f}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal>
            <SectionTag dark>{s.klima.tag}</SectionTag>
            <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {s.klima.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-smoke-300">{s.klima.body}</p>
          </Reveal>
        </div>
      </section>

      <section id="ratings" className="scroll-mt-28 bg-smoke-50 py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{s.ratings.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {s.ratings.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2" gap={0.1}>
            {s.ratings.items.map((item) => (
              <StaggerItem key={item} className="flex items-start gap-4 border border-ink-900/10 bg-white px-6 py-6">
                <span className="mt-1 block h-3 w-3 shrink-0 bg-sz-500" aria-hidden="true" />
                <span className="leading-relaxed text-ink-700">{item}</span>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 flex flex-col items-center gap-6">
            <GhostText className="inset-x-0 top-1/2 -translate-y-1/2 text-center text-[12vw] font-bold">ESG</GhostText>
            <p className="font-display relative text-2xl font-semibold uppercase tracking-wide text-ink-700">
              {s.ratings.eco}
            </p>
            <ArrowButton to="/strategy" variant="primary">
              {t('nav.strategy')}
            </ArrowButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
