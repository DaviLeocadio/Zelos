import { addMensagem } from "../models/Chat.js";

export default function configureSocket(io) {
  io.on("connection", (socket) => {
    console.log("Cliente conectado:", socket.id);

    socket.on("enviarMensagem", (msg) => {
      addMensagem(msg.chamadoId, msg);
      io.emit(`novaMensagem-${msg.chamadoId}`, msg);
    });

    socket.on("disconnect", () => {
      console.log("Cliente desconectado:", socket.id);
    });
  });
}
