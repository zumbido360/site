/**
 * Grafismos animados dos cards do bento (ref. Usi Telecom):
 * composição preenchida, sem fundo próprio, com duotone sutil (Oceano + Azul Saúde)
 * atrás e animação contínua e fluida.
 */

function Duotone() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* posicionamento por inset (nada de translate: o transform é da animação) */}
      <span className="graphic-drift absolute left-[calc(50%-160px)] top-[-30%] h-[320px] w-[320px] rounded-full bg-saude/[0.20] blur-[76px] sm:left-auto sm:right-[-8%] sm:top-[-34%]" />
      <span className="graphic-drift-slow absolute bottom-[-34%] left-[calc(50%-150px)] h-[300px] w-[300px] rounded-full bg-pastel/70 blur-[86px] sm:bottom-[-46%] sm:left-auto sm:right-[12%]" />
      {/* no mobile o texto fica embaixo; no desktop, à esquerda */}
      <span className="absolute inset-0 bg-gradient-to-t from-oceano via-oceano/60 to-transparent sm:bg-gradient-to-r sm:via-oceano/70" />
    </span>
  )
}

/** Ondas concêntricas preenchidas + curva de resposta — "Programa completo". */
export function GraphicOndas() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[62%] overflow-hidden sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-[70%] sm:max-w-[520px]"
    >
      <Duotone />

      <svg
        viewBox="0 0 520 300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
      >
        <defs>
          <radialGradient id="og-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22A1A6" stopOpacity=".55" />
            <stop offset="60%" stopColor="#22A1A6" stopOpacity=".14" />
            <stop offset="100%" stopColor="#22A1A6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="og-wave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22A1A6" stopOpacity="0" />
            <stop offset="35%" stopColor="#7FE3E6" stopOpacity=".75" />
            <stop offset="100%" stopColor="#FBFFFE" stopOpacity=".9" />
          </linearGradient>
          <linearGradient id="og-bar" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#22A1A6" stopOpacity=".08" />
            <stop offset="100%" stopColor="#22A1A6" stopOpacity=".55" />
          </linearGradient>
          <clipPath id="og-clip">
            <rect x="0" y="0" width="520" height="300" />
          </clipPath>
        </defs>

        <g clipPath="url(#og-clip)">
          {/* núcleo preenchido */}
          <circle cx="352" cy="150" r="132" fill="url(#og-core)" className="graphic-breathe" />

          {/* anéis */}
          <g className="graphic-spin" style={{ transformOrigin: '352px 150px' }}>
            {[54, 84, 114, 146].map((r, i) => (
              <circle
                key={r}
                cx="352"
                cy="150"
                r={r}
                stroke="#22A1A6"
                strokeOpacity={0.4 - i * 0.07}
                strokeWidth="1.1"
                strokeDasharray={i % 2 ? '3 9' : '0'}
                fill="none"
              />
            ))}
          </g>

          {/* pulsos que saem do centro */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="352"
              cy="150"
              r="52"
              stroke="#7FE3E6"
              strokeOpacity=".5"
              strokeWidth="1.2"
              fill="none"
              className="graphic-ring"
              style={{ animationDelay: `${i * 1.6}s`, transformOrigin: '352px 150px' }}
            />
          ))}

          {/* barras de espectro */}
          <g className="graphic-bars">
            {[
              { x: 226, h: 46 },
              { x: 244, h: 84 },
              { x: 262, h: 62 },
              { x: 280, h: 108 },
              { x: 298, h: 74 },
            ].map((bar, i) => (
              <rect
                key={bar.x}
                x={bar.x}
                y={222 - bar.h}
                width="7"
                height={bar.h}
                rx="3.5"
                fill="url(#og-bar)"
                className="graphic-bar"
                style={{ animationDelay: `${i * 0.24}s`, transformOrigin: `${bar.x + 3.5}px 222px` }}
              />
            ))}
          </g>

          {/* curva de resposta */}
          <path
            d="M16 214 C 66 214, 84 116, 116 116 S 158 240, 192 198 S 232 92, 268 152 S 314 186, 352 150"
            stroke="url(#og-wave)"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            className="graphic-draw"
            pathLength="1"
          />

          {/* ponto que percorre a curva */}
          <circle r="4.5" fill="#FBFFFE" className="graphic-travel">
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="linear"
              path="M16 214 C 66 214, 84 116, 116 116 S 158 240, 192 198 S 232 92, 268 152 S 314 186, 352 150"
            />
          </circle>

          <circle cx="352" cy="150" r="11" fill="#22A1A6" />
          <circle cx="352" cy="150" r="20" stroke="#7FE3E6" strokeOpacity=".45" fill="none" />
        </g>
      </svg>
    </div>
  )
}

