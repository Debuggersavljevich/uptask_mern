import express from "express";
import { autenticar, registrar, confirmar } from "../controllers/usuarioController.js";

const router = express.Router()



// autenticacion, creacion de registro y confirmacion de usuario

router.post('/', registrar) //crear usuarios
router.post('/login', autenticar) 
router.get('/confirmar/:token', confirmar) 


export default router