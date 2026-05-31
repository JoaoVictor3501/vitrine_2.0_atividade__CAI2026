import express from "express";

import { Login, cadastrarUsuario } from "../controller/controller_usuario.js";

const router = express.Router();

router.post("/cadastro", cadastrarUsuario);
router.post("/login", Login);

export default router;