import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
        );
    if (networkError) console.log(`[Network error]: ${networkError}`);
});

const httpLink = new HttpLink({
    // uri: 'https://api.yourgraphqlapi.com/graphql', // Replace with your GraphQL API's URI
    uri: 'https://graphigo.prd.galaxy.eco', // Replace with your GraphQL API's URI
});

const client = new ApolloClient({
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache()
});

export default client;
