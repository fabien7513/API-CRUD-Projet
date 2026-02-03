import mongoose from "mongoose";

const recipebookSchema = mongoose.Schema({
    title: {
        type: String,
        minLenght: 2,
        required: [true, "Le titre est obligatoire"]
    },
    ingredients: {
        type: [String], // on va vouloir une liste d'ingredient comme ça tu pourras rechercher les recette qui contienne un ingrediant
        minLenght: 2,
    

    },
    preparationInstructions: {
        type: String,
        minLenght: 2,
        required: [true, "Les instructions sont obligatoires"]

    },
    preparationTime: {
        type: Number,
        required: [true, "Le temps de préparation est obligatoire"]

    },
    cookingTime: {
        type: Number, 
        required: [true, "Le temps de cuisson est obligatoire"],

    },
    difficulty:{
        type: String,
    

    },
    category:{
        type: String, // ici comme tu veux, si une recette peut avoir plusieurs category
        required: [true, "La catégorie est obligatoire"]

    },







})

export const RecipeBook = mongoose.model("recipe", recipebookSchema)