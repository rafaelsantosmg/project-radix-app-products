import { AppProps } from 'next/app'
import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../lib/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
