import { create, readAll, read, update, deleteRecord } from '../config/database.js';

const listarChamados = async () => {
  try {
    return await readAll('chamados');
  } catch (error) {
    console.error('Erro ao listar livros:', error);
    throw error;
  }
};

const obterChamadoPorId = async (id) => {
  try {
    return await read('livros', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao obter livro por ID:', error);
    throw error;
  }
};

const criarChamado = async (livroData) => {
  try {
    return await create('livros', livroData);
  } catch (error) {
    console.error('Erro ao criar livro:', error);
    throw error;
  }
};

const atualizarChamado = async (id, livroData) => {
  try {
    await update('livros', livroData, `id = ${id}`);
  } catch (error) {
    console.error('Erro ao atualizar livro:', error);
    throw error;
  }
};

const excluirChamado = async (id) => {
  try {
    await deleteRecord('livros', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao excluir livro:', error);
    throw error;
  }
};

export { listarChamados, obterChamadoPorId, criarChamado, atualizarChamado, excluirChamado };