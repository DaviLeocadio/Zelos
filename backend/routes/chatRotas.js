import express from "express";
import { listarMensagensController, criarMensagensController } from "../controllers/ChatController.js";

const router = express.Router();

router.post("/", criarMensagensController)
router.get("/:chamadoId", listarMensagensController);

export default router;
