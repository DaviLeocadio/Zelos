import { listarUsuarioPorId, listarUsuarios } from "../models/User.js";

const listarUsuariosController = async (req, res) => {
  try {
    const usuarios = await listarUsuarios();
    res.status(200).json(usuarios);
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

const listarUsuarioPorIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await listarUsuarioPorId(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro ao listar usuário por ID:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

export { listarUsuariosController, listarUsuarioPorIdController };