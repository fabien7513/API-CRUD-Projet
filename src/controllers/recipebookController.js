import { RecipeBook } from "../models/recipebook.js";


export async function ajouterRecette(req, res) {
    try {
        const data = req.body;
        const recipebook = new RecipeBook(data)
        await recipebook.save();
        res.json({ok: true });

    } catch (error) { 
        console.error(error);
        res.json({ok : false, error})    
    }    
}

export async function ajouterRecettes(req, res) {
    try {
        const data = req.body;
        await RecipeBook.insertMany(data)
        res.json({ok: true });

    } catch (error) { 
        console.error(error);
        res.json({ok : false, error})    
    }    
}


export async function recupererRecettes(req, res) {
    try {
        const recipebook = await RecipeBook.find()
        res.json(recipebook) 
        
    } catch (error) {
        console.error(error);
        res.json({ok: false, error})
        
    }   
}


export async function recupererUneRecette(req, res) {
    const id = req.params.id;
    try {
        const recipebook = await RecipeBook.findOne({_id: id})
        res.json(recipebook);

    } catch (error) {
        console.error(error);
        res.json({ok: false, error})       
    }    
}


export async function recupererUnIngredient(req, res) {
    const ingredients = req.params.ingredients;
    try {
        const recipebook = await RecipeBook.findOne({ingredients})
        res.json(recipebook);

    } catch (error) {
        console.error(error);
        res.json({ok: false, error})       
    }     
}


export async function recupererCategorie(req, res) {
    const category = req.params.category;
    
    try {
        const recipebook = await RecipeBook.findOne({category})
        res.json(recipebook);

    } catch (error) {
        console.error(error);
        res.json({ok: false, error})       
    }     
    
}


export async function modifierUneRecette(req, res) {
    const id = req.params.id;
    const data = req.body;
    try {
        const recipebook = await RecipeBook.updateOne({_id: id}, data)
        res.json(recipebook)
        
    } catch (error) {
         console.error(error);
        res.json({ok : false, error})
    }
    
}

export function modifierIngredients(req, res) {
    try {
        
    } catch (error) {
        
    }
    
}

export function modifierInstructions(req, res) {
    try {
        
    } catch (error) {
        
    }
    
}

export function modifierTempsPreparation(req, res) {
    try {
        
    } catch (error) {
        
    }
    
}

export function modifierTempsCuisson(req, res) {
    try {
        
    } catch (error) {
        
    }
    
}
export function modifierDifficulte(req, res) {
    
    try {
        
    } catch (error) {
        
    }
}
export function modifierCategorie(req, res) {
    try {
        
    } catch (error) {
        
    }
    
}

export async function supprimerUneRecette(req, res) {
    const id = req.params.id;

     try {
        const recipebook = await RecipeBook.deleteOne({_id: id})
        res.json(recipebook);

    } catch (error) {
        console.error(error);
        res.json({ok : false, error})
        
    }
    
}

