import express from "express";

const router = express.Router();

import { promises } from "fs";

// Muestra un saludo según la hora del día
router.get("/", (req, res) => {
  const date = new Date();
  const hora = date.getHours();
  if (hora >= 6 && hora <= 12) {
    res.send("Buenos dias!");
  } else if (hora >= 13 && hora <= 19) {
    res.send("Buenas tardes!");
  } else {
    res.send("Buenas noches!");
  }
});

// Devuelve un objeto cuyas claves son numeros aleatorios del 1 al 20, y los valores son la cantidad de apariciones de esos numeros
router.get("/random", (req, res) => {
  let numeros = {};
  for (let n = 0; n <= 10000; n++) {
    let random = Math.floor(Math.random() * 20);
    if (!(random in numeros)) {
      numeros[random] = 0;
    }
    numeros[random]++;
  }
  res.send(numeros);
});

// Mediante promesas, lee el package.json del proyecto, muestra su contenido como objeto y como string, y escribe el contenido en info.txt
router.get("/info", async (req, res) => {
  const file = "package.json";
  const stats = await promises.stat(file);
  const data = await promises.readFile(file);
  const info = {
    contenidoStr: JSON.stringify(JSON.parse(data)),
    contenidoObj: JSON.parse(data),
    size: stats["size"],
  };

  await promises.writeFile("info.txt", JSON.stringify(info, null, 2));

  console.log(info);
  res.send("Información del proyecto guardad en info.txt");
});

router.all("*", (req, res) => {
  res.status(404).send("404");
});

export default router;
