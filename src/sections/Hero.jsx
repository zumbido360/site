import { useRef } from 'react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import SeloGiratorio from '../components/SeloGiratorio.jsx'
import { Calendar, Check, Clock, MapPin, Users } from '../components/Icons.jsx'
import { useHeroTimeline } from '../hooks/useGsapReveal.js'

const selo = [
  { icon: <Users className="h-4 w-4" />, text: 'Com a Dra. Lisiane Holdefer e o Me. Thales Vanderlei' },
  { icon: <Clock className="h-4 w-4" />, text: '50 horas-aula' },
  { icon: <Calendar className="h-4 w-4" />, text: 'Início em 24 de outubro de 2026' },
  { icon: <Check className="h-4 w-4" />, text: 'Encontros mensais + live mensal' },
  { icon: <MapPin className="h-4 w-4" />, text: 'Prática presencial em Brasília/DF' },
]

export default function Hero() {
  const scope = useRef(null)
  useHeroTimeline(scope)

  return (
    /* ================= 1. HERO ================= */
    <section
      ref={scope}
      id="top"
      aria-labelledby="hero-title"
      /*
        Mobile: a arte vertical fica ancorada no rodapé da seção — topo curto
        (só o respiro do header) e base longa o bastante para os experts
        aparecerem inteiros.
        No xl quem define a altura da seção é a própria arte: sem padding
        vertical, a hero mede exatamente a altura da imagem.
      */
      className="relative overflow-hidden pb-[100vw] pt-12 md:pb-24 md:pt-[120px] xl:py-0"
    >
      {/* arte de mobile (2160×5134): ancorada embaixo, o topo vazio é aparado */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 md:hidden">
        <div className="relative w-full">
          <img
            src="/imagens/hero-mobile.webp"
            alt="Dra. Lisiane Holdefer e Me. Thales Vanderlei, docentes da formação Zumbido 360"
            width="2160"
            height="5134"
            loading="lazy"
            decoding="async"
            className="block w-full"
          />

          {/* selo giratório, posicionado em % da arte de mobile */}
          <SeloGiratorio className="absolute left-[82%] top-[84%] aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* texto — sempre no container padrão de 1240px; no xl sobreposto à arte */}
      <div className="relative z-10 xl:absolute xl:inset-0 xl:flex xl:items-center">
        <div className="container-lp w-full">
          <div className="max-w-[36rem] xl:max-w-[34.5rem]">
          <Reveal hero className="mb-9">
            {/* logo primária — versão para fundos claros */}
            <img
              src="/assets/logo-primaria.svg"
              alt="Zumbido 360 — Da Ciência à Clínica"
              className="h-9 w-auto md:h-10"
              width="607"
              height="133"
            />
          </Reveal>

          <SplitText as="h1" id="hero-title" className="text-h1 font-normal" playNow delay={0.12}>
            Domine o manejo clínico do <span className="marker">zumbido:</span> avalie com critério,
            decida com segurança e trate com resultado.
          </SplitText>

          <Reveal hero as="p" className="mt-6 max-w-[44ch] text-body font-light text-ink-soft">
            O Zumbido 360 é a formação que organiza a sua avaliação, fortalece o seu raciocínio
            clínico e transforma ciência em decisões terapêuticas individualizadas para cada
            paciente.
          </Reveal>

          <Reveal hero className="mt-9">
            {/* âncora para a seção de lotes (o checkout fica nos cards de lote) */}
            <Button id="cta-hero" href="#investimento" />
          </Reveal>

          {/* selo informativo */}
          <Reveal hero className="mt-10 border-t border-line pt-7">
            <ul className="flex flex-wrap gap-x-8 gap-y-3.5">
              {selo.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-2.5 text-small font-light text-ink-soft"
                >
                  <span className="text-saude">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </Reveal>
          </div>
        </div>
      </div>

      {/*
        Arte 2.0211:1, sempre na proporção exata (width + height auto).
        A partir de xl ela é ancorada à direita com 86% da largura da tela: a
        faixa vazia da esquerda (que é #FBFFFE, igual ao fundo do site) sai de
        cena e os experts ficam fora da coluna de texto do container padrão.
        Abaixo de 768px fica oculta — a faixa 2:1 seria baixa demais.
      */}
      <Reveal
        hero
        className="mt-14 hidden md:block xl:ml-auto xl:mt-0 xl:w-[86%]"
      >
        <div className="relative w-full">
          <img
            src="/imagens/hero-desktop-2x.webp"
            alt="Dra. Lisiane Holdefer e Me. Thales Vanderlei, docentes da formação Zumbido 360"
            width="3840"
            height="1900"
            loading="lazy"
            decoding="async"
            className="block h-auto w-full"
          />

          {/* selo giratório, posicionado em % da própria arte */}
          <SeloGiratorio className="absolute left-[80.3%] top-[37%] aspect-square w-[8.2%] -translate-x-1/2 -translate-y-1/2" />
        </div>
      </Reveal>
    </section>
  )
}
