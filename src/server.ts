import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { helloResolver } from "./resolvers/helloResolver";
import { recipeResolver } from "./resolvers/recipeResolver";

export async function bootstrap() {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [helloResolver, recipeResolver],
    }),
  });

  await server.listen(4000);
}
