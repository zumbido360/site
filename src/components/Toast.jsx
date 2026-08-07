import { useEffect, useRef, useState } from 'react'

const EVENTO = 'zumbido360:aviso'

/** Dispara o aviso de qualquer lugar da página. */
export function mostrarAviso(mensagem) {
  window.dispatchEvent(new CustomEvent(EVENTO, { detail: mensagem }))
}

/**
 * Aviso discreto no rodapé da tela. Some sozinho depois de alguns segundos e
 * é anunciado por leitores de tela (role="status").
 */
export default function Toast() {
  const [mensagem, setMensagem] = useState('')
  const [visivel, setVisivel] = useState(false)
  const timers = useRef([])

  useEffect(() => {
    const limpar = () => {
      timers.current.forEach(clearTimeout)
      timers.current = []
    }

    const aoAvisar = (evento) => {
      limpar()
      setMensagem(evento.detail)
      setVisivel(true)
      timers.current.push(setTimeout(() => setVisivel(false), 3600))
      // só apaga o texto depois da transição de saída
      timers.current.push(setTimeout(() => setMensagem(''), 4000))
    }

    window.addEventListener(EVENTO, aoAvisar)
    return () => {
      window.removeEventListener(EVENTO, aoAvisar)
      limpar()
    }
  }, [])

  return (
    <div
      role="status"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[60] flex justify-center px-4"
    >
      <div
        className={`rounded-pill border border-white/10 bg-oceano/95 px-6 py-3 text-small font-light text-gelo shadow-lift backdrop-blur-md transition-all duration-300 ${
          visivel ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0'
        }`}
      >
        {mensagem}
      </div>
    </div>
  )
}
