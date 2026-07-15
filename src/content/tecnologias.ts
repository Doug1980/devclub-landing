export interface Tecnologia {
  readonly slug: string
  readonly nome: string
}

export const tecnologias: readonly Tecnologia[] = [
  { slug: 'html5', nome: 'HTML5' },
  { slug: 'css3', nome: 'CSS3' },
  { slug: 'javascript', nome: 'JavaScript' },
  { slug: 'typescript', nome: 'TypeScript' },
  { slug: 'react', nome: 'React' },
  { slug: 'react-native', nome: 'React Native' },
  { slug: 'node', nome: 'Node.js' },
  { slug: 'sql', nome: 'SQL' },
  { slug: 'git', nome: 'Git & GitHub' },
  { slug: 'python', nome: 'Python' },
  { slug: 'n8n', nome: 'N8N' },
  { slug: 'claude', nome: 'Claude Code' },
  { slug: 'powerbi', nome: 'PowerBI' },
  { slug: 'docker', nome: 'Docker' },
] as const
