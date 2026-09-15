import Button from './Button.jsx'
import { mostrarAviso } from './Toast.jsx'
import { WhatsApp } from './Icons.jsx'

/**
 * Card de lote. `tone`: light = sobre fundo escuro (seção Investimento);
 * dark = sobre fundo claro (aula bônus). `compact` esconde prazo e CTA.
 */
export default function LoteCard({
  lote,
  prazo,
  pix,
  cartao,
  condicao,
  pixHref,
  parcelas,
  totalParcelado,
  parcelamento = true,
  destaque = false,
  encerrado = false,
  tone = 'light',
  compact = false,
  ctaId,
  href,
}) {
  const isLight = tone === 'light'

  const shell = encerrado
    ? 'border-white/10 bg-white/[0.02] grayscale'
    : isLight
      ? `bg-white/[0.04] hover:-translate-y-1 ${destaque ? 'border-saude/45' : 'border-white/10'}`
      : `bg-gelo hover:-translate-y-1 ${destaque ? 'border-saude/40' : 'border-line'}`

  const titleColor = isLight ? 'text-gelo' : 'text-oceano'
  const subColor = isLight ? 'text-gelo/55' : 'text-ink-faint'
  const bodyColor = isLight ? 'text-gelo/75' : 'text-ink-soft'

  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-card border p-7 transition-all duration-300 md:p-8 ${
        encerrado ? 'pt-16 md:pt-16' : ''
      } ${shell}`}
    >
      {/* faixa de lote encerrado */}
      {encerrado && (
        <span className="absolute inset-x-0 top-0 bg-white/[0.08] py-2.5 text-center text-[0.6875rem] font-semibold uppercase tracking-[0.2em] text-gelo/60">
          Lote encerrado
        </span>
      )}

      {destaque && !encerrado && (
        <span className="absolute -top-3 left-7 rounded-pill bg-saude px-3.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-gelo">
          Lote atual
        </span>
      )}

      <h3 className={`text-h3 font-medium ${encerrado ? 'text-gelo/50' : titleColor}`}>{lote}</h3>

      {prazo && <p className={`mt-1.5 text-small font-light ${subColor}`}>{prazo}</p>}

      <div
        className={`mt-7 ${compact ? '' : 'flex-1 border-t pt-7'} ${isLight ? 'border-white/10' : 'border-line'} ${
          encerrado ? 'opacity-60' : ''
        }`}
      >
        <p className={`text-small font-light ${bodyColor}`}>Por apenas</p>

        <p className="mt-1 flex items-baseline gap-2">
          <span
            className={`text-[2.125rem] font-medium leading-none tracking-[-0.01em] ${
              encerrado ? 'text-gelo/35 line-through decoration-1' : 'text-saude'
            }`}
          >
            {pix}
          </span>
          <span className={`text-small font-light ${bodyColor}`}>à vista</span>
        </p>

        <p className={`mt-1.5 text-[0.8125rem] font-light ${subColor}`}>no Pix, pelo WhatsApp</p>

        {condicao ? (
          <p className={`mt-4 text-small font-light ${bodyColor}`}>{condicao}</p>
        ) : (
          <p className={`mt-4 text-small font-light ${bodyColor}`}>
            ou <span className={`font-normal ${titleColor}`}>{cartao}</span> em cartão de crédito.
          </p>
        )}

        {parcelamento && (
          <p className={`mt-3 text-small font-light ${bodyColor}`}>
            Ou também parcele em{' '}
            <span className={`font-normal ${titleColor}`}>{parcelas ?? 'até 12x'}</span>
            <span className={`mt-1 block text-[0.75rem] ${subColor}`}>
              *{totalParcelado ?? 'contém juros da plataforma'}
            </span>
          </p>
        )}
      </div>

      {!compact && (
        <div className="mt-8 flex flex-col gap-3 pt-1">
          {encerrado ? (
            <>
              <span
                aria-disabled="true"
                className="inline-flex w-full items-center justify-center rounded-pill border border-white/10 bg-white/[0.04] h-[58px] text-[0.95rem] font-medium text-gelo/40"
              >
                Lote encerrado
              </span>

              {/* fantasma do 2º botão: mantém os CTAs dos três cards na mesma linha */}
              <span aria-hidden="true" className="invisible flex">
                <Button href="#" full className="justify-between">
                  Pagar no cartão
                </Button>
              </span>
            </>
          ) : href ? (
            <>
              {/* Pix: o pagamento é combinado pelo WhatsApp */}
              <Button
                id={ctaId}
                href={pixHref}
                Icone={WhatsApp}
                full
                className="justify-between"
              >
                Pagar no Pix
              </Button>

              {/* Cartão: checkout do Asaas */}
              <Button
                id={`${ctaId}-cartao`}
                href={href}
                variant={isLight ? 'outlineLight' : 'outline'}
                full
                className="justify-between"
              >
                Pagar no cartão
              </Button>
            </>
          ) : (
            /* lote sem checkout ainda: avisa em vez de levar a lugar nenhum */
            <>
              <Button
                id={ctaId}
                href="#"
                full
                className="justify-between"
                onClick={(event) => {
                  event.preventDefault()
                  mostrarAviso('O lote estará disponível em breve')
                }}
              />

              {/* fantasma do 2º botão: mantém os CTAs dos três cards na mesma linha */}
              <span aria-hidden="true" className="invisible flex">
                <Button href="#" full className="justify-between">
                  Pagar no cartão
                </Button>
              </span>
            </>
          )}
        </div>
      )}
    </article>
  )
}
