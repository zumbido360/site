/** Card claro base — reutilizado na grade de conteúdos e listas. */
export default function Card({ children, className = '', as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`rounded-card border border-line bg-gelo p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-saude/30 hover:shadow-soft ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}
