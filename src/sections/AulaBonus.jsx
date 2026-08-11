import SectionTitle from '../components/SectionTitle.jsx'
import LoteCard from '../components/LoteCard.jsx'
import Reveal from '../components/Reveal.jsx'
import SeloGiratorio from '../components/SeloGiratorio.jsx'
import { ArrowUpRight, Clock } from '../components/Icons.jsx'

/* checkouts da aula bônus na Kiwify */
const CHECKOUT_BONUS_COM_CURSO = 'https://pay.kiwify.com.br/3q3CtFE'
const CHECKOUT_BONUS_AVULSO = 'https://pay.kiwify.com.br/FA52U9f'

const comCurso = [
  { lote: '1º lote', pix: 'R$ 400', cartao: 'R$ 500', destaque: true },
  { lote: '2º lote', pix: 'R$ 500', cartao: 'R$ 600' },
  { lote: '3º lote', pix: 'R$ 600', cartao: 'R$ 700' },
]

const soBonus = [
  { lote: '1º lote', pix: 'R$ 1.000', cartao: 'R$ 1.100', destaque: true },
  { lote: '2º lote', pix: 'R$ 1.100', cartao: 'R$ 1.200' },
  { lote: '3º lote', pix: 'R$ 1.200', cartao: 'R$ 1.300' },
]

