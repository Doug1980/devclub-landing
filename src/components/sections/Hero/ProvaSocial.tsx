import { Counter } from '@/components/ui/Counter'

interface ProvaSocialProps {
  readonly numero: number
  readonly sufixo: string
  readonly complemento: string
  readonly avatares: readonly string[]
}

export function ProvaSocial({
  numero,
  sufixo,
  complemento,
  avatares,
}: ProvaSocialProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex -space-x-3" aria-hidden="true">
        {avatares.map((iniciais) => (
          <span
            key={iniciais}
            className="flex size-10 items-center justify-center rounded-full border-2 border-background bg-surface text-xs font-medium text-accent"
          >
            {iniciais}
          </span>
        ))}
      </div>
      <p className="text-left text-step-0 leading-snug">
        <strong className="font-display font-semibold text-accent">
          <Counter ate={numero} prefixo="+" sufixo={sufixo} />
        </strong>
        <br />
        <span className="text-muted">{complemento}</span>
      </p>
    </div>
  )
}
