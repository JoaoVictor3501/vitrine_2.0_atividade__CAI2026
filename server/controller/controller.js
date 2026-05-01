import Compra from "../model/model_compra.js";

export async function criarCompra(req,res) {
    const nova =  await Compra.create(req.body);
    res.json(nova);
    
}

export async function procurarCompra(req, res) {
    const compras = await Compra.find()
    res.json(compras)
}

export async function cancelarCompra(req, res) {
    const compra = await Compra.findByIdAndUpdate(
        req.params.id,
        {status: "cancelado"},
        {new: true}
    );
    res.json(compra)
}