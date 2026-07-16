'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import type { ItemPlataforma } from '@/content/plataforma'
import { container, fadeUp } from '@/lib/animations'
import { RevealText } from '@/components/ui/RevealText'
import { Mock } from './Mock'

interface PlataformaProps {
  readonly titulo: string
  readonly itens: readonly ItemPlataforma[]
}

export function Plataforma({ titulo, itens }: PlataformaProps) {
  return (
    <section id="plataforma" className="py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
        <div>
          <h2 className="mb-12 font-display text-step-4 font-semibold leading-display tracking-tight">
            <RevealText texto={titulo} />
          </h2>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="space-y-6"
          >
            {itens.map((item) => (
              <motion.li key={item.slug} variants={fadeUp} className="flex gap-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Check size={14} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-medium">{item.titulo}</h3>
                  <p className="text-step--1 text-muted">{item.descricao}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeUp}
        >
          <Mock />
        </motion.div>
      </div>
    </section>
  )
}
