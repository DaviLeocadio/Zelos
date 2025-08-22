import { listarChamados, obterChamadoPorId, atualizarChamado } from "../models/Chamado.js";
// GET /chamados
const listarChamadosController = async (req, res) => {
  try {
    const chamados = await listarChamados();
    res.status(200).json(chamados);
  } catch (err) {
    console.error("Erro ao listar chamados", err);
    res.status(500).json({ mensagem: "Erro ao listar chamados" });
  }
};

// GET /chamados/:id
const obterChamadoController = async (req, res) => {
  const { id } = req.params;
  try {
    const chamado = await obterChamadoPorId(id);
    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    }
    res.status(200).json(chamado);
  } catch (err) {
    console.error("Erro ao obter chamado", err);
    res.status(500).json({ mensagem: "Erro ao obter chamado" });
  }
};

// PUT /chamados/:id
const atualizarChamadoController = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const chamado = await obterChamadoPorId(id);
    if (!chamado) {
      return res.status(404).json({ mensagem: "Chamado não encontrado" });
    }
    const atualizado = await atualizarChamado(id, { status });
    res.status(200).json(atualizado);
  } catch (err) {
    console.error("Erro ao atualizar chamado", err);
    res.status(500).json({ mensagem: "Erro ao atualizar chamado" });
  }
};

export { listarChamadosController, obterChamadoController, atualizarChamadoController };
