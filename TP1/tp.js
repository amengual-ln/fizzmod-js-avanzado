/* 
Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
*/
function contarVocales(texto) {
  var cantidadDeVocales = 0;

  if (typeof texto !== "string") return -1;
  for (const letra of texto) {
    if (letra.match("[aeiouAEIOU]")) cantidadDeVocales += 1;
  }

  return cantidadDeVocales;
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/amengual-ln/fizzmod-js-avanzado.git";
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/
const crearClase = () =>
  class ClaseES6 {
    constructor(texto) {
      this.texto = typeof texto === "string" ? texto : -1;
      ClaseES6.contadorInstancias = (ClaseES6.contadorInstancias || 0) + 1;
    }

    contadorPalabras() {
      if (this.texto === -1) return -1;
      const palabras = this.texto.trim().split(" ");
      return palabras == "" ? 0 : palabras.length;
    }

    hayNumeros() {
      if (this.texto === -1) return -1;
      return new RegExp("\\d").test(this.texto);
    }
  };

module.exports = {
  contarVocales,
  urlRepo,
  crearClase,
};
