// import { ApolloServer } from "apollo-server-express";
// import express from "express";
// import { createServer } from "http";
// import { execute, subscribe } from "graphql";
// import { SubscriptionServer } from "subscriptions-transport-ws";
// import schema from "./graphql/schema.js";
// import { pubsub } from "./modules/blog/pubsub.js";
// import http from "http";

// async function startServer() {
//   const app = express();
//   const httpServer = http.createServer(app);

//   const server = new ApolloServer({
//     schema,
//     context: () => ({ pubsub }),
//   });
//   await server.start();

//   server.applyMiddleware({ app });

//   SubscriptionServer.create(
//     {
//       schema,
//       execute,
//       subscribe,
//     },
//     {
//       server: httpServer,
//       path: server.graphqlPath,
//     }
//   );

//   httpServer.listen(9090, () => {
//     console.log(
//       `🚀 Server ready at http://localhost:9090${server.graphqlPath}`
//     );
//     console.log(
//       `🚀 Subscriptions ready at ws://localhost:9090${server.graphqlPath}`
//     );
//   });
// }

// startServer();
import { GraphQLServer } from "./server.js";

async function bootstrap() {
  await GraphQLServer.init();
  GraphQLServer.start(5054);
}

bootstrap();

// import axios, { AxiosResponse } from 'axios';

// // Types
// interface Msg91Response {

//   type: string;
//   message: string;
//   [key: string]: any; // Agar extra fields aaye to
// }

// // Config
// const apiKey: string = "466017Al5NmI299Ml68abea90P1";
// const mobile: string = "918393964151"; // Mobile number with country code
// const otp: number = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
// const templateId: string = "YOUR_TEMPLATE_ID";

// const url: string = `https://api.msg91.com/api/v5/otp?template_id=${templateId}&mobile=${mobile}&authkey=${apiKey}&otp=${otp}`;

// axios.get<Msg91Response>(url)
//   .then((response: AxiosResponse<Msg91Response>) => {
//     console.log("OTP sent successfully:", response.data);
//   })
//   .catch((error: any) => {
//     if (error.response) {
//       console.error("Error sending OTP:", error.response.data);
//     } else {
//       console.error("Error sending OTP:", error.message);
//     }
//   });
