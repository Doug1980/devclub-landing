'use client'

import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

interface MagneticButtonProps {
  readonly href: string
  readonly children: React.ReactNode
  readonly className?: string
  readonly onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const ALCANCE = 0.3

export function MagneticButton({
  href,
  children,
  className,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [deslocamento, setDeslocamento] = useState({ x: 0, y: 0 })
  const reduzido = useReducedMotion()

  const aoMover = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el || reduzido) return
    const box = el.getBoundingClientRect()
    setDeslocamento({
      x: (e.clientX - box.left - box.width / 2) * ALCANCE,
      y: (e.clientY - box.top - box.height / 2) * ALCANCE,
    })
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={aoMover}
      onMouseLeave={() => setDeslocamento({ x: 0, y: 0 })}
      animate={deslocamento}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.6 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}
