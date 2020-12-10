import { Query, Resolver } from "type-graphql";

@Resolver()
export class helloResolver {
  @Query(() => String)
  hello() {
    return "hello world!";
  }
}
