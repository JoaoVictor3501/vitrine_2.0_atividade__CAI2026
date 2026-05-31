import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import rotasCompras from "./routes/rotas.js";
import rotasProdutos from "./routes/rotas_produto.js";
import rotasUsuario from "./routes/rotas_usuario.js"

const app = express();

//permite receber arquivos json no corpo das requisições
app.use(express.json());

//conecta ao backend
app.use(cors());

//conecta ao banco
mongoose.connect(process.env.MONGODB_URI,)
  .then(() => console.log("Mongo conectado!"))
  .catch((Err)=> console.log("Falha ao Conectar ao MongoDB!", Err));

//usa a rota para fazer requisições  
app.use("/api/compras", rotasCompras);
app.use("/api/produtos", rotasProdutos);
app.use("/api/usuario", rotasUsuario); 

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`Servidor rodando na porta ${PORT}`)})