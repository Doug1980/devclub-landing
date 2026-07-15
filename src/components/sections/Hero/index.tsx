'use client'

import { motion } from 'motion/react'
import type { ConteudoHero } from '@/content/hero'
import type { Empresa } from '@/content/empresas'
import { container, fadeUp } from '@/lib/animations'
import { ParticleField } from './ParticleField'
import { ProvaSocial } from './ProvaSocial'
import { Empresas } from './Empresas'

interface HeroProps {
  readonly conteudo: ConteudoHero
  readonly empresas: readonly Empresa[]
}

export function Hero({ conteudo, empresas }: HeroProps) {
  return (
    <section id="hero" className="relative flex min-h-screen flex-col overflow-hidden">
      <ParticleField />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-8 px-6 pt-24 text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="font-display text-step-5 font-semibold leading-display tracking-tight"
        >
          {conteudo.titulo}
        </motion.h1>
        <motion.p variants={fadeUp} className="max-w-2xl text-step-1 text-muted">
          {conteudo.subtitulo}
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={conteudo.ctaPrimario.href}
            className="rounded-full bg-accent px-8 py-4 font-medium text-background transition-transform duration-(--dur-fast) ease-out-quart hover:scale-105 active:scale-95"
          >
            {conteudo.ctaPrimario.rotulo}
          </a>
          <a
            href={conteudo.ctaSecundario.href}
            className="rounded-full border border-border px-8 py-4 font-medium transition-colors duration-(--dur-fast) hover:border-accent"
          >
            {conteudo.ctaSecundario.rotulo}
          </a>
        </motion.div>
        <motion.div variants={fadeUp}>
          <ProvaSocial {...conteudo.provaSocial} avatares={conteudo.avatares} />
        </motion.div>
      </motion.div>
      <div className="relative z-10">
        <Empresas titulo={conteudo.tituloEmpresas} empresas={empresas} />
      </div>
    </section>
  )
}
