import { useEffect, useRef, useState } from 'react';

export function HowItWorks() {
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

  const steps = [
    {
      num: '01',
      title: 'Ініціалізація часток',
      desc: 'Співвласники реєструють адреси гаманців та фіксують частки у смарт-контракті.',
      details: ['Прозора фіксація', 'Без односторонніх змін']
    },
    {
      num: '02',
      title: 'Надходження коштів',
      desc: 'Роялті надходять безпосередньо на адресу контракту. Жоден посередник не контролює кошти.',
      details: ['Прямі надходження', 'Публічний аудит']
    },
    {
      num: '03',
      title: 'Автоматичний розрахунок',
      desc: 'Контракт миттєво розраховує суму для кожного співвласника.',
      details: ['Миттєвий розрахунок', 'Точність до wei']
    },
    {
      num: '04',
      title: 'Самостійний вивід',
      desc: 'Кожен співвласник може вивести накопичені кошти на свій гаманець.',
      details: ['Без затримок', '24/7 доступ']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-[#FFD700] tracking-widest uppercase block mb-4">
            04 — Як це працює
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
            Чотири кроки до прозорого розподілу
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid grid-cols-12 gap-4 py-8 border-b border-white/10 items-start">
                <div className="col-span-2 lg:col-span-1">
                  <span className="font-mono text-3xl font-bold text-[#FFD700]">
                    {step.num}
                  </span>
                </div>
                <div className="col-span-10 lg:col-span-3">
                  <h3 className="text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
                <div className="col-span-12 lg:col-span-4 mt-2 lg:mt-0">
                  <p className="text-white/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-3 lg:col-start-9 mt-4 lg:mt-0">
                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, idx) => (
                      <span 
                        key={idx}
                        className="font-mono text-xs text-white/40 px-3 py-1 border border-white/10"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
