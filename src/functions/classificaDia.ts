export enum Dia {
  Quente,
  Frio,
  Agradável,
}

export const classificaDia = (temp: [number, number]): Dia => {
  const [min, max] = temp;
  if (max > 30) return Dia.Quente;
  if (min < 15) return Dia.Frio;
  return Dia.Agradável;
};
