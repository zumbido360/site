import SectionTitle from '../components/SectionTitle.jsx'
import LoteCard from '../components/LoteCard.jsx'
import Reveal from '../components/Reveal.jsx'
import { Shield, Flask, Lock } from '../components/Icons.jsx'

/* checkout do 1º lote na Kiwify */
const CHECKOUT_LOTE_1 = 'https://pay.kiwify.com.br/3q3CtFE?hideCard=true&hideBoleto=true'

const lotes = [
  {
    lote: '1º lote',
    prazo: 'Até 31 de agosto.',
    pix: 'R$ 3.800',
    condicao: 'Também dá para dividir em 2 cartões ou pagar com cartão + Pix.',
    destaque: true,
    ctaId: 'cta-lote-1',
    href: CHECKOUT_LOTE_1,
  },
  {
    lote: '2º lote',
    prazo: 'Até 30 de setembro.',
    pix: 'R$ 4.200',
    cartao: 'R$ 4.400',
    ctaId: 'cta-lote-2',
  },
  {
    lote: '3º lote (último)',
    prazo: 'Após 30 de setembro.',
    pix: 'R$ 4.400',
    cartao: 'R$ 4.600',
    ctaId: 'cta-lote-3',
  },
]

const selos = [
  { icon: <Lock className="h-4 w-4" />, text: 'Compra segura' },
  { icon: <Flask className="h-4 w-4" />, text: 'Base científica' },
  { icon: <Shield className="h-4 w-4" />, text: 'Dados protegidos' },
]

export default function Investimento() {
  return (
    /* ================= 11. INVESTIMENTO (escuro, oferta principal) ================= */
    <section
      id="investimento"
      className="section relative overflow-hidden scroll-mt-24 bg-oceano"
      aria-labelledby="investimento-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[640px] w-[900px] -translate-x-1/2 rounded-full bg-saude/[0.06] blur-3xl"
      />

      <div className="container-lp relative">
        <SectionTitle
          eyebrow="Investimento"
          id="investimento-title"
          tone="light"
          align="center"
          intro="As vagas são liberadas em lotes: quanto antes você garante a sua, menor o investimento. Escolha a condição que faz mais sentido para você e assegure o valor mais baixo enquanto ele estiver disponível."
        >
          Escolha o seu lote e garanta a sua vaga.
        </SectionTitle>

        <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {lotes.map((lote) => (
            <Reveal key={lote.lote} className="h-full">
              <LoteCard {...lote} tone="light" />
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className="mt-7 text-center text-small font-light italic text-gelo/50">
          No Pix você garante o menor valor de cada lote.
        </Reveal>

        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {selos.map((selo) => (
            <span
              key={selo.text}
              className="inline-flex items-center gap-2.5 text-small font-light text-gelo/65"
            >
              <span className="text-saude">{selo.icon}</span>
              {selo.text}
            </span>
          ))}
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-5 md:grid-cols-2">
          <Reveal className="rounded-card border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-h3 font-medium text-gelo">Como funciona a inscrição</h3>
            <p className="mt-3 text-small font-light leading-relaxed text-gelo/70">
              A matrícula é feita pela Kiwify, em ambiente seguro. Assim que o pagamento é
              confirmado, você recebe o acesso ao grupo oficial do Zumbido 360 no WhatsApp, onde
              acompanha todas as orientações e informações da turma.
            </p>
          </Reveal>

          <Reveal className="rounded-card border border-white/10 bg-white/[0.04] p-7">
            <h3 className="text-h3 font-medium text-gelo">Nosso compromisso</h3>
            <p className="mt-3 text-small font-light leading-relaxed text-gelo/70">
              O Zumbido 360 une ciência, raciocínio clínico e prática aplicada, com acompanhamento
              contínuo por meio das lives mensais e da discussão de casos ao longo de todo o
              programa. Você não recebe apenas conteúdo: recebe orientação para aplicar o que
              aprende na sua rotina.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
