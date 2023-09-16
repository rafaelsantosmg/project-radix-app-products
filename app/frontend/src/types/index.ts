export type Order = 'asc' | 'desc'

export type DataContextT = {
  products: any
  setProducts: (products: any) => void
  searchProducts: any
  setSearchProducts: (searchProducts: any) => void
  categories: any
  setCategories: (categories: any) => void
}

export type providerProps = {
  children: React.ReactNode
}
