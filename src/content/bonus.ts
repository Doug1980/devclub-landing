export interface Bonus {
  readonly slug: string
  readonly titulo: string
  readonly descricao: string
}

export const bonus: readonly Bonus[] = [
  { slug: 'ingles', titulo: 'Inglês para Devs', descricao: 'O inglês técnico que destrava vaga internacional e salário em dólar.' },
  { slug: 'linkedin', titulo: 'LinkedIn Magnético', descricao: 'Perfil que faz recrutador chamar você, e não o contrário.' },
  { slug: 'freelas', titulo: 'Primeiros Freelas', descricao: 'Como fechar os primeiros contratos antes mesmo do CLT.' },
  { slug: 'entrevistas', titulo: 'Entrevista Técnica sem Pânico', descricao: 'Simulações reais dos processos das maiores empresas.' },
  { slug: 'financas', titulo: 'Finanças para Devs', descricao: 'PJ, CLT, impostos e como não se perder no primeiro salário bom.' },
] as const
