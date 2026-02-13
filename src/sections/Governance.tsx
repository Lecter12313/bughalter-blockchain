import { useEffect, useRef, useState } from 'react';

export function Governance() {
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
    { title: 'Колективне голосування', desc: 'Зміни часток проходять через рішення групи, а не через одну людину з доступом.' },
    { title: 'Зрозумілі правила', desc: 'Формат голосування зафіксований заздалегідь: всі учасники знають, як приймаються рішення.' },
    { title: 'Гнучкість без хаосу', desc: 'Умови можна оновити, коли змінюється внесок команди, але тільки через прозорий процес.' },
    { title: 'Захист для всіх сторін', desc: 'Механізм зменшує ризик, що сильніший учасник одноосібно змінить правила на свою користь.' }
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
              05 — DAO-lite
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              Колективне управління умовами
            </h2>
            <p className="text-white/50 leading-relaxed">
              Якщо ролі в команді змінюються, частки можна переглянути через голосування.
              Це зберігає гнучкість і прибирає ручні «домовились в чаті».
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
              <div className="w-8 h-8 border border-[#FFD700] flex items-center justify-center flex-shrink-0">
                <span className="font-mono text-xs text-[#FFD700]">{index + 1}</span>
              </div>
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

        {/* Voting flow */}
        <div className={`transition-all duration-700 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="border border-white/10 p-8">
            <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-8">
              Процес зміни часток
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', label: 'Пропозиція', desc: 'Один з учасників створює пропозицію' },
                { step: '2', label: 'Голосування', desc: 'Команда голосує за або проти' },
                { step: '3', label: 'Виконання', desc: 'Після порогу контракт застосовує зміни' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-12 h-12 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-lg text-[#FFD700]">{item.step}</span>
                  </div>
                  <div>
                    <span className="text-sm text-white block">{item.label}</span>
                    <span className="text-xs text-white/40">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-white/40">
                Поріг прийняття: <span className="text-[#FFD700]">66% голосів</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
