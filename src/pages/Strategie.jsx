import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

export default function Strategie() {
  const { t } = useLang()
  const s = t('strategy')

  return (
    <>
      <SEO page="strategy" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={s.hero.tag} title={s.hero.title} sub={s.hero.sub} img={IMG.salcos} />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{s.pillars.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {s.pillars.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3" gap={0.12}>
            {s.pillars.items.map((p, i) => (
              <StaggerItem key={p.title}>
                <article className="group h-full border border-ink-900/10 bg-smoke-50 p-8 transition-shadow hover:shadow-xl hover:shadow-ink-950/10">
                  <span className="font-display text-stroke-steel text-6xl font-bold" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-bold uppercase tracking-wide">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-600">{p.desc}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="initiativen" className="scroll-mt-28 bg-ink-950 py-24 text-white lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag dark>{s.initiativen.tag}</SectionTag>
            <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {s.initiativen.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 lg:grid-cols-3" gap={0.12}>
            {s.initiativen.items.map((it) => (
              <StaggerItem key={it.title}>
                <article className="group h-full border border-white/10 bg-white/[0.03] transition-colors hover:border-sz-500/50">
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={it.img}
                      alt=""
                      className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-950 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide">{it.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-smoke-300">{it.desc}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="produkte" className="relative scroll-mt-28 overflow-hidden bg-smoke-50 py-24 lg:py-32">
        <GhostText className="right-0 top-4 text-[15vw] font-bold">SALCOS®</GhostText>
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>{s.produkte.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {s.produkte.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{s.produkte.body}</p>
            <ArrowButton to="/sustainability" variant="primary">
              {s.produkte.link}
            </ArrowButton>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="absolute -top-4 -right-4 h-24 w-24 border-r-2 border-t-2 border-sz-500" aria-hidden="true" />
            <img src={IMG.salcosProdukt} alt={s.produkte.title} className="relative w-full object-cover" loading="lazy" />
            <div className="absolute -left-4 -bottom-4 h-24 w-24 border-l-2 border-b-2 border-sz-500" aria-hidden="true" />
          </Reveal>
        </div>
      </section>
    </>
  )
}
