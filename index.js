import express from "express";
import conectarDB from "./config/db.js";
import dotenv from 'dotenv'
import usuarioRoutes from "./routes/usuarioRoutes.js";
import nuevoProyecto from "./routes/proyectoRoutes.js";



const app = express()
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 8080

conectarDB()

// Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', nuevoProyecto)


app.listen(PORT, () => {
    console.log(`Servidor iniciado en: ${PORT}`);
})


