'use client'

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const ApolloClientProvider = ({ children }: { children: React.ReactNode }) => {
  const apolloClient = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
