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
