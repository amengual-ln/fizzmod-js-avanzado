// Devuelve un saludo según la hora del día
export const saludo = () => {
  const date = new Date();
  const hora = date.getHours();

  if (hora >= 6 && hora <= 12) return "Buenos dias!";
  if (hora >= 13 && hora <= 19) return "Buenas tardes!";
  return "Buenas noches!";
};