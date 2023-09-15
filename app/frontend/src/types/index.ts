export type Order = 'asc' | 'desc'

export type DataContextT = {
  products: any
  setProducts: (products: any) => void
  searchProducts: any
  setSearchProducts: (searchProducts: any) => void
}

export type providerProps = {
  children: React.ReactNode
}
