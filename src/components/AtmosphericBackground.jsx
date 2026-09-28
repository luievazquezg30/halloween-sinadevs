import BatSwarm from './BatSwarm.jsx'
import EmbersCanvas from './EmbersCanvas.jsx'

const MANSION_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCxS09NRQUU_wO3e2wfpgFHkJab2NV49Xogs3b_ldogQ86naY3Os5hI_ejUgXzBg3BBJHkVdYNEXRTuZrDsli-GJ2UUhTrsYRnT4tyEqdnYcyzIxQH56ssupo-zMdRQcyye21XKjkz3ipKnYDcakAU0fcdHTsFBkb0jQXigZoNWH85bimyLKBnzVQwR2I4rYM01PyqGffV_ipm85Q0VPaKdECnoB25nfWXV7__wbwBcy3RyD7WBrRj_2KTuACiTX78vLQ'

// Arañas en esquinas libres del contenido, con ritmos desfasados
const SPIDERS = [
  { style: { right: '6%' }, delay: '3s', duration: '26s', thread: '36vh', swing: '5s' },
  { style: { left: '11%' }, delay: '14s', duration: '31s', thread: '30vh', swing: '6.2s' },
  { style: { right: '21%' }, delay: '22s', duration: '35s', thread: '42vh', swing: '4.4s' },
]

export default function AtmosphericBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Mansión embrujada con luna roja */}
      <img
        alt="Mansión embrujada bajo un colosal eclipse lunar rojo con calabazas resplandecientes — Alternative Halloween Fest"
        className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-125"
        src={MANSION_IMAGE}
      />

      {/* Viñetas y degradados góticos para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/75" />
      <div
        className="absolute inset-0 mix-blend-multiply opacity-80"
        style={{ background: 'radial-gradient(circle at 50% 35%, transparent 20%, #000000 85%)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />

      {/* Niebla a la deriva */}
      <div
        className="absolute inset-x-0 bottom-0 h-96 opacity-40 mix-blend-screen pointer-events-none animate-fog-slow"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(220, 25, 45, 0.4) 0%, rgba(140, 10, 20, 0.2) 40%, transparent 75%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-64 opacity-35 mix-blend-screen pointer-events-none animate-fog-fast"
        style={{
          background:
            'radial-gradient(ellipse at 65% 100%, rgba(255, 60, 40, 0.3) 0%, rgba(80, 5, 10, 0.15) 50%, transparent 80%)',
        }}
      />

      {/* Calabazas jack-o'-lantern entre la niebla */}
      <JackOLantern className="absolute bottom-1.5 left-[2.5%] w-[clamp(56px,7vw,96px)]" />
      <JackOLantern className="absolute bottom-3 right-[3%] w-[clamp(44px,5.5vw,76px)] -scale-x-100" />

      {/* Arañas colgadas de su hilo — varias, en esquinas libres y con ritmos desfasados */}
      {SPIDERS.map((spider, i) => (
        <div
          key={i}
          className="spider-drop"
          style={{ ...spider.style, animationDelay: spider.delay, animationDuration: spider.duration }}
        >
          <div className="spider-swing" style={{ animationDuration: spider.swing }}>
            <div className="spider-thread" style={{ height: spider.thread }} />
            <svg
              className="w-10 md:w-14 lg:w-[68px] h-auto drop-shadow-[0_0_14px_rgba(255,40,60,0.5)]"
              viewBox="0 0 60 54"
              aria-hidden="true"
            >
              <g stroke="#0a0206" strokeWidth="2.2" strokeLinecap="round" fill="none">
                <path d="M22 24 C13 20 8 14 6 7" />
                <path d="M21 29 C11 28 5 24 2 18" />
                <path d="M21 34 C12 36 6 41 4 47" />
                <path d="M24 37 C20 43 18 48 18 52" />
                <path d="M38 24 C47 20 52 14 54 7" />
                <path d="M39 29 C49 28 55 24 58 18" />
                <path d="M39 34 C48 36 54 41 56 47" />
                <path d="M36 37 C40 43 42 48 42 52" />
              </g>
              <ellipse cx="30" cy="34" rx="12.5" ry="10.5" fill="#12040d" stroke="rgba(255,120,120,0.22)" strokeWidth="1" />
              <circle cx="30" cy="21" r="6.2" fill="#12040d" stroke="rgba(255,120,120,0.22)" strokeWidth="1" />
              <circle cx="27.6" cy="20" r="1.4" fill="#ff3344" />
              <circle cx="32.4" cy="20" r="1.4" fill="#ff3344" />
            </svg>
          </div>
        </div>
      ))}

      {/* Enjambre de murciélagos y brasas flotantes */}
      <BatSwarm />
      <EmbersCanvas />

      {/* Relámpago ocasional que ilumina la escena */}
      <div className="lightning-flash" />
    </div>
  )
}

function JackOLantern({ className }) {
  return (
    <svg viewBox="0 0 100 92" className={className} aria-hidden="true">
      <ellipse cx="50" cy="60" rx="54" ry="38" fill="#ff7a18" opacity="0.16" />
      <path d="M46 16 q3 -10 11 -12 l3 6 q-7 2 -9 10 z" fill="#0d0503" />
      <g fill="#1b0a04">
        <ellipse cx="30" cy="56" rx="22" ry="30" />
        <ellipse cx="70" cy="56" rx="22" ry="30" />
        <ellipse cx="50" cy="56" rx="40" ry="34" />
      </g>
      <g className="pumpkin-face" fill="#ffb340">
        <path d="M30 46 l12 -10 4 13 z" />
        <path d="M58 44 l13 -7 2 12 z" />
        <path d="M46 54 l7 -5 3 8 z" />
        <path d="M28 64 l9 7 7 -5 8 6 8 -6 7 5 9 -7 -3 9 q-21 10 -42 0 z" />
      </g>
    </svg>
  )
}
