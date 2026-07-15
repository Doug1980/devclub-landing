'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Plus } from 'lucide-react'

export interface ItemAccordion {
  readonly slug: string
  readonly titulo: string
  readonly conteudo: string
}

interface AccordionProps {
  readonly itens: readonly ItemAccordion[]
}

export function Accordion({ itens }: AccordionProps) {
  const [aberto, setAberto] = useState<string | null>(null)

  return (
    <ul className="divide-y divide-border border-y border-border">
      {itens.map((item) => {
        const estaAberto = aberto === item.slug
        return (
          <li key={item.slug}>
            <button
              type="button"
              onClick={() => setAberto(estaAberto ? null : item.slug)}
              aria-expanded={estaAberto}
              aria-controls={`accordion-${item.slug}`}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="font-display text-step-1 font-medium">
                {item.titulo}
              </span>
              <motion.span
                animate={{ rotate: estaAberto ? 45 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="shrink-0 text-accent"
              >
                <Plus size={24} aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {estaAberto && (
                <motion.div
                  id={`accordion-${item.slug}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 text-muted">{item.conteudo}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        )
      })}
    </ul>
  )
}
