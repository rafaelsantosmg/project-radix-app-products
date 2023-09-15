import { Product } from '@/interfaces/Products'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../graphql/productQuery'

function useGetProducts(): {
  products: Product[]
  loading: boolean
} {
  const { data, loading } = useQuery<{ products: Product[] }>(GET_PRODUCTS)

  const products: Product[] = data?.products || []

  return { products, loading }
}

export default useGetProducts
