import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Quebra o texto em palavras/letras e revela letra a letra, suave.
 * A quebra acontece no DOM (preserva marcações internas, como o `.marker`),
 * e as palavras ficam em inline-block para o texto continuar quebrando linha
 * normalmente. Sem JS ou com reduced-motion, o título aparece inteiro.
 */
function splitIntoChars(root) {
  if (root.dataset.split === 'done') {
    return Array.from(root.querySelectorAll('.split-char'))
  }

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const textNodes = []
  while (walker.nextNode()) textNodes.push(walker.currentNode)

  textNodes.forEach((node) => {
    const text = node.nodeValue
    if (!text || !text.trim()) return

    const fragment = document.createDocumentFragment()

    // mantém os espaços como texto solto: só as palavras viram blocos
    text.split(/(\s+)/).forEach((chunk) => {
      if (!chunk) return

      if (/^\s+$/.test(chunk)) {
        fragment.appendChild(document.createTextNode(chunk))
        return
      }

      const word = document.createElement('span')
      word.className = 'split-word'

      Array.from(chunk).forEach((char) => {
        const span = document.createElement('span')
        span.className = 'split-char'
        span.textContent = char
        word.appendChild(span)
      })

      fragment.appendChild(word)
    })

    node.parentNode.replaceChild(fragment, node)
  })

  root.dataset.split = 'done'
  return Array.from(root.querySelectorAll('.split-char'))
}

export default function SplitText({
  as: Tag = 'h2',
  children,
  className = '',
  playNow = false,
  delay = 0,
  ...rest
}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const chars = splitIntoChars(el)

    if (reduced || !chars.length) {
      gsap.set(chars, { opacity: 1, y: 0 })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { opacity: 0, yPercent: 34 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.014,
          delay,
          ...(playNow
            ? {}
            : {
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  once: true,
                },
              }),
        },
      )
    }, el)

    return () => ctx.revert()
  }, [playNow, delay])

  return (
    <Tag ref={ref} className={`split-text ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
