'use client';
import { useEffect, useState } from 'react';
import './chamados.css';
import CardUser from '@/components/CardUser/Card';

export default function Home() {
  const [chamado, setChamado] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/chamados')
      .then(async (res) => {
        const data = await res.json();
        setChamado(data);
      })
      .catch((error) => {
        console.error('Erro na requisição:', error.message);
      });
  }, []);

  return (
    <>
      <div className="container-chamados">
        <div className="p-5">
          <h1>Todos os chamados virgens</h1>
          {chamado.map((chamado) => (
            <CardUser
              key={chamado.id}
              chamados={chamado}
            />
          ))}
        </div>
      </div>
    </>
  );
}
