import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const typeDefs = gql`
  type User {
    name: String
  }
`;

const resolvers = {};

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
  },
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

export default client;
