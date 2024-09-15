import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import { User } from "../graphql/user";

export async function initGraphqlServer() {
  const app = express();
  app.use(express.json());

  const graphqlServer = new ApolloServer({
    typeDefs: `
      ${User.types}
      type Query {
        ${User.queries}
      }
    `,
    resolvers: {
      Query: {
        ...User.resolvers.queries
      },
    },
  });

  await graphqlServer.start();
  app.use("/graphql", expressMiddleware(graphqlServer));

  return app;
}
