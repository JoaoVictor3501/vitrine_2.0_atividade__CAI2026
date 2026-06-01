import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cadastrar } from "../services/api";

export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const navigate = useNavigate();

    async function handleCadastro(e) {
        e.preventDefault();

        const data = await cadastrar({ nome, email, senha });
        console.log("Resposta do backend:", data);
        if (data.messagem === "Usuário cadastrado com sucesso") {
            navigate("/login");
        } else {
            setErro(data.messagem || "Erro ao cadastrar, tente novamente!");
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "80px"
        }}>
            <h2>Cadastro</h2>

            {erro && <p style={{ color: "red" }}>{erro}</p>}

            <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{ margin: "8px", padding: "8px", width: "300px" }}
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ margin: "8px", padding: "8px", width: "300px" }}
            />

            <input
                type="password"
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                style={{ margin: "8px", padding: "8px", width: "300px" }}
            />

            <button
                onClick={handleCadastro}
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
                Cadastrar
            </button>

            <p>Já tem conta? {" "}
                <span
                    onClick={() => navigate("/login")}
                    style={{ cursor: "pointer", color: "blue" }}
                >
                    Faça login
                </span>
            </p>
        </div>
    );
}