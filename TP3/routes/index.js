import express from "express";

const router = express.Router();

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

router.all("*", (req, res) => {
  res.status(404).send("404");
});

module.exports = router;
