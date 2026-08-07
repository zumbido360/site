import { ArrowUpRight } from './Icons.jsx'

/* destino padrão de todo CTA: a seção de lotes.
   Só os cards de lote passam um href próprio (o checkout da Kiwify). */
const SECAO_LOTES = '#investimento'

/**
 * CTA primário (pill) — texto sempre "Garantir minha vaga".
 * variant: primary (Azul Saúde) | light (sobre fundo escuro) | ghost
 */
export default function Button({
  children = 'Garantir minha vaga',
  href = SECAO_LOTES,
  variant = 'primary',
  id,
  className = '',
  size = 'default', // default | compact (header/mobile)
  full = false,
  ...rest
}) {
  const variants = {
    primary:
      'bg-saude text-gelo shadow-soft hover:shadow-lift focus-visible:shadow-lift',
    light:
      'bg-gelo text-oceano shadow-soft hover:shadow-lift',
    outline:
      'bg-transparent text-oceano border border-line hover:border-saude/60 hover:text-saude',
  }

  const sizes = {
    default: 'gap-4 py-2 pl-7 pr-2 text-[0.95rem]',
    compact: 'gap-2.5 py-1.5 pl-4 pr-1.5 text-[0.8125rem] sm:gap-3 sm:pl-5 sm:text-[0.875rem]',
  }

  const icon = {
    default: 'h-10 w-10',
    compact: 'h-8 w-8',
  }

  return (
    <a
      href={href}
      id={id}
      data-cta={id}
      className={`group inline-flex items-center justify-between whitespace-nowrap rounded-pill font-medium tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5 ${
        sizes[size]
      } ${variants[variant]} ${full ? 'w-full' : ''} ${className}`}
      {...rest}
    >
      <span className={size === 'compact' ? '' : 'py-1.5'}>{children}</span>
      <span
        className={`grid shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45 ${icon[size]} ${
          variant === 'primary'
            ? 'bg-gelo/95 text-saude'
            : variant === 'light'
              ? 'bg-saude text-gelo'
              : 'bg-saude/10 text-saude'
        }`}
      >
        <ArrowUpRight className={size === 'compact' ? 'h-4 w-4' : 'h-[18px] w-[18px]'} />
      </span>
    </a>
  )
}
