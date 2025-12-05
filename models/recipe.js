import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    title: String,
    cuisine: String,
    cookingTime: Number,
    IsVegetarian:Boolean,
    ingredientName  : [{Ingredient1:String, Ingredient2:String, Ingredient3:String, Ingredient4:String}],
    cookingSteps  : [{Step1:String, Step2:String, Step3:String, Step4:String}],
    createdAt: {type:Date, default:Date.now}

})

const Recipe = mongoose.model("recipe", recipeSchema);
export default Recipe 