import { useEffect, useRef, useState } from 'react'
import { Close, WhatsApp } from './Icons.jsx'

/* +55 82 9966-8806 */
export const WHATSAPP_NUMERO = '+55 82 9966-8806'
const WHATSAPP_BASE = 'https://wa.me/558299668806'

/** Monta o link do WhatsApp já com a mensagem escrita. */
export function linkWhatsApp(mensagem) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(mensagem)}`
}

export const WHATSAPP_LINK = linkWhatsApp('Olá! Tenho uma dúvida sobre a formação Zumbido 360.')

const CHAMADA = 'Tem alguma dúvida? Fale com o nosso suporte'

/**
 * Botão flutuante de suporte.
 * Desktop: ícone que se abre no hover/foco mostrando a chamada.
 * Mobile: só o ícone; ao tocar, abre um cartão com a mensagem e o botão.
 */
export default function BotaoWhatsApp() {
  const [aberto, setAberto] = useState(false)
  const scope = useRef(null)

  // fecha o cartão do mobile ao tocar fora ou apertar Esc
  useEffect(() => {
    if (!aberto) return

    const foraDaqui = (evento) => {
      if (scope.current && !scope.current.contains(evento.target)) setAberto(false)
    }
    const aoTeclar = (evento) => {
      if (evento.key === 'Escape') setAberto(false)
    }

    document.addEventListener('pointerdown', foraDaqui)
    document.addEventListener('keydown', aoTeclar)
    return () => {
      document.removeEventListener('pointerdown', foraDaqui)
      document.removeEventListener('keydown', aoTeclar)
    }
  }, [aberto])

  return (
    <div ref={scope} className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">
      {/* ---------- mobile: cartão que abre no toque ---------- */}
      <div
        className={`absolute bottom-[68px] right-0 w-[min(17rem,calc(100vw-2.5rem))] origin-bottom-right rounded-card border border-line bg-gelo p-5 shadow-lift transition-all duration-300 sm:hidden ${
          aberto
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-2 scale-95 opacity-0'
        }`}
        aria-hidden={!aberto}
      >
        <p className="text-small font-light text-ink-soft">{CHAMADA}</p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-whatsapp-mobile"
          data-cta="cta-whatsapp-mobile"
          tabIndex={aberto ? 0 : -1}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-pill bg-[#25D366] px-5 py-2.5 text-small font-medium text-white transition-transform duration-200 active:scale-[0.98]"
        >
          <WhatsApp className="h-4 w-4" />
          Falar com o suporte
        </a>
      </div>

      {/* botão do mobile */}
      <button
        type="button"
        onClick={() => setAberto((estava) => !estava)}
        aria-expanded={aberto}
        aria-label={aberto ? 'Fechar o suporte pelo WhatsApp' : CHAMADA}
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-200 active:scale-95 sm:hidden"
      >
        {aberto ? <Close className="h-6 w-6" /> : <WhatsApp className="h-7 w-7" />}
      </button>

      {/* ---------- desktop: pílula que expande no hover ---------- */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        id="cta-whatsapp"
        data-cta="cta-whatsapp"
        className="group hidden items-center rounded-pill bg-[#25D366] text-white shadow-lift transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
      >
        <span className="grid h-14 w-14 shrink-0 place-items-center">
          <WhatsApp className="h-7 w-7" />
        </span>

        <span className="max-w-0 overflow-hidden whitespace-nowrap text-small font-medium opacity-0 transition-all duration-300 group-hover:max-w-xs group-hover:pr-7 group-hover:opacity-100 group-focus-visible:max-w-xs group-focus-visible:pr-7 group-focus-visible:opacity-100">
          {CHAMADA}
        </span>
      </a>
    </div>
  )
}
