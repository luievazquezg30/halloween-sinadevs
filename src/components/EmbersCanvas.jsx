import { useEffect, useRef } from 'react'

const EMBER_COLORS = [
  { rgb: '255, 35, 45', glow: '#ff2233' }, // carmesí
  { rgb: '255, 140, 30', glow: '#ff8c1e' }, // ámbar
]

function pickColor() {
  return Math.random() > 0.65 ? EMBER_COLORS[1] : EMBER_COLORS[0]
}

function createParticles(width, height) {
  return Array.from({ length: 65 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: Math.random() * 2.4 + 0.6,
    speedY: -(Math.random() * 0.9 + 0.35),
    speedX: (Math.random() - 0.5) * 0.7,
    opacity: Math.random() * 0.7 + 0.25,
    color: pickColor(),
    sway: Math.random() * 2 + 1,
  }))
}

export default function EmbersCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const ctx = canvas.getContext('2d')
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    let frameId

    const particles = createParticles(width, height)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const drawEmbers = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach((particle, index) => {
        particle.y += particle.speedY
        particle.x += particle.speedX + Math.sin(Date.now() * 0.001 * particle.sway + index) * 0.35
        particle.opacity += Math.sin(Date.now() * 0.002 + index) * 0.015

        if (particle.y < -10) {
          particle.y = height + 15
          particle.x = Math.random() * width
        }

        const currentOpacity = Math.max(0.12, Math.min(particle.opacity, 0.9))

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color.rgb}, ${currentOpacity})`
        ctx.shadowBlur = 12
        ctx.shadowColor = particle.color.glow
        ctx.fill()
      })

      frameId = requestAnimationFrame(drawEmbers)
    }

    drawEmbers()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-[2] opacity-75"
      aria-hidden="true"
    />
  )
}
