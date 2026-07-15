'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Menu } from 'lucide-react'
import { useLenis } from '@/components/layout/SmoothScroll'
import { MagneticButton } from '@/components/ui/MagneticButton'
import type { ConteudoMenu } from '@/content/menu'
import { MobileMenu } from './MobileMenu'

interface HeaderProps {
  readonly conteudo: ConteudoMenu
}

export function Header({ conteudo }: HeaderProps) {
  const [rolou, setRolou] = useState(false)
  const [menuAberto, setMenuAberto] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 8)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  const navegar = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#') || href.length < 2) return
    e.preventDefault()
    setMenuAberto(false)
    if (lenis) lenis.scrollTo(href, { offset: -80 })
    else document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-(--dur-base) ${
        rolou
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => navegar(e, '#hero')}
          className="font-display text-step-1 font-semibold"
        >
          Dev<span className="text-accent">Club</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {conteudo.itens.map((item) =>
            item.submenu ? (
              <div key={item.rotulo} className="group relative">
                <a
                  href={item.href}
                  onClick={(e) => navegar(e, item.href)}
                  className="flex items-center gap-1 text-muted transition-colors duration-(--dur-fast) hover:text-foreground"
                >
                  {item.rotulo}
                  <ChevronDown size={14} aria-hidden="true" />
                </a>
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-(--dur-fast) group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-44 rounded-xl border border-border bg-surface p-2">
                    {item.submenu.map((sub) => (
                      <a
                        key={sub.rotulo}
                        href={sub.href}
                        onClick={(e) => navegar(e, sub.href)}
                        className="block rounded-lg px-4 py-2 text-muted transition-colors duration-(--dur-fast) hover:bg-background hover:text-foreground"
                      >
                        {sub.rotulo}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.rotulo}
                href={item.href}
                onClick={(e) => navegar(e, item.href)}
                className="text-muted transition-colors duration-(--dur-fast) hover:text-foreground"
              >
                {item.rotulo}
              </a>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <MagneticButton
            href={conteudo.cta.href}
            onClick={(e) => navegar(e, conteudo.cta.href)}
            className="hidden rounded-full bg-accent px-6 py-3 font-medium text-background md:inline-block"
          >
            {conteudo.cta.rotulo}
          </MagneticButton>
          <button
            type="button"
            onClick={() => setMenuAberto(true)}
            aria-label="Abrir menu"
            className="md:hidden"
          >
            <Menu size={28} aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu
        aberto={menuAberto}
        conteudo={conteudo}
        onNavegar={navegar}
        onFechar={() => setMenuAberto(false)}
      />
    </header>
  )
}
