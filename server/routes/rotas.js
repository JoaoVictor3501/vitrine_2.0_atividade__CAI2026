import express from "express";
import{
    criarCompra,
    procurarCompra,
    cancelarCompra
} from "../controller/controller.js"

const router = express.Router();

router.get("/", procurarCompra);
router.post("/", criarCompra);
router.put("/:id", cancelarCompra);

export default router;