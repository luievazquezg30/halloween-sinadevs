import Countdown from './Countdown.jsx'

export default function Hero() {
  return (
    <section className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 py-[clamp(0.5rem,2.5vmin,2.5rem)] flex flex-col flex-1 min-h-0 items-center justify-center text-center">
      {/* Insignia del anuncio */}
      <div className="reveal reveal-1 inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full glass-card border border-red-500/40 text-red-300 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase mb-[clamp(0.75rem,2.2vmin,1.5rem)] animate-pulse-blood shadow-lg">
        <span className="text-blood-400 font-bold">✦</span>
        <span>EVENTO EXCLUSIVO</span>
        <span className="text-blood-400 font-bold">✦</span>
      </div>

      {/* Presentación del festival, flanqueada por el murciélago del logo */}
      <p className="reveal reveal-2 flex items-center justify-center gap-3 text-[10px] sm:text-xs font-semibold tracking-[0.55em] uppercase text-blood-400/90 mb-[clamp(0.4rem,1.4vmin,0.9rem)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-blood-500 -scale-x-100 drop-shadow-[0_0_6px_rgba(255,50,50,0.7)]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C9 4.5 4 4.5 2 7c2 2 3 5 1 8 4-2 6 0 9 5 3-5 5-7 9-5-2-3-1-6 1-8-2-2.5-7-2.5-10-5zm-1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
        <span>Alternative presenta</span>
        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-blood-500 drop-shadow-[0_0_6px_rgba(255,50,50,0.7)]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C9 4.5 4 4.5 2 7c2 2 3 5 1 8 4-2 6 0 9 5 3-5 5-7 9-5-2-3-1-6 1-8-2-2.5-7-2.5-10-5zm-1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm2 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
        </svg>
      </p>

      {/* Título del festival */}
      <h1 className="reveal reveal-3 font-gothic text-[clamp(2.1rem,9vmin,6rem)] font-black tracking-wider leading-none mb-[clamp(0.75rem,2.2vmin,1.5rem)] uppercase">
        <span className="text-gradient-eclipse title-shine text-glow-crimson">
          Halloween
          <br />
          Fest
        </span>
      </h1>

      {/* Invitación atmosférica */}
      <p className="reveal reveal-4 max-w-2xl text-[clamp(0.95rem,2.5vmin,1.3rem)] text-gray-300 font-serif italic leading-relaxed mb-[clamp(1rem,3vmin,2.25rem)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] [@media(max-height:500px)]:hidden">
        "Alcohol, degenere, sexo y premio al disfraz más perro”
      </p>

      {/* Botones de estado (todo próximamente) */}
      <div className="reveal reveal-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 w-full max-w-md mb-[clamp(1rem,3.5vmin,2.5rem)]">
        <span
          aria-disabled="true"
          title="Los boletos estarán disponibles muy pronto"
          data-purpose="coming-soon-button"
          className="w-full sm:w-auto flex-1 relative px-[clamp(1.25rem,4vmin,2rem)] py-[clamp(0.6rem,1.8vmin,1rem)] rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-widest text-white cursor-default select-none"
        >
          <span className="absolute inset-0 bg-blood-600 rounded-xl blur-[10px] opacity-75 animate-pulse-blood" />
          <span className="absolute inset-0 bg-gradient-to-r from-blood-600 via-blood-500 to-red-700 rounded-xl border border-red-300/40 shadow-2xl" />
          <span className="relative flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap">
            <span>Preventa aquí</span>
            <span className="text-red-200 text-[10px] sm:text-xs font-normal tracking-normal normal-case">(muy pronto)</span>
          </span>
        </span>

        <span
          aria-disabled="true"
          title="La ubicación se revelará pronto"
          data-purpose="location-tba-button"
          className="w-full sm:w-auto flex-1 glass-card px-[clamp(1.25rem,4vmin,2rem)] py-[clamp(0.6rem,1.8vmin,1rem)] rounded-xl text-sm font-bold uppercase tracking-widest text-gray-200 cursor-default select-none"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 text-blood-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
            <span>Ubicación</span>
            <span className="text-red-300 text-xs font-normal tracking-normal normal-case">próximamente</span>
          </span>
        </span>
      </div>

      <div className="reveal reveal-6 w-full max-w-2xl px-2">
        <Countdown />
      </div>
    </section>
  )
}
