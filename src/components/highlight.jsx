/**
 * Destaca um trecho literal dentro de um texto sem alterar a copy.
 * `className` controla o tom do destaque (padrão: Azul Saúde, peso médio).
 */
export function withHighlight(text, highlight, className = 'font-medium text-saude') {
  if (!highlight) return text
  const i = text.indexOf(highlight)
  if (i === -1) return text

  return (
    <>
      {text.slice(0, i)}
      <span className={className}>{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  )
}
