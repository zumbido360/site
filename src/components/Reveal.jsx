/**
 * Wrapper de reveal. Só adiciona a classe observada pelo GSAP —
 * sem opacity:0 preso no CSS (conteúdo visível se o JS falhar).
 */
export default function Reveal({ as: Tag = 'div', className = '', hero = false, ...rest }) {
  return (
    <Tag
      className={`js-reveal ${className}`}
      {...(hero ? { 'data-hero': '' } : {})}
      {...rest}
    />
  )
}
