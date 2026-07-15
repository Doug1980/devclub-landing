export interface Tutor {
  readonly slug: string
  readonly nome: string
  readonly sobrenome: string
  readonly area: string
  readonly bio: string
}

export const tutores: readonly Tutor[] = [
  { slug: 'rodolfo', nome: 'Rodolfo', sobrenome: 'Mori', area: 'Fundador · Full Stack', bio: 'De eletricista a referência nacional em formação de devs. Criou o DevClub para encurtar o caminho que ele mesmo percorreu.' },
  { slug: 'fernanda', nome: 'Fernanda', sobrenome: 'Costa', area: 'Front End', bio: 'Especialista em React e interfaces que convertem. Já liderou squads de produto em fintechs.' },
  { slug: 'agustinho', nome: 'Agustinho', sobrenome: 'Ramos', area: 'Back End', bio: 'Arquiteto de APIs que aguentam milhões de requisições. Didática de quem já errou tudo antes de acertar.' },
  { slug: 'henrique', nome: 'Henrique', sobrenome: 'Duarte', area: 'Mobile', bio: 'Apps publicados nas duas lojas e obsessão por performance em devices baratos.' },
  { slug: 'marcio', nome: 'Márcio', sobrenome: 'Almeida', area: 'IA e Automações', bio: 'Constrói agentes e automações que substituem processos inteiros. O tutor da trilha mais nova do clube.' },
  { slug: 'juliana', nome: 'Juliana', sobrenome: 'Reis', area: 'Análise de Dados', bio: 'Transforma planilhas caóticas em decisões de negócio. Ensina dados para quem odeia matemática.' },
  { slug: 'mateus', nome: 'Mateus', sobrenome: 'Braga', area: 'JavaScript', bio: 'O professor que faz JavaScript parecer óbvio. Milhares de alunos formados na base.' },
] as const
