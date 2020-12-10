import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Recipe {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: Array<string>;
}
