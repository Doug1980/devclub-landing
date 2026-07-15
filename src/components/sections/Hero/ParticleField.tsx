'use client'

import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'motion/react'

interface Camada {
  readonly profundidade: number
  readonly raio: number
  readonly alpha: number
  readonly areaPorParticula: number
}

const CAMADAS: readonly Camada[] = [
  { profundidade: 0.35, raio: 1.1, alpha: 0.3, areaPorParticula: 26000 },
  { profundidade: 0.65, raio: 1.6, alpha: 0.5, areaPorParticula: 34000 },
  { profundidade: 1, raio: 2.2, alpha: 0.85, areaPorParticula: 46000 },
]

interface Particula {
  x: number
  y: number
  camada: Camada
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduzido = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    // lê a cor do token para o canvas nunca divergir do design system
    const cor =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-accent')
        .trim() || '#8b5cf6'

    // DPR limitado a 2: acima disso quadruplica pixels sem ganho visível
    const dpr = Math.min(window.devicePixelRatio, 2)
    let largura = 0
    let altura = 0
    let particulas: Particula[] = []

    const redimensionar = () => {
      largura = canvas.clientWidth
      altura = canvas.clientHeight
      canvas.width = largura * dpr
      canvas.height = altura * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particulas = CAMADAS.flatMap((camada) =>
        Array.from(
          { length: Math.round((largura * altura) / camada.areaPorParticula) },
          () => ({
            x: Math.random() * largura,
            y: Math.random() * altura,
            camada,
          }),
        ),
      )
    }

    const mouse = { x: -9999, y: -9999 }
    const aoMoverMouse = (e: MouseEvent) => {
      const box = canvas.getBoundingClientRect()
      mouse.x = e.clientX - box.left
      mouse.y = e.clientY - box.top
    }

    let t = 0
    let ultimo = performance.now()
    const desenharQuadro = (agora: number) => {
      const dt = Math.min(agora - ultimo, 50)
      ultimo = agora
      t += dt * 0.0004
      ctx.clearRect(0, 0, largura, altura)
      ctx.fillStyle = cor
      for (const p of particulas) {
        const { profundidade, raio, alpha } = p.camada
        const angulo =
          Math.sin(p.x * 0.0012 + t) + Math.cos(p.y * 0.0014 - t * 0.7)
        p.x += Math.cos(angulo) * 0.22 * profundidade * (dt / 16.7)
        p.y += Math.sin(angulo) * 0.16 * profundidade * (dt / 16.7)
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        if (dx * dx + dy * dy < 48400) {
          p.x += dx * 0.004 * profundidade
          p.y += dy * 0.004 * profundidade
        }
        if (p.x < -8) p.x = largura + 8
        else if (p.x > largura + 8) p.x = -8
        if (p.y < -8) p.y = altura + 8
        else if (p.y > altura + 8) p.y = -8
        ctx.globalAlpha = alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, raio, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    redimensionar()

    if (reduzido) {
      desenharQuadro(performance.now())
      return
    }

    let raf = 0
    const loop = (agora: number) => {
      desenharQuadro(agora)
      raf = requestAnimationFrame(loop)
    }

    const observador = new IntersectionObserver(([entrada]) => {
      cancelAnimationFrame(raf)
      if (entrada?.isIntersecting) raf = requestAnimationFrame(loop)
    })
    observador.observe(canvas)

    const observadorTamanho = new ResizeObserver(redimensionar)
    observadorTamanho.observe(canvas)
    window.addEventListener('mousemove', aoMoverMouse)

    return () => {
      cancelAnimationFrame(raf)
      observador.disconnect()
      observadorTamanho.disconnect()
      window.removeEventListener('mousemove', aoMoverMouse)
    }
  }, [reduzido])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
