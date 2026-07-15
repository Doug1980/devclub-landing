export interface LinkFooter {
  readonly rotulo: string
  readonly href: string
}

export interface ColunaFooter {
  readonly titulo: string
  readonly links: readonly LinkFooter[]
}

export const colunasFooter: readonly ColunaFooter[] = [
  {
    titulo: 'Formações',
    links: [
      { rotulo: 'Front End', href: '#formacoes' },
      { rotulo: 'Back End', href: '#formacoes' },
      { rotulo: 'Full Stack', href: '#formacoes' },
      { rotulo: 'IA e Automações', href: '#formacoes' },
      { rotulo: 'Análise de Dados', href: '#formacoes' },
    ],
  },
  {
    titulo: 'DevClub',
    links: [
      { rotulo: 'Faculdade', href: '#mec' },
      { rotulo: 'Tutores', href: '#tutores' },
      { rotulo: 'Depoimentos', href: '#depoimentos' },
      { rotulo: 'Bônus', href: '#bonus' },
    ],
  },
  {
    titulo: 'Suporte',
    links: [
      { rotulo: 'FAQ', href: '#faq' },
      { rotulo: 'Área do Aluno', href: '#' },
      { rotulo: 'Fale conosco', href: '#' },
    ],
  },
] as const

export interface RedeSocial {
  readonly nome: 'instagram' | 'youtube' | 'linkedin' | 'tiktok'
  readonly href: string
}

export const redesSociais: readonly RedeSocial[] = [
  { nome: 'instagram', href: 'https://instagram.com/devclub' },
  { nome: 'youtube', href: 'https://youtube.com/@devclub' },
  { nome: 'linkedin', href: 'https://linkedin.com/company/devclub' },
  { nome: 'tiktok', href: 'https://tiktok.com/@devclub' },
] as const
