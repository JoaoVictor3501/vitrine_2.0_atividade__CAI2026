export default function Card({ nome, imagem, preco }) {
  return (
    <div style={{
      width: "300px",
      padding: "40px",
      border: "1px solid #ddd",
      borderRadius: "10px",
      textAlign: "center",
      backgroundColor: "#f7f7f7",
      cursor: "pointer"
    }}>
      <img 
        src={imagem} 
        alt={nome} 
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{nome}</h3>
      <p>R${preco}</p>
    </div>
  );
}