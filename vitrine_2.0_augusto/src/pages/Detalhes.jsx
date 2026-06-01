import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProdutosById } from "../services/api";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");

  const { adicionarProduto } = useCarrinho();

  useEffect(() => {
    async function buscarProduto() {
      const data = await getProdutosById(id);
      setProduto(data);
      setCarregando(false);
    }
    buscarProduto();
  }, [id]);

  async function buscarCep() {
    const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await res.json();
    if (data.erro) {
      setCidade("CEP não encontrado!");
      return;
    }
    setCidade(data.localidade);
  }

  if (carregando) {
    return <p style={{ textAlign: "center", marginTop: "80px" }}>Carregando produto...</p>;
  }

  if (!produto) {
    return <p style={{ textAlign: "center", marginTop: "80px" }}>Produto não encontrado!</p>;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>{produto.nome}</h1>

      <img src={produto.imagem} width="300" alt={produto.nome} />

      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco}</p>

      <button
        onClick={() => adicionarProduto(produto)}
        style={{
          padding: "10px 40px",
          backgroundColor: "#222",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "16px"
        }}
      >
        Adicionar ao Carrinho 🛒
      </button>

      <div style={{ marginTop: "32px" }}>
        <input
          type="text"
          placeholder="Digite o CEP"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          style={{ padding: "8px", marginRight: "8px" }}
        />
        <button
          onClick={buscarCep}
          style={{
            padding: "8px 16px",
            backgroundColor: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Buscar CEP
        </button>
        {cidade && <p>Cidade: {cidade}</p>}
      </div>
    </div>
  );
}