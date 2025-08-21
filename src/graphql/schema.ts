import path from "path";
import { fileURLToPath } from "url";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "../**/*.graphql"))
);

const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "../modules/**/*.resolver.ts"))
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
