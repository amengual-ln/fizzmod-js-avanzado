import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productoSchema = new Schema({
  nombre: String,
  precio: Number,
  descripcion: String,
  url_imagen: String,
});

const producto = mongoose.model("productos", productoSchema);

export default producto
