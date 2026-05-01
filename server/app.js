import express from "express";
import mongoose from "mongoose";
import rotas from "./routes/rotas.js";


const app = express();

app.use(express.json());

// 👇 CONEXÃO COM O BANCO
mongoose.connect("mongodb://127.0.0.1:27017/vitrine")
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log("Erro ao conectar:", err));

//app.use(cors());
app.use("/rotas",rotas);

//app.get("/",(req, res) =>{
//    res.send("Api rodando")
//})
app.listen(3000, () =>{
    console.log("Servidor rodando na porta 3000")
})