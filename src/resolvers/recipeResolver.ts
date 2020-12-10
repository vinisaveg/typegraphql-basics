import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { v4 as uuidv4 } from "uuid";

import { recipeData } from "../database/data";
import { Recipe } from "../entities/Recipe";
import { RecipeDataType } from "../types/RecipeDataType";
import { ResponseType } from "../types/ResponseType";

@Resolver()
export class recipeResolver {
  @Query(() => [Recipe])
  recipes() {
    return recipeData;
  }

  @Query(() => ResponseType)
  getRecipe(@Arg("id") id: string): ResponseType {
    let recipe = recipeData.find((recipe) => recipe.id === id);

    if (recipe) {
      return {
        recipe,
      };
    }

    return {
      error: {
        message: "Recipe not found",
      },
    };
  }

  @Mutation(() => ResponseType)
  createRecipe(@Arg("data") data: RecipeDataType): ResponseType {
    let newRecipe: Recipe = { ...data, id: uuidv4() };

    recipeData.push(newRecipe);

    if (newRecipe) {
      return {
        recipe: newRecipe,
      };
    }

    return {
      error: {
        message: "Could not create your recipe",
      },
    };
  }

  @Mutation(() => ResponseType)
  deleteRecipe(@Arg("id") id: string): ResponseType {
    let recipeIndex = recipeData.findIndex((recipe) => recipe.id === id);

    if (recipeIndex > -1) {
      recipeData.splice(recipeIndex, 1);
      return {
        success: true,
      };
    }

    return {
      error: {
        message: "Could not delete your recipe",
      },
    };
  }

  @Mutation(() => ResponseType)
  updateRecipe(
    @Arg("id") id: string,
    @Arg("data") data: RecipeDataType
  ): ResponseType {
    let recipeIndex = recipeData.findIndex((recipe) => recipe.id === id);

    if (recipeIndex > -1) {
      recipeData[recipeIndex] = { ...data, id };

      return {
        recipe: recipeData[recipeIndex],
      };
    }

    return {
      error: {
        message: "Could not update your recipe",
      },
    };
  }
}
