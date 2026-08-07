import { withHighlight } from './highlight.jsx'

/**
 * Card bento escuro (ref. Usi Telecom, versão mais clean):
 * fundo Oceano Escuro e 1 palavra-chave em Azul Saúde. Aceita imagem
 * sangrando OU um grafismo animado (`graphic`) com duotone próprio.
 */
export default function BentoCard({
  text,
  highlight,
  image,
  imageAlt = '',
  graphic = null,
  parallax,
  className = '',
}) {
  return (
    <article
      className={`group relative isolate flex min-h-[176px] flex-col justify-end overflow-hidden rounded-card border border-white/[0.07] bg-oceano p-7 transition-colors duration-300 hover:border-saude/25 ${className}`}
    >
      {graphic}

      {image && (
        <>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            data-parallax={parallax}
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full scale-105 object-cover opacity-40 transition-opacity duration-500 group-hover:opacity-60"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-oceano via-oceano/85 to-oceano/20"
          />
        </>
      )}

      {!graphic && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 -z-10 h-44 w-44 rounded-full bg-saude/[0.07] blur-2xl"
        />
      )}

      <h3 className="relative max-w-[24ch] text-h3 font-light leading-snug text-gelo/80">
        {withHighlight(text, highlight)}
      </h3>
    </article>
  )
}
