'use client';

import { useState, useEffect } from 'react';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import './chat.css';

export default function Chat(cargoObj) {
  const [texto, setTexto] = useState('');
  const [mensagens, setMensagens] = useState([]);
  const [cargoContrario, setCargoContrario] = useState('');
  const [carregandoMensagens, setCarregandoMensagens] = useState(true);

    if(cargoObj == 'tecnico'){
      setCargoContrario('usuario')
    } 
    if(cargoObj == 'usuario'){
      setCargoContrario('tecnico')
    }

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
            autor: `${cargoContrario}`,
            texto:
              'Olá!',
          },
        ]);
      }
    } else {
      setMensagens([
        {
          autor: `${cargoContrario}`,
          texto:
            'Olá!',
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

  async function enviarMensagem() {
    if (!texto.trim()) return;

    const mensagemUsuario = { autor: `${cargoObj}`, texto };
    setMensagens((anteriores) => [...anteriores, mensagemUsuario]);
    setTexto('');

    try {
      const response = await fetch('http://localhost:8080/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conteudo: texto,
        }),
      });

      const data = await response.json();

      console.log(data)
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
      <div className="offcanvas-body d-flex flex-column p-0 chat-container">
        <div className="">
          <div className="card-container">

            <div className="card-body">
              <div className="messages-container">
                {mensagens.map((mensagem, chave) => (
                  <div
                    key={chave}
                    className={`message-box ${mensagem.autor === 'usuario' ? 'right' : 'left'
                      }`}
                  >
                    {mensagem.autor === `${cargoContrario}` ? (
                      <div className="markdown">
                        <p>{mensagem.texto}</p>
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
                if (e.key === 'Enter') enviarMensagem();
              }}
              required
            />
            <button
              className="btn btn-modal-chat ms-2"
              onClick={enviarMensagem}
            >
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

    </>
  );
}