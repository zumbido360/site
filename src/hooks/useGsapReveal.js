import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Reveal global: opacity 0→1 + y 24→0, dur .6, power3.out, stagger .08,
 * ScrollTrigger start "top 80%", once true.
 * Respeita prefers-reduced-motion (só opacidade, sem transform).
 * Elementos do hero (data-hero) ficam fora — têm timeline própria.
 */
export function useGsapReveal() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add(
      {
        motion: '(prefers-reduced-motion: no-preference)',
        reduced: '(prefers-reduced-motion: reduce)',
      },
      (ctx) => {
        const { motion } = ctx.conditions
        const items = gsap.utils.toArray('.js-reveal:not([data-hero])')

        if (!motion) {
          gsap.set(items, { opacity: 1, y: 0 })
          return
        }

        ScrollTrigger.batch(items, {
          start: 'top 80%',
          once: true,
          onEnter: (batch) =>
            gsap.fromTo(
              batch,
              { opacity: 0, y: 24 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.08,
                overwrite: true,
              },
            ),
        })

        // Parallax leve — só imagens marcadas com data-parallax.
        gsap.utils.toArray('[data-parallax]').forEach((el) => {
          gsap.to(el, {
            yPercent: Number(el.dataset.parallax) || -8,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          })
        })
      },
    )

    ScrollTrigger.refresh()

    return () => mm.revert()
  }, [])
}

/**
 * Timeline do hero: cascata eyebrow→h1→sub→cta→selo, total ≤0.8s.
 */
export function useHeroTimeline(scopeRef) {
  useEffect(() => {
    const scope = scopeRef.current
    if (!scope) return

    const ctx = gsap.context(() => {
      const targets = gsap.utils.toArray('[data-hero]', scope)
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (reduced) {
        gsap.set(targets, { opacity: 1, y: 0 })
        return
      }

      gsap.fromTo(
        targets,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.05,
        },
      )
    }, scope)

    return () => ctx.revert()
  }, [scopeRef])
}
