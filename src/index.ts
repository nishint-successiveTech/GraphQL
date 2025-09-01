import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema.js";

async function startServer() {
  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen(4000);
  console.log(`🚀 Server ready at ${url}`);
}

startServer();
