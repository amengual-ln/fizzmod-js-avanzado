import { promises } from "fs";

// Devuelve un saludo según la hora del día
export const saludo = () => {
  const date = new Date();
  const hora = date.getHours();
  
  if (hora >= 6 && hora <= 12) return "Buenos dias!";
  if (hora >= 13 && hora <= 19) return "Buenas tardes!";
  return "Buenas noches!";

};

// Devuelve un objeto cuyas claves son numeros aleatorios del 1 al 20, y los valores son la cantidad de apariciones de esos numeros
export const random = () => {
  let numeros = {};
  for (let n = 0; n <= 10000; n++) {
    let random = Math.floor(Math.random() * 20 + 1);
    if (!(random in numeros)) {
      numeros[random] = 0;
    }
    numeros[random]++;
  }
  return numeros;
};

// Mediante promesas, lee el package.json del proyecto, muestra su contenido como objeto y como string, y escribe el contenido en info.txt
export const info = async () => {
  const file = "./package.json";
  const stats = await promises.stat(file);
  const data = await promises.readFile(file);
  const info = {
    contenidoStr: JSON.stringify(JSON.parse(data)),
    contenidoObj: JSON.parse(data),
    size: stats["size"],
  };

  await promises.writeFile("info.txt", JSON.stringify(info, null, 2));

  console.log(info);
  return "Información del proyecto guardada en info.txt";
};