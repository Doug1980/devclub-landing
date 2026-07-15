export interface ItemPlataforma {
  readonly slug: string
  readonly titulo: string
  readonly descricao: string
}

export const plataforma: readonly ItemPlataforma[] = [
  { slug: 'ensino', titulo: 'Plataforma de Ensino', descricao: 'Aulas em alta qualidade, player rápido e progresso salvo.' },
  { slug: 'trilhas', titulo: 'Cursos Organizados por Trilhas e Formações', descricao: 'Você nunca fica perdido: cada aula sabe qual é a próxima.' },
  { slug: 'comunidade', titulo: 'Comunidade de alunos', descricao: 'Milhares de pessoas na mesma jornada que a sua.' },
  { slug: 'club-agents', titulo: 'Club Agents', descricao: 'Agentes de IA integrados à plataforma, disponíveis 24h.' },
  { slug: 'playground', titulo: 'Playground de Treinamento', descricao: 'Pratique código direto no navegador, sem configurar nada.' },
  { slug: 'mural-fama', titulo: 'Mural da Fama dos Alunos Destaques', descricao: 'Quem é contratado entra para a história do clube.' },
] as const
