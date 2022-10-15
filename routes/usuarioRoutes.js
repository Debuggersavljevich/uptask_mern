import express from "express";
import { autenticar } from "../controllers/usuarioController.js";

const router = express.Router()

import { registrar } from '../controllers/usuarioController.js'

// autenticacion, creacion de registro y confirmacion de usuario

router.post('/', registrar) //crear usuarios
router.post('/login', autenticar) //


export default router