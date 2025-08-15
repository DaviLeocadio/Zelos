import express from "express";
import { listarMensagens } from "../controllers/chatController.js";

const router = express.Router();

router.get("/:chamadoId", listarMensagens);

export default router;
