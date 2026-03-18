import { useEffect, useRef } from 'react'

export default function CanvasBg() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W, H, particles = [], frame = 0, drops = []
    let animId

    const rainChars = '01</>{}=>const let var fn class interface'

    class Particle {
      constructor() { this.reset(true) }
      reset(init) {
        this.x    = Math.random() * W
        this.y    = init ? Math.random() * H : Math.random() * H
        this.vx   = (Math.random() - 0.5) * 0.35
        this.vy   = (Math.random() - 0.5) * 0.35
        this.size  = Math.random() * 1.4 + 0.3
        this.alpha = Math.random() * 0.45 + 0.08
        const r    = Math.random()
        this.color = r > 0.7 ? '0,255,136' : r > 0.4 ? '123,94,167' : '0,217,255'
      }
      update() {
        this.x += this.vx; this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset(false)
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`
        ctx.fill()
      }
    }

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
      const cols = Math.floor(W / 18)
      drops = Array(cols).fill(0).map(() => Math.random() * -50)
    }

    function initParticles() {
      particles = []
      for (let i = 0; i < 100; i++) particles.push(new Particle())
    }

    function animate() {
      animId = requestAnimationFrame(animate)
      ctx.fillStyle = 'rgba(5,11,20,0.05)'
      ctx.fillRect(0, 0, W, H)

      particles.forEach(p => { p.update(); p.draw() })

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < Math.min(i + 8, particles.length); j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,217,255,${(1 - d / 100) * 0.06})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }

      // Code rain (every 2 frames)
      frame++
      if (frame % 2 === 0) {
        ctx.font = '11px JetBrains Mono, monospace'
        for (let i = 0; i < drops.length; i++) {
          if (Math.random() > 0.965) {
            const ch = rainChars[Math.floor(Math.random() * rainChars.length)]
            ctx.fillStyle = `rgba(0,217,255,${Math.random() * 0.15 + 0.03})`
            ctx.fillText(ch, i * 18, drops[i] * 18)
            if (drops[i] * 18 > H && Math.random() > 0.97) drops[i] = 0
            else drops[i] += 0.5
          }
        }
      }
    }

    // Parallax on mouse move
    const onMouseMove = (e) => {
      const ox = (e.clientX / W - 0.5) * 10
      const oy = (e.clientY / H - 0.5) * 10
      canvas.style.transform = `translate(${ox}px,${oy}px) scale(1.015)`
    }

    resize()
    initParticles()
    animate()

    window.addEventListener('resize', () => { resize(); initParticles() })
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', () => { resize(); initParticles() })
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  )
}