import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

/**
 * Único componente de título de seção — garante H2 em 34–38px na página inteira.
 * Nenhuma seção define tamanho de título por conta própria.
 */
export default function SectionTitle({
  eyebrow,
  children,
  intro,
  align = 'left',
  tone = 'dark', // dark = texto oceano sobre claro | light = texto gelo sobre escuro
  as: Tag = 'h2',
  id,
  className = '',
  introClassName = '',
}) {
  const isLight = tone === 'light'

  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <Reveal className="mb-5 block">
          <Eyebrow tone={isLight ? 'light' : 'saude'}>{eyebrow}</Eyebrow>
        </Reveal>
      )}

      <SplitText
        as={Tag}
        id={id}
        className={`text-h2 font-normal ${isLight ? 'text-gelo' : 'text-oceano'} ${
          align === 'center' ? 'mx-auto max-w-[22ch]' : 'max-w-[24ch]'
        }`}
      >
        {children}
      </SplitText>

      {intro && (
        <Reveal
          as="p"
          className={`mt-5 max-w-measure text-body font-light ${
            isLight ? 'text-gelo/70' : 'text-ink-soft'
          } ${align === 'center' ? 'mx-auto' : ''} ${introClassName}`}
        >
          {intro}
        </Reveal>
      )}
    </div>
  )
}
