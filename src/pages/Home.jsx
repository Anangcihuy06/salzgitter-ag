import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react'
import { useRef } from 'react'
import { useLang, LocalizedLink } from '../i18n/LanguageContext'
import SEO, { ORGANIZATION_JSON_LD } from '../components/SEO'
import { Counter, Reveal, SectionTag, Stagger, StaggerItem } from '../components/Motion'
import { WordReveal, GhostText } from '../components/Premium'
import { IMG } from '../i18n/dictionaries'

function StatValue({ s }) {
  if (s.plain) return <span className="font-display text-5xl font-bold text-sz-500 lg:text-6xl">{s.value}</span>
  if (s.decimal)
    return (
      <span className="font-display text-5xl font-bold text-sz-500 lg:text-6xl">
        <Counter value={s.value * 10} suffix="" className="" />
        <span>,{Math.round((s.value % 1) * 10)}</span>
        <span className="text-2xl lg:text-3xl">{s.suffix}</span>
      </span>
    )
  return (
    <span className="font-display text-5xl font-bold text-sz-500 lg:text-6xl">
      <Counter value={s.value} suffix="" />
      <span className="text-2xl lg:text-3xl">{s.suffix}</span>
    </span>
  )
}

export default function Home() {
  const { lang, t } = useLang()
  const hero = t('home')
  const strategy = t('home.strategy')
  const stab = t('home.stabilitaet')
  const div = t('home.divisions')
  const news = t('home.news')
  const salcos = t('home.salcos')
  const heroRef = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduced ? '0%' : '22%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduced ? 1 : 1.12])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <>
      <SEO page="home" jsonLd={ORGANIZATION_JSON_LD} />

      <section ref={heroRef} className="relative flex min-h-screen items-end overflow-hidden bg-ink-950 text-white">
        <motion.img
          src={IMG.hero}
          alt=""
          style={{ y: imgY, scale: imgScale }}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          loading="eager"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" aria-hidden="true" />
        <div className="absolute inset-0 grid-lines-dark" aria-hidden="true" />
        <motion.div style={{ opacity: fade }} className="container-x relative pt-32 pb-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <p className="label-mono text-sz-400">{hero.heroTag}</p>
            <h1 className="font-display mt-6 text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              <WordReveal text={hero.heroTitle} />
              <br />
              <WordReveal text={hero.heroTitleAccent} accentClass="text-sz-500" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-smoke-300"
            >
              {hero.heroSub}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <LocalizedLink
                to="/strategy"
                className="bg-sz-500 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:bg-sz-600"
              >
                {t('common.more')}
              </LocalizedLink>
              <LocalizedLink
                to="/business"
                className="border border-white/30 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest text-white transition-colors hover:border-sz-500 hover:text-sz-400"
              >
                {t('nav.business')}
              </LocalizedLink>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
          aria-hidden="true"
        >
          <span className="label-mono text-smoke-500">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="block h-8 w-px bg-sz-500"
          />
        </motion.div>
      </section>

      <section className="border-b border-ink-900/10 bg-ink-950 text-white">
        <Stagger className="container-x grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4" gap={0.08}>
          {hero.stats.map((s) => (
            <StaggerItem key={s.label} className="bg-ink-950 px-6 py-10 lg:px-8 lg:py-14">
              <StatValue s={s} />
              <p className="label-mono mt-4 text-smoke-500">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <GhostText className="right-0 top-6 text-[16vw] font-bold lg:top-0">2030</GhostText>
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <SectionTag>{strategy.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {strategy.title}
            </h2>
            <blockquote className="mt-8 border-l-4 border-sz-500 pl-6 text-xl leading-relaxed text-ink-700">
              {strategy.quote}
              <footer className="label-mono mt-4 text-smoke-500">{strategy.author}</footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-lg leading-relaxed text-ink-700">{strategy.body}</p>
            <LocalizedLink
              to="/strategy"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-widest text-sz-600"
            >
              {strategy.link}
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LocalizedLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-ink-950 py-24 text-white lg:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -top-4 -left-4 h-24 w-24 border-l-2 border-t-2 border-sz-500" aria-hidden="true" />
            <img src={IMG.salcosProdukt} alt={salcos.title} className="relative w-full object-cover" loading="lazy" />
            <div className="absolute -right-4 -bottom-4 h-24 w-24 border-r-2 border-b-2 border-sz-500" aria-hidden="true" />
          </Reveal>
          <div>
            <Reveal>
              <SectionTag dark>{salcos.tag}</SectionTag>
              <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
                {salcos.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-smoke-300">{salcos.body}</p>
            </Reveal>
            <Stagger className="mt-8 flex flex-col gap-3" gap={0.08}>
              {salcos.points.map((p) => (
                <StaggerItem key={p} className="flex items-start gap-3 border border-white/10 bg-white/[0.03] px-5 py-3.5">
                  <span className="mt-1.5 block h-2 w-2 shrink-0 bg-sz-500" aria-hidden="true" />
                  <span className="text-smoke-100">{p}</span>
                </StaggerItem>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <LocalizedLink
                to="/sustainability"
                className="group mt-8 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-widest text-sz-400"
              >
                {salcos.link}
                <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </LocalizedLink>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-smoke-50 py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{div.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {div.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" gap={0.1}>
            {div.items.map((d, i) => (
              <StaggerItem key={d.title}>
                <LocalizedLink
                  to="/business"
                  className="group block h-full border border-ink-900/10 bg-white transition-shadow hover:shadow-xl hover:shadow-ink-950/10"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img src={d.img} alt="" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" aria-hidden="true" />
                    <span className="absolute top-3 left-3 bg-sz-500 px-2 py-1 font-mono text-[10px] font-semibold text-white">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{d.desc}</p>
                  </div>
                </LocalizedLink>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <LocalizedLink
              to="/business"
              className="inline-flex items-center gap-3 border border-ink-900/20 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:border-sz-500 hover:text-sz-600"
            >
              {div.link}
            </LocalizedLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <SectionTag>{news.tag}</SectionTag>
            <h2 className="font-display sz-rule mt-5 pt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {news.title}
            </h2>
          </Reveal>
          <Stagger className="mt-12 border-t border-ink-900/10" gap={0.06}>
            {news.items.map((n) => (
              <StaggerItem key={n.title}>
                <LocalizedLink to="/press" className="group grid items-baseline gap-2 border-b border-ink-900/10 py-6 sm:grid-cols-[7rem_10rem_1fr]">
                  <span className="font-mono text-xs text-sz-600">{n.date}</span>
                  <span className="label-mono text-smoke-500">{n.tag}</span>
                  <span className="font-display text-lg font-semibold leading-snug transition-colors group-hover:text-sz-600 lg:text-xl">
                    {n.title}
                  </span>
                </LocalizedLink>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-10 text-center">
            <LocalizedLink
              to="/press"
              className="inline-flex items-center gap-3 border border-ink-900/20 px-8 py-4 font-mono text-sm font-semibold uppercase tracking-widest transition-colors hover:border-sz-500 hover:text-sz-600"
            >
              {news.link}
            </LocalizedLink>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
        <GhostText className="left-0 bottom-0 text-[14vw] font-bold">SZAG</GhostText>
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <SectionTag dark>{stab.tag}</SectionTag>
            <h2 className="font-display mt-5 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl">
              {stab.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-smoke-300">{stab.body}</p>
            <LocalizedLink
              to="/group"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase tracking-widest text-sz-400"
            >
              {stab.link}
              <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </LocalizedLink>
          </Reveal>
          <Stagger className="flex flex-col gap-px bg-white/10" gap={0.08}>
            {stab.points.map((p) => (
              <StaggerItem key={p} className="bg-ink-950 px-6 py-5">
                <span className="font-display text-lg font-semibold uppercase tracking-wide">{p}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
