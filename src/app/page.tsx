import { Hero } from '@/components/sections/Hero'
import { Formacoes } from '@/components/sections/Formacoes'
import { hero } from '@/content/hero'
import { empresas } from '@/content/empresas'
import { formacoes, tituloFormacoes } from '@/content/formacoes'

export default function Home() {
  return (
    <main>
      <Hero conteudo={hero} empresas={empresas} />
      <Formacoes titulo={tituloFormacoes} formacoes={formacoes} />
    </main>
  )
}
