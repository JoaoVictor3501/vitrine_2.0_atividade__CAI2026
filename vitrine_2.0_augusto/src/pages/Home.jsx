import Card from "../components/Card";
import produtos from "../data/produtos";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      marginTop: "40px",
      flexWrap: "wrap"
    }}>
      {produtos.map(produto => (
        <div key={produto.id} onClick={() => navigate(`/detalhes/${produto.id}`)}>
          <Card
            nome={produto.nome}
            imagem={produto.imagem}
          />
        </div>
      ))}
    </div>
  );
}