'use client'
import "./card.css";
import React from "react";
import BtnChat from "@/components/BtnChatUser/Btnchat";
import Chat from "@/components/Chat/Chat.jsx";

export default function Card({ titulo, patrimonio, grau_prioridade, prioridade, id, tipo, usuario, criado_em, atualizado_em, status, descricao, tecnico }) {


  const nomePerfil = 'Davi Leocadio';
  const partes = nomePerfil.trim().split(' ');
  const iniciais =
    partes[0].charAt(0).toUpperCase() +
    partes[partes.length - 1].charAt(0).toUpperCase();
  const nomeExibido = `${partes[0]} ${partes[partes.length - 1]}`;


  const isConcluido = status === 'concluído';


  return (
    <>
      <div className={`${isConcluido ? 'card-desativado-user' : 'card-user'} d-flex flex-column align-items-center justify-content-center`}>
        <div
          className={`card-prioridade-${prioridade}-user d-flex align-items-center justify-content-center`}
        >
          <p>{grau_prioridade}</p>
        </div>

        <main className="d-grid mt-4">
          <div className="card-titulo-user d-grid align-items-center justify-content-center">
            <h3>{titulo}</h3>
          </div>

          <div className="card-patrimonio-user d-grid w-100 justify-content-center align-items-center">
            <p>{patrimonio}</p>
          </div>

          <div className="card-data-user d-grid w-100 justify-content-center align-items-center">
            <p>
              <b>Criado em:</b> {new Date(criado_em).toLocaleDateString('pt-BR')}
            </p>
          </div>


          <div className="status-card-user d-flex align-items-center justify-content-center">
            <p>{status}</p>
          </div>
        </main>


        <div className="accordion-item d-grid w-100 align-items-center justify-content-center">
          <div className="accordion-header d-grid w-100 align-items-center justify-content-center">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapseOne-${id}`}
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>

          <div
            id={`flush-collapseOne-${id}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="card-descricao">
              <p>
                <b>Descrição:</b> {descricao}
              </p>
            </div>

            {!isConcluido && (
              <div className="card-atualizacao-user">
                <p>
                  <b>Atualizado em:</b> {new Date(atualizado_em).toLocaleDateString('pt-BR')}
                </p>
              </div>
            )}

            <div
              className={`${isConcluido ? "chat-desativado-user" : "chat-user"} d-grid align-items-center justify-content-center`}
            >
              <div
                type="button"
                className={isConcluido ? "btn-desativado-user" : "btn-user"}
                data-bs-toggle="modal"
                data-bs-target={`#modal-${id}`}
              >
                <BtnChat />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id={`modal-${id}`}
        tabIndex={-1}
        aria-labelledby={`modalLabel-${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            {isConcluido ? (
              <>
                <h2>Informações do Chamado</h2>
                <p>{titulo}</p>
                <p>{tecnico}</p>
                <p>{descricao}</p>
                <p>{grau_prioridade}</p>
                <Chat />
              </>
            ) : (
              <>
                <div className="modal-header">
                  <h2 className="modal-title" id={`modalLabel-${id}`}>
                    <b>Ficha Técnica:</b>
                  </h2>
                  <div className="modal-inicial d-grid sticky-top bg-white">
                    <div className="d-flex">
                      <div className="img-avatar-user">
                        <p>{iniciais}</p>
                      </div>
                      <div className="nome-chat-user">{nomeExibido}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body d-flex">
                  <div className="ficha-user d-grid gap-0 m-0">
                    <p>
                      <b>Título:</b> {titulo}
                    </p>
                    <p>
                      <b>Prioridade:</b>{" "}
                      {grau_prioridade}
                    </p>
                    <p>
                      <b>Criação:</b> {new Date(criado_em).toLocaleDateString('pt-BR')}
                    </p>
                    <p>
                      <b>Técnico:</b> {tecnico}
                    </p>
                    <p>
                      <b>Patrimônio:</b> {patrimonio}
                    </p>
                    <p>
                      <b>Tipo:</b> {tipo}
                    </p>
                    <p>
                      <b>Descrição:</b> {descricao}
                    </p>
                    
                  </div>
                
                  <div className="chat-container-user">
                    <Chat cargoObj={usuario} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
