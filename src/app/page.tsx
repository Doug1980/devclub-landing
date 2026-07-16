import { Hero } from '@/components/sections/Hero'
import { Formacoes } from '@/components/sections/Formacoes'
import { Tecnologias } from '@/components/sections/Tecnologias'
import { Diferenciais } from '@/components/sections/Diferenciais'
import { Plataforma } from '@/components/sections/Plataforma'
import { Projetos } from '@/components/sections/Projetos'
import { hero } from '@/content/hero'
import { empresas } from '@/content/empresas'
import { formacoes, tituloFormacoes } from '@/content/formacoes'
import { tecnologias, tituloTecnologias } from '@/content/tecnologias'
import { diferenciais, tituloDiferenciais } from '@/content/diferenciais'
import { plataforma, tituloPlataforma } from '@/content/plataforma'
import { projetos, tituloProjetos } from '@/content/projetos'

export default function Home() {
  return (
    <main>
      <Hero conteudo={hero} empresas={empresas} />
      <Formacoes titulo={tituloFormacoes} formacoes={formacoes} />
      <Tecnologias titulo={tituloTecnologias} tecnologias={tecnologias} />
      <Diferenciais titulo={tituloDiferenciais} diferenciais={diferenciais} />
      <Plataforma titulo={tituloPlataforma} itens={plataforma} />
      <Projetos titulo={tituloProjetos} projetos={projetos} />
    </main>
  )
}
