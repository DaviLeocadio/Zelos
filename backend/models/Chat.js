import fs from "fs";
import path from "path";

const filePath = path.resolve("backend", "data", "chamados.json");

function lerChamados() {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
}

function salvarChamados(chamados) {
  fs.writeFileSync(filePath, JSON.stringify(chamados, null, 2));
}

export function getMensagens(chamadoId) {
  const chamados = lerChamados();
  const chamado = chamados.find(c => c.id == chamadoId);
  return chamado?.mensagens || [];
}

export function addMensagem(chamadoId, mensagem) {
  const chamados = lerChamados();
  const chamado = chamados.find(c => c.id == chamadoId);

  if (!chamado) return;

  if (!chamado.mensagens) chamado.mensagens = [];

  chamado.mensagens.push({
    de: mensagem.de,
    para: mensagem.para,
    texto: mensagem.texto,
    horario: new Date().toISOString()
  });

  salvarChamados(chamados);
}
