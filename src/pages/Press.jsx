import { useLang } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import PageHero, { ArrowButton } from '../components/PageHero'
import { Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

export default function Press() {
  const { t } = useLang()
  const p = t('press')

  return (
    <>
      <SEO page="press" jsonLd={ORGANIZATION_JSON_LD} />
      <PageHero tag={p.hero.tag} title={p.hero.title} sub={p.hero.sub} img={IMG.presse} />

      <section className="bg-smoke-50 py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{p.meldungen.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {p.meldungen.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3" gap={0.08}>
            {p.meldungen.items.map((n, i) => (
              <StaggerItem key={n.title}>
                <article className={`group h-full border border-ink-900/10 bg-white transition-shadow hover:shadow-xl hover:shadow-ink-950/10 ${i === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}>
                  <div className={`relative overflow-hidden ${i === 0 ? 'h-56' : 'h-40'}`}>
                    <img
                      src={n.img}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      aria-hidden="true"
                    />
                    <span className="absolute top-3 left-3 bg-ink-950/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-white">
                      {n.cat}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-xs text-sz-600">{n.date}</p>
                    <h3 className={`font-display mt-2 font-bold leading-snug transition-colors group-hover:text-sz-600 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>
                      {n.title}
                    </h3>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section id="kontakt" className="scroll-mt-28 bg-ink-950 py-20 text-white lg:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionTag dark>{p.kontakt.tag}</SectionTag>
            <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {p.kontakt.title}
            </h2>
            <p className="mt-6 leading-relaxed text-smoke-300">{p.kontakt.body}</p>
          </Reveal>
          <Stagger className="grid gap-px bg-white/10 sm:grid-cols-2" gap={0.08}>
            <StaggerItem className="bg-ink-950 px-6 py-8">
              <p className="label-mono text-smoke-500">E-Mail</p>
              <a href={`mailto:${p.kontakt.email}`} className="font-display mt-3 block break-all text-lg font-semibold text-sz-400 hover:text-sz-300">
                {p.kontakt.email}
              </a>
            </StaggerItem>
            <StaggerItem className="bg-ink-950 px-6 py-8">
              <p className="label-mono text-smoke-500">Telefon</p>
              <a href={`tel:${p.kontakt.phone.replace(/[^+\d]/g, '')}`} className="font-display mt-3 block text-lg font-semibold text-sz-400 hover:text-sz-300">
                {p.kontakt.phone}
              </a>
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section id="stil" className="relative scroll-mt-28 overflow-hidden bg-white py-24 lg:py-32">
        <GhostText className="right-0 top-4 text-[14vw] font-bold">STIL</GhostText>
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <img src={IMG.stil} alt={p.stil.title} className="w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <SectionTag>{p.stil.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {p.stil.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-700">{p.stil.body}</p>
            <ArrowButton to="/contact" variant="primary">
              {t('nav.contact')}
            </ArrowButton>
          </Reveal>
        </div>
      </section>
    </>
  )
}
