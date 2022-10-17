import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv'
import router from "./routes/usuarioRoutes.js";

const app = express()
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 8080

conectarDB()

// Routing

app.use('/api/usuarios', router)


app.listen(PORT, () => {
    console.log(`Servidor iniciado en: ${PORT}`);
})


