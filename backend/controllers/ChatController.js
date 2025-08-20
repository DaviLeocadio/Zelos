import { listarMensagens, criarMensagens } from "../models/Chat.js";

const listarMensagensController = async (req, res) => {
  const id = req.body.chamado_id;
  try {
    const mensagens = await listarMensagens(id);
    res.status(200).json(mensagens);
  } catch (err) {
    console.error('Erro ao listar mensagens', err);
    res.status(500).json({ mensagem: 'Erro ao listar mensagens' })
  }
}

const criarMensagensController = async (req, res) => {
  try {
    const { conteudo, cargo, chamado_id } = req.body;
 
    const chatData = {
      conteudo: conteudo,
      cargo: cargo,
      chamado_id: chamado_id
    };

    const chatId = await criarMensagens(chatData);
    res.status(201).json({ mensagem: 'Chat criado com sucesso', chatId });
  } catch (error) {
    console.error('Erro ao criar chat:', error);
    res.status(500).json({ mensagem: 'Erro ao criar chat' });
  }
}

export { listarMensagensController, criarMensagensController }




