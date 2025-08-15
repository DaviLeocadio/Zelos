import { create, readAll } from "../config/database";

const listarMensagens = async () => {
  try {
    return await readAll('mensagens');
  } catch (error) {
    console.error('Erro ao listar mensagem:', error);
    throw error;
  }
};

const criarMensagens = async (mensagemData) => {
  try {
    return await create('mensagens', mensagemData);
  } catch (error) {
    console.error('Erro ao criar mensagem:', error);
    throw error;
  }
};

export {criarMensagens, listarMensagens}