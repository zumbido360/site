import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import ScrollGallery from '../components/ScrollGallery.jsx'

/*
  9 fotos da galeria (700×500, usadas na proporção original 7:5) repetidas até
  preencher a grade de ponta a ponta. A ordem é embaralhada por uma sequência
  fixa — repete sem cair no padrão óbvio e sem mudar a cada render.
*/
const TOTAL_QUADROS = 18

const atendimentos = Array.from({ length: TOTAL_QUADROS }, (_, i) => {
  const n = ((i * 4 + Math.floor(i / 9) * 3) % 9) + 1
  return {
    src: `/imagens/galeria/${n}.webp`,
    alt: i < 9 ? `Atendimento e prática clínica no Zumbido 360 — foto ${n}` : '',
  }
})

const grade = [
  'Fisiopatologia e mecanismos do zumbido;',
  'Anamnese direcionada e aplicação de questionários;',
  'Exames auditivos complementares no zumbido;',
  'Acufenometria e caracterização psicoacústica;',
  'Raciocínio clínico a partir dos resultados da avaliação;',
  'Terapia sonora e terapia de habituação;',
  'Aconselhamento terapêutico;',
  'Investigação e tratamento do zumbido somatossensorial;',
  'Fotobiomodulação transmeatal e transcraniana;',
  'Estimulação transcutânea auricular do nervo vago (taVNS);',
  'Treinamento Auditivo Neurocognitivo;',
  'Estratégias cognitivo-comportamentais;',
  'Mindfulness aplicado ao manejo do zumbido;',
  'Neuromodulação não invasiva, incluindo tDCS e tRNS;',
  'Planejamento terapêutico e acompanhamento do paciente.',
]

export default function OQueAprender() {
  return (
    /* ================= 5. O QUE VOCÊ VAI APRENDER (grade bento) ================= */
    <section className="section bg-surface" aria-labelledby="aprender-title">
      <div className="container-lp">
        <SectionTitle
          eyebrow="Conteúdo programático"
          id="aprender-title"
          align="center"
          intro="Do primeiro atendimento ao acompanhamento da evolução clínica. Entre os principais conteúdos:"
        >
          O que você vai aprender.
        </SectionTitle>

        {/* galeria dos atendimentos, montada em arco pelo scroll */}
        <div className="full-bleed mt-14 md:mt-20">
          <ScrollGallery items={atendimentos} />
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-0 md:mt-16 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
          {grade.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              className="group flex items-start gap-5 border-b border-line py-6 transition-colors duration-300 hover:border-saude/35"
            >
              <span className="pt-0.5 text-small font-semibold tabular-nums text-saude/70 transition-colors duration-300 group-hover:text-saude">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-[1.0625rem] font-light leading-snug text-oceano/90">
                {item}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
