export const fatorial = (n: number): number =>
  n <= 1 ? 1 : n * fatorial(n - 1);

export const recursiveFatorial = (n: number): number => {
  const _fatorial = (n: number, acc: number): number =>
    n <= 1 ? acc : _fatorial(n - 1, n * acc);

  return _fatorial(n, 1);
};
