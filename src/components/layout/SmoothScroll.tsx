'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from 'motion/react'

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const reduzido = useReducedMotion()

  useEffect(() => {
    if (reduzido) return
    gsap.registerPlugin(ScrollTrigger)
    const instancia = new Lenis({ lerp: 0.1 })

    // Lenis vira a fonte única da posição de scroll e o GSAP dirige o RAF,
    // senão os dois loops brigam e o scrub dessincroniza
    instancia.on('scroll', ScrollTrigger.update)
    const tick = (time: number) => instancia.raf(time * 1000)
    gsap.ticker.add(tick)
    gsap.ticker.lagSmoothing(0)
    setLenis(instancia)

    return () => {
      gsap.ticker.remove(tick)
      instancia.destroy()
      setLenis(null)
    }
  }, [reduzido])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
