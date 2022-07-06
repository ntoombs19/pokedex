import '../styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from "@apollo/client";
import {onError} from "@apollo/client/link/error";

const errorLink = onError(({graphQLErrors, networkErrors}) => {
  if (graphQLErrors) {
    graphQLErrors.map(({message, location, path}) => {
      console.error( `GraphQl error: ${message}`);
    });
  }
})
const link = from([
    errorLink,
    new HttpLink({ uri: process.env.NEXT_PUBLIC_POKEDEX_API_ENDPOINT })
])
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
