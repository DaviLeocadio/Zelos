'use client';

import "./meus_chamados.css";
import Card from "@/components/Card/card";


export default function Meus_chamados() {
  
  return (
    <>

      <img src="/fundo.png" alt="" className="img-fluid" />

      <h2>Meus Chamados</h2>
      <div className="cards d-flex gap-4 flex-wrap">
      <Card />
      </div>
      
    </>
  );
}
