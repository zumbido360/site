# Zumbido 360 — Página de vendas

React + Vite + Tailwind + GSAP (ScrollTrigger). Fonte Aspekta Variable auto-hospedada
em `public/fonts/` (OFL 1.1 — o pacote `@fontsource/aspekta` não existe no npm).

## Rodar

`npm install` **falha nesta pasta** (o Google Drive `G:` não suporta as operações de
arquivo do npm — erro `EBADF`). Trabalhe em uma cópia local:

```bash
robocopy "G:\Meu Drive\Landing Pages\2026\Zumbido 360\Site Zumbido 360" "%LOCALAPPDATA%\zumbido360-build" /E /XD node_modules dist .claude legacy docs
```

Depois, na cópia local:

```bash
npm install && npm run dev
```

O build de produção fica em `dist/` (já copiado de volta para esta pasta).

## Estrutura

- `src/sections/` — 13 blocos da página, na ordem da copy.
- `src/components/` — `SectionTitle` (único responsável pelos 34–38px dos H2),
  `Button`, `LoteCard`, `BentoCard`, `ScrollGallery`, `Accordion`, `PriceTable`, `CardGraphic`.
- `src/hooks/useGsapReveal.js` — reveal global, parallax e timeline do hero.
- `src/hooks/useSmoothScroll.js` — scroll suave (Lenis) sincronizado com o ScrollTrigger.
- `public/assets/` — placeholders (ver `public/assets/README.md`).
- `legacy/` — versão estática anterior (HTML/CSS/JS), mantida como backup.

## Pendências de conteúdo

- Todo CTA aponta para a seção de lotes (`#investimento`); só os cards de lote levam ao checkout.
- Falta o link do Asaas para o 2º e o 3º lote (o 1º já está ligado).
- Substituir os placeholders SVG por fotos/mockups reais.
- Confirmar e-mail de contato no rodapé.
