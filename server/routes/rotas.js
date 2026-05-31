import express from "express";
import{
    criarCompra,
    procurarCompra,
    cancelarCompra
} from "../controller/controller.js"

const router = express.Router();

router.get("/", procurarCompra);
router.post("/", criarCompra);
router.put("/:id/cancelar", cancelarCompra);

export default router;