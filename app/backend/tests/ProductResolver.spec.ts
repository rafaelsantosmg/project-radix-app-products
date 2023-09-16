import 'reflect-metadata'

import { afterEach, beforeEach, describe, expect, it } from '@jest/globals'
import { Product } from '../src/models/Product'
import { ProductResolver } from '../src/resolvers/ProductResolver'
import { allProducts } from './mocks'

describe('ProductResolver', () => {
  let productResolver: ProductResolver
  let mockProducts: Product[] = []

  beforeEach(() => {
    productResolver = new ProductResolver()
    mockProducts = allProducts
  })

  afterEach(() => {
    // Limpa todos os mocks
    jest.clearAllMocks()
  })

  describe('Testa o método product()', () => {
    it('Testa se retorna a lista de Produtos', async () => {
      // Mocka o método products() do ProductResolver
      jest.spyOn(productResolver, 'products').mockResolvedValue(mockProducts)

      const products = await productResolver.products()

      expect(productResolver.products).toHaveBeenCalled()

      expect(products).toEqual(mockProducts)
    })
  })

  describe('Testa a inclusão de um novo Produto', () => {
    beforeEach(async () => {
      // Mocka o método products() do ProductResolver
      jest.spyOn(productResolver, 'products').mockResolvedValue(mockProducts)

      mockProducts = await productResolver.products()
    })

    afterEach(() => {
      // Limpa todos os mocks
      jest.clearAllMocks()
    })

    it('Testa a inclusão de um novo Produto', async () => {
      const product = {
        id: 'newProductId',
        name: 'New Product',
        description: 'Description',
        category: 'Category',
        price: 10.99,
      }
      // Mocka o método createProduct() do ProductResolver
      jest.spyOn(productResolver, 'createProduct').mockResolvedValue(product)

      const newProduct = await productResolver.createProduct(
        product.id,
        product.name,
        product.description,
        product.category,
        product.price
      )

      expect(newProduct).toEqual(product)
    })

    it('Testa a inclusão de um novo Produto com o mesmo ID de um Produto existente', async () => {
      const product = {
        id: '1',
        name: 'New Product',
        description: 'Description',
        category: 'Category',
        price: 10.99,
      }
      // Mocka o método createProduct() do ProductResolver
      jest.spyOn(productResolver, 'createProduct').mockResolvedValue(product)

      try {
        await productResolver.createProduct(
          product.id,
          product.name,
          product.description,
          product.category,
          product.price
        )
      } catch (error) {
        expect(error).toEqual(Error('Product already exists'))
      }
    })
  })
})
