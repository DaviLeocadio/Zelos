import { read, readAll } from "../config/database.js";

const listarUsuarios = async () => {
  try {
    return await readAll('usuarios');
  } catch (error) {
    console.error('Erro ao listar usuários:', error);
    throw error;
  }
}

const listarUsuarioPorId = async (id) => {
  try {
    return await read('usuarios', `id = ${id}`);
  } catch (error) {
    console.error('Erro ao listar usuário por ID:', error);
    throw error;
  }
}

export { listarUsuarios,listarUsuarioPorId };