import { Field, ObjectType } from "type-graphql";
import { Recipe } from "../Entities/Recipe";

@ObjectType()
export class ErrorType {
  @Field()
  message: string;
}

@ObjectType()
export class ResponseType {
  @Field(() => Recipe, { nullable: true })
  recipe?: Recipe;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}
