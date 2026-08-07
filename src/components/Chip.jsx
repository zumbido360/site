import { Check } from './Icons.jsx'

/** Chip de credibilidade (hero) — fundo vidro, borda fina, ícone Azul Saúde. */
export default function Chip({ children, icon, className = '', style }) {
  return (
    <span
      style={style}
      className={`inline-flex items-center gap-2.5 rounded-chip border border-white/60 bg-white/85 px-4 py-2.5 text-small font-normal text-oceano shadow-glass backdrop-blur-md ${className}`}
    >
      <span className="text-saude">{icon ?? <Check className="h-4 w-4" />}</span>
      {children}
    </span>
  )
}
