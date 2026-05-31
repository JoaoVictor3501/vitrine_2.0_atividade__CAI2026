import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  imagem: {
    type: String
  },
  categoria: {
    type: String,
    default: "geral"
  }
}, {
  timestamps: true
});

export default mongoose.model("Produto", produtoSchema);