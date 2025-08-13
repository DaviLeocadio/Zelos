'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ReactMarkdown from 'react-markdown';

import './chat.css';

export default function Chat() {
  const [texto, setTexto] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [carregandoMensagens, setCarregandoMensagens] = useState(true);

  const fimDasMensagensRef = (fim) => {
    if (fim) {
      fim.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const mensagensSalvas = localStorage.getItem('chatbot-mensagens');
    if (mensagensSalvas) {
      try {
        setMensagens(JSON.parse(mensagensSalvas));
      } catch {
        setMensagens([
          {
            autor: 'gemini',
            texto:
              'Olá! Sou a Vika, sua assistente virtual da Clínica Vida Plena. Como posso te ajudar hoje?',
          },
        ]);
      }
    } else {
      setMensagens([
        {
          autor: 'gemini',
          texto:
            'Olá! Sou a Vika, sua assistente virtual da Clínica Vida Plena. Como posso te ajudar hoje?',
        },
      ]);
    }
    setCarregandoMensagens(false);
  }, []);

  useEffect(() => {
    if (!carregandoMensagens && typeof window !== 'undefined') {
      localStorage.setItem('chatbot-mensagens', JSON.stringify(mensagens));
    }
  }, [mensagens, carregandoMensagens]);

  async function enviarGemini() {
    if (!texto.trim()) return;

    const mensagemUsuario = { autor: 'user', texto };
    setMensagens((anteriores) => [...anteriores, mensagemUsuario]);
    setTexto('');

    try {
      const response = await fetch('http://localhost:3001/vika', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mensagem: texto,
        }),
      });

      const data = await response.json();
    } catch (error) {
      console.error('Erro:', error);
      setMensagens((anteriores) => [
        ...anteriores,
        { autor: 'gemini', texto: 'Erro ao enviar os dados.' },
      ]);
    }
  }

  if (carregandoMensagens) {
    return;
  }

  return (
    <>
      
      
        <div className="offcanvas-body d-flex flex-column p-0">
          <div className="card-body flex-grow-1 overflow-auto">
            <div className="card-container">
              <div className="card-header sticky-top bg-white">
                <div className="img-avatar">
                  <img src="/imgChatBot/chat-icon.png" alt="" />
                </div>
                <div className="text-chat">Fale com a Vika</div>
                <div className="bt-chat-div">
                  <button
                    type="button"
                    className="btn-close fechar-chat"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="card-body">
                <div className="messages-container">
                  {mensagens.map((mensagem, chave) => (
                    <div
                      key={chave}
                      className={`message-box ${
                        mensagem.autor === 'user' ? 'right' : 'left'
                      }`}
                    >
                      {mensagem.autor === 'gemini' ? (
                        <div className="markdown">
                          <ReactMarkdown>{mensagem.texto}</ReactMarkdown>
                        </div>
                      ) : (
                        <p>{mensagem.texto}</p>
                      )}
                    </div>
                  ))}
                  <div ref={fimDasMensagensRef} />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex border-top p-3">
            <div className="d-flex w-100">
              <input
                type="text"
                className="form-control input-nova-chat w-100"
                placeholder="Digite sua mensagem..."
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') enviarGemini();
                }}
                required
              />
              <button
                className="btn btn-modal-chat ms-2"
                onClick={enviarGemini}
              >
                <i className="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      
    </>
  );
}