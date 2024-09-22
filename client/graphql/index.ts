import { ApolloClient, InMemoryCache } from "@apollo/client";
import "dotenv/config";

const SERVER_URL = process.env.SERVER_URL;

export const gqlClient = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});
