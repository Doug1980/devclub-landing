export interface Diferencial {
  readonly slug: string
  readonly titulo: string
  readonly descricao: string
  readonly icone: 'recrutadora' | 'terapeuta' | 'mentoria' | 'agentes' | 'suporte' | 'comunidade' | 'vagas'
}

export const diferenciais: readonly Diferencial[] = [
  { slug: 'recrutadora', titulo: 'Acompanhamento da nossa Recrutadora SEMANALMENTE', descricao: 'Currículo, LinkedIn e preparação para entrevistas com quem contrata de verdade.', icone: 'recrutadora' },
  { slug: 'terapeuta', titulo: 'Terapeuta focado em ALTA PERFORMANCE', descricao: 'Mente no lugar para aguentar a maratona da transição de carreira.', icone: 'terapeuta' },
  { slug: 'mentorias', titulo: 'Mentorias SEMANAIS com os MELHORES profissionais de Tecnologia do Mercado', descricao: 'Ao vivo, sem enrolação, com quem está no mercado agora.', icone: 'mentoria' },
  { slug: 'agentes-ia', titulo: 'Dezenas de Agentes de IA para te ajudar 24h por dia', descricao: 'Dúvida às 3 da manhã? Tem agente treinado para isso.', icone: 'agentes' },
  { slug: 'suporte', titulo: 'Suporte Humano 7 dias por semana', descricao: 'Gente de verdade respondendo, inclusive no domingo.', icone: 'suporte' },
  { slug: 'comunidade', titulo: 'A Maior e Melhor Comunidade de Profissionais de Tecnologia do Brasil', descricao: 'Networking que vira indicação, freela e contratação.', icone: 'comunidade' },
  { slug: 'vagas', titulo: 'Vagas de Emprego Exclusivas', descricao: 'Empresas parceiras contratando direto da comunidade.', icone: 'vagas' },
] as const
