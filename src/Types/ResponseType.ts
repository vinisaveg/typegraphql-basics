import { Field, ObjectType } from "type-graphql";
import { Recipe } from "../Entities/Recipe";

@ObjectType()
export class ResponseType {
  @Field(() => Recipe, { nullable: true })
  recipe?: Recipe;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;
}

@ObjectType()
export class ErrorType {
  @Field()
  message: string;
}
