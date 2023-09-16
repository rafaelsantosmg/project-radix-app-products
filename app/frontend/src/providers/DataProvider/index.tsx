import React, { useState, createContext, use, useEffect } from 'react'

import { DataContextT, providerProps } from '../../types'

export const DataContext = createContext<DataContextT>({} as DataContextT)

export const DataProvider = ({ children }: providerProps) => {
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState([])
  const [categories, setCategories] = useState([])

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
