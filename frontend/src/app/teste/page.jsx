"use client";
import './teste.css';
import CardUser from "@/components/Card/CardUser";
import { useEffect, useState } from "react";

export default function teste() {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/chamados")
      .then((response) => response.json())

      .then((informacao) => setChamados(informacao))
      .catch((error) => console.error("Erro ao buscar chamados:", error));
  }, []);

  // const ordenarChamados = () => {
  //   return chamados.sort((a, b) => {
  //     const statusA = status[a.status];
  //     const statusB = status[b.status];

  //     if (statusA === 2 && statusB !== 2) return 1;
  //     if (statusB === 2 && statusA !== 2) return -1;

  //     if (statusA !== 2 && statusB !== 2) {
  //       return parseInt(b.grau_prioridade) - parseInt(a.grau_prioridade);
  //     }
  //     return 0;
  //   });
  // };

  // useEffect(() => {
  //   const usuarioId = 1;
  //   fetch("http://localhost:8080/chamados")
  //     .then((response) => response.json())
    
  //     .then((informacao) => {
  //       const chamadosUser = informacao.filter(
  //         (chamado) => chamado.usuario_id === usuarioId
  //       );
  //       setChamados(chamadosUser);
  //     })
  //     .catch((error) => console.error("Erro ao buscar chamados:", error));
  // }, []);

  return (
    <>
      {chamados.map((chamado) => {
        return (
          <div className="cards">
            <CardUser chamados={chamado} key={chamado.id} />
          </div>
        );
      })}
    </>
  );
}
