import { useEffect, useId, useRef, useState } from 'react'
import gsap from 'gsap'
import { Plus } from './Icons.jsx'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  const uid = useId()
  const panelRef = useRef(null)
  const first = useRef(true)
  const btnId = `faq-btn-${uid}`
  const panelId = `faq-panel-${uid}`

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // primeiro render: aplica o estado sem animar
    if (first.current) {
      first.current = false
      gsap.set(panel, { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 })
      return
    }

    if (reduced) {
      gsap.set(panel, { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 })
      return
    }

    gsap.killTweensOf(panel)

    if (isOpen) {
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
      )
    } else {
      gsap.to(panel, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
      })
    }
  }, [isOpen])

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={btnId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-6 py-6 text-left text-[1.0625rem] font-normal text-oceano transition-colors duration-200 hover:text-saude"
        >
          <span className="max-w-[52ch]">{question}</span>
          <span
            aria-hidden="true"
            className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-saude transition-all duration-300 ${
              isOpen ? 'rotate-45 border-saude/40 bg-saude/[0.07]' : ''
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        ref={panelRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="max-w-measure pb-7 pr-10 text-body font-light text-ink-soft">{answer}</p>
      </div>
    </div>
  )
}

/** Accordion minimalista com abertura/fechamento animados (GSAP). */
export default function Accordion({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="border-t border-line">
      {items.map((item, i) => (
        <AccordionItem
          key={item.q}
          question={item.q}
          answer={item.a}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
