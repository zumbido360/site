/**
 * Faixa de palavras-chave em carrossel infinito.
 * A lista é duplicada e a faixa desliza em loop linear — sem começo nem fim
 * visíveis. Só a primeira cópia é lida por leitores de tela.
 */
export default function Ticker({ items, speed = 48, className = '' }) {
  const group = (hidden) => (
    <ul className="ticker-group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8">
          <span>{item}</span>
          <span aria-hidden="true" className="ticker-dot" />
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={`ticker bg-saude text-gelo ${className}`}
      aria-label="Palavras-chave do conteúdo do curso"
    >
      <div className="ticker-track" style={{ '--ticker-duration': `${speed}s` }}>
        {group(false)}
        {group(true)}
      </div>
    </div>
  )
}
