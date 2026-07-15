export interface Projeto {
  readonly slug: string
  readonly nome: string
  readonly descricao: string
  readonly stack: readonly string[]
}

export const projetos: readonly Projeto[] = [
  { slug: 'ecommerce', nome: 'E-commerce completo', descricao: 'Loja com carrinho, pagamento e painel admin — o projeto que mais aparece em portfólio contratado.', stack: ['React', 'Node', 'SQL'] },
  { slug: 'app-delivery', nome: 'App de delivery', descricao: 'Do cardápio ao pedido em tempo real, publicado na loja.', stack: ['React Native', 'Node'] },
  { slug: 'dashboard', nome: 'Dashboard financeiro', descricao: 'Dados reais, gráficos interativos e relatórios que impressionam em entrevista.', stack: ['React', 'PowerBI'] },
  { slug: 'agente-ia', nome: 'Agente de IA de atendimento', descricao: 'Um agente que responde clientes sozinho, integrado ao WhatsApp.', stack: ['N8N', 'Claude'] },
  { slug: 'landing', nome: 'Landing page de alta conversão', descricao: 'Design, animação e performance de agência, do zero.', stack: ['HTML5', 'CSS3', 'JavaScript'] },
] as const
