'use client'

import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import type { ConteudoMenu, ItemMenu } from '@/content/menu'

interface MobileMenuProps {
  readonly aberto: boolean
  readonly conteudo: ConteudoMenu
  readonly onNavegar: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void
  readonly onFechar: () => void
}

function achatar(itens: readonly ItemMenu[]): ItemMenu[] {
  return itens.flatMap((item) => [item, ...(item.submenu ?? [])])
}

export function MobileMenu({
  aberto,
  conteudo,
  onNavegar,
  onFechar,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {aberto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 px-6 backdrop-blur-md md:hidden"
        >
          <div className="flex h-20 items-center justify-between">
            <span className="font-display text-step-1 font-semibold">
              Dev<span className="text-accent">Club</span>
            </span>
            <button type="button" onClick={onFechar} aria-label="Fechar menu">
              <X size={28} aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Menu mobile"
            className="flex flex-1 flex-col justify-center gap-6"
          >
            {achatar(conteudo.itens).map((item, i) => (
              <motion.a
                key={item.rotulo}
                href={item.href}
                onClick={(e) => onNavegar(e, item.href)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, duration: 0.4 }}
                className="font-display text-step-3 font-medium"
              >
                {item.rotulo}
              </motion.a>
            ))}
            <motion.a
              href={conteudo.cta.href}
              onClick={(e) => onNavegar(e, conteudo.cta.href)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32, duration: 0.4 }}
              className="mt-4 w-fit rounded-full bg-accent px-8 py-4 font-medium text-background"
            >
              {conteudo.cta.rotulo}
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
