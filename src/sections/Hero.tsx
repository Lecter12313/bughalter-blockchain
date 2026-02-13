import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToProblem = () => {
    const section = document.getElementById('problem');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-black flex flex-col overflow-hidden">
      {/* Top yellow line */}
      <div className="w-full h-1 bg-[#FFD700]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#FFD700]/10 blur-3xl animate-glow-drift" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,215,0,0.08),transparent_35%)]" />

      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-12 gap-4">
            {/* Left column - Logo */}
            <div className="col-span-12 lg:col-span-4 flex lg:block items-center gap-8 mb-8 lg:mb-0">
              <img
                src="/logo.png"
                alt="Непідкупний бухгалтер"
                className="w-36 h-36 sm:w-40 sm:h-40 lg:w-52 lg:h-52 object-contain animate-float-soft drop-shadow-[0_0_28px_rgba(255,215,0,0.22)]"
              />
              <div className="lg:hidden animate-fade-up">
                <span className="font-mono text-xs text-[#FFD700] tracking-widest">PROOF OF CONCEPT</span>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="col-span-12 lg:col-span-8">
              {/* Labels */}
              <div className="hidden lg:flex items-center gap-6 mb-8 animate-fade-up">
                <span className="font-mono text-xs text-[#FFD700] tracking-widest">PROOF OF CONCEPT</span>
                <div className="w-16 h-px bg-white/20 animate-line-grow origin-left" />
                <span className="font-mono text-xs text-white/40 tracking-widest">ACADEMIC PROJECT</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight mb-4 animate-title-reveal">
                НЕПІДКУПНИЙ
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#FFD700] leading-none tracking-tight mb-10 animate-title-reveal-delay">
                БУХГАЛТЕР
              </h1>

              {/* Description */}
              <p className="text-lg lg:text-xl text-white/60 max-w-2xl leading-relaxed mb-12 animate-fade-up-delay">
                Смарт-контрактний протокол для автоматичного розподілу роялті.
                Жодної довіри — лише код.
              </p>

              {/* CTA */}
              <button
                onClick={scrollToProblem}
                className="group inline-flex items-center gap-4 text-white hover:text-[#FFD700] transition-colors animate-fade-up-delay-2"
              >
                <span className="font-mono text-sm tracking-widest uppercase">Дослідити</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-arrow-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex gap-12">
              <div>
                <span className="font-mono text-xs text-white/40 block mb-1">ТИП</span>
                <span className="text-sm text-white/80">Smart Contract</span>
              </div>
              <div>
                <span className="font-mono text-xs text-white/40 block mb-1">СТАНДАРТ</span>
                <span className="text-sm text-white/80">ERC-20 / Solidity</span>
              </div>
            </div>
            <div className="font-mono text-xs text-white/30">2024</div>
          </div>
        </div>
      </div>
    </section>
  );
}
