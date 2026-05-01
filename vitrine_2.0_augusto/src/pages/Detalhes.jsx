import { useParams } from "react-router-dom";
import produtos from "../data/produtos";
import { useState } from "react";

export default function Detalhes() {

  const { id } = useParams();
  const produto = produtos.find(p => p.id == id);

  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");

  async function buscarCep() {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    setCidade(data.localidade);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>{produto.nome}</h1>

      <img src={produto.imagem} width="300" />

      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco}</p>

      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={buscarCep}>Buscar CEP</button>

      <p>Cidade: {cidade}</p>
    </div>
  );
}