import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { withHighlight } from '../components/highlight.jsx'

const bullets = [
  { text: 'Carga horária total de 50 horas-aula;', key: '50 horas-aula' },
  {
    text: 'Um encontro principal por mês, em formato progressivo;',
    key: 'encontro principal por mês',
  },
  {
    text: 'Live mensal de uma hora para dúvidas e discussão de casos;',
    key: 'Live mensal',
  },
  { text: 'Aulas teóricas, demonstrações práticas e protocolos;', key: 'demonstrações práticas' },
  {
    text: 'Encontro presencial ao final para integração e prática.',
    key: 'Encontro presencial',
  },
]

export default function ComoFunciona() {
  return (
    /* ================= 4. COMO FUNCIONA A FORMAÇÃO (lista 01→05, ref. CORE) ================= */
    <section className="section" aria-labelledby="como-funciona-title">
      <div className="container-lp grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle eyebrow="Formato" id="como-funciona-title">
            Como será o curso.
          </SectionTitle>

          <Reveal as="p" className="mt-6 max-w-measure text-body font-light text-ink-soft">
            Formato progressivo, com um encontro principal por mês. Entre os encontros, uma live
            mensal de uma hora esclarece dúvidas, aprofunda conteúdos e discute casos clínicos
            reais. Ao final, um encontro presencial integra os conteúdos e a vivência prática da
            avaliação e do tratamento.
          </Reveal>

          <Reveal className="mt-9">
            <Button id="cta-como-funciona" variant="outline" />
          </Reveal>
        </div>

        <ol className="border-t border-line">
          {bullets.map((item, i) => (
            <Reveal
              as="li"
              key={item.text}
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 border-b border-line py-7 md:gap-x-10"
            >
              <span className="pt-1 text-small font-semibold tabular-nums text-saude">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="max-w-measure text-[1.0625rem] font-light text-oceano/90">
                {withHighlight(item.text, item.key)}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
