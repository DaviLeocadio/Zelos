'use client'
import Card from "@/components/Card/CardVirgem";
import "./dash.css";
import { useEffect, useState } from "react";

export default function Meus_chamados() {
  const [chamados, setChamados] = useState([]);
  useEffect(()=>{
    fetch("http://localhost:8080/chamados")
    .then((response)=> response.json())
    .then((information)=> setChamados(information))
  })
  return (
    <>
      <div className="d-flex align-items-center flex-wrap justify-content-center h-100 w-100 mt-5 gap-2">
        {chamados.map((chamado) => (
          <div key={chamado.id} className="d-grid flex-wrap">
            <Card chamados={chamado} />
          </div>
        ))}
      </div>
    </>
  );
}
