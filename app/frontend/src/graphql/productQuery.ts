import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query {
    products {
      id
      name
      description
      category
      price
    }
  }
`
export const CREATE_PRODUCT = gql`
  mutation createProduct(
    $id: String!
    $name: String!
    $description: String!
    $category: String!
    $price: Float!
  ) {
    createProduct(
      id: $id
      name: $name
      description: $description
      category: $category
      price: $price
    ) {
      id
      name
      description
      category
      price
    }
  }
`
