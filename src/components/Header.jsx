import { useEffect, useState } from 'react'
import { ArrowUpRight } from './Icons.jsx'

/**
 * Header flutuante e sutil — sem logo, largura de conteúdo (pill centralizada).
 * Texto de condição + botão de âncora para a seção de lotes.
 */
export default function Header() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
      }`}
    >
      <div className="flex max-w-full items-center gap-3 rounded-pill border border-line bg-gelo/85 py-1.5 pl-5 pr-1.5 shadow-soft backdrop-blur-xl sm:gap-5 sm:pl-7">
        <p className="whitespace-nowrap text-[0.75rem] font-normal text-ink-soft sm:text-small">
          <span className="hidden sm:inline">Condição especial nos primeiros lotes</span>
          <span className="sm:hidden">Condição especial</span>
        </p>

        <a
          href="#investimento"
          id="cta-header"
          data-cta="cta-header"
          className="group inline-flex items-center gap-2 whitespace-nowrap rounded-pill bg-saude py-2 pl-4 pr-1.5 text-[0.75rem] font-medium text-gelo transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift sm:text-[0.8125rem]"
        >
          Ver os lotes
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gelo/95 text-saude transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>
    </header>
  )
}
