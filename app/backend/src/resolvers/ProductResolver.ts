import { Arg, Mutation, Query, Resolver } from 'type-graphql'
import { Product } from '../models/Product'
import { loadDataFromFile, saveDataToFile } from '../services/data'

@Resolver()
export class ProductResolver {
  private data: Product[] = []

  @Query(() => [Product])
  async products() {
    this.data = await loadDataFromFile()
    return this.data
  }
}
