import type { Formacao } from '@/content/formacoes'
import { rotulosTrilha } from '@/content/formacoes'

interface CardFormacaoProps {
  readonly formacao: Formacao
  readonly indice: number
}

export function CardFormacao({ formacao, indice }: CardFormacaoProps) {
  return (
    <article className="group flex h-84 w-70 shrink-0 snap-start flex-col justify-between rounded-2xl border border-border bg-surface/40 p-6 transition-colors duration-(--dur-fast) hover:border-accent/50 md:w-80">
      <div className="flex items-center justify-between text-step--1 text-muted">
        <span>{String(indice + 1).padStart(2, '0')}</span>
        <span className="uppercase tracking-widest">
          {rotulosTrilha[formacao.trilha]}
        </span>
      </div>
      <div>
        <h3 className="font-display text-step-3 font-medium leading-display tracking-tight transition-colors duration-(--dur-fast) group-hover:text-accent">
          {formacao.nome}
        </h3>
        <p className="mt-3 text-step--1 text-muted">{formacao.descricao}</p>
      </div>
    </article>
  )
}
