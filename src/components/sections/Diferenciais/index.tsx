'use client'

import { motion } from 'motion/react'
import {
  Bot,
  Brain,
  Briefcase,
  Headphones,
  MessagesSquare,
  UserSearch,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { Diferencial } from '@/content/diferenciais'
import { container, fadeUp } from '@/lib/animations'
import { RevealText } from '@/components/ui/RevealText'

const icones: Record<Diferencial['icone'], LucideIcon> = {
  recrutadora: UserSearch,
  terapeuta: Brain,
  mentoria: Users,
  agentes: Bot,
  suporte: Headphones,
  comunidade: MessagesSquare,
  vagas: Briefcase,
}

const spans: Partial<Record<string, string>> = {
  recrutadora: 'md:col-span-2',
  comunidade: 'md:col-span-2',
}

interface DiferenciaisProps {
  readonly titulo: string
  readonly diferenciais: readonly Diferencial[]
}

export function Diferenciais({ titulo, diferenciais }: DiferenciaisProps) {
  return (
    <section id="diferenciais" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 max-w-3xl font-display text-step-4 font-semibold leading-display tracking-tight">
          <RevealText texto={titulo} />
        </h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {diferenciais.map((diferencial) => {
            const Icone = icones[diferencial.icone]
            return (
              <motion.article
                key={diferencial.slug}
                variants={fadeUp}
                className={`rounded-2xl border border-border bg-surface/40 p-8 transition-colors duration-(--dur-fast) hover:border-accent/50 ${spans[diferencial.slug] ?? ''}`}
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icone size={24} aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-step-1 font-medium leading-snug">
                  {diferencial.titulo}
                </h3>
                <p className="mt-2 text-step--1 text-muted">
                  {diferencial.descricao}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
