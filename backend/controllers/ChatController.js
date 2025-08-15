import { getMensagens } from "../models/Chat.js";

export function listarMensagens(req, res) {
  const { chamadoId } = req.params;
  const mensagens = getMensagens(chamadoId);
  res.json(mensagens);
}
