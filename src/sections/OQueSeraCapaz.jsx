import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { Check } from '../components/Icons.jsx'

const resultados = [
  'Avaliar o paciente com zumbido de forma direcionada;',
  'Interpretar questionários, exames audiológicos e acufenometria;',
  'Identificar os fatores relacionados ao sintoma;',
  'Organizar o raciocínio clínico com objetividade;',
  'Definir metas terapêuticas claras;',
  'Selecionar e combinar estratégias de intervenção;',
  'Acompanhar e documentar a evolução do paciente;',
  'Conduzir o atendimento com segurança e individualização.',
]

export default function OQueSeraCapaz() {
  return (
    /* ================= 7. O QUE VOCÊ SERÁ CAPAZ DE FAZER ================= */
    <section className="section" aria-labelledby="capaz-title">
      <div className="container-lp grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle
            eyebrow="Resultados"
            id="capaz-title"
            intro="Ao concluir o Zumbido 360, você estará mais preparado para:"
          >
            O que muda na sua clínica depois do curso.
          </SectionTitle>

          <Reveal className="mt-9">
            <Button id="cta-resultados" />
          </Reveal>
        </div>

        <div>
          <ul className="grid gap-x-10 sm:grid-cols-2">
            {resultados.map((item) => (
              <Reveal
                as="li"
                key={item}
                className="flex gap-4 border-b border-line py-5 text-[1.0625rem] font-light text-oceano/90"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-saude/12 text-saude">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </Reveal>
            ))}
          </ul>

          <Reveal
            as="p"
            className="mt-10 max-w-measure border-l-2 border-saude/50 pl-6 text-body font-light text-ink-soft"
          >
            Mais que um curso de técnicas, o Zumbido 360 forma o profissional que compreende o
            paciente por inteiro e transforma a avaliação em decisões clínicas seguras e efetivas.
          </Reveal>
        </div>
      </div>
    </section>
  )
}
