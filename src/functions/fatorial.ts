export const fatorial = (n: number): number =>
  n <= 1 ? 1 : n * fatorial(n - 1);
