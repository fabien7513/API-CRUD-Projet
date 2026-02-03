import "dotenv/config";
import express from "express";
import mongoose from "mongoose"
import { recipebookRouter } from "./router/recipebookRouter.js";
import cors from "cors"
const port = process.env.PORT;
const databaseUrl = process.env.DATABASE_URL;

mongoose.set("strictQuery", true);
mongoose.connect(databaseUrl)
    .then(() => {
        //SUCCES
        console.log("Connecter à la base de données")
    })
    .catch((error) => {
        // REJECT
        console.error(error)
    })
    .finally(() => {
        //Peut importe réussite ou echec
        console.log("Fin de la promesse")

    })

const app = express()
app.use(cors())
// Middleware
app.use(express.json())

//http:localhost:3000/
app.get("/", (req, res) => {
    console.log(req.user);
    const message = { message: "bonjour monde" }
    res.json(message)
})
app.use(recipebookRouter)

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.log("Le serveur a bien démarrer sur l'adresse: http://localhost:" + port)
    }
})