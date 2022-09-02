export const numberFormatter = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2
})

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})
