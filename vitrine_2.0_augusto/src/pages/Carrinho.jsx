import { useCarrinho } from "../context/CarrinhoContext";
import { useNavigate } from "react-router-dom";

export default function Carrinho() {
    const { carrinho, removerProduto, limparCarrinho, total } = useCarrinho();
    const navigate = useNavigate();

    function finalizarCompra() {
        alert("Compra finalizada com sucesso!");
        limparCarrinho();
        navigate("/");
    }

    if (carrinho.length === 0) {
        return (
            <div style={{ textAlign: "center", marginTop: "80px" }}>
                <h2>Seu carrinho está vazio!</h2>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        marginTop: "16px",
                        padding: "10px 40px",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Ver produtos
                </button>
            </div>
        );
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px"
        }}>
            <h2>Meu Carrinho</h2>

            {carrinho.map((produto, index) => (
                <div key={index} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "500px",
                    padding: "16px",
                    margin: "8px",
                    border: "1px solid #ddd",
                    borderRadius: "8px"
                }}>
                    <img src={produto.imagem} alt={produto.nome} style={{ width: "80px", borderRadius: "8px" }} />
                    <p>{produto.nome}</p>
                    <p>R$ {produto.preco}</p>
                    <button
                        onClick={() => removerProduto(produto._id)}
                        style={{
                            padding: "6px 16px",
                            backgroundColor: "red",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer"
                        }}
                    >
                        Remover
                    </button>
                </div>
            ))}

            <h3>Total: R$ {total}</h3>

            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                <button
                    onClick={() => navigate("/")}
                    style={{
                        padding: "10px 40px",
                        backgroundColor: "#222",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Continuar comprando
                </button>

                <button
                    onClick={finalizarCompra}
                    style={{
                        padding: "10px 40px",
                        backgroundColor: "green",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer"
                    }}
                >
                    Finalizar Compra 
                </button>
            </div>
        </div>
    );
}