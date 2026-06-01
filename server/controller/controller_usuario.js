import Usuario from "../model/model_usuario.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function cadastrarUsuario(req, res) {
    try{
        console.log("Body recebido:", req.body); 
        const {nome, senha, email} = req.body;
        const usuarioExistente = await Usuario.findOne({email});
        console.log("Usuário existente:", usuarioExistente);
        if(usuarioExistente){
            return res.status(400).json({message:'Usuário já existente'})
        }
        console.log("Criptografando senha...");
        const senhaSegura = await bcrypt.hash(senha, 10)
        console.log("Senha criptografada", senhaSegura);
        const usuario =  await Usuario.create({
            nome, email, senha: senhaSegura
        });
        console.log("Usuário criado:", usuario); 
        res.status(201).json({message:"Usuario cadastrado com sucesso"});
    }catch(error){
        res.status(500).json({message:'Não foi possível efetual o cadastro! tente novamente outra hora!', erro: error.message});
        console.log("Erro",error);
    }
}

export async function Login(req, res) {
    try{
        const {email, senha} = req.body;
        const usuario = await Usuario.findOne({email});
        if(!usuario){
           return res.status(400).json({message:'Usuário inválido! tente novamente'});
        }
        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
        if(!senhaCorreta){
           return res.status(400).json({message:'Senha incorreta!'});
        }
        const token = jwt.sign({id: usuario._id, nome: usuario.nome}, process.env.JWT_SECRET,{expiresIn:"1d"});
        res.status(200).json({token, nome: usuario.nome});

    }catch(error){
        res.status(500).json({message:'Falha ao tentar realizar o login', erro: error.message});
    }
}