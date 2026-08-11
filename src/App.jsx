import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import Ticker from './components/Ticker.jsx'
import Toast from './components/Toast.jsx'
import BotaoWhatsApp from './components/BotaoWhatsApp.jsx'
import Apresentacao from './sections/Apresentacao.jsx'
import ParaQuem from './sections/ParaQuem.jsx'
import ComoFunciona from './sections/ComoFunciona.jsx'
import OQueAprender from './sections/OQueAprender.jsx'
import VisaoIntegrada from './sections/VisaoIntegrada.jsx'
import OQueSeraCapaz from './sections/OQueSeraCapaz.jsx'
import Diferenciais from './sections/Diferenciais.jsx'
import QuemEnsina from './sections/QuemEnsina.jsx'
import AulaBonus from './sections/AulaBonus.jsx'
import Investimento from './sections/Investimento.jsx'
import FAQ from './sections/FAQ.jsx'
import ChamadaFinal from './sections/ChamadaFinal.jsx'
import Footer from './sections/Footer.jsx'
import { useGsapReveal } from './hooks/useGsapReveal.js'
import { useSmoothScroll } from './hooks/useSmoothScroll.js'

/* palavras-chave do conteúdo programático (seção 5 da copy) */
const palavrasChave = [
  'Fisiopatologia do zumbido',
  'Anamnese direcionada',
  'Acufenometria',
  'Raciocínio clínico',
  'Terapia sonora',
  'Terapia de habituação',
  'Aconselhamento terapêutico',
  'Zumbido somatossensorial',
  'Fotobiomodulação',
  'taVNS',
  'Treinamento Auditivo Neurocognitivo',
  'Estratégias cognitivo-comportamentais',
  'Mindfulness',
  'Neuromodulação — tDCS e tRNS',
  'Planejamento terapêutico',
]

export default function App() {
  useSmoothScroll()
  useGsapReveal()

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Ticker items={palavrasChave} />
        <Apresentacao />
        <ParaQuem />
        <ComoFunciona />
        <OQueAprender />
        <VisaoIntegrada />
        <OQueSeraCapaz />
        <Diferenciais />
        <QuemEnsina />
        <AulaBonus />
        <Investimento />
        <FAQ />
        <ChamadaFinal />
      </main>

      <Footer />

      <BotaoWhatsApp />
      <Toast />
    </>
  )
}
