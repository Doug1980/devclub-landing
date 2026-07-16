'use client'

import { motion } from 'motion/react'
import type { Projeto } from '@/content/projetos'
import { container, fadeUp } from '@/lib/animations'
import { RevealText } from '@/components/ui/RevealText'

interface ProjetosProps {
  readonly titulo: string
  readonly projetos: readonly Projeto[]
}

export function Projetos({ titulo, projetos }: ProjetosProps) {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 max-w-3xl font-display text-step-4 font-semibold leading-display tracking-tight">
          <RevealText texto={titulo} />
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projetos.map((projeto, i) => (
            <motion.article
              key={projeto.slug}
              variants={fadeUp}
              className={`overflow-hidden rounded-2xl border border-border bg-surface/40 transition-colors duration-(--dur-fast) hover:border-accent/50 ${i === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className="flex items-center gap-2 border-b border-border px-5 py-3">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="ml-3 truncate rounded-md bg-background px-3 py-1 text-step--1 text-muted">
                  devclub.com.br/projetos/{projeto.slug}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-display text-step-2 font-medium leading-snug">
                  {projeto.nome}
                </h3>
                <p className="mt-2 max-w-xl text-muted">{projeto.descricao}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {projeto.stack.map((tecnologia) => (
                    <li
                      key={tecnologia}
                      className="rounded-full border border-border px-3 py-1 text-step--1 text-muted"
                    >
                      {tecnologia}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
