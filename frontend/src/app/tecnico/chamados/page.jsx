
import "./chamados.css";
import Card from "@/components/Card/Card";


export default function Meus_chamados() {
  

  return (
    <>

      <img src="/fundo.png" alt="" className="img-fluid" />
      <div className="titulo-meus-chamados d-none d-md-flex">
       <h2>Meus Chamados</h2>
      </div>
    
      <div className="d-flex mt-4 d-md-none justify-content-center align-items-center">
        <h2>Meus Chamados</h2>
      </div>
      
      <div className="cards d-md-flex d-none gap-4 flex-wrap">
        <Card />
      </div>
      <div className="cards-celular mt-4 d-flex gap-4 align-items-center justify-content-center d-md-none flex-wrap">
        <Card />
      </div>

    </>
  );
}