/** Cabeça, trilhas neurais e pulsos do eletrodo — "Neuromodulação". */
export function GraphicNeuro() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[62%] overflow-hidden sm:inset-y-0 sm:left-auto sm:right-0 sm:h-full sm:w-[64%] sm:max-w-[460px]"
    >
      <Duotone />

      <svg
        viewBox="0 0 460 300"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="nu-head" x1="0.2" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#22A1A6" stopOpacity=".22" />
            <stop offset="100%" stopColor="#22A1A6" stopOpacity=".03" />
          </linearGradient>
          <linearGradient id="nu-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7FE3E6" stopOpacity=".15" />
            <stop offset="100%" stopColor="#7FE3E6" stopOpacity=".9" />
          </linearGradient>
          <linearGradient id="nu-edge" x1="0" y1="0" x2="0.6" y2="1">
            <stop offset="0%" stopColor="#7FE3E6" stopOpacity=".6" />
            <stop offset="100%" stopColor="#7FE3E6" stopOpacity=".18" />
          </linearGradient>
        </defs>

        <g className="graphic-float">
          {/* cabeça */}
          <path
            d="M300 288 c-8-36 6-52 26-70 22-20 34-46 29-75 -7-46-48-77-96-75 -48 2-86 38-88 86 -1 24 7 41 7 55 0 10-9 14-9 24 0 8 9 11 9 11 -2 14 3 21 15 24 2 14 12 19 26 18"
            fill="url(#nu-head)"
            stroke="url(#nu-edge)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />

          {/* pulsos saindo do eletrodo superior */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx="252"
              cy="82"
              r="16"
              stroke="#7FE3E6"
              strokeOpacity=".45"
              strokeWidth="1.1"
              fill="none"
              className="graphic-ring"
              style={{ animationDelay: `${i * 1.6}s`, transformOrigin: '252px 82px' }}
            />
          ))}

          {/* trilhas neurais — cada uma parte do centro de um eletrodo */}
          {[
            'M252 82 C 246 110, 224 118, 208 142',
            'M178 100 C 198 120, 216 128, 238 152',
            'M296 148 C 272 154, 250 166, 222 182',
          ].map((d, i) => (
            <path
              key={d}
              d={d}
              stroke="url(#nu-line)"
              strokeWidth={1.5 - i * 0.15}
              strokeLinecap="round"
              fill="none"
              className="graphic-draw"
              style={{ animationDelay: `${i * 1.2}s` }}
              pathLength="1"
            />
          ))}

          {/* nós sinápticos — nas pontas das trilhas */}
          {[
            [208, 142],
            [238, 152],
            [222, 182],
            [230, 118],
            [262, 132],
          ].map(([cx, cy], i) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="2.6"
              fill="#7FE3E6"
              fillOpacity=".8"
              className="graphic-twinkle"
              style={{ animationDelay: `${i * 0.6}s` }}
            />
          ))}

          {/* eletrodos */}
          {[
            { x: 252, y: 82, d: 0 },
            { x: 178, y: 100, d: 1.1 },
            { x: 296, y: 148, d: 2 },
          ].map((e) => (
            <g key={`${e.x}-${e.y}`}>
              <circle
                cx={e.x}
                cy={e.y}
                r="11"
                fill="#22A1A6"
                fillOpacity=".2"
                className="graphic-pulse"
                style={{ animationDelay: `${e.d}s`, transformOrigin: `${e.x}px ${e.y}px` }}
              />
              <circle cx={e.x} cy={e.y} r="4.5" fill="#22A1A6" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  )
}
