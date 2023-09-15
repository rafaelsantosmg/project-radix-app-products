import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Product {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  category: string

  @Field()
  price: number
}
