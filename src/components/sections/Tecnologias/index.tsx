'use client'

import { motion } from 'motion/react'
import type { Tecnologia } from '@/content/tecnologias'
import { container, fadeUp } from '@/lib/animations'
import { RevealText } from '@/components/ui/RevealText'

interface TecnologiasProps {
  readonly titulo: string
  readonly tecnologias: readonly Tecnologia[]
}

export function Tecnologias({ titulo, tecnologias }: TecnologiasProps) {
  return (
    <section id="tecnologias" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 max-w-4xl font-display text-step-4 font-semibold leading-display tracking-tight">
          <RevealText texto={titulo} />
        </h2>
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {tecnologias.map((tecnologia) => (
            <motion.li
              key={tecnologia.slug}
              variants={fadeUp}
              className="flex items-center gap-2.5 rounded-full border border-border px-5 py-3 text-muted transition-colors duration-(--dur-fast) hover:border-accent hover:text-foreground"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 shrink-0 fill-current"
                aria-hidden="true"
              >
                <path d={tecnologia.icone.path} />
              </svg>
              <span className="font-medium">{tecnologia.nome}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
