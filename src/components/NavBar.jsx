import logoUrl from '../assets/ALTERNATIVE_LOGO.png'

export default function NavBar() {
  return (
    <header className="relative z-30 w-full flex-shrink-0 pt-[clamp(0.75rem,2.5vmin,1.5rem)] px-4 sm:px-8 max-w-7xl mx-auto">
      <nav className="glass-gothic rounded-2xl px-4 sm:px-5 py-[clamp(0.5rem,1.6vmin,0.875rem)] flex items-center justify-between gap-3 border-t border-red-500/30">
        {/* Marca */}
        <a aria-label="Inicio Alternative Halloween Fest" href="#" className="flex items-center gap-3 group min-w-0">
          <span className="flex-shrink-0 filter drop-shadow-[0_0_10px_rgba(255,60,60,0.35)]">
            <img
              src={logoUrl}
              alt="Alternative Events"
              className="h-10 w-auto select-none"
              draggable="false"
            />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="font-gothic text-sm sm:text-base lg:text-lg tracking-[0.25em] font-bold text-white group-hover:text-blood-400 transition-colors truncate">
              ALTERNATIVE
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-red-400/70 font-semibold">
              Halloween Fest · 31.10.26
            </span>
          </span>
        </a>

        {/* Estado de preventa (oculto en móvil: el hero ya lo comunica) */}
        <span
          aria-disabled="true"
          title="Los boletos estarán disponibles muy pronto"
          className="hidden sm:inline-flex relative flex-shrink-0 px-5 py-2.5 rounded-xl overflow-hidden font-semibold text-xs tracking-wider uppercase text-white cursor-default select-none"
        >
          <span className="absolute inset-0 bg-blood-600 opacity-80" />
          <span className="absolute inset-0 bg-gradient-to-r from-blood-600 via-blood-500 to-red-700" />
          <span className="absolute inset-0 border border-red-300/40 rounded-xl" />
          <span className="relative flex items-center gap-2">
            <span>Próximamente</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </span>
        </span>
      </nav>
    </header>
  )
}
