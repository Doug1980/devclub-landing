import type { SimpleIcon } from 'simple-icons'
import {
  siClaude,
  siCss,
  siDocker,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siN8n,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'

export interface Tecnologia {
  readonly slug: string
  readonly nome: string
  readonly icone: SimpleIcon
}

export const tituloTecnologias =
  'Aprenda as PRINCIPAIS Tecnologias do Mercado - Do ZERO, de forma Didática com os MELHORES do Mercado'

export const tecnologias: readonly Tecnologia[] = [
  { slug: 'html5', nome: 'HTML5', icone: siHtml5 },
  { slug: 'css3', nome: 'CSS3', icone: siCss },
  { slug: 'javascript', nome: 'JavaScript', icone: siJavascript },
  { slug: 'typescript', nome: 'TypeScript', icone: siTypescript },
  { slug: 'react', nome: 'React', icone: siReact },
  { slug: 'nextjs', nome: 'Next.js', icone: siNextdotjs },
  { slug: 'node', nome: 'Node.js', icone: siNodedotjs },
  { slug: 'tailwind', nome: 'Tailwind CSS', icone: siTailwindcss },
  { slug: 'python', nome: 'Python', icone: siPython },
  { slug: 'postgresql', nome: 'PostgreSQL', icone: siPostgresql },
  { slug: 'docker', nome: 'Docker', icone: siDocker },
  { slug: 'git', nome: 'Git', icone: siGit },
  { slug: 'github', nome: 'GitHub', icone: siGithub },
  { slug: 'n8n', nome: 'N8N', icone: siN8n },
  { slug: 'claude', nome: 'Claude', icone: siClaude },
] as const
