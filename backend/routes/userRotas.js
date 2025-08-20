import express from 'express';
import { listarUsuariosController, listarUsuarioPorIdController } from '../controllers/UserController.js';
const router = express.Router();


router.get('/', listarUsuariosController);
router.get('/:id', listarUsuarioPorIdController);

export default router;