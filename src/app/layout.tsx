import type { Metadata } from 'next'
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
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
