import { useEffect, useState } from 'react'

// Objetivo: 31 de octubre del año en curso, 21:00 HRS hora de Mazatlán, Sinaloa
// (America/Mazatlan, UTC-7 todo el año — Sinaloa no aplica horario de verano).
// Anclado con offset fijo para que el conteo sea correcto desde cualquier país.
// Si la fecha ya pasó, rueda al siguiente año.
function getTargetTime() {
  const year = new Date().getFullYear()
  let target = Date.parse(`${year}-10-31T21:00:00-07:00`)
  if (Date.now() > target) {
    target = Date.parse(`${year + 1}-10-31T21:00:00-07:00`)
  }
  return target
}

const pad = (value) => String(value).padStart(2, '0')

const UNITS = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg', accent: true },
]

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: '--',
    hours: '--',
    minutes: '--',
    seconds: '--',
  })

  useEffect(() => {
    const target = getTargetTime()

    const update = () => {
      const distance = target - Date.now()
      if (distance < 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' })
        return
      }
      setTimeLeft({
        days: pad(Math.floor(distance / 86_400_000)),
        hours: pad(Math.floor((distance % 86_400_000) / 3_600_000)),
        minutes: pad(Math.floor((distance % 3_600_000) / 60_000)),
        seconds: pad(Math.floor((distance % 60_000) / 1000)),
      })
    }

    update()
    const intervalId = setInterval(update, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full max-w-2xl px-2" data-purpose="event-countdown">
      <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-red-400 mb-[clamp(0.4rem,1.2vmin,0.75rem)] drop-shadow [@media(max-height:620px)]:hidden">
        El fest comienza en
      </p>
      <div className="grid grid-cols-4 gap-[clamp(0.375rem,1.2vmin,1rem)] max-w-lg mx-auto">
        {UNITS.map((unit) => (
          <div
            key={unit.key}
            className="rounded-xl p-[clamp(0.5rem,1.6vmin,1rem)] border border-red-500/20 bg-[#1c0209]/50 backdrop-blur-sm shadow-inner flex flex-col items-center justify-center"
          >
            <span
              className={`font-gothic text-[clamp(1.4rem,4.2vmin,2.25rem)] font-extrabold text-glow-crimson leading-tight ${
                unit.accent ? 'text-blood-400' : 'text-white'
              }`}
            >
              {timeLeft[unit.key]}
            </span>
            <span className="text-[9px] sm:text-[11px] uppercase tracking-widest text-gray-400 mt-1 font-semibold">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
