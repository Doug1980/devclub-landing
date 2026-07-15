export interface PerguntaFaq {
  readonly slug: string
  readonly pergunta: string
  readonly resposta: string
}

export const faq: readonly PerguntaFaq[] = [
  { slug: 'zero', pergunta: 'Nunca programei. Consigo acompanhar?', resposta: 'Sim. Todas as formações começam do zero absoluto, e a trilha te diz exatamente qual aula vem depois. Boa parte dos alunos contratados nunca tinha escrito uma linha de código.' },
  { slug: 'tempo', pergunta: 'Quanto tempo até conseguir a primeira vaga?', resposta: 'Depende da sua dedicação, mas o caminho comum fica entre 8 e 14 meses estudando com constância. A recrutadora acompanha seu caso semanalmente para encurtar isso.' },
  { slug: 'idade', pergunta: 'Tenho mais de 35 anos. É tarde demais?', resposta: 'Não. Temos alunos contratados com 40, 45 e 50+. Empresa quer quem resolve problema, e maturidade profissional conta a favor.' },
  { slug: 'faculdade', pergunta: 'Preciso de faculdade para trabalhar como dev?', resposta: 'Não precisa. E se você quiser o diploma, o DevClub é reconhecido pelo MEC e emite diplomas oficiais.' },
  { slug: 'rotina', pergunta: 'Trabalho o dia todo. Dá para conciliar?', resposta: 'Sim. As aulas são gravadas, a plataforma salva seu progresso e o suporte funciona 7 dias por semana, inclusive à noite.' },
  { slug: 'ia', pergunta: 'A IA não vai acabar com as vagas de programador?', resposta: 'A IA está mudando o trabalho, não acabando com ele. Por isso o DevClub tem trilhas inteiras de IA: você aprende a usar a ferramenta que o mercado exige, em vez de competir com ela.' },
  { slug: 'certificado', pergunta: 'Recebo certificado ao concluir?', resposta: 'Sim, certificado de conclusão em todas as formações, além dos diplomas oficiais das formações reconhecidas pelo MEC.' },
  { slug: 'acesso', pergunta: 'Por quanto tempo tenho acesso?', resposta: 'Enquanto sua assinatura estiver ativa, você acessa tudo: aulas novas, mentorias, comunidade e os Club Agents.' },
] as const
