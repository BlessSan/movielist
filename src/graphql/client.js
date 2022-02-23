import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://movies-graphql-proxy.herokuapp.com/graphql_proxy/graphql",
  cache: new InMemoryCache(),
});
