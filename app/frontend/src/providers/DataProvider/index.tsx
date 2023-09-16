import React, { useState, createContext, use, useEffect } from 'react'

import { TDataContext, TProviderProps } from '../../types'
import { Product } from '../../interfaces/Products'

export const DataContext = createContext<TDataContext>({} as TDataContext)

export const DataProvider = ({ children }: TProviderProps) => {
  const [products, setProducts] = useState<Product[]>([])
  const [searchProducts, setSearchProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])

  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        searchProducts,
        setSearchProducts,
        categories,
        setCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}
