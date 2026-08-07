import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { Check, Close } from '../components/Icons.jsx'

const paraQuemE = [
  'Deseja iniciar ou ampliar a atuação no atendimento ao paciente com zumbido;',
  'Sente dificuldade para organizar a avaliação e definir a conduta;',
  'Quer integrar avaliação audiológica e tratamento;',
  'Busca conhecer diferentes terapias e saber quando indicar cada uma;',
  'Quer mais segurança para discutir casos e elaborar planos individualizados.',
]

export default function ParaQuem() {
  return (
    /* ================= 3. PARA QUEM É / PARA QUEM NÃO É ================= */
    <section className="section bg-surface" aria-labelledby="para-quem-title">
      <div className="container-lp">
        <SectionTitle eyebrow="Público" id="para-quem-title" align="center">
          Esta formação é para você?
        </SectionTitle>

        <div className="mt-14 grid gap-6 md:mt-16 lg:grid-cols-2 lg:gap-7">
          {/* Para quem é */}
          <Reveal className="relative overflow-hidden rounded-card border border-saude/30 bg-gelo p-8 shadow-soft md:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-saude/[0.10] blur-2xl"
            />
            <h3 className="text-h3 font-medium text-oceano">Para quem é</h3>
            <p className="mt-3 max-w-measure text-body font-light text-ink-soft">
              O Zumbido 360 é para o fonoaudiólogo ou o médico otorrinolaringologista que:
            </p>

            <ul className="mt-7 space-y-4">
              {paraQuemE.map((item) => (
                <li key={item} className="flex gap-3.5 text-body font-light text-oceano/90">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-saude/12 text-saude">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Para quem não é */}
          <Reveal className="relative flex flex-col justify-start overflow-hidden rounded-card border border-alerta/25 bg-white/60 p-8 md:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-alerta/[0.07] blur-2xl"
            />
            <h3 className="text-h3 font-medium text-oceano">Para quem não é</h3>

            <div className="mt-7 flex gap-3.5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-alerta/10 text-alerta">
                <Close className="h-3.5 w-3.5" />
              </span>
              <p className="max-w-measure text-body font-light text-ink-soft">
                Não é para quem busca respostas prontas ou um protocolo único para todos os
                pacientes. Aqui, cada caso exige avaliação, raciocínio e um plano próprio. Se você
                quer aprender a pensar clinicamente o zumbido, e não apenas repetir técnicas, está
                no lugar certo.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
