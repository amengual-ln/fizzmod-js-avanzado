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
