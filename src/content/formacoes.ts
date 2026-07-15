export interface Formacao {
  readonly slug: string
  readonly nome: string
  readonly descricao: string
  readonly trilha: 'programacao' | 'ia' | 'dados'
}

export const formacoes: readonly Formacao[] = [
  { slug: 'front-end', nome: 'Programação Front End', descricao: 'Interfaces modernas que empresas disputam: do HTML ao React em produção.', trilha: 'programacao' },
  { slug: 'back-end', nome: 'Programação Back End', descricao: 'APIs, bancos de dados e servidores que aguentam o mundo real.', trilha: 'programacao' },
  { slug: 'full-stack', nome: 'Programação Full Stack', descricao: 'O ciclo completo: da tela ao deploy, sem depender de ninguém.', trilha: 'programacao' },
  { slug: 'mobile', nome: 'Programação Mobile', descricao: 'Apps para iOS e Android com uma única base de código.', trilha: 'programacao' },
  { slug: 'react', nome: 'React', descricao: 'A biblioteca mais pedida nas vagas de front end do Brasil.', trilha: 'programacao' },
  { slug: 'node', nome: 'Node', descricao: 'JavaScript no servidor: performance e mercado gigante.', trilha: 'programacao' },
  { slug: 'javascript', nome: 'JavaScript Completo', descricao: 'A linguagem que move a web, do zero absoluto ao avançado.', trilha: 'programacao' },
  { slug: 'html5', nome: 'HTML5', descricao: 'A base de tudo, ensinada do jeito certo desde o primeiro dia.', trilha: 'programacao' },
  { slug: 'css3', nome: 'CSS3', descricao: 'Layouts profissionais, animações e design responsivo.', trilha: 'programacao' },
  { slug: 'gestor-ia', nome: 'Gestor de IA', descricao: 'Lidere projetos de IA e traduza tecnologia em resultado de negócio.', trilha: 'ia' },
  { slug: 'ia-automacoes', nome: 'IA e Automações', descricao: 'Automatize processos inteiros com agentes e fluxos inteligentes.', trilha: 'ia' },
  { slug: 'claude-code', nome: 'Claude & ClaudeCode', descricao: 'Programe em par com a IA mais avançada do mercado.', trilha: 'ia' },
  { slug: 'n8n', nome: 'Trilha N8N', descricao: 'Integrações e automações visuais que valem contrato de freela.', trilha: 'ia' },
  { slug: 'analise-dados', nome: 'Análise de Dados', descricao: 'Transforme dados brutos em decisões, o superpoder de qualquer área.', trilha: 'dados' },
  { slug: 'powerbi', nome: 'PowerBI', descricao: 'Dashboards que executivos entendem em cinco segundos.', trilha: 'dados' },
] as const
