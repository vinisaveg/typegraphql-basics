import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Recipe {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => [String])
  ingredients: Array<string>;
}
