import { useEffect, useRef, useState } from 'react';

export function Demo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <span className="font-mono text-xs text-[#FFD700] tracking-widest uppercase block mb-4">
              07 — Демонстрація
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Спробуйте прототип в дії
            </h2>
            <p className="text-white/50 leading-relaxed">
              Це тестовий стенд, де можна пройти весь сценарій без реальних коштів:
              підключити гаманець, відправити тестову транзакцію і перевірити результат розподілу.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Demo cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div
            className={`border border-white/10 p-8 hover:border-[#FFD700]/50 transition-colors transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 border border-[#FFD700] flex items-center justify-center">
                <span className="font-mono text-xs text-[#FFD700]">{'{}'}</span>
              </div>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Code</span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Смарт-контракт</h3>
            <p className="text-white/50 leading-relaxed text-sm mb-6">
              Відкритий код RoyaltySplitter доступний для перегляду: можна подивитися,
              як саме рахуються частки і в який момент виконується виплата.
            </p>

            <div className="space-y-2 mb-8">
              {['Ініціалізація часток', 'Автоматичний розподіл', 'Механіка голосування'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#FFD700]" />
                  <span className="text-xs text-white/60">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 border border-white/20 text-white/60 font-mono text-xs uppercase tracking-widest hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
              Переглянути код →
            </button>
          </div>

          <div
            className={`border border-white/10 p-8 hover:border-[#FFD700]/50 transition-colors transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 border border-[#FFD700] flex items-center justify-center">
                <span className="font-mono text-xs text-[#FFD700]">↗</span>
              </div>
              <span className="font-mono text-xs text-white/40 uppercase tracking-widest">Testnet</span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-4">Інтерактивне демо</h3>
            <p className="text-white/50 leading-relaxed text-sm mb-6">
              У тестнеті Sepolia можна без ризику пройти весь ланцюжок дій і переконатися,
              що розподіл спрацьовує автоматично.
            </p>

            <div className="space-y-2 mb-8">
              {['Підключення гаманця', 'Тестові транзакції', 'Перевірка балансів'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-[#FFD700]" />
                  <span className="text-xs text-white/60">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full py-3 border border-white/20 text-white/60 font-mono text-xs uppercase tracking-widest hover:border-[#FFD700] hover:text-[#FFD700] transition-colors">
              Відкрити демо →
            </button>
          </div>
        </div>

        {/* Warning */}
        <div className={`transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border border-white/10 p-6 flex items-start gap-4">
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
              <span className="text-white/60 text-sm">!</span>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white mb-2">Важлива інформація</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Це навчальний proof-of-concept. Код не проходив повний аудит безпеки,
                тому використання з реальними коштами не рекомендується.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
