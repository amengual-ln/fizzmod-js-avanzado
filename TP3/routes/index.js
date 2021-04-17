import express from "express";

const router = express.Router();

import { promises } from "fs";
import { saludo, random, info } from "../controller.js";

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

// 404 para las rutas que no esten contempladas
router.all("*", (req, res) => {
  res.status(404).send("404");
});

export default router;
