import SectionTitle from '../components/SectionTitle.jsx'
import BentoCard from '../components/BentoCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { GraphicOndas, GraphicNeuro } from '../components/CardGraphic.jsx'

const cards = [
  {
    text: 'Programa completo, da fisiopatologia ao tratamento;',
    highlight: 'Programa completo',
    graphic: <GraphicOndas />,
    span: 'lg:col-span-2',
  },
  {
    text: 'Conduzido por dois profissionais com experiência clínica e acadêmica;',
    highlight: 'dois profissionais',
  },
  {
    text: 'Conteúdo organizado de forma progressiva;',
    highlight: 'forma progressiva',
  },
  {
    text: 'Integração entre avaliação, diagnóstico funcional e intervenção;',
    highlight: 'Integração',
  },
  {
    text: 'Discussão de casos clínicos reais;',
    highlight: 'casos clínicos reais',
  },
  {
    text: 'Protocolos e possibilidades de aplicação;',
    highlight: 'Protocolos',
  },
  {
    text: 'Lives mensais para dúvidas e aprofundamento;',
    highlight: 'Lives mensais',
  },
  {
    text: 'Tecnologias e recursos terapêuticos atuais;',
    highlight: 'Tecnologias',
  },
  {
    text: 'Aula bônus sobre neuromodulação;',
    highlight: 'neuromodulação',
    graphic: <GraphicNeuro />,
    span: 'lg:col-span-2',
  },
  {
    text: 'Encontro prático presencial ao final.',
    highlight: 'presencial',
  },
]

export default function Diferenciais() {
  return (
    /* ================= 8. DIFERENCIAIS (bento clean, ref. Usi Telecom) ================= */
    <section className="section bg-oceano" aria-labelledby="diferenciais-title">
      <div className="container-lp">
        <SectionTitle eyebrow="Diferenciais" id="diferenciais-title" tone="light" align="center">
          O que torna o Zumbido 360 diferente.
        </SectionTitle>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.text} className={card.span ?? ''}>
              <BentoCard
                {...card}
                className={`h-full ${card.graphic ? 'min-h-[320px] sm:min-h-[264px]' : ''}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
