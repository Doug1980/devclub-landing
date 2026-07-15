export interface Empresa {
  readonly slug: string
  readonly nome: string
}

export const empresas: readonly Empresa[] = [
  { slug: 'itau', nome: 'Itaú' },
  { slug: 'nubank', nome: 'Nubank' },
  { slug: 'mercado-livre', nome: 'Mercado Livre' },
  { slug: 'ifood', nome: 'iFood' },
  { slug: 'stone', nome: 'Stone' },
  { slug: 'globo', nome: 'Globo' },
  { slug: 'ambev-tech', nome: 'Ambev Tech' },
  { slug: 'santander', nome: 'Santander' },
  { slug: 'xp', nome: 'XP Inc.' },
  { slug: 'magalu', nome: 'Magalu' },
  { slug: 'picpay', nome: 'PicPay' },
  { slug: 'amazon', nome: 'Amazon' },
  { slug: 'google', nome: 'Google' },
  { slug: 'microsoft', nome: 'Microsoft' },
] as const
