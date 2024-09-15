import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";

export async function initGraphqlServer() {
  const app = express();
  app.use(express.json())

  const graphqlServer = new ApolloServer({
    typeDefs: `
      type Query {
        sayHello: String
      }
    `,
    resolvers: {
      Query: {
        sayHello: () => 'hello from graphql server'
      }
    }
  });

  await graphqlServer.start();
  app.use('/graphql', expressMiddleware(graphqlServer))
  
  return app;
}
