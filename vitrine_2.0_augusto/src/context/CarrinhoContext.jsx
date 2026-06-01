import { createContext, useContext, useEffect, useState } from "react";

const CarrinhoContext = createContext();

export function CarrinhoProvider({children}){
    const [carrinho, setCarrinho] = useState(() => {
    const salvo = localStorage.getItem("carrinho");
        return salvo ? JSON.parse(salvo) : [];
    });

    useEffect(() => {
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
    }, [carrinho])

    function adicionarProduto(produto){
        setCarrinho([...carrinho, produto]);
    }

    function removerProduto(id){
        setCarrinho(carrinho.filter(p => p._id != id));
    }

    function limparCarrinho(){
        setCarrinho([]);
    }

    const total = carrinho.reduce((acc, p) => acc + p.preco, 0);

    return(
        <CarrinhoContext.Provider value={{carrinho, adicionarProduto, removerProduto,limparCarrinho, total}}>
            {children} 
        </CarrinhoContext.Provider>
    )
}
export function useCarrinho(){
    return useContext(CarrinhoContext);
}