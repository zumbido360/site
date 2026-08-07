/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gelo: '#FBFFFE',
        oceano: '#0D1F20',
        pastel: '#203F41',
        saude: '#22A1A6',
        alerta: '#B4483F', // detalhe sutil de negativa ("para quem não é")
        ink: {
          DEFAULT: '#0D1F20',
          soft: 'rgba(13,31,32,.65)',
          faint: 'rgba(13,31,32,.45)',
        },
        line: {
          DEFAULT: 'rgba(13,31,32,.10)',
          dark: 'rgba(251,255,254,.12)',
        },
      },
      backgroundColor: {
        surface: 'rgba(34,161,166,.06)',
      },
      fontFamily: {
        sans: ['Aspekta', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
        h1: ['clamp(2.125rem, 2.6vw, 2.375rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h2: ['clamp(2rem, 2.4vw, 2.375rem)', { lineHeight: '1.18', letterSpacing: '-0.01em' }],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        body: ['1.0625rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
      },
      maxWidth: {
        container: '1240px',
        measure: '68ch',
      },
      borderRadius: {
        card: '22px',
        chip: '14px',
        pill: '999px',
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(13,31,32,.25)',
        lift: '0 26px 70px -32px rgba(13,31,32,.38)',
        glass: '0 10px 30px -18px rgba(13,31,32,.35)',
      },
      spacing: {
        section: 'clamp(80px, 10vw, 140px)',
      },
    },
  },
  plugins: [],
}
