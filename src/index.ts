import { ApolloServer } from "apollo-server";
import schema from "./graphql/schema.js";

async function startServer() {
  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen(9090);
  console.log(`🚀 Server ready at ${url}`);
}

startServer();
