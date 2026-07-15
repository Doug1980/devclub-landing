import type { Metadata } from 'next'
import { SmoothScroll } from '@/components/layout/SmoothScroll'
import { Header } from '@/components/layout/Header'
import { menu } from '@/content/menu'
import './globals.css'

export const metadata: Metadata = {
  title: 'DevClub — Formações Completas do Zero ao Avançado',
  description:
    'Formações completas em programação, IA e dados. +25 mil alunos já passaram por aqui. Escola reconhecida pelo MEC.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="bg-background text-foreground antialiased">
        <SmoothScroll>
          <Header conteudo={menu} />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
