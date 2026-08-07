import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import Eyebrow from '../components/Eyebrow.jsx'
import SplitText from '../components/SplitText.jsx'

export default function ChamadaFinal() {
  return (
    /* ================= 13. CHAMADA FINAL ================= */
    <section
      className="relative overflow-hidden bg-oceano pb-section pt-section"
      aria-labelledby="final-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-saude/[0.09] blur-3xl"
      />

      <div className="container-lp relative text-center">
        <Reveal className="mb-6 block">
          <Eyebrow tone="light">Próximo passo</Eyebrow>
        </Reveal>

        <SplitText as="h2" id="final-title" className="mx-auto max-w-[22ch] text-h2 text-gelo">
          Dê ao seu paciente com zumbido o atendimento que ele procura.
        </SplitText>

        <Reveal
          as="p"
          className="mx-auto mt-6 max-w-measure text-body font-light text-gelo/70"
        >
          Compreender o zumbido por inteiro é o que separa a técnica isolada do cuidado que muda a
          evolução clínica. Garanta sua vaga no lote atual e dê o próximo passo na sua formação.
        </Reveal>

        <Reveal className="mt-10 flex justify-center">
          <Button id="cta-final" />
        </Reveal>
      </div>
    </section>
  )
}
