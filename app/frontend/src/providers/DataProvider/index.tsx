import React, { useState, createContext, use, useEffect } from 'react'

import { DataContextT, providerProps } from '../../types'

export const DataContext = createContext<DataContextT>({} as DataContextT)

export const DataProvider = ({ children }: providerProps) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [searchProducts, setSearchProducts] = useState([])

  return (
    <DataContext.Provider
      value={{
        loading,
        setLoading,
        products,
        setProducts,
        searchProducts,
        setSearchProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}