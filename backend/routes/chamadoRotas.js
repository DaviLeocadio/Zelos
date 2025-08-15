import express from 'express';
import { listarChamadosController, atualizarChamadoController } from '../controllers/ChamadoController.js';
const router = express.Router();

router.get('/', listarChamadosController);
router.put('/:id', atualizarChamadoController);

export default router;
