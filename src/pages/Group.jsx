import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem, Counter } from '../components/Motion'
import { GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

export default function Group() {
  const { t } = useLang()
  const g = t('group')

  return (
    <>
      <SEO page="group" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={g.hero.tag} title={g.hero.title} sub={g.hero.sub} img={IMG.hero} />

      <section id="vorstand" className="scroll-mt-28 bg-white py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{g.vorstand.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {g.vorstand.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-8 md:grid-cols-3" gap={0.12}>
            {g.vorstand.members.map((m) => (
              <StaggerItem key={m.name}>
                <article className="group border border-ink-900/10 bg-smoke-50 transition-shadow hover:shadow-xl hover:shadow-ink-950/10">
                  <div className="aspect-[4/3] overflow-hidden bg-ink-800">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <p className="label-mono text-sz-600">{m.role}</p>
                    <h3 className="font-display mt-2 text-2xl font-bold uppercase tracking-wide">{m.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-600">{m.bio}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 border-l-4 border-sz-500 bg-smoke-50 px-6 py-5 text-sm leading-relaxed text-ink-700">
            {g.vorstand.aufsichtsrat}
          </Reveal>
        </div>
      </section>

      <section id="zahlen" className="relative scroll-mt-28 overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
        <GhostText className="right-0 top-0 text-[14vw] font-bold">H1·26</GhostText>
        <div className="container-x relative">
          <Reveal className="max-w-2xl">
            <SectionTag dark>{g.zahlen.tag}</SectionTag>
            <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {g.zahlen.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {g.zahlen.rows.map((r) => (
              <StaggerItem key={r.label} className="bg-ink-950 px-6 py-8">
                <p className="font-display text-4xl font-bold text-sz-500">{r.value}</p>
                <p className="label-mono mt-3 text-smoke-500">{r.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="font-mono text-xs text-smoke-500">{g.zahlen.note}</p>
            <ArrowButton to="/investors" variant="primary">
              {g.zahlen.link}
            </ArrowButton>
          </Reveal>
        </div>
      </section>

      <section className="bg-smoke-50 py-24 lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>{g.leitbild.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {g.leitbild.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-ink-700">{g.leitbild.body}</p>
            <div className="mt-8 grid grid-cols-3 gap-px bg-ink-900/10 text-center">
              {[
                { v: <Counter value={25} suffix=".000" />, l: 'Mitarbeitende' },
                { v: <Counter value={200} suffix="+" />, l: 'Handelsstandorte' },
                { v: <Counter value={4} suffix="" />, l: 'Geschäftsstellen' },
              ].map((x, i) => (
                <div key={i} className="bg-white px-3 py-6">
                  <p className="font-display text-3xl font-bold text-sz-500">{x.v}</p>
                  <p className="label-mono mt-2 text-[10px] text-smoke-500">{x.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
