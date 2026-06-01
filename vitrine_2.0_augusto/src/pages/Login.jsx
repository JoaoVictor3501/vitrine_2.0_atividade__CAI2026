import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login (){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");

    const navigate = useNavigate();
    const {entrar} = useAuth();

    async function handleLogin(e) {
        e.preventDefault();
        const data = await login({email, senha});
        if (data.token){
            entrar({nome: data.nome}, data.token);
            navigate("/");
        }else{
            setErro("Email ou senha incorretos!, tente novamente!")
        }
    }
    return(
    <div style={{
        display: "flex",
        flexDirection:"column",
        alignItems:"center",
        marginTop: "80px"
    }}>
        <h2>Login</h2>
        {erro && <p style={{color:"red"}}>{erro}</p>}
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{margin: "8px", padding:"8px",width:"300px"}}
        />
        <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            style={{margin:"8px", padding:"8px", width:"300px"}}
        />
        <button
            onClick={handleLogin}
            style={{
                marginTop:"16px",
                padding:"10px 40px",
                backgroundColor:"#222",
                color:"#fff",
                border:"none",
                borderRadius: "8px",
                cursor:"pointer"
            }}
        >
            Entrar
            </button>
            <p> Não tem Conta? {" "}
                <span 
                onClick={() => navigate("/cadastro")}
                style={{cursor:"pointer", color:"blue"}}
                >
                    Cadastre-se
                </span>
            </p>
    </div>     
)
}

