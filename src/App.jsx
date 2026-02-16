import ThemeToggle from './components/ThemeToggle';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import QualitiesGrid from './components/QualitiesGrid';
import GiftReveal from './components/GiftReveal';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out relative selection:bg-rose-500/30">
      {/* Global Grain/Noise Overlay (Optional for texture) */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Global Dark Background Gradient */}
      <div className="fixed inset-0 z-[-1] bg-paper dark:bg-zinc-950 transition-colors duration-500">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent dark:from-rose-900/10 dark:to-zinc-950 pointer-events-none" />
      </div>

      <ThemeToggle />

      <main className="relative z-10">
        <Hero />
        <Timeline />
        <QualitiesGrid />
        <GiftReveal />
        <Contact />
      </main>

      <footer className="py-8 text-center text-sm text-gray-400 dark:text-zinc-600 font-light tracking-wide">
        <p>Hecho con dedicación para ti. 2026</p>
      </footer>
    </div>
  );
}

export default App;
