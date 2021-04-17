const express = require("express");

app = express();

const PORT = process.env.PORT || 3000;

app.use('/', require('./routes'))

app.listen(PORT);
console.log(`Servidor escuchando en el puerto ${PORT}`);
