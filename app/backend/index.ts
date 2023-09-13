import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import path from 'path'
import { buildSchema } from 'type-graphql'
import { ProductResolver } from './src/resolvers/ProductResolver'

async function main() {
  const schema = await buildSchema({
    resolvers: [ProductResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  })

  const server = new ApolloServer({ schema })

  const { url } = await server.listen(4000)

  console.log(`Server is running, GraphQL Playground available at ${url}`)
}

main()
