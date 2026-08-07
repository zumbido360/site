import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Galeria dirigida pelo scroll (ref. Skiper 32).
 * Fase 1 (entrada): as colunas sobem em arco — a central à frente, as laterais
 * mais baixas e menores — e se acomodam numa grade cheia.
 * Fase 2 (saída): o mesmo arco, invertido, continuando a subir. Sem inclinação
 * e sem perder opacidade.
 * O arco é recalculado por breakpoint (3 / 5 / 7 colunas) via gsap.matchMedia,
 * com amplitude menor no mobile para caber na tela.
 */
export default function ScrollGallery({ items, className = '' }) {
  const scope = useRef(null)
  const planeRef = useRef(null)

  useEffect(() => {
    const el = scope.current
    const plane = planeRef.current
    if (!el || !plane) return

    const mm = gsap.matchMedia()

    mm.add(
      {
        mobile: '(max-width: 639px)',
        tablet: '(min-width: 640px) and (max-width: 1023px)',
        desktop: '(min-width: 1024px)',
        motion: '(prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const { mobile, tablet, motion } = context.conditions

        // só os quadros visíveis no breakpoint atual entram na conta
        const cards = gsap
          .utils
          .toArray('.scroll-gallery-item', plane)
          .filter((card) => card.offsetParent !== null)

        if (!motion || !cards.length) {
          gsap.set(cards, { opacity: 1, yPercent: 0, scale: 1 })
          return
        }

        const total = mobile ? 3 : tablet ? 4 : 6
        const center = (total - 1) / 2

        // no mobile o arco é mais curto: a coluna lateral não pode sair da tela
        const rise = mobile ? 45 : 60
        const spread = mobile ? 70 : tablet ? 110 : 150
        const exitRise = mobile ? 38 : 50
        const exitSpread = mobile ? 65 : tablet ? 100 : 140

        cards.forEach((card, i) => {
          const col = i % total
          const dist = Math.abs(col - center) / (center || 1)

          gsap.fromTo(
            card,
            {
              yPercent: rise + dist * spread,
              scale: (mobile ? 0.88 : 0.82) - dist * (mobile ? 0.03 : 0.06),
              opacity: 0,
            },
            {
              yPercent: 0,
              scale: 1,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: el,
                start: mobile ? 'top 95%' : 'top 88%',
                end: mobile ? 'top 25%' : 'top 18%',
                scrub: 0.8,
              },
            },
          )

          gsap.to(card, {
            yPercent: -(exitRise + dist * exitSpread),
            ease: 'none',
            // só captura o valor atual quando a saída começa (depois da entrada)
            immediateRender: false,
            scrollTrigger: {
              trigger: el,
              start: mobile ? 'bottom 88%' : 'bottom 82%',
              end: mobile ? 'bottom 12%' : 'bottom 8%',
              scrub: 0.8,
            },
          })
        })
      },
    )

    ScrollTrigger.refresh()
    return () => mm.revert()
  }, [])

  return (
    <div ref={scope} className={`scroll-gallery ${className}`}>
      <ul
        ref={planeRef}
        className="scroll-gallery-grid -ml-[11%] grid w-[122%] grid-cols-3 gap-2 sm:ml-0 sm:w-full sm:grid-cols-4 md:gap-2.5 lg:grid-cols-6"
        aria-label="Atendimentos conduzidos pelos experts"
      >
        {items.map((item, i) => (
          <li
            key={`${item.src}-${i}`}
            /* 3 linhas em cada breakpoint: 9 quadros no mobile, 12 no tablet, 18 no desktop */
            className={`scroll-gallery-item overflow-hidden rounded-[10px] ${
              i >= 12 ? 'hidden lg:block' : i >= 9 ? 'hidden sm:block' : ''
            }`}
          >
            {/* proporção original das fotos: 700×500 (7:5) */}
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="block aspect-[7/5] w-full object-cover"
              width="700"
              height="500"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