function GrupoDeLotes({ titulo, lotes, prefix, cta, href }) {
  return (
    <div>
      <Reveal as="h3" className="text-h3 font-medium text-oceano">
        {titulo}
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {lotes.map((lote) => (
          <Reveal key={`${prefix}-${lote.lote}`} className="h-full">
            <LoteCard {...lote} tone="dark" compact parcelamento={false} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-6">
        <a
          href={href}
          id={`cta-${prefix}`}
          data-cta={`cta-${prefix}`}
          className="group inline-flex items-center gap-3 whitespace-nowrap rounded-pill bg-saude py-2 pl-6 pr-2 text-[0.9375rem] font-medium text-gelo transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
        >
          {cta}
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gelo/95 text-saude transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
      </Reveal>
    </div>
  )
}

export default function AulaBonus() {
  return (
    /* ================= 10. AULA BÔNUS DE NEUROMODULAÇÃO (opcional, venda separada) ================= */
    <section className="section" aria-labelledby="bonus-title">
      <div className="container-lp">
        <div className="rounded-[32px] border border-line bg-white/70 p-7 shadow-soft md:p-14 lg:p-16">
          {/* --- topo: texto + mockup --- */}
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
            <div>
              <Reveal className="mb-7 flex flex-wrap gap-2.5">
                {['Módulo opcional', 'Venda separada', '20 horas-aula'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill border border-saude/30 bg-saude/[0.07] px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-saude"
                  >
                    {tag}
                  </span>
                ))}
              </Reveal>

              <SectionTitle id="bonus-title">
                Aula bônus online: Neuromodulação aplicada ao zumbido.
              </SectionTitle>

              <Reveal as="p" className="mt-7 max-w-measure text-body font-light text-ink-soft">
                A Aula de Neuromodulação Aplicada ao Zumbido (tDCS e tRNS) é um módulo bônus online,{' '}
                <strong className="font-medium text-oceano">
                  não incluso na matrícula do curso principal
                </strong>{' '}
                e comercializado separadamente.
              </Reveal>

              <Reveal as="p" className="mt-5 max-w-measure text-body font-light text-ink-soft">
                Para atuação clínica com tDCS, o CFFa estabelece a necessidade de capacitação
                teórico-prática, específica e adequada, além de conhecimento em Suporte Básico de
                Vida, este de responsabilidade de cada profissional (Resolução CFFa nº 650/2022,
                art. 3º e Resolução nº 662/2022).
              </Reveal>
            </div>

            {/* mockup do bônus + selo dourado em overlay */}
            <Reveal className="relative lg:-mr-20 xl:-mr-28">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 bottom-8 top-8 -z-10 rounded-[40px] bg-saude/[0.10] blur-2xl"
              />

              <img
                src="/imagens/mockup-bonus.webp"
                alt="Prévia da aula bônus online de neuromodulação aplicada ao zumbido"
                loading="lazy"
                decoding="async"
                data-parallax="-6"
                className="block w-full drop-shadow-[0_28px_60px_rgba(13,31,32,0.20)]"
                width="3187"
                height="2188"
              />

              {/* selo giratório do bônus — mesmo desenho do hero, em dourado */}
              <SeloGiratorio className="absolute left-[25%] top-[13%] aspect-square w-[24%] max-w-[132px] -translate-x-1/2 -translate-y-1/2" />
            </Reveal>
          </div>

          {/* --- prática presencial --- */}
          <Reveal className="mt-14 overflow-hidden rounded-card border border-line bg-surface md:mt-16">
            <div className="grid gap-6 p-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] md:items-center md:gap-12 md:p-10">
              <div>
                <span className="text-eyebrow font-semibold uppercase text-saude">
                  Opcional · inscrição à parte
                </span>
                <h3 className="mt-3 text-h3 font-medium text-oceano">Prática presencial</h3>
              </div>

              <p className="max-w-measure text-body font-light text-ink-soft">
                Além da aula online, há um treinamento prático presencial em{' '}
                <strong className="font-medium text-oceano">Brasília/DF, em maio de 2027</strong>, no
                dia seguinte à prática do curso completo, com demonstração dos equipamentos,
                discussão de protocolos e treinamento supervisionado. A prática presencial é
                opcional, possui inscrição e investimento próprios e não está incluída no valor da
                aula bônus.
              </p>
            </div>
          </Reveal>

          {/* --- lotes da aula bônus --- */}
          <div className="mt-16 space-y-12 md:mt-20 md:space-y-14">
            <GrupoDeLotes
              titulo="Investimento — condição especial para quem se inscreve no curso completo"
              lotes={comCurso}
              prefix="bonus-com-curso"
              cta="Garantir a aula bônus"
              href={CHECKOUT_BONUS_COM_CURSO}
            />

            <GrupoDeLotes
              titulo="Investimento — para inscritos apenas na aula bônus"
              lotes={soBonus}
              prefix="bonus-avulso"
              cta="Garantir só a aula bônus"
              href={CHECKOUT_BONUS_AVULSO}
            />
          </div>

          <Reveal as="p" className="mt-8 text-small font-light italic text-ink-faint">
            No Pix, o participante garante o menor valor de cada lote.
          </Reveal>

          <Reveal className="mt-5 flex items-start gap-3 rounded-card border border-line bg-surface p-5">
            <span className="mt-0.5 text-saude">
              <Clock className="h-4 w-4" />
            </span>
            <p className="text-small font-light text-ink-soft">
              As aulas ficarão gravadas em uma plataforma para alunos durante um ano.
            </p>
          </Reveal>

          {/* âncora para a seção de lotes do curso */}
          <Reveal className="mt-10 flex flex-wrap items-center gap-5 rounded-card border border-saude/25 bg-saude/[0.06] p-7">
            <p className="max-w-measure flex-1 text-body font-light text-ink-soft">
              A condição especial acima vale para quem já está inscrito no curso completo.
            </p>

            <a
              href="#investimento"
              id="cta-bonus-lotes"
              data-cta="cta-bonus-lotes"
              className="group inline-flex items-center gap-3 whitespace-nowrap rounded-pill bg-saude py-2 pl-6 pr-2 text-[0.9375rem] font-medium text-gelo transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
            >
              Ver os lotes do curso
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gelo/95 text-saude transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </Reveal>

          {/* --- aviso legal --- */}
          <Reveal className="mt-8 rounded-card border border-alerta/20 bg-alerta/[0.04] p-7">
            <h3 className="text-h3 font-medium text-oceano">Aviso importante</h3>
            <p className="mt-3 max-w-measure text-small font-light leading-relaxed text-ink-soft">
              A inscrição é opcional e independente do curso principal. É responsabilidade de cada
              participante assegurar que atende às exigências legais, éticas e de capacitação do seu
              Conselho Profissional. A participação na aula bônus e na prática presencial não
              substitui essas exigências.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
