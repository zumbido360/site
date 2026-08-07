import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { Check } from '../components/Icons.jsx'

const experts = [
  {
    nome: 'Dra. Lisiane Holdefer',
    credencial: 'Fonoaudióloga e Psicóloga',
    foto: '/imagens/expert-lisiane.webp',
    alt: 'Dra. Lisiane Holdefer, fonoaudióloga e psicóloga, docente do Zumbido 360',
    bio: 'Fonoaudióloga e Psicóloga. Mestre e Doutora em Ciências Médicas pela Universidade de Brasília. Formada em Tinnitus Retraining Therapy e em CBT Hear. Especialista em Audiologia e em Acupuntura. Pós-graduada em Terapia Cognitivo-Comportamental e em Saúde Mental Integrativa. Pós-graduanda em Neurociências.',
    /* trechos literais do minicurrículo, usados como destaque */
    marcos: [
      'Mestre e Doutora em Ciências Médicas pela Universidade de Brasília',
      'Formada em Tinnitus Retraining Therapy e em CBT Hear',
      'Especialista em Audiologia e em Acupuntura',
    ],
  },
  {
    nome: 'Me. Thales Vanderlei',
    credencial: 'CRFA 4-12154',
    foto: '/imagens/expert-thales.webp',
    alt: 'Me. Thales Vanderlei, fonoaudiólogo, docente do Zumbido 360',
    bio: 'Doutorando e Mestre em Fonoaudiologia pela UFPB. Especialista em Audiologia e em Motricidade Orofacial pelo Conselho Federal de Fonoaudiologia (CFFa). Especialista em Processamento Auditivo Central pela Inspirar. Certificação Profissional Internacional em Mindfulness (MBCT). Formação em Neuromodulação Não Invasiva pelo Napen. Responsável técnico pela clínica Synapse.',
    marcos: [
      'Doutorando e Mestre em Fonoaudiologia pela UFPB',
      'Especialista em Audiologia e em Motricidade Orofacial pelo Conselho Federal de Fonoaudiologia (CFFa)',
      'Formação em Neuromodulação Não Invasiva pelo Napen',
    ],
  },
]

export default function QuemEnsina() {
  return (
    /* ================= 9. QUEM ENSINA (ref. Full Lips) ================= */
    <section className="section bg-surface" aria-labelledby="quem-ensina-title">
      <div className="container-lp">
        <SectionTitle
          eyebrow="Quem vai te ensinar"
          id="quem-ensina-title"
          align="center"
          intro="O Zumbido 360 nasceu da união de dois profissionais que compartilham o compromisso com a ciência, a prática baseada em evidências e a excelência no atendimento ao paciente com zumbido."
        >
          Quem conduz a formação.
        </SectionTitle>

        <div className="mt-16 space-y-8 md:mt-20 md:space-y-10">
          {experts.map((expert) => {
            return (
              <Reveal
                key={expert.nome}
                className="overflow-hidden rounded-[28px] border border-line bg-gelo shadow-soft"
              >
                <article className="grid items-stretch gap-0 lg:min-h-[544px] lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
                  {/* foto — sempre à esquerda, mesma proporção nos dois cards */}
                  <div className="relative min-h-[320px] bg-pastel/10 sm:min-h-[420px] lg:order-1">
                    <img
                      src={expert.foto}
                      alt={expert.alt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      width="1696"
                      height="2560"
                    />
                  </div>

                  {/* conteúdo */}
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:order-2 lg:p-14">
                    <span className="text-eyebrow font-semibold uppercase text-saude">
                      {expert.credencial}
                    </span>

                    <h3 className="mt-4 text-h2 font-normal text-oceano">{expert.nome}</h3>

                    <p className="mt-6 max-w-measure text-body font-light leading-relaxed text-ink-soft">
                      {expert.bio}
                    </p>

                    <ul className="mt-8 space-y-3 border-t border-line pt-7">
                      {expert.marcos.map((marco) => (
                        <li
                          key={marco}
                          className="flex items-start gap-3 text-small font-light text-oceano/85"
                        >
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-saude/12 text-saude">
                            <Check className="h-3 w-3" />
                          </span>
                          {marco}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
