'use client';
import "./meus_chamados.css";
import CardUser from "@/components/CardUser/Card";
import BtnVenhaCriar from "@/components/BtnVenhaCriar/BtnVenhaCriar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Meus_chamados() {

  const [chamados, setChamados] = useState([]);


  useEffect(() => {
    const usuarioId = 2;
    fetch("http://localhost:8080/chamados")
      .then((response) => response.json())
      .then((informacao) => {
        const chamadosUser = informacao.filter(
          (chamado) => chamado.usuario_id === usuarioId
        );
        setChamados(chamadosUser)

      })
      .catch((error) => console.error('Erro ao buscar chamados:', error));

  }, []);

  const status = {
    'pendente': 0,
    "em andamento": 1,
    'concluído': 2,
  };


  const ordenarChamados = () => {
    return chamados.sort((a, b) => {
      const statusA = status[a.status];
      const statusB = status[b.status];

      if (statusA === 2 && statusB !== 2) return 1;
      if (statusB === 2 && statusA !== 2) return -1;

      if (statusA !== 2 && statusB !== 2) {
        return parseInt(b.grau_prioridade) - parseInt(a.grau_prioridade);
      }
      return 0;
    });
  }

  return (
    <>

      <img src="/fundo.png" alt="" className="img-fluid" />
      <div className="titulo-meus-chamados d-none d-md-flex">
        <h2>Meus Chamados</h2>
      </div>

      <div className="d-flex mt-4 d-md-none justify-content-center align-items-center">
        <h2>Meus Chamados</h2>
      </div>

      {
        chamados.length > 0 ? (
          <>
            <div className="cards d-md-flex d-none gap-4 flex-wrap">

              {ordenarChamados(chamados).map((chamado) => (
                <CardUser chamados={chamado} key={chamado.id} />
              ))}
            </div>
            <div className="cards-celular mt-4 d-flex gap-4 align-items-center justify-content-center d-md-none flex-wrap">
              {ordenarChamados(chamados).map((chamado) => (
                <CardUser chamados={chamado} key={chamado.id} />
              ))}
            </div>
          </>
        ) : (
          <div className="d-flex flex-column align-items-center justify-content-center mt-5">
            <img src="/fundo_semChamados.png" alt="" />
            <div className="sem-chamados gap-3 d-none d-md-flex">
              <h2>Você não possui chamados registrados</h2>

              <Link href={'/user/criar_chamado'} className="border-0 btnVenhaCriar">
                <BtnVenhaCriar />
              </Link>

            </div>

            <div className="d-grid mt-4 w-100 d-md-none justify-content-center align-items-center">
              <img src="/fundo_semChamados.png" alt="" />
              <h2 className="fs-4">Você não possui chamados registrados</h2>
              <div className="align-items-center justify-content-center d-flex">

                <Link href={'/user/criar_chamado'} className="border-0 btnVenhaCriar">
                  <BtnVenhaCriar />
                </Link>
              </div>

            </div>
          </div>
        )
      }



    </>
  );
}
