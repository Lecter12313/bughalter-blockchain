import { useEffect, useRef, useState } from 'react';

export function Solution() {
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

  const features = [
    { title: 'Код замість обіцянок', desc: 'Умови фіксуються в смарт-контракті. Ніхто не може тихо переписати правила під себе.' },
    { title: 'Незмінна логіка', desc: 'Після деплою контракт працює за заданим сценарієм. Прихованих ручних рішень тут немає.' },
    { title: 'Автовиплати', desc: 'Щойно кошти надходять, контракт одразу рахує частки та готує виплати кожному учаснику.' },
    { title: 'Прозорість на практиці', desc: 'Будь-яку транзакцію видно в мережі. Команда в будь-який момент може перевірити, хто і скільки отримав.' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <span className="font-mono text-xs text-[#FFD700] tracking-widest uppercase block mb-4">
              03 — Рішення
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Смарт-контракт як автоматичний бухгалтер
            </h2>
            <p className="text-white/50 leading-relaxed">
              Ідея проста: прибрати зайву ручну роботу там, де можна покластися на код.
              Контракт не «забуває», не «плутає» і не змінює правила по дорозі.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex gap-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 bg-[#FFD700] mt-2 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Code preview */}
        <div className={`transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border border-white/10 bg-black">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="font-mono text-xs text-white/40">RoyaltySplitter.sol</span>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-white/20" />
                <div className="w-2 h-2 bg-white/20" />
              </div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <pre className="text-white/60">
{`contract RoyaltySplitter {
    mapping(address => uint256) public shares;

    receive() external payable {
        distributeRoyalties();
    }

    function distributeRoyalties() internal {
        for each shareholder {
            uint256 payment = msg.value * shares[holder] / 10000;
            payable(holder).transfer(payment);
        }
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
