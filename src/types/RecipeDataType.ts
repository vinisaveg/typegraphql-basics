import { Field, InputType } from "type-graphql";

@InputType()
export class RecipeDataType {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  ingredients: Array<string>;
}
