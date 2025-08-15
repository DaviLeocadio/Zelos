import { create, readAll, read, update, deleteRecord } from '../config/database.js';

const listarChamados = async () => {
  try {
    return await readAll('chamados');
  } catch (error) {
    console.error('Erro ao listar chamados:', error);
    throw error;
  }
};

const obterChamadoPorId = async (id) => {
  try {
    return await read('chamados', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao obter livro por ID:', error);
    throw error;
  }
};

const criarChamado = async (livroData) => {
  try {
    return await create('chamados', livroData);
  } catch (error) {
    console.error('Erro ao criar livro:', error);
    throw error;
  }
};

const atualizarChamado = async (id, chamadoData) => {
  try {
    await update('chamados', chamadoData, `id = ${id}`);
  } catch (error) {
    console.error('Erro ao atualizar chamado:', error);
    throw error;
  }
};

const excluirChamado = async (id) => {
  try {
    await deleteRecord('chamados', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    throw error;
  }
};

export { listarChamados, obterChamadoPorId, criarChamado, atualizarChamado, excluirChamado };