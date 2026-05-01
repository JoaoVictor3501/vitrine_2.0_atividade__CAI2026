import mongoose from "mongoose";

const compraSchema= new mongoose.Schema({
    nomeCliente: String,
    produtoiD:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto"
    },
    valor: Number,
    data:{
        type: Date,
        default: Date.now
    },
    status:{
        type: String,
        default: "ativo"
    }
})

export default mongoose.model("model_compra", compraSchema);