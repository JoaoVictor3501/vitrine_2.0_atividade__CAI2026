const BASE_URL = "http://localhost:3000"

export async function getProdutos() {
    const res = await fetch(`${BASE_URL}/api/produtos`);
    const data = await res.json();
    return data;
}

export async function getProdutosById(id) {
    const res = await fetch(`${BASE_URL}/api/produtos/${id}`);
    const data = await res.json();
    return data
}

export async function cadastrar(usuario) {
    const res = await fetch(`${BASE_URL}/api/usuario/cadastro`, {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(usuario)

    });

    const data = await res.json();
    return data;
}

export async function login(credenciais) {
    const res = await fetch(`${BASE_URL}/api/usuario/login`,{
        method:"POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(credenciais)
    });
    const data = await res.json();
    return data;
}