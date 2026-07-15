import type { SimpleIcon } from 'simple-icons'
import {
  siAccenture,
  siGoogle,
  siIfood,
  siMercadopago,
  siMeta,
  siNetflix,
  siNubank,
  siPicpay,
  siSpotify,
  siTotvs,
  siUber,
  siVtex,
} from 'simple-icons'

export interface Empresa {
  readonly slug: string
  readonly nome: string
  readonly icone: SimpleIcon
}

export const empresas: readonly Empresa[] = [
  { slug: 'nubank', nome: 'Nubank', icone: siNubank },
  { slug: 'ifood', nome: 'iFood', icone: siIfood },
  { slug: 'mercado-pago', nome: 'Mercado Pago', icone: siMercadopago },
  { slug: 'picpay', nome: 'PicPay', icone: siPicpay },
  { slug: 'totvs', nome: 'TOTVS', icone: siTotvs },
  { slug: 'vtex', nome: 'VTEX', icone: siVtex },
  { slug: 'google', nome: 'Google', icone: siGoogle },
  { slug: 'meta', nome: 'Meta', icone: siMeta },
  { slug: 'netflix', nome: 'Netflix', icone: siNetflix },
  { slug: 'spotify', nome: 'Spotify', icone: siSpotify },
  { slug: 'uber', nome: 'Uber', icone: siUber },
  { slug: 'accenture', nome: 'Accenture', icone: siAccenture },
] as const
