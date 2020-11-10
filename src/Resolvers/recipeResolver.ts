import { Arg, Mutation, Query, Resolver } from "type-graphql"
import { v4 as uuidv4 } from "uuid"

import { Recipe } from "../Entities/Recipe"

import { recipeData } from "../recipeData"

import { RecipeDataType } from "../Types/RecipeDataType"
import { ResponseType } from "../Types/ResponseType"

@Resolver()
export class recipeResolver {
  @Query(() => [Recipe])
  recipes() {
    return recipeData
  }

  @Query(() => ResponseType)
  getRecipe(@Arg("id") id: string): ResponseType {
    let recipe = recipeData.find((recipe) => recipe.id === id)

    if (recipe) {
      return { recipe }
    }

    return {
      error: {
        message: "Recipe not found",
      },
    }
  }

  @Mutation(() => ResponseType)
  createRecipe(@Arg("data") data: RecipeDataType): ResponseType {
    let newRecipe: Recipe = { ...data, id: uuidv4() }

    recipeData.push(newRecipe)

    if (newRecipe) {
      return {
        recipe: newRecipe,
      }
    }

    return {
      error: {
        message: "Could not create your recipe",
      },
    }
  }

  @Mutation(() => ResponseType)
  deleteRecipe(@Arg("id") id: string): ResponseType {
    let recipeIndex = recipeData.findIndex((recipe) => recipe.id === id)

    if (recipeIndex > -1) {
      recipeData.splice(recipeIndex, 1)
      return {}
    }

    return {
      error: {
        message: "Recipe not found",
      },
    }
  }

  @Mutation(() => ResponseType)
  updateRecipe(@Arg("id") id: string, @Arg("data") data: RecipeDataType): ResponseType {
    let recipeIndex = recipeData.findIndex((recipe) => recipe.id === id)

    if (recipeIndex > -1) {
      recipeData[recipeIndex] = { ...data, id }

      return { recipe: recipeData[recipeIndex] }
    }

    return {
      error: {
        message: "Recipe not found",
      },
    }
  }
}
