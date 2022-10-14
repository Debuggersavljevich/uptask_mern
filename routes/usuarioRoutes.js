import express from "express";
const router = express.Router()

import { registrar } from '../controllers/usuarioController.js'

// autenticacion, creacion de registro y confirmacion de usuario

router.post('/', registrar) //crear usuarios


export default router