import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { helloResolver } from "./Resolvers/helloResolver";
import { recipeResolver } from "./Resolvers/recipeResolver";

async function bootstrap() {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [helloResolver, recipeResolver],
    }),
  });

  await server.listen(4000, () => {
    console.log("Apollo Server running at port: 4000");
  });
}

bootstrap().catch((error) => console.log(error));
