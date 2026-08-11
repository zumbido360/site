const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const ArrowUpRight = (p) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8.5 7H17v8.5" />
  </svg>
)

export const Check = (p) => (
  <svg {...base} {...p}>
    <path d="M20 6.5 9.4 17.1 4 11.7" />
  </svg>
)

export const Close = (p) => (
  <svg {...base} {...p}>
    <path d="M17.5 6.5 6.5 17.5M6.5 6.5l11 11" />
  </svg>
)

export const Clock = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.2V12l3.1 2" />
  </svg>
)

export const Calendar = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
    <path d="M3.5 9.8h17M8.5 3.5v3M15.5 3.5v3" />
  </svg>
)

export const Users = (p) => (
  <svg {...base} {...p}>
    <circle cx="9.2" cy="8.6" r="3.4" />
    <path d="M2.9 19.4c.6-3.2 3.2-5.2 6.3-5.2s5.7 2 6.3 5.2" />
    <path d="M16.4 5.6a3.4 3.4 0 0 1 .3 6.6M18 14.6c2.1.6 3.5 2.4 3.9 4.8" />
  </svg>
)

export const MapPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21.2c4.2-4.1 6.3-7.3 6.3-9.8A6.3 6.3 0 0 0 5.7 11.4c0 2.5 2.1 5.7 6.3 9.8Z" />
    <circle cx="12" cy="11.2" r="2.4" />
  </svg>
)

export const Shield = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.2 5 6v5.4c0 4.3 2.8 7.7 7 9.4 4.2-1.7 7-5.1 7-9.4V6l-7-2.8Z" />
    <path d="m9.2 12 2 2 3.6-3.8" />
  </svg>
)

export const Flask = (p) => (
  <svg {...base} {...p}>
    <path d="M9.5 3.5h5M10.5 3.5v5.2L5.6 17a2.6 2.6 0 0 0 2.2 4h8.4a2.6 2.6 0 0 0 2.2-4l-4.9-8.3V3.5" />
    <path d="M7.6 14.6h8.8" />
  </svg>
)

export const Lock = (p) => (
  <svg {...base} {...p}>
    <rect x="4.5" y="10.2" width="15" height="10.3" rx="3" />
    <path d="M8.2 10.2V7.6a3.8 3.8 0 0 1 7.6 0v2.6" />
  </svg>
)

export const Brain = (p) => (
  <svg {...base} {...p}>
    <path d="M12 5.2a3 3 0 0 0-5.6-1.1A2.9 2.9 0 0 0 3.6 8a3 3 0 0 0-.2 5.1A3 3 0 0 0 5.7 18a3 3 0 0 0 6.3.9Z" />
    <path d="M12 5.2a3 3 0 0 1 5.6-1.1A2.9 2.9 0 0 1 20.4 8a3 3 0 0 1 .2 5.1 3 3 0 0 1-2.3 4.9 3 3 0 0 1-6.3.9Z" />
  </svg>
)

export const Waveform = (p) => (
  <svg {...base} {...p}>
    <path d="M3 12h2.6l2-5.6 3 12.4 2.6-9.4 1.9 4.4 1.5-1.8H21" />
  </svg>
)

export const Plus = (p) => (
  <svg {...base} {...p}>
    <path d="M12 6.5v11M6.5 12h11" />
  </svg>
)

export const ChevronDown = (p) => (
  <svg {...base} {...p}>
    <path d="m6.5 9.8 5.5 5.4 5.5-5.4" />
  </svg>
)

export const Pix = (p) => (
  <svg {...base} {...p}>
    <path d="M12 3.6 20.4 12 12 20.4 3.6 12 12 3.6Z" />
    <path d="M8.6 8.6h1.2l2.2 2.2 2.2-2.2h1.2" />
  </svg>
)

export const WhatsApp = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.2 8.2 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.14.17-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.35.99 2.51.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
  </svg>
)
