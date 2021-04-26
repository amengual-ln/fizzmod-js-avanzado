import express from "express";
import router from "./router/index.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))
app.use("/", router);

app.listen(3000);
console.log(`Servidor escuchando en el puerto ${PORT}`);
