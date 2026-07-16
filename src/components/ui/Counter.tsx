'use client'

import { useEffect, useRef } from 'react'
import { useInView, useReducedMotion } from 'motion/react'

interface CounterProps {
  readonly ate: number
  readonly prefixo?: string
  readonly sufixo?: string
  readonly duracaoMs?: number
}

export function Counter({
  ate,
  prefixo = '',
  sufixo = '',
  duracaoMs = 1400,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const visivel = useInView(ref, { once: false, margin: '-10% 0px' })
  const reduzido = useReducedMotion()

  useEffect(() => {
    const alvo = ref.current
    if (!alvo) return
    if (!visivel) {
      alvo.textContent = `${prefixo}0${sufixo}`
      return
    }
    if (reduzido) {
      alvo.textContent = `${prefixo}${ate}${sufixo}`
      return
    }
    const inicio = performance.now()
    let raf = 0
    const passo = (agora: number) => {
      const progresso = Math.min((agora - inicio) / duracaoMs, 1)
      const easing = 1 - Math.pow(2, -10 * progresso)
      alvo.textContent = `${prefixo}${Math.round(ate * easing)}${sufixo}`
      if (progresso < 1) raf = requestAnimationFrame(passo)
      else alvo.textContent = `${prefixo}${ate}${sufixo}`
    }
    raf = requestAnimationFrame(passo)
    return () => cancelAnimationFrame(raf)
  }, [visivel, reduzido, ate, prefixo, sufixo, duracaoMs])

  return (
    <span ref={ref}>
      {prefixo}0{sufixo}
    </span>
  )
}
