export interface ItemMenu {
  readonly rotulo: string
  readonly href: string
  readonly submenu?: readonly ItemMenu[]
}

export interface ConteudoMenu {
  readonly itens: readonly ItemMenu[]
  readonly cta: ItemMenu
}

export const menu: ConteudoMenu = {
  itens: [
    {
      rotulo: 'Formações',
      href: '#formacoes',
      submenu: [{ rotulo: 'Faculdade', href: '#mec' }],
    },
    { rotulo: 'Área do Aluno', href: '#' },
  ],
  cta: { rotulo: 'Quero ser aluno', href: '#formacoes' },
} as const
