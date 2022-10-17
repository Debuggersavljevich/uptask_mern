import express from "express";
import { autenticar, registrar, confirmar, olvidePassword, comprobarToken, nuevoPassword } from "../controllers/usuarioController.js";

const router = express.Router()



// autenticacion, creacion de registro y confirmacion de usuario

router.post('/', registrar) //crear usuarios
router.post('/login', autenticar) 
router.get('/confirmar/:token', confirmar)
router.post('/olvide-password', olvidePassword)
router.route("/olvide-password/:token").get(comprobarToken).post(nuevoPassword)

export default router