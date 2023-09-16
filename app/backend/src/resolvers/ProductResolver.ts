import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Product } from '../models/Product'
import { loadDataFromFile, saveDataToFile } from '../services/data'

@Resolver()
export class ProductResolver {
  private data: Product[] = []

  @Query(() => [Product])
  async products() {
    this.data = await loadDataFromFile()
    if (!this.data) {
      throw new Error('No products found')
    }
    return this.data
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg('id') id: string,
    @Arg('name') name: string,
    @Arg('description') description: string,
    @Arg('category') category: string,
    @Arg('price') price: number
  ) {
    this.data = await loadDataFromFile()
    const findProduct = this.data.find(
      (product: Product) => product.name === name
    )
    if (findProduct) {
      throw new Error('Product already exists')
    }
    const newProduct = { id, name, description, category, price }
    this.data.push(newProduct)
    await saveDataToFile(this.data)
    return newProduct
  }
}
