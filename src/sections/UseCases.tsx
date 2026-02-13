import { useEffect, useRef, useState } from 'react';

export function UseCases() {
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

  const useCases = [
    { title: 'Музиканти', desc: 'Автоматичний розподіл доходу зі стримінгу між автором, виконавцем і продюсером.' },
    { title: 'Геймдев-команди', desc: 'Прозорий поділ виручки між розробниками, художниками та іншими учасниками команди.' },
    { title: 'Стартапи', desc: 'Зручний розподіл доходу між співзасновниками без ручних таблиць і щомісячних звірок.' },
    { title: 'Авторські колективи', desc: 'Чіткий облік гонорарів між співавторами книжок, курсів або дослідницьких проєктів.' },
    { title: 'Креативні агенції', desc: 'Швидкий поділ оплати за спільні проєкти між агентством і залученими фрилансерами.' },
    { title: 'Токенізовані активи (RWA)', desc: 'Автоматичні виплати власникам токенів відповідно до зафіксованих часток.' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <span className="font-mono text-xs text-[#FFD700] tracking-widest uppercase block mb-4">
              06 — Для кого
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Кому підійде цей підхід
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-white/50 leading-relaxed">
              Протокол корисний там, де гроші регулярно діляться між кількома сторонами
              і важливо уникнути ручного контролю однією людиною.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Use cases grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`border-l-2 border-white/10 pl-6 hover:border-[#FFD700] transition-colors transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {useCase.title}
              </h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { value: '100%', label: 'Прозорість' },
            { value: '0', label: 'Посередників' },
            { value: '24/7', label: 'Доступність' },
            { value: '∞', label: 'Масштаб' }
          ].map((stat, index) => (
            <div key={index} className="text-center py-8 border border-white/10">
              <div className="text-3xl lg:text-4xl font-bold text-[#FFD700] mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
