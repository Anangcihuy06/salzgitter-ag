import { motion, useScroll, useSpring, useReducedMotion } from 'motion/react'
import Lenis from 'lenis'
import { useEffect } from 'react'

export function SmoothScroll() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, wheelMultiplier: 1 })
    window.__lenis = lenis
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      window.__lenis = null
    }
  }, [reduced])

  return null
}

export function scrollToHash(hash) {
  const el = document.querySelector(hash)
  if (!el) return
  const lenis = window.__lenis
  if (lenis) {
    lenis.scrollTo(el, { offset: -96, duration: 1.4 })
  } else {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.4 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-sz-500"
      aria-hidden="true"
    />
  )
}

export function Grain() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[55] opacity-[0.05] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: '240px 240px',
      }}
      aria-hidden="true"
    />
  )
}

export function GhostText({ children, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display pointer-events-none absolute select-none leading-none text-transparent ${className}`}
      style={{ WebkitTextStroke: '1.5px rgba(235,102,25,0.16)' }}
    >
      {children}
    </span>
  )
}

export function WordReveal({ text, className = '', accentClass = '' }) {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${accentClass}`}
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
