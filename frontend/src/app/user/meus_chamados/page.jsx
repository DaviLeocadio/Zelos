import "./meus_chamados.css";
import Image from "next/image";
import Card from "@/components/card/card";

export default function Meus_chamados() {
  return (
    <>
      <Image 
      src={'/fundo.jpeg'}
      height={200}
      width={400}
      alt=""
      className="fundo img-fluid"
      />

      <h2>Meus Chamados</h2>
      <div className="cards d-flex gap-4 flex-wrap">
      <Card />
     
      </div>
      
    </>
  );
}
