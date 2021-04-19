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
  const info = await getFileInfo("./package.json");

  await promises.writeFile("info.txt", JSON.stringify(info, null, 2));

  console.log(info);
  return "Información del proyecto guardada en info.txt";
};

// Recibe el path de un archivo y devuelve un objeto con el contenido y tamaño en bytes
const getFileInfo = async (file) => {
  const stats = await promises.stat(file);
  const data = await promises.readFile(file);
  return {
    contenidoStr: JSON.stringify(JSON.parse(data)),
    contenidoObj: JSON.parse(data),
    size: stats["size"],
  };
};

// Resuelve una operacion matematica según los parametros recibidos. Devuelve un objeto con esos parametros y el resultado, o un objeto de error si algun dato no es valido
export const operaciones = (num1, num2, operacion) => {
  num1 = num1 !== "" ? Number(num1) : null;
  num2 = num2 !== "" ? Number(num2) : null;
  if (operacionValida(num1, num2, operacion)) {
    let resultado = resolver(num1, num2, operacion);
    return {
      num1: num1,
      num2: num2,
      operacion: operacion,
      resultado: resultado,
    };
  }
  return {
    error: {
      num1: { valor: num1, tipo: typeof num1 },
      num2: { valor: num2, tipo: typeof num2 },
      operacion: { valor: operacion, tipo: typeof operacion },
    },
  };
};

// Valida los parametros recibidos y devuelve un booleano
const operacionValida = (num1, num2, operacion) => {
  const operaciones = ["suma", "resta", "multiplicacion", "division"];
  return (
    !isNaN(num1) &&
    num1 !== null &&
    !isNaN(num2) &&
    num2 !== null &&
    operacion &&
    !(num2 === 0 && operacion === "division") &&
    operaciones.includes(operacion)
  );
};

// Realiza la operación matematica requerida segun los parametros y devuelve el resultado
const resolver = (num1, num2, operacion) => {
  if (operacion === "suma") return num1 + num2;

  if (operacion === "resta") return num1 - num2;

  if (operacion === "multiplicacion") return num1 * num2;

  if (operacion === "division") return num1 / num2;
};
