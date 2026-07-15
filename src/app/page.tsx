import { Hero } from '@/components/sections/Hero'
import { hero } from '@/content/hero'
import { empresas } from '@/content/empresas'

export default function Home() {
  return (
    <main>
      <Hero conteudo={hero} empresas={empresas} />
    </main>
  )
}
