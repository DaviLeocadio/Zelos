"use client";
import "./card.css";
import Progress from "../Progress-bar/progress-bar.jsx";
import BtnChat from '@/components/BtnChat/Btnchat'
import { useEffect, useState } from "react";

export default function Card() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/chamados")
      .then((response) => response.json())
      .then((informacao) => setChamados(informacao));
  }, []);

  const background = {
    azul: "card-urgente",
    dourado: "card-emergencia",
    verde: "card-pouco-urgente",
    amarelo: "card-muito-urgente",
    cinza: "card-nao-urgente",
  };

  return (
    <>
      {chamados.map((chamado, index) => {
        return (
          <>
            <div className="card" key={index}>
              <div className="card-prioridade align-items-center justify-content-center d-flex">
                <p className="">Urgente</p>
              </div>

              <main className="d-grid mt-4">
                <div className="card-titulo align-items-center justify-content-center d-grid">
                  <h3>{chamado.titulo}</h3>
                </div>

                <div className="card-patrimonio d-grid justify-content-center align-items-center">
                  <p>Objeto a ser resolvido</p>
                </div>
              </main>

              <div className="status-card d-flex align-items-center justify-content-center">
                <p>Chamado não iniciado</p>
              </div>

              <div className="mb-3 align-items-center justify-content-center d-flex">
                <Progress />
              </div>

              <div class="accordion-item align-items-center justify-content-center d-grid w-100">
                <div className="accordion-header align-items-center justify-content-center d-grid w-100">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    <i class="bi bi-caret-down-fill"></i>
                  </button>
                </div>

                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="card-descricao">
                    <p className="">
                      <b>Descrição:</b> {chamado.descricao}
                    </p>
                  </div>

                  <div className="chat align-items-center justify-content-center d-grid">
                    <p>Fale com o técnico:</p>
                    <>
                      {/* Button trigger modal */}
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        <BtnChat></BtnChat>
                      </button>
                      {/* Modal */}
                      <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Modal title
                              </h1>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              />
                            </div>
                            <div className="modal-body">...</div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Save changes
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
