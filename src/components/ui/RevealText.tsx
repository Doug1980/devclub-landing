'use client'

import { motion } from 'motion/react'

interface RevealTextProps {
  readonly texto: string
  readonly className?: string
}

export function RevealText({ texto, className }: RevealTextProps) {
  const palavras = texto.split(' ')

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '-15% 0px' }}
      transition={{ staggerChildren: 0.04 }}
      aria-label={texto}
    >
      {palavras.map((palavra, i) => (
        <span
          key={`${palavra}-${i}`}
          aria-hidden="true"
          className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]"
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              visible: {
                y: 0,
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {palavra}
            {i < palavras.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
