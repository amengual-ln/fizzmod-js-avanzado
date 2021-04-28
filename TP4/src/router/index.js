import express from "express";
import { nuevoProducto } from "../controller/productoController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.post("/ingreso", (req, res) => {
  nuevoProducto(req.body).then(() => {
    console.log("Producto agregado")
    res.status(200)
  }).catch(error => {
    console.log(`Ocurrió un error al agregar el producto: ${error.message}`)
    res.status(500)
  })
});

export default router;
