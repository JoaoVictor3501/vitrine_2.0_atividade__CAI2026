import Produto from "../model/model_produtos.js";

export async function listarProdutos (req, res) {
    try{
        const produto = await Produto.find();
        res.status(200).json(produto)  
    }catch(error){
        res.status(500).json({message:'Falha ao listar os seus produtos!', erro:message.error})
    }
    
}

export async function buscarProduto(req, res) {
    try{
        const produto = await Produto.findById(req.param.id);
        if(!produto){
            res.status(404).json({message:'Nenhum produto foi encontrado!'});
        }
        res.stauts(201).json(produto);
    }catch(error){
        res.status(500).json({message:'Falha ao tentar buscar o seu produto!', erro: message.error})
    }
    
}

export async function criarProduto(req, res) {
    try{
        const produto = await Produto.create(req.body);
        res.status(201).json(produto)
    }catch(error){
        res.status(500).json({message:'Um erro inesperado aconteceu ao criar o produto! tente novamente!', erro:error.message})
    }
    
}

export async function atualizarProduto(req, res) {
    try{
        const produto = await Produto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!produto){
            res.status(404).json({message:"Nenhum produto foi encontrado para atualizar"});
        }
        res.status(201).json(produto);
    }catch(error){
        res.status(500).json({message:'Erro ao tentar atualizar o produto', erro: error.message});
    }
    
}

export async function deletarProduto(req, res) {
    try{
        const produto = await Produto.findByIdAndDelete(req.params.id);
        if (!produto){
            res.status(404).json({message:'Nenhum produto foi encontrado para deletar!'})
        }
        res.status(200).json(produto);
    }catch(error){ res.status(500).json({message:"Falha ao tentar deletar o produto!", erro: error.message})}
}


