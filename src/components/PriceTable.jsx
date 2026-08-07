import Reveal from './Reveal.jsx'

/**
 * Tabela de lotes. Desktop = tabela; mobile = cards (mesma marcação semântica,
 * rótulos vindos de data-label). Valor do Pix destacado em Azul Saúde.
 */
export default function PriceTable({ columns, rows, tone = 'dark', caption }) {
  const isLight = tone === 'light' // light = sobre fundo escuro

  const wrap = isLight
    ? 'border-white/12 bg-white/[0.03]'
    : 'border-line bg-white'
  const head = isLight ? 'bg-pastel text-gelo' : 'bg-oceano text-gelo'
  const cell = isLight ? 'text-gelo/80' : 'text-ink-soft'
  const strong = isLight ? 'text-gelo' : 'text-oceano'
  const rowLine = isLight ? 'md:border-white/10' : 'md:border-line'
  const cardLine = isLight ? 'border-white/10' : 'border-line'

  return (
    <div className={`overflow-hidden rounded-card border ${wrap}`}>
      <table className="w-full border-collapse text-left">
        {caption && <caption className="sr-only">{caption}</caption>}

        <thead className="hidden md:table-header-group">
          <tr className={head}>
            {columns.map((col) => (
              <th
                key={col.key}
                scope="col"
                className="px-7 py-4 text-eyebrow font-semibold uppercase tracking-[0.16em] text-gelo/75"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="block md:table-row-group">
          {rows.map((row, i) => (
            <Reveal
              as="tr"
              key={row.lote}
              className={`block border-b p-5 last:border-b-0 md:table-row md:border-b md:p-0 ${cardLine} ${rowLine}`}
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  data-label={col.label}
                  className={`flex items-baseline justify-between gap-4 py-2 before:text-eyebrow before:uppercase before:tracking-[0.16em] before:content-[attr(data-label)] md:table-cell md:px-7 md:py-5 md:before:content-none ${
                    col.key === 'lote'
                      ? `font-medium ${strong} md:before:content-none`
                      : col.highlight
                        ? 'text-[1.0625rem] font-medium text-saude'
                        : cell
                  } ${isLight ? 'before:text-gelo/45' : 'before:text-ink-faint'}`}
                >
                  {row[col.key]}
                </td>
              ))}
            </Reveal>
          ))}
        </tbody>
      </table>
    </div>
  )
}
