export const raizPositiva = (a: number, b: number, c: number): number => {
  const delta = Math.pow(b, 2) - 4 * a * c;

  if (delta >= 0) {
    return (-b + Math.sqrt(delta)) / (2 * a);
  } else {
    return Infinity;
  }
};
