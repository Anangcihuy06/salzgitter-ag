import { motion } from 'motion/react'
import { LocalizedLink } from '../i18n/LanguageContext'
import { SectionTag } from './Motion'

export default function PageHero({ tag, title, sub, img }) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-36 pb-20 text-white lg:pt-44 lg:pb-28">
      <div className="absolute inset-0 grid-lines-dark" aria-hidden="true" />
      {img && (
        <div className="absolute inset-0 opacity-25" aria-hidden="true">
          <img src={img} alt="" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/80 to-ink-950/40" />
        </div>
      )}
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <SectionTag dark>{tag}</SectionTag>
          <h1 className="font-display mt-5 text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-smoke-300">{sub}</p>
        </motion.div>
      </div>
    </section>
  )
}

export function ArrowButton({ to, children, variant = 'primary', external = false }) {
  const cls =
    variant === 'primary'
      ? 'bg-sz-500 text-white hover:bg-sz-600'
      : 'border border-white/30 text-white hover:border-sz-500 hover:text-sz-300'
  const final = `${cls} inline-flex items-center gap-2 rounded-none px-7 py-3.5 font-semibold transition-colors`
  const inner = (
    <>
      <span>{children}</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  )
  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={final}>
        {inner}
      </a>
    )
  }
  return (
    <LocalizedLink to={to} className={final}>
      {inner}
    </LocalizedLink>
  )
}
