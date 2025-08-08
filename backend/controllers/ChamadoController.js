import { listarChamados, obterChamadoPorId, criarChamado, atualizarChamado, excluirChamado } from "../models/Chamado.js";

const listarChamadosController = async (req, res) => {
  try {
    const chamados = await listarChamados();
    res.status(200).json(chamados);
  } catch (err) {
    console.error('Erro ao listar chamados', err);
    res.status(500).json({ mensagem: 'Erro ao listar chamados' })
  }
}

export {listarChamadosController};