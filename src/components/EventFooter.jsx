const DETAILS = [
  {
    key: 'date',
    label: 'Fecha',
    value: '31 de Octubre • 2026',
    iconColor: 'text-blood-500',
    labelColor: 'text-red-400/80',
    icon: (
      <path
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
  {
    key: 'location',
    label: 'Ubicación',
    value: '',
    address: 'Cerro de la Campana 121, Lomas de Mazatlán',
    addressHref: 'https://maps.app.goo.gl/H6ZSthe2aFU6HrQe9',
    iconColor: 'text-blood-500',
    labelColor: 'text-red-400/80',
    icon: (
      <>
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
      </>
    ),
  },
  {
    key: 'tickets',
    label: 'Boletos',
    value: 'Ya disponibles',
    iconColor: 'text-blood-500',
    labelColor: 'text-red-400/80',
    icon: (
      <path
        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 012 2 2 2 0 01-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 01-2-2 2 2 0 012-2V7a2 2 0 00-2-2H5z"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    ),
  },
]

export default function EventFooter() {
  return (
    <footer className="relative z-30 w-full max-w-6xl mx-auto flex-shrink-0 px-3 sm:px-6 pb-[clamp(0.75rem,2vmin,1.5rem)] pt-[clamp(0.25rem,0.8vmin,0.5rem)]">
      <div className="glass-gothic rounded-xl py-[clamp(0.4rem,1.1vmin,0.65rem)] px-3 sm:px-5 border-t border-red-500/30">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-red-950/80">
          {DETAILS.map((detail) => (
            <div
              key={detail.key}
              className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-1 md:gap-3 px-1"
            >
              <svg
                className={`w-4 h-4 md:w-5 md:h-5 ${detail.iconColor} flex-shrink-0`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {detail.icon}
              </svg>
              <div>
                <p className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider ${detail.labelColor}`}>
                  {detail.label}
                </p>
                <p className="text-[10px] sm:text-xs font-medium text-gray-200">{detail.value}</p>
                {detail.address && (
                  <a
                    href={detail.addressHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Ver ubicación en Google Maps"
                    className="mt-0.5 block text-[10px] sm:text-xs leading-snug text-gray-400 transition-colors hover:text-red-300"
                  >
                    {detail.address}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Crédito de desarrollo: fila delgada dentro de la tarjeta para no
            crecer el pie (el layout es de un solo pantallazo sin scroll) */}
        <p className="mt-1.5 border-t border-red-950/80 pt-1 text-center text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-gray-500 [@media(max-height:560px)]:hidden">
          Desarrollado por <span className="font-bold text-red-400/90">Sinadevs</span>
        </p>
      </div>
    </footer>
  )
}
