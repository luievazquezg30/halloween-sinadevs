// Murciélago realista: orejas y borde alar recortado — con degradado de luz lunar
const BAT_PATH =
  'M10.2 1.4 L12 3.4 L13.8 1.4 c.3 1.2 .8 2 1.7 2.5 2.1 1.1 4.6 .8 6.4 -.6 -.8 1.8 -.9 3.8 -.3 5.7 -1.8 -.4 -3.7 .2 -5 1.5 L12 17.4 7.4 10.5 C6.1 9.2 4.2 8.6 2.4 9 3 7.1 2.9 5.1 2.1 3.3 3.9 4.7 6.4 5 8.5 3.9 9.4 3.4 9.9 2.6 10.2 1.4 Z'

// Tamaños pequeños: de lejos son siluetas creíbles; las trayectorias cubren toda la pantalla
const BAT_CONFIGS = [
  { id: 'crossing', path: 'animate-bat-path-1', flap: 'bat-flapping', size: 'w-9 h-9', glow: 'drop-shadow-[0_0_9px_rgba(255,40,60,0.5)]' },
  { id: 'moon-shadow', path: 'animate-bat-path-2', flap: 'bat-flapping-fast', size: 'w-6 h-6', glow: 'drop-shadow-[0_0_7px_rgba(255,40,60,0.4)]' },
  { id: 'moon-orbit', path: 'animate-bat-path-moon', flap: 'bat-flapping', size: 'w-4 h-4', glow: 'drop-shadow-[0_0_5px_rgba(255,40,60,0.5)]' },
  { id: 'swoop', path: 'animate-bat-path-swoop', flap: 'bat-flapping-fast', size: 'w-10 h-10', glow: 'drop-shadow-[0_0_11px_rgba(255,40,60,0.55)]' },
  { id: 'flock-a', path: 'animate-bat-path-moon-1', flap: 'bat-flapping-frenzy', size: 'w-4 h-4', glow: 'drop-shadow-[0_0_4px_rgba(255,40,60,0.55)]' },
  { id: 'flock-b', path: 'animate-bat-path-moon-2', flap: 'bat-flapping-fast', size: 'w-3 h-3', glow: 'drop-shadow-[0_0_4px_rgba(255,40,60,0.5)]' },
  { id: 'steeple', path: 'animate-bat-path-tower-up', flap: 'bat-flapping', size: 'w-7 h-7', glow: 'drop-shadow-[0_0_8px_rgba(255,40,60,0.45)]' },
  { id: 'spire-left', path: 'animate-bat-path-tower-left', flap: 'bat-flapping-frenzy', size: 'w-5 h-5', glow: 'drop-shadow-[0_0_6px_rgba(255,40,60,0.45)]' },
  { id: 'right-flank', path: 'animate-bat-path-right-flank', flap: 'bat-flapping-fast', size: 'w-8 h-8', glow: 'drop-shadow-[0_0_9px_rgba(255,40,60,0.5)]' },
  { id: 'left-flank', path: 'animate-bat-path-left-flank', flap: 'bat-flapping', size: 'w-7 h-7', glow: 'drop-shadow-[0_0_8px_rgba(255,40,60,0.45)]' },
  { id: 'extra-mid', path: 'animate-bat-path-1', flap: 'bat-flapping-fast', size: 'w-5 h-5', glow: 'drop-shadow-[0_0_6px_rgba(255,40,60,0.45)]', delay: 13 },
  { id: 'extra-low', path: 'animate-bat-path-swoop', flap: 'bat-flapping', size: 'w-6 h-6', glow: 'drop-shadow-[0_0_7px_rgba(255,40,60,0.45)]', delay: 19 },
]

function Bat({ config }) {
  return (
    <div className={`absolute ${config.path}`} style={{ top: 0, left: 0, animationDelay: config.delay ? `${config.delay}s` : undefined }}>
      <div className={`${config.flap} ${config.glow}`}>
        <svg className={`${config.size}`} viewBox="0 0 24 24" fill="url(#bat-grad)" aria-hidden="true">
          <path d={BAT_PATH} />
        </svg>
      </div>
    </div>
  )
}

export default function BatSwarm() {
  return (
    <>
      {/* Degradado compartido: lomo iluminado por la luna */}
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="bat-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a0d1e" />
            <stop offset="55%" stopColor="#160312" />
            <stop offset="100%" stopColor="#070112" />
          </linearGradient>
        </defs>
      </svg>
      <div className="bat-swarm-layer absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        {BAT_CONFIGS.map((config) => (
          <Bat key={config.id} config={config} />
        ))}
      </div>
    </>
  )
}
