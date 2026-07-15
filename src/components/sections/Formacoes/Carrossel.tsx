'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import type { Formacao } from '@/content/formacoes'
import { CardFormacao } from './CardFormacao'

interface CarrosselProps {
  readonly formacoes: readonly Formacao[]
}

export function Carrossel({ formacoes }: CarrosselProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const progressoRef = useRef<HTMLDivElement>(null)
  const [arrastavel, setArrastavel] = useState(false)
  const reduzido = useReducedMotion()

  const atualizarProgresso = (fracao: number) => {
    if (progressoRef.current) {
      progressoRef.current.style.transform = `scaleX(${Math.min(Math.max(fracao, 0), 1)})`
    }
  }

  useEffect(() => {
    if (reduzido) return
    let ativo = true
    let limpar: (() => void) | undefined

    // GSAP entra por dynamic import: só quem chega nesta dobra paga o custo
    void (async () => {
      const [{ gsap }, { Draggable }, { InertiaPlugin }] = await Promise.all([
        import('gsap'),
        import('gsap/Draggable'),
        import('gsap/InertiaPlugin'),
      ])
      if (!ativo) return
      gsap.registerPlugin(Draggable, InertiaPlugin)
      const mm = gsap.matchMedia()

      mm.add('(min-width: 768px)', () => {
        const wrap = wrapRef.current
        const track = trackRef.current
        if (!wrap || !track) return
        setArrastavel(true)
        const primeiro = track.children[0]
        const passo = primeiro
          ? primeiro.getBoundingClientRect().width + 24
          : 344
        const [drag] = Draggable.create(track, {
          type: 'x',
          bounds: wrap,
          inertia: true,
          edgeResistance: 0.85,
          cursor: 'grab',
          activeCursor: 'grabbing',
          snap: (valor: number) => Math.round(valor / passo) * passo,
          onUpdate(this: { x: number; minX: number }) {
            atualizarProgresso(this.minX ? this.x / this.minX : 0)
          },
        })
        return () => {
          drag?.kill()
          setArrastavel(false)
        }
      })
      limpar = () => mm.revert()
    })()

    return () => {
      ativo = false
      limpar?.()
    }
  }, [reduzido])

  const aoRolar = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const maximo = el.scrollWidth - el.clientWidth
    atualizarProgresso(maximo ? el.scrollLeft / maximo : 0)
  }

  return (
    <div>
      <div
        ref={wrapRef}
        onScroll={arrastavel ? undefined : aoRolar}
        className={
          arrastavel
            ? 'overflow-hidden'
            : 'scrollbar-none snap-x snap-mandatory overflow-x-auto'
        }
      >
        <div ref={trackRef} className="flex w-max select-none gap-6 pr-6">
          {formacoes.map((formacao, i) => (
            <CardFormacao key={formacao.slug} formacao={formacao} indice={i} />
          ))}
        </div>
      </div>
      <div className="mt-8 h-px w-full bg-border">
        <div
          ref={progressoRef}
          className="h-px origin-left bg-accent"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
      <p className="mt-3 hidden text-step--1 text-muted md:block">
        Arraste para explorar →
      </p>
    </div>
  )
}
