import express from "express";
import router from "./src/router/index.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use("/", router);

mongoose.connect(
  "mongodb+srv://r42:qsmtlqnsn@cluster0.bxyib.mongodb.net/fizzmod-tp4?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3000);
console.log(`Servidor escuchando en el puerto ${PORT}`);
