import express from 'express';
import { listarChamadosController } from '../controllers/ChamadoController.js';
const router = express.Router();

router.get('/', listarChamadosController);

export default router;
