import express from "express";

import { ajouterRecette, ajouterRecettes, recupererRecettes, recupererUneRecette, recupererUnIngredient, recupererCategorie, modifierCategorie, modifierUneRecette, modifierIngredients, modifierInstructions, modifierTempsPreparation, modifierTempsCuisson, modifierDifficulte, supprimerUneRecette } from "../controllers/recipebookController.js";

export const recipebookRouter = express.Router()


recipebookRouter.post("/recipebook", ajouterRecette)
recipebookRouter.post("/recipebooks", ajouterRecettes)

recipebookRouter.get("/recipebooks", recupererRecettes)
recipebookRouter.get("/recipebook/:id", recupererUneRecette)
recipebookRouter.get("/recipebook/ingredient/:ingredients", recupererUnIngredient)
recipebookRouter.get("/recipebook/category/:category", recupererCategorie)


//recipebookRouter.patch("/recipebook", modifierUneRecette)
recipebookRouter.patch("/recipebook/:id", modifierUneRecette) // avec celui là tu peux deja tout modifier


recipebookRouter.patch("/recipebook/ingredients/:ingredients", modifierIngredients) // http://localhost:3000/ingredients/vsdcjsvcdlicvvdcydc
recipebookRouter.patch("/recipebook/intructions/:instructions", modifierInstructions)
recipebookRouter.patch("/recipebook/tempspreparation/:tempspreparation", modifierTempsPreparation)
recipebookRouter.patch("/recipebook/tempscuisson/:tempscuisson", modifierTempsCuisson)
recipebookRouter.patch("/recipebook/difficulte/:difficulte", modifierDifficulte)
recipebookRouter.patch("/recipebook/categorie/:categorie", modifierCategorie)

// je vais te montrer une astuce plus simple tu as compris le fonctionnement global

recipebookRouter.delete("/recipebook/:id", supprimerUneRecette )

/*

imagine tu envoie cette requetes:
PATCH http://localhost:3000/recipebook/ierfjoehfeisfhjelsjaq

comment express fait la différence entre toutes tes routes qui suivent ?

ierfjoehfeisfhjelsjaq c'est quoi un ingredients une instruction ?
il faut les differancier
lui dire en avance que cette id
*/