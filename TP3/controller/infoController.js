import { promises } from "fs";

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
