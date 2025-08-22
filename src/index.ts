// import { ApolloServer } from "apollo-server";
// import schema from "./graphql/schema.js";

// async function startServer() {
//   const server = new ApolloServer({
//     schema
//   });

//   const { url } = await server.listen(9090);
//   console.log(`🚀 Server ready at ${url}`);
// }

// startServer();

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { createServer } from "http";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import schema from "./graphql/schema.js";
import { pubsub } from "./modules/blog/pubsub.js";
import http from "http";

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    context: () => ({ pubsub }),
  });
  await server.start();

  server.applyMiddleware({ app });

  SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
    },
    {
      server: httpServer,
      path: server.graphqlPath,
    }
  );

  httpServer.listen(9090, () => {
    console.log(
      `🚀 Server ready at http://localhost:9090${server.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:9090${server.graphqlPath}`
    );
  });
}

startServer();
