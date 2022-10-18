import express from 'express'
import { route } from 'express/lib/application'
import {obtenerProyectos,
    nuevoProyecto,
    obtenerProyecto,
    editarProyecto,
    eliminarProyectos,
    agregarColaborador,
    eliminarColaborador,
    obtenerTareas} from '../controllers/proyectoController.js'
import checkAuth from '../middleware/checkAuth.js'

const router = express.Router()

//Router para proyectos
router.route('/')
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto)

//Router para acciones sobre el proyecto
router.route('/:id')
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyectos)

//Router para colaboradores
router.get('/tareas/:id', checkAuth, obtenerTareas)
router.post('/agregar-colaborador/:id', checkAuth, agregarColaborador)
router.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborador)

export default router