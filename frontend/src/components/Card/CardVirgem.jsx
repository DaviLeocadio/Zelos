  "use client";
  import "./cardVirgem.css";
  import React, { useEffect, useState } from "react";
  import BtnChat from "@/components/BtnChatUser/Btnchat";
  import BtnAtribuirTecnico from "@/components/BtnPegarChamado/BtnPegarChamado.jsx";
  import Progress from "@/components/progress/progress-bar.jsx";
  import { getCookie } from "cookies-next";

  export default function Carrosel({ chamados = [] }) {
    const [funcao, setFuncao] = useState("");

  useEffect(() => {
    const funcaoCookie = getCookie("funcao");
    setFuncao(funcaoCookie);
  });

  async function atribuirTecnico(idChamado) {
    const cookieJWT = getCookie("token");
    try {
      const response = await fetch(
        `http://localhost:8080/criarchamado/${idChamado}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + cookieJWT,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Chamado atribuído com sucesso");
      } else {
        alert("Erro ao atribuir chamado");
      }
    } catch {
      alert("Erro ao enviar dados");
    }
  }
   

    const nomePerfil = "Davi Leocadio";
    const partes = nomePerfil.trim().split(" ");
    const iniciais =
      partes[0].charAt(0).toUpperCase() +
      partes[partes.length - 1].charAt(0).toUpperCase();
    const nomeExibido = `${partes[0]} ${partes[partes.length - 1]}`;

    const prioridades = {
      1: "Intervenção Preventiva",
      2: "Intervenção Sem Urgência",
      3: "Intervenção Prioritária",
      4: "Intervenção Imediata",
    };

    return (
      <>
        {Array(chamados).map((chamado) => {
          const isConcluido = chamado.status === "concluído";
          return (
            <div key={chamado.id}>
              <div
                className={`${
                  isConcluido ? "card-desativado-virgem" : "card-virgem"
                } d-flex flex-column align-items-center justify-content-center`}
                key={chamado.id}
              >
                <div
                  className={`card-prioridade-${chamado.grau_prioridade}-virgem d-flex align-items-center justify-content-center`}
                >
                  <p>{prioridades[chamado.grau_prioridade]}</p>
                </div>

                <main className="d-grid mt-4">
                  <div className="card-titulo-virgem d-grid align-items-center justify-content-center">
                    <h3>{chamado.titulo}</h3>
                  </div>
                  <div className="card-patrimonio-virgem d-grid w-100 justify-content-center align-items-center">
                    <p>{chamado.patrimonio}</p>
                  </div>
                  <div className="card-data-virgem d-grid w-100 justify-content-center align-items-center">
                    <p>
                      <b>Criado em:</b>{" "}
                      {new Date(chamado.criado_em).toLocaleDateString("pt-BR")}
                    </p>
                  </div>
                  <div className="status-card-virgem d-flex align-items-center justify-content-center">
                    <p>{chamado.status}</p>
                  </div>
                  <div className="">
                    <Progress step={chamado.status} />
                  </div>
                </main>

                <button
                  type="button"
                  className={`btn ${
                    isConcluido ? "btn-desativado" : ""
                  } mt-2 mb-3`}
                  data-bs-toggle="modal"
                  data-bs-target={`#modal-${chamado.id}`}
                >
                  <BtnChat />
                </button>

                {/* Modal */}
              </div>
              <div
                className="modal fade"
                id={`modal-${chamado.id}`}
                tabIndex={-1}
                aria-labelledby={`modalLabel-${chamado.id}`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
                  <div className="modal-content flex-column flex-md-inline">
                    <div className="modal-header d-flex align-items-center justify-content-center">
                      <h2 className="modal-title" id={`modalLabel-${chamado.id}`}>
                        <b>Ficha Técnica:</b>
                      </h2>
                      <div className="modal-inicial-virgem d-md-grid d-none sticky-top bg-white">
                       
                      </div>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>

                    <div className="modal-body d-md-flex align-items-center justify-content-center d-grid">
                      <div className="ficha-virgem d-grid gap-0 m-0">
                        <p className="">
                          <b>Título:</b> {chamado.titulo}
                        </p>
                        <p>
                          <b>Prioridade:</b> {chamado.grau_prioridade}
                        </p>
                        <p>
                          <b>Criação:</b>{" "}
                          {new Date(chamado.criado_em).toLocaleDateString(
                            "pt-BR"
                          )}
                        </p>
                        <p>
                          <b>Técnico:</b> Sem Técnico Atribuído
                        </p>
                        <p>
                          <b>Patrimônio:</b> {chamado.patrimonio}
                        </p>
                        <p>
                          <b>Tipo:</b> {chamado.tipo}
                        </p>
                        <p>
                          <b>Descrição:</b> {chamado.descricao}
                        </p>
                        
                      </div>
                      <div className="chat-container-virgem">
                        <div className="modal-inicial-virgem d-md-none d-flex sticky-top bg-white">
                          <div className="d-flex">
                            <div className="nome-chat-virgem">Sem Técnico</div>
                          </div>
                        </div>
                          <div className="modal-virgem d-none d-md-flex">
                            <div className="d-flex">
                              <p><b>Sem técnico responsável</b></p>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }
