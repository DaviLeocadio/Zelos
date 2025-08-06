"use client";
import "./card.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


export default function Card() {
  return (
    <>
      <div className="card">
        <div className="card-prioridade align-items-center justify-content-center d-flex">
          <p className="">Máxima</p>
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
          <Box sx={{ width: "50%" }}>
            <Stepper activeStep={2} alternativeLabel>
              
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
          
            </Stepper>
          </Box>
        </div>
      </div>

      <div className="card">
        <div className="card-prioridade1 align-items-center justify-content-center d-flex">
          <p className="">Máxima</p>
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
          <Box sx={{ width: "50%" }}>
            <Stepper activeStep={2} alternativeLabel>
              
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
          
            </Stepper>
          </Box>
        </div>
      </div>

      <div className="card">
        <div className="card-prioridade2 align-items-center justify-content-center d-flex">
          <p className="">Máxima</p>
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
          <Box sx={{ width: "50%" }}>
            <Stepper activeStep={2} alternativeLabel>
              
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
          
            </Stepper>
          </Box>
        </div>
      </div>
    </>
  );
}
