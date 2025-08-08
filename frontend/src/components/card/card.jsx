"use client";
import "./card.css";
import Progress from "../progress-bar/progress-bar.jsx";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-prioridade align-items-center justify-content-center d-flex">
          <p className="">Urgente</p>
        </div>

        <main className="d-grid mt-4">
          <div className="card-titulo align-items-center justify-content-center d-grid">
            <h3>Titulo do chamado</h3>
          </div>

          <div className="card-patrimonio d-flex justify-content-center align-items-center">
            <p>Objeto a ser resolvido</p>
          </div>

          <div className="card-descricao">
            <p className="">
              descricaoaaaaaaaaaaaaaa do Objeto com defeito
            </p>
          </div>
        </main>

        <div className="status-card d-flex align-items-center justify-content-center">
          <p>Chamado não iniciado</p>
        </div>

        <div className="mb-3 align-items-center justify-content-center d-flex">
          <Progress />
        </div>
      </div>

      <div className="card">
        <div className="card-prioridade1 align-items-center justify-content-center d-flex">
          <p className="">Emergencia</p>
        </div>

        <main className="d-grid mt-4">
          <div className="card-titulo align-items-center justify-content-center d-grid">
            <h3>Titulo do chamado</h3>
          </div>

          <div className="card-patrimonio d-flex justify-content-center align-items-center">
            <p>Objeto a ser resolvido</p>
          </div>

          <div className="card-descricao">
            <p className="">
              descricaoaaaaaaaaaaaaaa do Objeto com defeito
            </p>
          </div>
        </main>

        <div className="status-card d-flex align-items-center justify-content-center">
          <p>Chamado não iniciado</p>
        </div>

        <div className="mb-3 align-items-center justify-content-center d-flex">
          <Progress />
        </div>
      </div>

      <div className="card">
        <div className="card-prioridade2 align-items-center justify-content-center d-flex">
          <p className="">Pouco Urgente</p>
        </div>

        <main className="d-grid mt-4">
          <div className="card-titulo align-items-center justify-content-center d-grid">
            <h3>Titulo do chamado</h3>
          </div>

          <div className="card-patrimonio d-flex justify-content-center align-items-center">
            <p>Objeto a ser resolvido</p>
          </div>

          <div className="card-descricao">
            <p className="">
              descricaoaaaaaaaaaaaaaa do Objeto com defeito
            </p>
          </div>
        </main>

        <div className="status-card d-flex align-items-center justify-content-center">
          <p>Chamado não iniciado</p>
        </div>

        <div className="mb-3 align-items-center justify-content-center d-flex">
          <Progress />
        </div>
      </div>
    </>
  );
}
