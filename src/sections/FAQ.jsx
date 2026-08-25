import SectionTitle from '../components/SectionTitle.jsx'
import Accordion from '../components/Accordion.jsx'
import Reveal from '../components/Reveal.jsx'

const faq = [
  {
    q: 'Preciso ter experiência prévia com zumbido?',
    a: 'Não. A formação atende tanto quem deseja iniciar quanto quem já atua e quer organizar a avaliação e definir condutas com mais segurança.',
  },
  {
    q: 'Como acontecem os encontros?',
    a: 'Um encontro principal por mês, em formato progressivo, e uma live mensal de uma hora para dúvidas e discussão de casos. Ao final, há um encontro presencial de integração e prática.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'As vagas são vendidas em lotes, com valores diferentes no Pix e no cartão. No cartão, dá para parcelar em até 12x, com os juros da plataforma. A inscrição é feita pelo Asaas, em ambiente seguro.',
  },
  {
    q: 'O que acontece depois que eu me inscrevo?',
    a: 'Após a confirmação do pagamento, você é direcionado ao grupo oficial do Zumbido 360 no WhatsApp, com as orientações e informações da turma.',
  },
  {
    q: 'A aula de neuromodulação está incluída?',
    a: 'Não. É um módulo bônus opcional, vendido separadamente e destinado apenas aos profissionais que atendam aos requisitos do seu Conselho Profissional para o uso dessas técnicas.',
  },
]

export default function FAQ() {
  return (
    /* ================= 12. FAQ ================= */
    <section className="section" aria-labelledby="faq-title">
      <div className="container-lp grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionTitle eyebrow="Dúvidas" id="faq-title">
            Perguntas frequentes
          </SectionTitle>
        </div>

        <Reveal>
          <Accordion items={faq} />
        </Reveal>
      </div>
    </section>
  )
}
