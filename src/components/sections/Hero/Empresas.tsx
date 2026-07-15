import type { Empresa } from '@/content/empresas'

interface EmpresasProps {
  readonly titulo: string
  readonly empresas: readonly Empresa[]
}

export function Empresas({ titulo, empresas }: EmpresasProps) {
  return (
    <div className="w-full pb-12">
      <p className="mb-8 text-center text-step--1 text-muted">{titulo}</p>
      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copia) => (
            <ul
              key={copia}
              aria-hidden={copia === 1}
              className="flex items-center gap-16 pr-16"
            >
              {empresas.map((empresa) => (
                <li
                  key={empresa.slug}
                  className="flex items-center gap-3 whitespace-nowrap text-muted transition-colors duration-(--dur-fast) hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-10 shrink-0 fill-current"
                    aria-hidden="true"
                  >
                    <path d={empresa.icone.path} />
                  </svg>
                  <span className="font-display text-step-2 font-medium">
                    {empresa.nome}
                  </span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}
