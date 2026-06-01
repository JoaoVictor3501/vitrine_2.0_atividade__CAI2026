import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}){
    const [usuario, setUsuario] = useState(null);
    const [token, setToken] = useState(null);
    function entrar(dadosUsuario, tokenJWT){
        setUsuario(dadosUsuario);
        setToken(tokenJWT);
    }
    function sair(){
        setUsuario(null);
        setToken(null);
    }
    return (
        <AuthContext.Provider value={{usuario, token, entrar, sair}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext);
}