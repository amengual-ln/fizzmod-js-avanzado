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