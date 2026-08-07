import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Apresentacao() {
  const scope = useRef(null)

  /* ícone 3d em overlay: sobe devagar e vai desfocando conforme o scroll */
  useEffect(() => {
    const el = scope.current
    if (!el) return

    const ctx = gsap.context(() => {
      const icone = el.querySelector('[data-icone-3d]')
      if (!icone) return

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(icone, { opacity: 0.5, filter: 'blur(0px)' })
        return
      }

      gsap.fromTo(
        icone,
        { yPercent: 16, opacity: 0.62, filter: 'blur(0px)', rotate: -6 },
        {
          yPercent: -22,
          opacity: 0.18,
          filter: 'blur(9px)',
          rotate: 4,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'bottom 25%',
            scrub: 0.9,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return (
    /* ================= 2. APRESENTAÇÃO ================= */
    <section ref={scope} className="section" aria-labelledby="apresentacao-title">
      <div className="container-lp grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
        <div>
          <SectionTitle eyebrow="A formação" id="apresentacao-title">
            Uma formação para compreender o zumbido por{' '}
            <span className="marker">inteiro</span>.
          </SectionTitle>

          <Reveal as="p" className="mt-7 max-w-measure text-body font-light text-ink-soft">
            O Zumbido 360 prepara o fonoaudiólogo para atuar no zumbido com método: avaliar com
            critério, raciocinar com segurança e definir o tratamento certo para cada paciente.
          </Reveal>

          <Reveal as="p" className="mt-6 max-w-measure text-body font-light text-ink-soft">
            Conduzido pela Dra. Lisiane Holdefer e pelo Me. Thales Vanderlei, o curso une ciência,
            experiência clínica e prática para acompanhar todas as etapas do atendimento, do
            primeiro contato à evolução do paciente. Mais do que técnicas isoladas, você desenvolve
            o raciocínio clínico para compreender cada caso e construir um plano individualizado.
          </Reveal>
        </div>

        {/* Mockup do curso + ícone 3d em overlay */}
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-8 bottom-6 top-10 -z-10 rounded-[36px] bg-saude/[0.09] blur-2xl"
          />

          <img
            src="/imagens/mockup-curso.webp"
            alt="Prévia das aulas e materiais da formação Zumbido 360"
            loading="lazy"
            decoding="async"
            data-parallax="-6"
            className="relative mx-auto block w-full max-w-[400px]"
            width="1453"
            height="1808"
          />

          <img
            src="/imagens/icone-3d.webp"
            alt=""
            aria-hidden="true"
            data-icone-3d
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute left-2 top-0 w-[34%] max-w-[170px] lg:left-4"
            width="2048"
            height="2048"
          />
        </Reveal>
      </div>
    </section>
  )
}
