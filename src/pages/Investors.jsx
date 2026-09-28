import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

export default function Investors() {
  const { t } = useLang()
  const inv = t('investors')

  return (
    <>
      <SEO page="investors" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={inv.hero.tag} title={inv.hero.title} sub={inv.hero.sub} img={IMG.presse} />

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>{inv.aktie.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {inv.aktie.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{inv.aktie.body}</p>
          </Reveal>
          <Stagger className="grid gap-px bg-ink-900/10 sm:grid-cols-2" gap={0.08}>
            {inv.aktie.facts.map((f) => (
              <StaggerItem key={f.k} className="bg-smoke-50 px-6 py-5">
                <p className="label-mono text-smoke-500">{f.k}</p>
                <p className="font-display mt-2 text-2xl font-bold">{f.v}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="ergebnisse" className="relative scroll-mt-28 overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
        <GhostText className="right-0 top-2 text-[13vw] font-bold">H1·26</GhostText>
        <div className="container-x relative grid items-start gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionTag dark>{inv.ergebnisse.tag}</SectionTag>
            <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {inv.ergebnisse.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-smoke-300">{inv.ergebnisse.body}</p>
            <p className="mt-8 font-mono text-xs leading-relaxed text-smoke-500">{inv.ergebnisse.downloads}</p>
          </Reveal>
          <Stagger className="grid gap-px bg-white/10 sm:grid-cols-2" gap={0.08}>
            {inv.ergebnisse.rows.map((r) => (
              <StaggerItem key={r.label} className="bg-ink-950 px-6 py-6">
                <p className="font-display text-3xl font-bold text-sz-500">{r.value}</p>
                <p className="label-mono mt-2 text-smoke-500">{r.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="governance" className="scroll-mt-28 bg-smoke-50 py-24 lg:py-32">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionTag>{inv.governance.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {inv.governance.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{inv.governance.body}</p>
          </Reveal>
          <Stagger className="flex flex-col gap-3" gap={0.08}>
            {inv.governance.items.map((i) => (
              <StaggerItem key={i} className="flex items-start gap-4 border border-ink-900/10 bg-white px-5 py-4">
                <span className="mt-1.5 block h-2 w-2 shrink-0 bg-sz-500" aria-hidden="true" />
                <span className="font-display text-lg font-semibold uppercase tracking-wide">{i}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="kalender" className="scroll-mt-28 bg-white py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{inv.kalender.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {inv.kalender.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 border-t border-ink-900/10" gap={0.06}>
            {inv.kalender.items.map((e) => (
              <StaggerItem key={e.label}>
                <div className="grid items-baseline gap-2 border-b border-ink-900/10 py-6 sm:grid-cols-[10rem_1fr]">
                  <span className="font-mono text-sm text-sz-600">{e.date}</span>
                  <span className="font-display text-lg font-semibold leading-snug lg:text-xl">{e.label}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <ArrowButton to="/press" variant="primary">
              {t('nav.press')}
            </ArrowButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
