import express from "express";

import { listarProdutos, 
    buscarProduto, 
    deletarProduto, 
    atualizarProduto, 
    criarProduto } from "../controller/controller_produto.js";

const router = express.Router();

router.get("/", listarProdutos);
router.get("/:id", buscarProduto);
router.post("/", criarProduto);
router.put("/:id", atualizarProduto);
router.delete("/:id", deletarProduto);

export default router;