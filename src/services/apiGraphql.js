import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';


const httpLink = new HttpLink({
    uri:'https://app-reactnativeapp.herokuapp.com/v1/graphql'
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});


export default client;