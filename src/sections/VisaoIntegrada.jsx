import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'

export default function VisaoIntegrada() {
  return (
    /* ================= 6. FORMAÇÃO INTEGRADA E APLICADA (escuro) ================= */
    <section className="section relative overflow-hidden bg-oceano" aria-labelledby="integrada-title">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[820px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-saude/[0.08] blur-3xl"
      />

      <div className="container-lp relative">
        <SectionTitle
          eyebrow="Visão integrada"
          id="integrada-title"
          tone="light"
          align="center"
        >
          Uma visão integrada, aplicada ao consultório.
        </SectionTitle>

        <Reveal
          as="p"
          className="mx-auto mt-8 max-w-measure text-center text-body font-light text-gelo/70"
        >
          O paciente com zumbido tem necessidades auditivas, emocionais, cognitivas, musculares e
          sensoriais. Por isso o Zumbido 360 trabalha com uma visão integrada: você aprende a
          reconhecer os fatores de cada caso, escolher as abordagens adequadas, combinar estratégias
          e acompanhar a resposta por medidas clínicas, audiológicas e funcionais.
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl rounded-card border border-white/10 bg-white/[0.04] px-8 py-10 text-center md:px-12">
          <p className="text-[1.25rem] font-light leading-relaxed text-gelo md:text-[1.375rem]">
            O objetivo é transformar ciência em conduta clínica{' '}
            <span className="font-medium text-saude">organizada, individualizada e aplicável</span>{' '}
            à sua rotina.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
