import { Field, ID, ObjectType } from 'type-graphql'

@ObjectType()
export class Product {
  @Field((_type) => ID)
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
