"use client";
import "./card.css";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import BtnChat from '@/components/BtnChat/Btnchat'
import Chat from "@/components/Chat/Chat.jsx";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import CheckIcon from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

//Progress bar
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#931c1b',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: '#931c1b'
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: '#818181',
    borderRadius: 1,
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
}));

const ColorlibStepIconRoot = styled('div')(({ theme }) => ({
  backgroundColor: '#818181',
  zIndex: 1,
  color: '#fff',
  width: 22,
  height: 22,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.grey[700],
  }),
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        backgroundColor: '#931c1b',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        backgroundColor: '#931c1b',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
      },
    },
  ],
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <HourglassTopIcon style={{ height: '12' }} />,
    2: <ManageHistoryIcon style={{ height: '12' }} />,
    3: <CheckIcon style={{ height: '12' }} />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


export default function Card() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/chamados")
      .then((response) => response.json())
      .then((informacao) => setChamados(informacao));
  }, []);

  const background = {
    "Emergência": "emergencia",
    "Muito urgente": "muito-urgente",
    "Urgente": "urgente",
    "Pouco urgente": "pouco-urgente",
    "Não urgente": "nao-urgente"
  };

  const ordemPrioridade = {
    "Emergência": 1,
    "Muito urgente": 2,
    "Urgente": 3,
    "Pouco urgente": 4,
    "Não urgente": 5
  };

    const status = {
    "Não iniciado": 0,
    "Em andamento": 1,
    "Concluído": 2
  }

  return (
    <>
      {

        chamados.sort((a, b) => ordemPrioridade[a.prioridade] - ordemPrioridade[b.prioridade])
          .map((chamado) => {
            return (
              <>
                <div className="card" key={chamado.id}>
                  <div className={`card-prioridade-${background[chamado.prioridade]}  align-items-center justify-content-center d-flex`}>
                    <p className="">{chamado.prioridade}</p>
                  </div>

                  <main className="d-grid mt-4">
                    <div className="card-titulo align-items-center justify-content-center d-grid">
                      <h3>{chamado.titulo}</h3>
                    </div>

                    <div className="card-patrimonio w-100 d-grid justify-content-center align-items-center">
                      <p>{chamado.patrimonio}</p>
                    </div>
                  </main>

                  <div className="status-card d-flex align-items-center justify-content-center">
                    <p>{chamado.status}</p>
                  </div>

                  <div className="mb-3 align-items-center justify-content-center d-flex">
                    <Stack sx={{ width: '100%' }} spacing={4}>
                        <Stepper alternativeLabel key={chamado.id} activeStep={status[chamado.status]} connector={<ColorlibConnector />}>

                          <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                          </Step>
                          <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                          </Step>
                          <Step>
                            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                          </Step>

                        </Stepper>
                    </Stack>
                  </div>

                  <div className="accordion-item align-items-center justify-content-center d-grid w-100">
                    <div className="accordion-header align-items-center justify-content-center d-grid w-100">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapseOne-${chamado.id}`}
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <i className="bi bi-caret-down-fill"></i>
                      </button>
                    </div>

                    <div
                      id={`flush-collapseOne-${chamado.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="card-tecnico">
                        <p><b>Técnico:</b>{chamado.tecnico}</p>
                      </div>
                      <div className="card-descricao">
                        <p className="">
                          <b>Descrição:</b> {chamado.descricao}
                        </p>
                      </div>

                      <div className="chat align-items-center justify-content-center d-grid">

                        <div
                          type="button"
                          className="btn"
                          data-bs-toggle="modal"
                          data-bs-target={`#modal-${chamado.id}`}
                        >
                          <BtnChat />
                        </div>

                        {/* Modal */}

                      </div>
                    </div>
                  </div>
                </div >
                <div
                  className="modal fade"
                  id={`modal-${chamado.id}`}
                  tabIndex={-1}
                  aria-labelledby={`modalLabel-${chamado.id}`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <Chat />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
    </>
  );
}
