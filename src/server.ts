import express, { Application } from "express";
import http, { Server as HttpServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { execute, subscribe } from "graphql";
import { SubscriptionServer } from "subscriptions-transport-ws";
import schema from "./graphql/schema.js";
import { pubsub } from "./modules/blog/pubsub.js";
import Database from "./config/Database.js";

export class GraphQLServer {
  private static app: Application;
  private static httpServer: HttpServer;
  private static apolloServer: ApolloServer;

  public static async init(): Promise<void> {
    await Database.connectDB();
    this.app = express();
    this.httpServer = http.createServer(this.app);

    this.apolloServer = new ApolloServer({
      schema,
      context: () => ({ pubsub }),
    });

    await this.apolloServer.start();
    this.apolloServer.applyMiddleware({ app: this.app });

    this.setupSubscriptions();
  }

  private static setupSubscriptions(): void {
    SubscriptionServer.create(
      {
        schema,
        execute,
        subscribe,
      },
      {
        server: this.httpServer,
        path: this.apolloServer.graphqlPath,
      }
    );
  }

  public static start(port: number = 9090): void {
    this.httpServer.listen(port, () => {
      console.log(`🚀 Server ready at http://localhost:${port}${this.apolloServer.graphqlPath}`);
      console.log(`🚀 Subscriptions ready at ws://localhost:${port}${this.apolloServer.graphqlPath}`);
    });
  }
}
