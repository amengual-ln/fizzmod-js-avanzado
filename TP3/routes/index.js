import express from "express";

const router = express.Router();

import { saludo } from "../controller/saludoController.js";
import { random } from "../controller/randomController.js";
import { info } from "../controller/infoController.js";
import { operaciones } from "../controller/operacionesController.js";

// Ejercicio 1
router.get("/", (req, res) => {
  res.send(saludo());
});

// Ejercicio 2
router.get("/random", (req, res) => {
  res.send(random());
});

//  Ejercicio 3
router.get("/info", async (req, res) => {
  res.send(await info());
});

router.get("/operaciones", (req, res) => {
  const num1 = req.query["num1"];
  const num2 = req.query["num2"];
  const operacion = req.query["operacion"];
  res.send(operaciones(num1, num2, operacion));
});

// 404 para las rutas que no esten contempladas
router.all("*", (req, res) => {
  res.status(404).send("404");
});

export default router;
