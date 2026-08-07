/** Eyebrow: .75rem uppercase tracking .18em — Azul Saúde ou Azul Pastel. */
export default function Eyebrow({ children, tone = 'saude', icon = null, className = '' }) {
  const tones = {
    saude: 'text-saude',
    pastel: 'text-pastel/80',
    light: 'text-saude',
  }

  return (
    <span
      className={`inline-flex items-center gap-2.5 text-eyebrow font-semibold uppercase ${tones[tone]} ${className}`}
    >
      {icon}
      <span className="inline-flex items-center gap-2.5">
        <span aria-hidden="true" className="h-px w-6 bg-current opacity-45" />
        {children}
      </span>
    </span>
  )
}
