import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv'
import router from "./routes/usuarioRoutes.js";

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

conectarDB()

// Routing

app.use('/api/usuarios', router)


app.listen(PORT, () => {
    console.log(`Servidor iniciado en: ${PORT}`);
})
