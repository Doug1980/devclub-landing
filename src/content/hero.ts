export interface Cta {
  readonly rotulo: string
  readonly href: string
}

export interface ConteudoHero {
  readonly titulo: string
  readonly subtitulo: string
  readonly ctaPrimario: Cta
  readonly ctaSecundario: Cta
  readonly provaSocial: {
    readonly numero: number
    readonly sufixo: string
    readonly complemento: string
  }
  readonly avatares: readonly string[]
  readonly tituloEmpresas: string
}

export const hero: ConteudoHero = {
  titulo: 'Do zero ao contratado.',
  subtitulo:
    'Formações completas em programação, IA e dados — com quem já formou milhares.',
  ctaPrimario: { rotulo: 'Quero ser aluno', href: '#formacoes' },
  ctaSecundario: { rotulo: 'Conhecer as formações', href: '#formacoes' },
  provaSocial: {
    numero: 25,
    sufixo: ' mil alunos',
    complemento: 'já passaram por aqui',
  },
  avatares: ['CF', 'RN', 'LM', 'PL', 'LA'],
  tituloEmpresas: 'Alunos nas maiores empresas do Brasil e do mundo:',
} as const
