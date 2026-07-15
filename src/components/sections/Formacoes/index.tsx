import type { Formacao } from '@/content/formacoes'
import { RevealText } from '@/components/ui/RevealText'
import { Carrossel } from './Carrossel'

interface FormacoesProps {
  readonly titulo: string
  readonly formacoes: readonly Formacao[]
}

export function Formacoes({ titulo, formacoes }: FormacoesProps) {
  return (
    <section id="formacoes" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 max-w-3xl font-display text-step-4 font-semibold leading-display tracking-tight">
          <RevealText texto={titulo} />
        </h2>
        <Carrossel formacoes={formacoes} />
      </div>
    </section>
  )
}
