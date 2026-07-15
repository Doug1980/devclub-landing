export interface Depoimento {
  readonly slug: string
  readonly nome: string
  readonly cargo: string
  readonly empresa: string
  readonly texto: string
  readonly destaque: boolean
}

export const depoimentos: readonly Depoimento[] = [
  { slug: 'camila', nome: 'Camila Ferreira', cargo: 'Desenvolvedora Front End', empresa: 'Itaú', texto: 'Eu era auxiliar administrativa ganhando R$ 1.800. Em 11 meses de DevClub, assinei como dev júnior ganhando o triplo. Ninguém da minha família acreditou até eu mostrar o crachá.', destaque: true },
  { slug: 'rafael', nome: 'Rafael Nunes', cargo: 'Desenvolvedor Full Stack', empresa: 'Nubank', texto: 'A mentoria semanal mudou o jogo. Não foi só código: foi currículo, LinkedIn e simulação de entrevista até eu parar de travar.', destaque: true },
  { slug: 'aline', nome: 'Aline Santos', cargo: 'Desenvolvedora Back End', empresa: 'Stone', texto: 'Fiz três processos seletivos e passei nos três. Escolhi onde EU queria trabalhar. Isso nunca tinha acontecido na minha vida.', destaque: false },
  { slug: 'bruno', nome: 'Bruno Carvalho', cargo: 'Desenvolvedor Mobile', empresa: 'iFood', texto: 'Saí do estoque de um mercado para publicar app usado por milhões. O suporte de domingo à noite existe mesmo, eu testei.', destaque: false },
  { slug: 'leticia', nome: 'Letícia Moraes', cargo: 'Analista de Dados', empresa: 'Mercado Livre', texto: 'A trilha de dados me tirou do telemarketing. Hoje eu apresento dashboard para diretor e ainda acho surreal.', destaque: true },
  { slug: 'diego', nome: 'Diego Martins', cargo: 'Desenvolvedor Front End', empresa: 'Globo', texto: 'Comecei do absoluto zero, sem saber o que era HTML. Em um ano, primeira vaga. A comunidade me segurou nos dias que eu quis desistir.', destaque: false },
  { slug: 'patricia', nome: 'Patrícia Lima', cargo: 'Desenvolvedora Full Stack', empresa: 'XP Inc.', texto: 'Aos 42 anos me disseram que era tarde. O DevClub discordou. A recrutadora reescreveu meu currículo e em 3 meses eu estava empregada.', destaque: true },
  { slug: 'thiago', nome: 'Thiago Rocha', cargo: 'Desenvolvedor Node', empresa: 'Ambev Tech', texto: 'Os agentes de IA da plataforma são um professor particular 24h. Minha dúvida das 2h da manhã nunca ficou sem resposta.', destaque: false },
  { slug: 'vanessa', nome: 'Vanessa Prado', cargo: 'Desenvolvedora Front End', empresa: 'Magalu', texto: 'Freela de N8N pagou o curso inteiro antes de eu conseguir o CLT. O retorno veio antes do diploma.', destaque: false },
  { slug: 'lucas', nome: 'Lucas Andrade', cargo: 'Engenheiro de Software', empresa: 'Amazon', texto: 'Do interior do Piauí para uma big tech, 100% remoto, salário em dólar. O caminho existe e tem mapa: eu segui o do DevClub.', destaque: true },
] as const
