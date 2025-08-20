'use client';
import "./chamados.css";
import Card from "@/components/CardTecnico/Card";
import BtnVenhaCriar from "@/components/BtnVenhaCriar/BtnVenhaCriar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Meus_chamados() {

  const [chamados, setChamados] = useState([]);
  const [tecnico, setTecnico] = useState();
  const [filtroTitulo, setFiltroTitulo] = useState('');
  const [filtroStatus, setFiltroStatus] = useState('');
  const [filtroServico, setFiltroServico] = useState('');

  useEffect(() => {
    const tecnicoId = 2;
    fetch("http://localhost:8080/chamados")
      .then((response) => response.json())
      .then((informacao) => {
        const chamadosTecnico = informacao.filter(
          (chamado) => chamado.tecnico_id === tecnicoId
        );
        setChamados(chamadosTecnico);
      });
    const poolId = 2;
    // Fetch the pool information by ID
    fetch(`http://localhost:8080/pool/${poolId}`)
      .then((response) => response.json())
      .then((data) => {
        setTecnico(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar pool:', error);
      });
  }, []);


  const chamadosComFiltro = chamados.filter((chamado) => {
    const TituloF = chamado.titulo
      .toLowerCase()
      .includes(filtroTitulo.toLowerCase());

    const StatusF = filtroStatus
      ? chamado.status.toLowerCase() === filtroStatus.toLowerCase()
      : true;

   

    return TituloF && StatusF;
  });

  const ordemPrioridade = {
    '1': "Intervenção Preventiva",
    '2': "Intervenção Sem Urgência",
    '3': "Intervenção Prioritária",
    '4': "Intervenção Imediata",
  };

  const status = {
    'pendente': 0,
    "em andamento": 1,
    'concluído': 2,
  };

  return (
    <>
      <img src="/fundo.png" alt="" className="img-fluid" />

      <div className="titulo-meus-chamados d-none d-md-flex">
        <h2>Meus Chamados</h2>
      </div>

      <div className="d-flex mt-4 d-md-none justify-content-center align-items-center">
        <h2>Meus Chamados</h2>
      </div>


      {chamados.length > 0 ? (
        <>

          <div className="filtro-tecnico d-none d-md-flex gap-3 mt-4">
            <input
              type="text"
              value={filtroTitulo}
              onChange={(e) => setFiltroTitulo(e.target.value)}
              placeholder="Pesquisar chamado..."
            />
        
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="pendente">Pendente</option>
              <option value="em andamento">Em andamento</option>
              <option value="concluído">Concluído</option>
            </select>

          </div>

          <div className=" align-items-center justify-content-center d-md-none d-flex gap-3 mt-4">
            <input
              type="text"
              value={filtroTitulo}
              onChange={(e) => setFiltroTitulo(e.target.value)}
              placeholder="Pesquisar chamado..."
            />
        
            <select
              value={filtroStatus}
              onChange={(e) => setFiltroStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="pendente">Pendente</option>
              <option value="em andamento">Em andamento</option>
              <option value="concluído">Concluído</option>
            </select>

          </div>


          <div className="cards d-md-flex d-none gap-4 flex-wrap">
            {chamadosComFiltro
              .sort((a, b) => {
                const statusA = status[a.status];
                const statusB = status[b.status];

                if (statusA === 2 && statusB !== 2) return 1;
                if (statusB === 2 && statusA !== 2) return -1;

                if (statusA !== 2 && statusB !== 2) {
                  return parseInt(b.grau_prioridade) - parseInt(a.grau_prioridade);
                }
                return 0;
              })
              .map((chamado) => (
                <Card
                  key={chamado.id}
                  titulo={chamado.titulo}
                  descricao={chamado.descricao}
                  grau_prioridade={ordemPrioridade[chamado.grau_prioridade]}
                  prioridade={chamado.grau_prioridade}
                  patrimonio={chamado.patrimonio}
                  status={chamado.status}
                  tecnico={tecnico}
                  atualizado_em={chamado.atualizado_em}
                  criado_em={chamado.criado_em}
                  id={chamado.id}
                  tipo={chamado.tipo_id}
                  usuario={chamado.usuario_id}
                />
              ))}
          </div>

          <div className="cards-celular mt-4 d-flex gap-4 align-items-center justify-content-center d-md-none flex-wrap">
            {chamadosComFiltro
              .sort((a, b) => {
                const statusA = status[a.status];
                const statusB = status[b.status];

                if (statusA === 2 && statusB !== 2) return 1;
                if (statusB === 2 && statusA !== 2) return -1;

                if (statusA !== 2 && statusB !== 2) {
                  return parseInt(b.grau_prioridade) - parseInt(a.grau_prioridade);
                }
                return 0;
              })
              .map((chamado) => (
                <Card
                  key={chamado.id}
                  titulo={chamado.titulo}
                  descricao={chamado.descricao}
                  grau_prioridade={ordemPrioridade[chamado.grau_prioridade]}
                  prioridade={chamado.grau_prioridade}
                  patrimonio={chamado.patrimonio}
                  status={chamado.status}
                  tecnico={chamado.tecnico_id}
                  atualizado_em={chamado.atualizado_em}
                  criado_em={chamado.criado_em}
                  id={chamado.id}
                  tipo={chamado.tipo_id}
                  usuario={chamado.usuario_id}
                />
              ))}
          </div>
        </>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <div className="sem-chamados gap-3 d-none d-md-flex">
            <h2>Você não possui chamados registrados</h2>
            <Link href={'/user/criar_chamado'} className="border-0 btnVenhaCriar">
              <BtnVenhaCriar />
            </Link>
          </div>

          <div className="d-grid mt-4 w-100 d-md-none justify-content-center align-items-center">
            <h2 className="fs-4">Você não possui chamados registrados</h2>
            <div className="align-items-center justify-content-center d-flex">
              <Link href={'/user/criar_chamado'} className="border-0 btnVenhaCriar">
                <BtnVenhaCriar />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
