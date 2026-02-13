import { useEffect, useRef, useState } from 'react';

export function Problem() {
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

  const problems = [
    {
      num: '01',
      title: 'Непрозорість',
      desc: 'Автори часто не бачать повної картини доходів. Звіти приходять із запізненням або без потрібних деталей.'
    },
    {
      num: '02',
      title: 'Людський фактор',
      desc: 'Під час ручного розрахунку легко помилитися: не ті суми, затримки виплат або плутанина в частках.'
    },
    {
      num: '03',
      title: 'Складні зміни',
      desc: 'Будь-яка зміна умов тягне за собою листування, узгодження та постійні перевірки між учасниками.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 lg:py-32 bg-black"
    >
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-4">
            <span className="font-mono text-xs text-[#FFD700] tracking-widest uppercase block mb-4">
              02 — Проблема
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Чому традиційний підхід дає збої
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="text-white/50 leading-relaxed">
              У більшості команд розподіл коштів тримається на людських домовленостях і ручній бухгалтерії.
              Поки всі в ресурсі, це працює. Але щойно проєкт росте, з&apos;являються затримки, суперечки та недовіра.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-16" />

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="font-mono text-5xl font-bold text-[#FFD700]/30 block mb-6">
                {problem.num}
              </span>
              <h3 className="text-xl font-semibold text-white mb-4">
                {problem.title}
              </h3>
              <p className="text-white/50 leading-relaxed">
                {problem.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className={`mt-20 transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border-l-2 border-[#FFD700] pl-8 max-w-2xl">
            <blockquote className="text-xl text-white/60 italic leading-relaxed mb-4">
              "Коли гроші проходять через одну точку контролю, довіра рано чи пізно починає тріщати."
            </blockquote>
            <cite className="font-mono text-xs text-white/40 not-italic">
              — Типова проблема централізованого обліку
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
