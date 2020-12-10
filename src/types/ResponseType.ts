import { Field, ObjectType } from "type-graphql";
import { Recipe } from "../entities/Recipe";

@ObjectType()
class ErrorType {
  @Field()
  message: string;
}

@ObjectType()
export class ResponseType {
  @Field(() => Recipe, { nullable: true })
  recipe?: Recipe;

  @Field(() => ErrorType, { nullable: true })
  error?: ErrorType;

  @Field(() => Boolean, { nullable: true })
  success?: boolean;
}
