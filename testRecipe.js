import Recipe from "./models/recipe.js";
import Chef from "./models/chef.js";
import "./app.js"

async function createRecipe(){
    const newRecipe = await Recipe.create({
    title: "Burger",
    cuisine: "American",
    cookingTime: 100,
    IsVegetarian:false,
    ingredientName  : [{Ingredient1:"Buns", Ingredient2:"Beef patty", Ingredient3:"Ketchup", Ingredient4:"Lettuce"}],
    cookingSteps  : [{Step1:"Put the burger on grill", Step2:"Wait", Step3:"take burger off grill", Step4:"put buns on"}],
    createdAt: 12/4/2025

 })
}

// createRecipe();

async function createChef(){
    const newChef = await Chef.create({
    name: "Bob",
    yearsOfExperience: 4,
    email: "boblikesburgers@gmail.com",
    specialtyCuisine: [{sauce:"Barbecue", dish:"Burger"}],

})
    console.log("new chef added!" + newChef)
}

// createChef();

async function findRecipe(){
    const products = await Product.find({name: ''});
    console.log(Recipe);
    console.log("Total Recipes in my database " + recipe.length);
}

// findRecipe();

async function updateRecipe(){
    const res = await Recipe.updateOne({ name: ''});
    console.log(res);
}

// updateRecipe

async function deleteProduct(){
    const deleted = await Product.deleteOne({name: "Vertical Mouse = HP"});
    console.log(deleted);

}
// deleteRecipe;