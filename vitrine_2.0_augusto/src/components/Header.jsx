import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrinho } from "../context/CarrinhoContext";

export default function Header() {
  const navigate = useNavigate();
  const { usuario, sair } = useAuth();
  const { carrinho } = useCarrinho();

  return (
    <header style={{
      width: "100%",
      padding: "20px",
      backgroundColor: "#222",
      color: "#fff",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxSizing: "border-box"
    }}>
      <h1
        onClick={() => navigate("/")}
        style={{ cursor: "pointer", margin: 0 }}
      >
        Vitrine de Vídeo Games 2.0
      </h1>

      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        {usuario ? (
          <>
            <span>Olá, {usuario.nome}!</span>
            <button
              onClick={() => navigate("/carrinho")}
              style={{
                padding: "8px 16px",
                backgroundColor: "#444",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              🛒 Carrinho ({carrinho.length})
            </button>
            <button
              onClick={sair}
              style={{
                padding: "8px 16px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Sair
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            style={{
              padding: "8px 16px",
              backgroundColor: "#444",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        )}
      </div>
    </header>
  );
}