import express from 'express';
import { listarChamadosController, obterChamadoController, atualizarChamadoController } from '../controllers/ChamadoController.js';
const router = express.Router();

router.get('/', listarChamadosController);
router.put('/:id', atualizarChamadoController);
router.get('/:id', obterChamadoController);

export default router;
