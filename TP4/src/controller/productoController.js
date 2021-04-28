import producto from "../models/producto.js"

export const nuevoProducto = async (req) => {
  let nuevoProducto = new producto(req)
  await nuevoProducto.save()
}