export function Footer() {
  const githubUrl = import.meta.env.VITE_GITHUB_URL || '#';
  const links = [
    { label: 'GitHub', href: githubUrl },
    { label: 'Документація', href: githubUrl !== '#' ? `${githubUrl}#readme` : '#' },
    { label: 'Etherscan', href: '#' },
  ];

  return (
    <footer className="relative bg-black">
      {/* Top yellow line */}
      <div className="w-full h-1 bg-[#FFD700]" />

      <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-12 gap-8">
          {/* Logo & description */}
          <div className="col-span-12 lg:col-span-6 mb-8 lg:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/logo.png"
                alt="Непідкупний бухгалтер"
                className="w-20 h-20 object-contain"
              />
              <span className="text-lg font-semibold text-white tracking-tight">
                НЕПІДКУПНИЙ БУХГАЛТЕР
              </span>
            </div>
            <p className="text-sm text-white/40 max-w-md leading-relaxed">
              Навчальний проєкт, який показує, як смарт-контракти можуть автоматизувати
              розподіл коштів і зняти залежність від посередника.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-6 lg:col-span-3">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
              Ресурси
            </span>
            <ul className="space-y-3">
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    target={link.href !== '#' ? '_blank' : undefined}
                    rel={link.href !== '#' ? 'noreferrer' : undefined}
                    className="text-sm text-white/60 hover:text-[#FFD700] transition-colors"
                  >
                    {link.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div className="col-span-6 lg:col-span-3">
            <span className="font-mono text-xs text-white/40 uppercase tracking-widest block mb-4">
              Статус
            </span>
            <div className="space-y-2">
              <span className="block text-sm text-white/60">Proof of Concept</span>
              <span className="block text-sm text-white/60">Academic Project</span>
              <span className="block text-sm text-white/60">Not Audited</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="text-xs text-white/30">
              Без юридичних гарантій. Не призначено для використання з реальними активами.
            </p>
            <p className="font-mono text-xs text-white/30">© 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
