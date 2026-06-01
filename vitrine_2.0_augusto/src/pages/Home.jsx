import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { getProdutos } from "../services/api";

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const navigate = useNavigate();

  useEffect(() =>{
    async function buscarProdutos() {
      const data = await getProdutos();
      setProdutos(data);
      setCarregando(false);
      
    }
    buscarProdutos();
  }, []);

  if(carregando){
    return <p style={{textAlign:"center", marginTop:"80px"}}>.....Carregando Prodtos</p>
    
  }

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
        <div key={produto._id} onClick={() => navigate(`/detalhes/${produto._id}`)}>
          <Card
            nome={produto.nome}
            imagem={produto.imagem}
          />
        </div>
      ))}
    </div>
  );
}