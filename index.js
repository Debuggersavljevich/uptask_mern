import express from "express";
import conectarDB from "./config/db.js";
import cors from 'cors'
import dotenv from 'dotenv'
import usuarioRoutes from "./routes/usuarioRoutes.js";
import nuevoProyecto from "./routes/proyectoRoutes.js";
import tareaRoutes from "./routes/tareaRoutes.js";



const app = express()
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT || 8080

conectarDB()

//Cors

const whitelist = ['http://127.0.0.1:5173']

const corsOption = {
    origin: function(origin, callback){
        if(whitelist.includes(origin)){
            //Puede consultar la API
            callback(null, true)
        } else {
            // No está permitido
            callback(new Error("Error de CORS"))
        }
    }
}

app.use(cors(corsOption))

// Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', nuevoProyecto)
app.use('/api/tareas', tareaRoutes)


app.listen(PORT, () => {
    console.log(`Servidor iniciado en: ${PORT}`);
})


