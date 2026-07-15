export interface FaixaSalarial {
  readonly nivel: 'Júnior' | 'Pleno' | 'Sênior'
  readonly brasilAnual: number
  readonly internacionalAnual: number
}

export const salarios: readonly FaixaSalarial[] = [
  { nivel: 'Júnior', brasilAnual: 54_000, internacionalAnual: 180_000 },
  { nivel: 'Pleno', brasilAnual: 102_000, internacionalAnual: 390_000 },
  { nivel: 'Sênior', brasilAnual: 168_000, internacionalAnual: 660_000 },
] as const

export const salariosNota =
  'Valores anuais em reais, estimativas de mercado para desenvolvedores full stack em 2026.'
